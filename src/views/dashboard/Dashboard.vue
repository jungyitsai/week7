<template>
  <div id="app" class="container">
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <a class="navbar-brand" href="#/admin">後台管理頁面</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/admin/products" class="nav-link">產品列表</router-link>
          </li>
          <li class="nav-item">
              <router-link to="/admin/coupons" class="nav-link">優惠券列表</router-link>
          </li>
          <li class="nav-item">
              <router-link to="/admin/orders" class="nav-link">訂單列表</router-link>
          </li>
          <li class="nav-item">
              <router-link to="/admin/images" class="nav-link">圖片儲存列表</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: '',
    };
  },
  created() {
    // cookie 初期設定一次就可以了
    // eslint-disable-next-line no-useless-escape
    this.token = document.cookie.replace(/(?:(?:^|.*;\s*)hexschool\s*\=\s*([^;]*).*$)|^.*$/, '$1');
    console.log('created', this.token);
    this.$http.defaults.headers.Authorization = `Bearer ${this.token}`;

    const data = {
      api_token: this.token,
    };

    const api = `${process.env.VUE_APP_APIPATH}api/auth/check`;
    this.$http.post(api, data).then((res) => {
      console.log(res);
      if (!res.data.success) {
        this.$router.push('/login');
      }
    }).catch((err) => {
      console.log(err.response);
      this.$router.push('/login');
    });
  },
};
</script>
