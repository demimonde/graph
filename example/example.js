/* yarn example/ */
import graph from '../src'

(async () => {
  const res = await graph({
    text: 'example',
  })
  console.log(res)
})()