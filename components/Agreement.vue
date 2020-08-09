<template>
  <div id="agreement">
    <div class="container">
      <div id="sign__invoice" class="sign_invoice">
        <div ref="content">
          <h1 class="mb-5">Sample Agreement</h1>
          <p>Est in aliqua duis proident ipsum nostrud amet commodo commodo. Nulla laboris Lorem irure velit fugiat incididunt commodo. Esse consequat duis culpa id. Deserunt ut nulla nulla dolore velit deserunt in proident mollit sit aliquip. Culpa exercitation commodo commodo anim irure laborum aliquip ad fugiat exercitation sit nulla labore esse.</p>

          <h3>Section 1</h3>
          <p>Est in aliqua duis proident ipsum nostrud amet commodo commodo. Nulla laboris Lorem irure velit fugiat incididunt commodo. Esse consequat duis culpa id. Deserunt ut nulla nulla dolore velit deserunt in proident mollit sit aliquip. Culpa exercitation commodo commodo anim irure laborum aliquip ad fugiat exercitation sit nulla labore esse.</p>

          <h3>Section 2</h3>
          <p>Est in aliqua duis proident ipsum nostrud amet commodo commodo. Nulla laboris Lorem irure velit fugiat incididunt commodo. Esse consequat duis culpa id. Deserunt ut nulla nulla dolore velit deserunt in proident mollit sit aliquip. Culpa exercitation commodo commodo anim irure laborum aliquip ad fugiat exercitation sit nulla labore esse.</p>

          <h3>Section 3</h3>
          <p>Est in aliqua duis proident ipsum nostrud amet commodo commodo. Nulla laboris Lorem irure velit fugiat incididunt commodo. Esse consequat duis culpa id. Deserunt ut nulla nulla dolore velit deserunt in proident mollit sit aliquip. Culpa exercitation commodo commodo anim irure laborum aliquip ad fugiat exercitation sit nulla labore esse.</p>

          <h3>Section 4</h3>
          <p>Est in aliqua duis proident ipsum nostrud amet commodo commodo. Nulla laboris Lorem irure velit fugiat incididunt commodo. Esse consequat duis culpa id. Deserunt ut nulla nulla dolore velit deserunt in proident mollit sit aliquip. Culpa exercitation commodo commodo anim irure laborum aliquip ad fugiat exercitation sit nulla labore esse.</p>

          <h3>Section 5</h3>
          <p>Est in aliqua duis proident ipsum nostrud amet commodo commodo. Nulla laboris Lorem irure velit fugiat incididunt commodo. Esse consequat duis culpa id. Deserunt ut nulla nulla dolore velit deserunt in proident mollit sit aliquip. Culpa exercitation commodo commodo anim irure laborum aliquip ad fugiat exercitation sit nulla labore esse.</p>
        </div>

        <hr class="my-5" />
        <div class="row signature__section">
          <div class="col-md-6">
            <b>Client signature</b>
            <VueSignaturePad
              id="signature"
              width="400px"
              height="200px"
              class="mt-3"
              ref="signaturePad"
              :options="{onBegin: () => {$refs.signaturePad.resizeCanvas()}}"
            />
            <div class="d-flex justify-content-between align-items-start" style="width: 400px;">
              <button @click="download" class="btn btn-primary sign-button my-4" >
                <font-awesome-icon :icon="['fas', 'file-signature']" class="mr-1" />Secure
                <span style="font-weight: 700;margin-left: -3px;">SIGN</span>
              </button>
              <button @click="undo" class="btn btn-grey my-4">
                <font-awesome-icon :icon="['fas', 'undo']" />
              </button>
            </div>
          </div>
          <div class="col-md-6" style="padding-left: 100px;">
            <b>Company</b>
            <div class="owner-signature">
              <img src="img/sign_owner.png" style="width: 183px;" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="sign__overlay">
      <h1 class="logo" style="color: #fff;">
        <font-awesome-icon :icon="['fas', 'lock']" class="header__logo" />Secure
        <span>SIGN</span>
      </h1>
      <div class="overlay__box">
        <div class="overlay_typed"></div>
        <div class="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="blur-svg"
    >
      <defs>
        <filter id="blur-filter">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<script>
import jsPDF from "jspdf";

export default {
  props: {
    msg: String,
  },
  components: {
    jsPDF,
  },

  data: () => ({
    options: {
      penColor: "#007bff",
    },
    signDisabled: false,
  }),
  methods: {
    undo() {
      this.$refs.signaturePad.undoSignature();
    },
    change() {
      this.options = {
        penColor: "#00f",
      };
    },
    resume() {
      this.options = {
        penColor: "#c0f",
      };
    },
    download() {
      document
        .getElementById("sign__overlay")
        .classList.add("sign__overlay--active");

      document.getElementById("sign__invoice").classList.add("blur");

      var options = {
        strings: [
          "<p class='saving'>Securing connection<span>.</span><span>.</span><span>.</span></p>",
          "<p class='saving'>Collecting signature data<span>.</span><span>.</span><span>.</span></p>",
          "<p class='saving'>Generating .pdf<span>.</span><span>.</span><span>.</span></p>",
        ],
        typeSpeed: 0,
        backSpeed: 0,
        backDelay: 4000,
        startDelay: 100,
        smartBackspace: false,
        showCursor: false,
      };

      var overlayTyped = new Typed(".overlay_typed", options);

      const doc = new jsPDF();
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      var signSecure = this.sign;

      const contentHtml = this.$refs.content.innerHTML;
      doc.fromHTML(contentHtml, 15, 15, {
        width: 175,
      });

      doc.addImage(data, "PNG", 0, 230, 100, 50);

      setTimeout(function () {
        doc.save("sample.pdf");

        document
          .getElementById("sign__overlay")
          .classList.remove("sign__overlay--active");

        document.getElementById("sign__invoice").classList.remove("blur");
      }, 11000);
    },
  },

  mounted() {},
};
</script>

<style lang="scss">
.sign_invoice {
  padding: 60px;
}

#signature {
  border: solid 2px black;
  border-radius: 5px;
  border: 1px dotted black;
  border-radius: 5px;

  h1 {
    font-size: 50px;
  }

  h3 {
    font-size: 32px;
    margin: 0px 0px 20px;
  }

  h5 {
    color: #b7b9bd;
    font-weight: 400;
    font-size: 20px;
    margin-bottom: 45px;
  }
}

.signature__section {
  margin: 60px 0;
}

.owner-signature {
  border-bottom: 1px dotted;
  display: flex;
  justify-content: center;
  padding: 20px;
  margin-right: 18px;
}

canvas {
  background: #fff8de;
  // cursor: url('/icons/pen.png'), default;
  cursor: crosshair;
}

#sign__overlay {
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #001b38f1;
  z-index: 2;
  cursor: pointer;
}

.sign__overlay--active {
  display: flex !important;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.overlay__box {
  border: 1px solid #ffffff14;
  text-align: center;
  width: 500px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
}

.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ripple div {
  position: absolute;
  border: 3px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}

.blur {
  filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius='3');
  -webkit-filter: url(#blur-filter);
  filter: url(#blur-filter);
  -webkit-filter: blur(3px);
  filter: blur(3px);
}
.blur-svg {
  display: none;
}

.overlay_typed {
  height: 50px;
  font-size: 30px;
  color: #fff;

  p {
    color: #fff;
    font-weight: 200;
    font-size: 24px;
  }
}

@keyframes blink {
  0% {
    opacity: 0.2;
  }
  20% {
    opacity: 1;
  }

  100% {
    opacity: 0.2;
  }
}

.saving span {
  animation-name: blink;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
}

.saving span:nth-child(2) {
  animation-delay: 0.2s;
}

.saving span:nth-child(3) {
  animation-delay: 0.4s;
}
</style>
