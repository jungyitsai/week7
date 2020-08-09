<template>
  <div class="mt-4">
    <loading :active.sync="isLoading"></loading>
    <button
      type="button"
      class="btn btn-outline-danger mb-2 float-right"
      @click="deleteItem('all')"
    >刪除所有品項</button>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">刪除</th>
          <th scope="col">品名</th>
          <th scope="col">數量</th>
          <th scope="col">單位</th>
          <th scope="col">單價</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in carts" :key="item.product.id">
          <td>
            <button
              type="button"
              class="btn btn-outline-danger"
              @click="deleteItem(item.product.id)"
            >
              <i class="far fa-trash-alt"></i>
            </button>
          </td>
          <td>{{ item.product.title }}</td>
          <td>
            <div class="input-group">
              <div class="input-group-prepend">
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  @click="item.quantity--; updateCarts(item.product.id, item.quantity)"
                  :disabled="item.quantity <= 1"
                >-</button>
              </div>
              <input
                type="number"
                min="1"
                v-model="item.quantity"
                class="form-control text-right"
                @change="updateCarts(item.product.id, item.quantity)"
              />
              <div class="input-group-append">
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  @click="item.quantity++; updateCarts(item.product.id, item.quantity)"
                >+</button>
              </div>
            </div>
          </td>
          <td>{{ item.product.unit }}</td>
          <td>{{ item.product.price }}</td>
        </tr>
        <tr>
          <td colspan="4"></td>
          <td>總計： {{ totalCost }} 元</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carts: [],
      totalCost: 0,
      isLoading: false,
    };
  },
  created() {
    this.getCarts();
  },
  methods: {
    getCarts() {
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.isLoading = true;
      this.$http
        .get(api)
        .then((res) => {
          console.log('getCarts', res.data.data);
          this.carts = res.data.data;
          this.totalCost = 0;
          this.carts.forEach((item) => {
            this.totalCost += item.product.price * item.quantity;
          });
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateCarts(itemId, itemQuantity) {
      console.log('updateCarts', itemId, itemQuantity);
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`;
      const data = {
        product: itemId,
        quantity: itemQuantity,
      };
      this.isLoading = true;
      this.$http
        .patch(api, data)
        .then((res) => {
          console.log(res);
          this.isLoading = false;
          this.getCarts();
        })
        .catch((err) => {
          console.log(err);
          this.isLoading = false;
        });
    },
    deleteItem(itemId) {
      console.log(itemId);
      this.isLoading = true;
      if (itemId === 'all') {
        const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping/all/product`;
        this.$http
          .delete(api)
          .then((res) => {
            console.log(res);
            this.isLoading = false;
            this.getCarts();
          })
          .catch((err) => {
            console.log(err);
            this.isLoading = false;
          });
      } else {
        const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping/${itemId}`;
        const data = {
          product: itemId,
        };
        this.$http
          .delete(api, data)
          .then((res) => {
            console.log(res);
            this.isLoading = false;
            this.getCarts();
          })
          .catch((err) => {
            console.log(err);
            this.isLoading = false;
          });
      }
    },
  },
};
</script>
