import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);


export default new Vuetify({
  theme: {
    primary: '#000000'
  },
  options: {
    customProperties: true,
    icofont: 'md',
  }
});