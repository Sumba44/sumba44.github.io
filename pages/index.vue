<template>
  <div id="index">
    <MenuTop />
    <Header class="d-none" />
    <div class="container">
      
    </div>

    <Footer />
  </div>
</template>

<script>
import MenuTop from "~/components/MenuTop.vue";
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    MenuTop,
    Header,
    Footer,
  },

  data() {
    return {
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: "Password",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => "The email and password you entered don't match",
      },
      genders: ["Male", "Female"],

      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
    };
  },
};
</script>

<style lang="scss">
.home__main {
  // margin-top: -23% !important;
  position: relative;
}

.home__icon {
  margin-bottom: 30px;
  padding: 27px;
  width: 100%;
}

.about {
  p {
    margin-bottom: 16px;
    font-size: 21px;
    font-weight: 300;
    color: #525666;

    b {
      font-weight: 500;
    }
  }

  .blockquote {
    font-size: 24px;
    font-weight: 200;
    font-style: italic;
    padding-left: 0;
    margin-left: 0;
  }
}

.about__div {
  display: flex;

  img {
    width: 57%;
  }

  @media (max-width: 991px) {
    flex-direction: column;

    img {
      width: 100%;
    }
  }
}

.about__right {
  width: 32%;
  margin-top: 15%;

  @media (max-width: 991px) {
    width: 100%;
    margin-top: 60px;
    padding: 20px;
  }
}

.form__wrapper {
  min-height: 700px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
  padding: 32px 44px 24px;
  background: #fff;

  h2 {
    padding: 12px 16px;
    margin-top: 32px;
    margin-bottom: 32px;
    background-color: #f3f5f7;
    color: #17202b;
    font-size: 16px;
    font-weight: 400;
  }
}

.form__inner {
}

.sign__tm {
  position: relative;
  top: -18px;
  font-weight: 200;
  font-size: 17px;
}

.feature__title {
  line-height: 28px;
  // margin: 0 0 24px;
  color: #142149;

  text-transform: uppercase;
  font-weight: 900;
  font-size: 29px;
  text-align: center;
}

.feature__desc {
  margin-bottom: 16px;
  text-align: center;
  height: 312px;
  font-weight: 300;
  color: #000;
  font-size: 17px;
}

.technologies__logo {
  width: 100%;
  padding: 30px;
  filter: grayscale(0%);
  transition: 0.5s ease;
  cursor: pointer;
  opacity: 1;

  &:hover {
    filter: grayscale(0%);
    transition: 0.5s ease;
    opacity: 1;
  }
}
</style>
