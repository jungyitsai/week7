<template>
  <div>
    <h1>圖片儲存列表</h1>
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
