<template>
  <nuxt-link to="/">
    <h1 class="logo">
      <!-- <font-awesome-icon :icon="['fas', 'lock']" class="header__logo" /> -->
      equity<span> platforma</span><span class="beta">beta</span>
    </h1>
  </nuxt-link>
</template>

<style lang="scss">
.header__logo {
  color: #fff;
  font-size: 30px;
  margin-right: 7px;
}
h1.logo {
  font-weight: 300;
  font-size: 26px;
  color: $primary;

  span {
    font-weight: 700;
    margin-left: -6px;
  }

  .beta {
    font-size: 11px;
    font-weight: 200;
    letter-spacing: 0.7px;
    position: relative;
    top: -12px;
    left: 7px;
  }
}
</style>
