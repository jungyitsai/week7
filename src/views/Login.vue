<template>
  <div class="row justify-content-center">
    <div class="card mt-5 w-25">
      <div class="card-body">
        <div class="text-center">
          <h2>請先登入</h2>
        </div>
        <form>
          <div class="form-group">
            <label for="inputEamil">Email address</label>
            <input
              type="email"
              v-model="email"
              class="form-control"
              id="inputEamil"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label for="inputPassword">Password</label>
            <input
              type="password"
              v-model="password"
              class="form-control"
              id="inputPassword"
              placeholder="Password"
            />
          </div>

          <button type="button" class="btn btn-primary" @click="login">登入</button>

          <div
            class="alert mt-3 text-center"
            :class="{'alert-success': is_auth_success, 'alert-danger': !is_auth_success}"
            role="alert"
          >{{ auth_state }}</div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      token: '',
      expired: 0,
      auth_state: '尚未登入',
      is_auth_success: false,
    };
  },
  methods: {
    login() {
      console.log(this.email, this.password);
      if (this.email === '' || this.password === '') {
        return;
      }
      const api = `${process.env.VUE_APP_APIPATH}api/auth/login`;
      this.$http
        .post(api, {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          console.log(res);
          this.token = res.data.token;
          this.expired = res.data.expired;
          document.cookie = `hexschool=${this.token}; expires=${new Date(
            this.expired * 1000,
          )}`;

          this.is_auth_success = true;
          this.auth_state = '成功登入';

          // redirect to admin page
          this.$router.push('/admin');
        })
        .catch((err) => {
          console.log(err);

          this.is_auth_success = false;
          this.auth_state = '登入失敗';
        });
    },
  },
};
</script>
