<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="card mt-3" v-if="!isLoading">
      <img class="card-img-top" :src="product.imageUrl[0]" alt="Card image cap" />
      <div class="card-body">
        <span class="badge badge-secondary float-right mt-2">{{ product.category }}</span>
        <h4 class="card-title">{{ product.title }}</h4>
        <p class="card-text">{{ product.content }}</p>
        <p class="card-text">{{ product.description }}</p>
        <div>
          <p style="text-decoration: line-through;">原價：{{ product.origin_price }}</p>
          <h3 class="text-danger">特價：{{ product.price}}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      product: {
        title: '',
        category: '',
        content: '',
        description: '',
        imageUrl: [],
        origin_price: 0,
        price: 0,
        unit: '',
        options: {},
      },
    };
  },
  created() {
    console.log(this.$route.params);
    const { id } = this.$route.params;
    const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/product/${id}`;
    this.isLoading = true;
    this.$http
      .get(api)
      .then((res) => {
        console.log(res);
        this.product = res.data.data;
        this.isLoading = false;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
