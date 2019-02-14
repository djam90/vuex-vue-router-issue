import router from '@/router'

const state = {
  bookings: [],
  lastAdded: null,
  lastEdited: null,
  errors: {
    get: null,
    add: null,
    edit: null,
    getById: null
  },
  booking: {}
}

export const getters = {
  booking: state => {
    return state.booking
  }
}

export const actions = {
  async getAll ({ commit }) {
    try {
      commit('SET_BOOKINGS', {})
    } catch (e) {
      commit('SET_ERROR_FOR_GET', e)
    }
  },

  async create ({ commit, state }, { booking }) {
    try {
      commit('SET_LAST_CREATED', {})
      router.push({ name: 'bookings' })
    } catch (e) {
      commit('SET_ERROR_FOR_CREATE', e)
    }
  },

  async getById ({ commit, state }, { id }) {
    try {
      commit('SET_BOOKING', {})
    } catch (e) {
      commit('SET_ERROR_FOR_GET_BY_ID', e)
    }
  }
}

export const mutations = {
  SET_VEHICLES (state, vehicles) {
    state.all = vehicles
  },
  SET_ERROR_FOR_GET (state, error) {
    state.errors.get = error
  },
  SET_LAST_CREATED (state, customer) {
    state.lastAdded = customer
  },
  SET_ERROR_FOR_CREATE (state, error) {
    state.errors.add = error
  },
  SET_BOOKING (state, vehicle) {
    state.vehicle = vehicle
  },
  SET_ERROR_FOR_GET_BY_ID (state, error) {
    state.errors.getById = error
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
