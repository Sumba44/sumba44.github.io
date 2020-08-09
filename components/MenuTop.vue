<template>
  <div class="menu-top">
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="#">
          <Logo />
        </a>
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
              <a class="nav-link" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Careers</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
          <a href="#" class="btn btn-empty nav-btn">Log In</a>
          <a href="#" class="btn btn-primary nav-btn">Register</a>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
export default {
  components: {
    Logo,
  },
};
</script>

<style lang="scss">
.menu-top {
  nav {
    // display: flex;
    // justify-content: space-between;
    // align-items: center;
  }

  .nav-link {
    color: #fff;
    font-size: 17px;
    font-weight: 500;
    margin-left: 20px;
  }

  .nav-btn {
    margin-left: 20px;
  }

  .menu__icon {
    color: #fff;
    font-size: 23px;
  }
}

.search-box {
  border: solid 2px #fff;
  display: inline-block;
  position: relative;
  border-radius: 50px;
  input[type="text"] {
    font-size: 20px;
    background: transparent;
    font-weight: bold;
    width: 50px;
    height: 50px;
    padding: 5px 40px 5px 10px;
    border: none;
    box-sizing: border-box;
    border-radius: 50px;
    transition: width 800ms cubic-bezier(0.5, -0.5, 0.5, 0.5) 600ms;
    &:focus {
      outline: none;
    }
    &:focus,
    &:not(:placeholder-shown) {
      width: 300px;
      transition: width 800ms cubic-bezier(0.5, -0.5, 0.5, 1.5);
      + span {
        bottom: 13px;
        right: 10px;
        transition: bottom 300ms ease-out 800ms, right 300ms ease-out 800ms;
      }
      + span:after {
        top: 0;
        right: 10px;
        opacity: 1;
        transition: top 300ms ease-out 1100ms, right 300ms ease-out 1100ms,
          opacity 300ms ease 1100ms;
      }
    }
  }
  span {
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: -13px;
    right: -15px;
    transition: bottom 300ms ease-out 300ms, right 300ms ease-out 300ms;
    &:before,
    &:after {
      content: "";
      height: 25px;
      border-left: solid 2px #fff;
      position: absolute;
      transform: rotate(-45deg);
    }
    &:after {
      transform: rotate(45deg);
      opacity: 0;
      top: -20px;
      right: -10px;
      transition: top 300ms ease-out, right 300ms ease-out,
        opacity 300ms ease-out;
    }
  }
}
</style>