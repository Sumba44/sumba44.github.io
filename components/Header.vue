<template>
  <div>
    <header>
      <div class="container">
        <div class="header-headline">
          <h1>Sample contract</h1>
          <p>Sign in the sample contract</p>
        </div>
      </div>
    </header>
  </div>
</template>

<script>

export default {
  // filters: {
  //   makeClass (value) {
  //     return value == 'agreement' ? 'd-none' : 'header-headline';
  //   },
  //   makeClass2 (value) {
  //     return value == 'agreement' ? 'header-headline' : 'd-none';
  //   }
  // },
  props: {
    type: {
      type: String,
      default () {
        return '';
      }
    },
  }
}
</script>

<style lang="scss">
header {
  color: #fff;
  background: linear-gradient(90deg, #021048, #1e38a3);
}

.header__cta {
  display: flex;
  align-items: center;

  input {
    border: 1px solid #fff;
    padding: 0 24px;
    height: 50px;
    border-radius: 3px;
    font-size: 17px;
    background: #fff;
    font-weight: 300;
    margin-right: 7px;
  }
}

.header-headline {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 52px;
    font-weight: 300;
  }

  p {
    font-size: 22px;
    font-weight: 300;
    color: rgb(221, 221, 221);
  }

  &.header-headline--contract {
    .typed-cursor {
      opacity: 0;
    }
  }
}
</style>