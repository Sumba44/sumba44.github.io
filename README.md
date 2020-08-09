# dedfx

> My great Nuxt.js project

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```


AOS 

make a js file in your plugins directory with the following content:
// aos.js
import Vue from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

Vue.use(
  AOS.init({
      // add your settings here
  })
);
include the file from step 1 in nuxt.config.jsin the pluginssection:
  plugins: [
    '~/plugins/aos.js',
  ],
