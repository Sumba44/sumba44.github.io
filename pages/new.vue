<template>
  <div id="new">
    <MenuTop />
    <Header type="agreement" />
    <Agreement />
    <Footer />
  </div>
</template>

<script>
import MenuTop from "~/components/MenuTop.vue";
import Header from "~/components/Header.vue";
import Agreement from "~/components/Agreement.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    MenuTop,
    Header,
    Agreement,
    Footer,
  },
};
</script>

<style lang="scss">
#new {
  .agreement--animation {
    transition: all 1s ease;;
    margin-top: -33%;
  }
}

.header-clip--animation {
  transition: all .7s ease;
  clip-path: polygon(50% 0, 100% 0%, 100% 100%, 0 100%, 0 0);
  transition-delay: .1s
}

@keyframes new-amin {
  0% {
    clip-path: polygon(50% 100%, 100% 0, 100% 100%, 0 100%, 0 0);
  }
  100% {
    clip-path: polygon(50% 0, 100% 0%, 100% 100%, 0 100%, 0 0);
  }
}
</style>
