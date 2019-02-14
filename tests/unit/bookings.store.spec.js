/* eslint no-unused-expressions: 0 */

import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import bookingsStore from '@/store/bookings'
import router from '@/router'

chai.use(sinonChai)
const expect = chai.expect

const { getters, actions } = bookingsStore

// test getters
describe('getters', () => {
  describe('booking', () => {
    it('should return booking from state', () => {
      const state = {
        booking: {}
      }

      const actual = getters.booking(state)

      expect(actual).to.deep.equal(state.booking)
    })
  })
})

// test actions
describe('actions', () => {
  describe('create', () => {
    let routerStub

    beforeEach(() => {
      routerStub = sinon.stub(router, 'push')
    })

    afterEach(() => {
      routerStub.restore()
    })

    it('create success', async () => {
      const commit = sinon.spy()
      const state = {}

      const booking = {}

      actions.create({ commit, state }, { booking })

      expect(commit.args).to.deep.equal([
        ['SET_LAST_CREATED', {}]
      ])

      expect(routerStub).to.have.been.called
    })
  })
})
