<template>
  <div>
    <v-toolbar color="primary" dark>
      <v-icon>mdi-menu</v-icon>

      <v-toolbar-title class="white--text ml-5">Covidax</v-toolbar-title>

      <v-icon class="ml-auto"></v-icon>info@dedfx.com
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>

    <v-container style="padding: 0;margin-bottom: -30px;margin-top: 30px;">
      <v-tabs v-model="model" left slider-color="white" color="primary">
        <v-tab href="#tab-1">
          <v-icon class="mr-1" style="font-size: 16px;">mdi-clipboard-edit</v-icon>Investment form
        </v-tab>

        <v-tab href="#tab-2" disabled style="border-right: 1px solid #eee;">
          <v-icon class="mr-1" style="font-size: 22px;">mdi-information-variant</v-icon>Project Info
        </v-tab>

        <v-tab href="#tab-3" disabled>
          <v-icon class="mr-1" style="font-size: 16px;">mdi-file-document-multiple</v-icon>Legal Documents
        </v-tab>
      </v-tabs>
    </v-container>
    <div class="container my-5 stepper__wrapper">
      <v-stepper v-model="e13" style="margin-top: 40px;" vertical>
        <v-stepper-step step="1" editable>Registration</v-stepper-step>

        <v-stepper-content step="1">
          <v-card class="mb-5 p-4">
            <v-card-text>
              <v-form v-model="valid">
                <v-container>
                  Please register or log in to continue:
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="password"
                        :append-icon="show1 ? 'mdi-eye-off' : 'mdi-eye'"
                        :rules="[rules.required, rules.min]"
                        :type="show1 ? 'text' : 'password'"
                        name="input-10-1"
                        label="Password"
                        hint="At least 8 characters"
                        counter
                        @click:append="show1 = !show1"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col>
                      <v-checkbox v-model="checkbox" label="Agree to everything"></v-checkbox>
                      <v-checkbox v-model="checkbox2" label="Agree to something else"></v-checkbox>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-card-text>
          </v-card>
          <v-btn color="primary" @click="e13 = 2" large>Continue</v-btn>
        </v-stepper-content>

        <v-stepper-step step="2" editable>Basic information</v-stepper-step>

        <v-stepper-content step="2">
          <v-card class="mb-5 p-4">
            <v-card-text>
              <v-form>
                <v-container>
                  Please fill in the following fields:
                  <v-row>
                    <v-col cols="12" md="4">
                      <v-text-field v-model="first" label="First Name" outline></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-text-field v-model="last" label="Last Name" outline></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-select v-model="e6" :items="genders" label="Gender"></v-select>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12" md="6">
                      <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        :return-value.sync="date"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field v-model="date" label="Date of birth" readonly v-on="on"></v-text-field>
                        </template>
                        <v-date-picker v-model="date" no-title scrollable>
                          <v-spacer></v-spacer>
                          <v-btn color="primary" @click="menu = false">Cancel</v-btn>
                          <v-btn color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                        </v-date-picker>
                      </v-menu>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field label="Birthplace" outline></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12" md="12">
                      <v-text-field label="Natonality" outline></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12" md="12">
                      <v-text-field label="National ID card / Passport number" outline></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field label="Phone number" outline></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field label="Occupation / Sector of activity" outline></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12" md="12">
                      <v-text-field label="Source of funds" outline></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12" md="12">
                      <v-text-field label="Source of wealth" outline></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12" md="12">
                      <v-text-field label="Investment reason" outline></v-text-field>
                    </v-col>
                  </v-row>

                  <!-- <v-row>
                    <v-col>
                      <v-text-field label="Intended investment amount" value="100.00" prefix="€"></v-text-field>
                    </v-col>
                  </v-row>-->
                </v-container>
              </v-form>
            </v-card-text>
          </v-card>
          <v-btn color="primary" @click="e13 = 3" large>Continue</v-btn>
        </v-stepper-content>

        <v-stepper-step step="3" editable>Documents upload</v-stepper-step>

        <v-stepper-content step="3">
          <v-card class="mb-5 p-4">
            <v-card-text>
              <v-form>
                <v-container>
                  <v-row>
                    <v-col>
                      Please upload the documentation listed below to meet the requirements of the KYC/AML process
                      <br />
                      <br />
                      <h5 class="info-title">1. Colour copy of your national ID card or passport *</h5>If you use your National ID card, please make sure that photos of both sides (the front and the back) are uploaded
                      <br />
                      <br />
                      <v-file-input
                        v-model="files"
                        color="deep-purple accent-4"
                        counter
                        label="File input"
                        multiple
                        placeholder="Select your files"
                        prepend-icon="mdi-paperclip"
                        outlined
                        :show-size="1000"
                      >
                        <template v-slot:selection="{ index, text }">
                          <v-chip
                            v-if="index < 2"
                            color="deep-purple accent-4"
                            dark
                            label
                            small
                          >{{ text }}</v-chip>

                          <span
                            v-else-if="index === 2"
                            class="overline grey--text text--darken-3 mx-2"
                          >+{{ files.length - 2 }} File(s)</span>
                        </template>
                      </v-file-input>
                      <hr />
                      <h5 class="info-title mt-5">2. Proof of residence *</h5>(Must be less than 3 months old)
                      <br />a) Major Utility Bill (electric/water/gas/internet/telephone)
                      <br />b) Mortgage account statement
                      <br />c) Investment/Brokerage account statement
                      <br />d) Pay stub
                      <br />
                      <br />
                      <v-file-input
                        v-model="files"
                        color="deep-purple accent-4"
                        counter
                        label="File input"
                        multiple
                        placeholder="Select your files"
                        prepend-icon="mdi-paperclip"
                        outlined
                        :show-size="1000"
                      >
                        <template v-slot:selection="{ index, text }">
                          <v-chip
                            v-if="index < 2"
                            color="deep-purple accent-4"
                            dark
                            label
                            small
                          >{{ text }}</v-chip>

                          <span
                            v-else-if="index === 2"
                            class="overline grey--text text--darken-3 mx-2"
                          >+{{ files.length - 2 }} File(s)</span>
                        </template>
                      </v-file-input>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-card-text>
          </v-card>
          <v-btn color="primary" @click="e13 = 4" large>
            <v-icon class="mr-1">mdi-cloud-upload</v-icon>Upload
          </v-btn>
        </v-stepper-content>

        <v-stepper-step :rules="[() => false]" step="4" editable>Authentification</v-stepper-step>

        <v-stepper-content step="4">
          <v-card class="mb-5">
            <v-card-text>
              <v-form>
                <v-container>
                  <v-row>
                    <v-col>
                      Please finish the authentification process listed below to meet the requirements of the KYC/AML process
                      <br />
                      <br />
                      <br />
                      <br />
                      <h5 class="info-title">1. Cynopsis</h5>
                      <img
                        src="https://static.wixstatic.com/media/290fcf_9dea10d02a0545bfb0e0a94e53012e89~mv2_d_5119_1218_s_2.png/v1/fill/w_191,h_45,al_c,q_85,usm_0.66_1.00_0.01/Cynopsis_logo_color_outlines.webp"
                      />
                      Some info about Cynopsis company, and why is it important to do this step
                      <br />
                      <br />
                      <v-btn
                        color="primary"
                        @click="isDisabled = false; isDisabled0 = true"
                        :disabled="isDisabled0"
                      >
                        <v-icon class="mr-1">mdi-camera-account</v-icon>Liveliness test
                      </v-btn>
                      <br />
                      <br />
                      <hr />
                      <br />
                      <br />
                      <h5 class="info-title">2. Sign the documents</h5>Some info about the eSign company, and why is it important to do this step
                      <br />
                      <br />
                      <v-btn
                        color="primary"
                        @click="isDisabled2 = false; isDisabled = true; dialog = true"
                        :disabled="isDisabled"
                      >
                        <h1
                          class="logo"
                          style="color: ##fff; font-weight: 300;text-transform: none!important;font-size: 17px;margin-top: 4px;padding: 27px;"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="lock"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            class="header__logo svg-inline--fa fa-lock fa-w-14"
                            style="color: #fff;margin-right:4px;"
                          >
                            <path
                              fill="currentColor"
                              d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"
                              class
                            />
                          </svg>Secure
                          <span style="font-weight: 700;margin-left: -3px;">SIGN</span>
                        </h1>
                      </v-btn>
                      <br />
                      <br />
                      <v-dialog v-model="dialog" max-width="1024">
                        <v-card>
                          <Agreement />
                        </v-card>
                      </v-dialog>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-card-text>
          </v-card>
          <v-btn color="primary" @click="e13 = 5" large :disabled="isDisabled2">Continue</v-btn>
        </v-stepper-content>

        <v-stepper-step step="5" editable>Stocks</v-stepper-step>

        <v-stepper-content step="5">
          <v-card class="mb-5">
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col>
                    Please select how many stocks you would like to buy
                    <br />
                    <br />
                    <br />
                    <v-text-field
                      v-model="foo"
                      type="number"
                      label="Number of stocks"
                      suffix="Stocks"
                      style="width: 370px;"
                      outlined
                    ></v-text-field>

                    <div class="d-flex">
                      <div style="min-width: 250px;">
                        <div class="pricebox__header mb-2">Total price:</div>
                        <div style="font-size: 32px;font-weight: 700;color: #44aa44;">{{ foo*1000 }}€</div>
                      </div>
                      <div>
                        <div class="pricebox__header mb-2">You will own:</div>
                        <div>
                          <b style="font-size: 32px; font-weight: 700;">{{ foo*100/40000 }}%</b>
                          <div style="font-size: 11px;">(of total 40.000 Stocks)</div>
                        </div>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
          <v-btn color="primary" @click="e13 = 6" large>Continue</v-btn>
        </v-stepper-content>

        <v-stepper-step step="6" editable>Payment</v-stepper-step>

        <v-stepper-content step="6">
          <v-tabs fixed-tabs>
            <v-tab>
              <v-icon class="mr-1">mdi-credit-card-check-outline</v-icon>Pay With Card
            </v-tab>
            <v-tab-item>
              <Card />
            </v-tab-item>

            <v-tab disabled>
              <v-icon class="mr-1">mdi-bank-transfer</v-icon>Bank Transfer
            </v-tab>

            <v-tab disabled>Other</v-tab>
          </v-tabs>

          <v-btn color="primary" @click="e13 = 7" large>Continue</v-btn>
        </v-stepper-content>

        <v-stepper-step step="7" editable>Confirmation</v-stepper-step>

        <v-stepper-content step="7">
          <v-card class="mb-5" height="200">Success template</v-card>
          <v-btn color="primary" @click="e13 = 1" large>Continue</v-btn>
        </v-stepper-content>
      </v-stepper>
    </div>
  </div>
</template>

<script>
import Card from "~/components/Card.vue";
import Agreement from "~/components/Agreement.vue";

export default {
  components: {
    Card,
    Agreement,
  },
  data: () => ({
    e13: 0,
    show1: false,
    password: "",
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

    isDisabled0: false,
    isDisabled: true,
    isDisabled2: true,
    dialog: false,

    checkbox: false,
    checkbox2: false,
    radioGroup: 1,
    switch1: true,

    drawer: true,
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard" },
      { title: "Photos", icon: "mdi-image" },
      { title: "About", icon: "mdi-help-box" },
    ],
    color: "primary",
    colors: ["primary", "blue", "success", "red", "teal"],
    right: false,
    permanent: true,
    miniVariant: false,
    expandOnHover: false,
    background: false,
    model: "tab-1",
    foo: 1,
    fooPer: 10,
  }),
  methods: {
    increment() {
      this.foo = parseInt(this.foo, 10) + 1;
    },
    decrement() {
      this.foo = parseInt(this.foo, 10) - 1;
    },
  },
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

h5.infotitle {
  font-weight: 500;
  margin-bottom: 17px;
}

canvas {
  background: #fff8de;
}

.stepper__wrapper {
  background: #fff;

  .v-card {
    margin-top: 20px;
  }
}
</style>
