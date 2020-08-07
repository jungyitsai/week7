<template>
  <div id="app" class="container">
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <a class="navbar-brand" href="#">購買明信片專區</a>
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
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/home" class="nav-link">首頁</router-link>
          </li>
          <li class="nav-item">
              <router-link to="/products" class="nav-link">產品列表</router-link>
          </li>
          <li class="nav-item">
              <router-link to="/cart" class="nav-link">購物車</router-link>
          </li>
          <li class="nav-item">
              <router-link to="/about" class="nav-link">關於我們</router-link>
          </li>
          <li class="nav-item">
              <router-link to="/payment" class="nav-link">結帳</router-link>
          </li>
          <li class="nav-item">
              <router-link to="/payment_success" class="nav-link">結帳完成</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>
