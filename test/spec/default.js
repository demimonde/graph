import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import graph from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof graph, 'function')
  },
  async 'calls package without error'() {
    await graph()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await graph({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T