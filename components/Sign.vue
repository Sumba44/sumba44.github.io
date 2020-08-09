<template>
  <div>
      <div class="container my-5 sign_invoice">
        <!-- <div class="ribbon ribbon-top-right">
            <span>ribbon</span>
        </div>-->

        <div ref="content">
          <h1 class="mb-5">Agreement</h1>
          <p>Est in aliqua duis proident ipsum nostrud amet commodo commodo. Nulla laboris Lorem irure velit fugiat incididunt commodo. Esse consequat duis culpa id. Deserunt ut nulla nulla dolore velit deserunt in proident mollit sit aliquip. Culpa exercitation commodo commodo anim irure laborum aliquip ad fugiat exercitation sit nulla labore esse.</p>

          <h3>Section 1</h3>
          <p>Est in aliqua duis proident ipsum nostrud amet commodo commodo. Nulla laboris Lorem irure velit fugiat incididunt commodo. Esse consequat duis culpa id. Deserunt ut nulla nulla dolore velit deserunt in proident mollit sit aliquip. Culpa exercitation commodo commodo anim irure laborum aliquip ad fugiat exercitation sit nulla labore esse.</p>

          <h3>Section 2</h3>
          <p>Est in aliqua duis proident ipsum nostrud amet commodo commodo. Nulla laboris Lorem irure velit fugiat incididunt commodo. Esse consequat duis culpa id. Deserunt ut nulla nulla dolore velit deserunt in proident mollit sit aliquip. Culpa exercitation commodo commodo anim irure laborum aliquip ad fugiat exercitation sit nulla labore esse.</p>

          <h3>Section 1</h3>
          <p>Est in aliqua duis proident ipsum nostrud amet commodo commodo. Nulla laboris Lorem irure velit fugiat incididunt commodo. Esse consequat duis culpa id. Deserunt ut nulla nulla dolore velit deserunt in proident mollit sit aliquip. Culpa exercitation commodo commodo anim irure laborum aliquip ad fugiat exercitation sit nulla labore esse.</p>

          <h3>Section 2</h3>
          <p>Est in aliqua duis proident ipsum nostrud amet commodo commodo. Nulla laboris Lorem irure velit fugiat incididunt commodo. Esse consequat duis culpa id. Deserunt ut nulla nulla dolore velit deserunt in proident mollit sit aliquip. Culpa exercitation commodo commodo anim irure laborum aliquip ad fugiat exercitation sit nulla labore esse.</p>
        </div>

        <hr class="my-5" />
        <div class="row">
          <div class="col-md-6">
            <b>Client signature</b>
            <VueSignaturePad
              id="signature"
              width="400px"
              height="200px"
              class="mt-3"
              ref="signaturePad"
              :options="options"
            />
            <div class="d-flex justify-content-between align-items-start" style="width: 400px;">
              <button @click="download" class="btn btn-primary sign-button my-4">
                <i class="fas fa-file-signature"></i> Secure
                <span style="font-weight: 700;margin-left: -3px;">SIGN</span>
              </button>
              <button @click="undo" class="btn btn-light my-4">
                <i class="fas fa-redo"></i> Reset
              </button>
            </div>
          </div>
          <div class="col-md-6" style="padding: 0px 25px 0 70px;">
            <b>Owner signature</b>
            <div class="owner-signature"></div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
// import jsPDF from "jspdf";

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
  }),
  methods: {
    
  },
  mounted() {
     function undo() {
      this.$refs.signaturePad.undoSignature();
    };
    function change() {
      this.options = {
        penColor: "#00f",
      };
    };
    function resume() {
      this.options = {
        penColor: "#c0f",
      };
    };
    function download() {
      const doc = new jsPDF();
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      var signSecure = this.sign;

      const contentHtml = this.$refs.content.innerHTML;
      doc.fromHTML(contentHtml, 15, 15, {
        width: 500,
      });

      doc.addImage(data, "PNG", 0, 180, 100, 50);
      doc.save("sample.pdf");
    };
  }
};
</script>

<style lang="scss">
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

canvas {
  background: #fff8de;
}
</style>
