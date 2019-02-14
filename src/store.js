import Vue from 'vue'
import Vuex from 'vuex'
import bookings from '@/store/bookings'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    bookings
  }
})
