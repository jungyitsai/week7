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
