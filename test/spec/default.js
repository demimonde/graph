import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import { graphGet, graphPost } from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'get is a function'() {
    equal(typeof graphGet, 'function')
  },
  'post is a function'() {
    equal(typeof graphPost, 'function')
  },
  // async 'calls package without error'() {
  //   await graph()
  // },
  // async 'gets a link to the fixture'({ FIXTURE }) {
  //   const res = await graph({
  //     text: FIXTURE,
  //   })
  //   ok(res, FIXTURE)
  // },
}

export default T