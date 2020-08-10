<template>
  <div class="row mt-4 mb-4">
    <loading :active.sync="isLoading"></loading>
    <div class="col-md-4 mt-3" v-for="item in products" :key="item.id">
      <div class="card">
        <img class="card-img-top" :src="item.imageUrl[0]" alt="Card image cap" />
        <div class="card-body">
          <span class="badge badge-secondary float-right mt-2">{{ item.category }}</span>
          <h4 class="card-title">{{ item.title }}</h4>
          <p class="card-text">{{ item.content }}</p>
          <div>
            <p style="text-decoration: line-through;">原價：{{ item.origin_price }}</p>
            <h3 class="text-danger">特價：{{ item.price}}</h3>
          </div>
        </div>
        <div class="card-footer d-flex">
          <button
            type="button"
            class="btn btn-outline-secondary btn-sm"
            @click="showItemInfo(item)"
            :disabled="status.loadingItem.id === item.id"
          >
            更多資訊
            <span
              v-if="status.loadingItem.id === item.id"
              class="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            ></span>
          </button>
          <button
            type="button"
            class="btn btn-outline-danger btn-sm ml-auto"
            @click="addToCarts(item)"
            :disabled="status.loadingItem.id === item.id"
          >
            加入購物車
            <span
              v-if="status.loadingItem.id === item.id"
              class="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            ></span>
          </button>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="alertModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            {{ alertModalMsg }}
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */

export default {
  data() {
    return {
      tempProduct: {},
      products: [],
      carts: [],
      isLoading: true,
      status: {
        loadingItem: {
          id: '',
        },
      },
      alertModalMsg: '',
    };
  },
  created() {
    this.getProducts();
    this.getCarts();
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/products`;
      console.log(
        'getProducts',
        process.env.VUE_APP_APIPATH,
        process.env.VUE_APP_UUID,
      );
      this.$http
        .get(api)
        .then((res) => {
          console.log(res);
          this.products = res.data.data;
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
          this.isLoading = false;
        });
    },
    getCarts() {
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http
        .get(api)
        .then((res) => {
          console.log('getCarts', res.data.data);
          this.carts = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addToCarts(item) {
      console.log('addToCarts', item);
      this.$set(this.status.loadingItem, 'id', item.id);

      let isInCarts = false;
      this.carts.forEach((cartsItem) => {
        if (cartsItem.product.id === item.id) {
          isInCarts = true;
        }
      });

      if (isInCarts) {
        this.alertModalMsg = '此商品已經在購物車中';
        $('#alertModal').modal('show');
        this.$set(this.status.loadingItem, 'id', '');
      } else {
        const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`;
        const data = {
          product: item.id,
          quantity: 1,
        };
        this.$set(this.status.loadingItem, 'id', item.id);
        this.$http
          .post(api, data)
          .then((res) => {
            console.log(res);
            this.getCarts();
            this.$set(this.status.loadingItem, 'id', '');
            this.alertModalMsg = `${item.title} 成功加入購物車囉`;
            $('#alertModal').modal('show');
          })
          .catch((err) => {
            console.log(err.response);
            this.$set(this.status.loadingItem, 'id', '');
          });
      }
    },
    showItemInfo(item) {
      console.log('showItemInfo', item);
      this.$router.push(`product/${item.id}`);
    },
  },
};
</script>
