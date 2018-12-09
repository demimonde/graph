import rqt from 'rqt'

const getData = (access_token, data) => ({
  access_token,
  ...data,
})

export const graphPost = async (path, token, params = {}) => {
  if (!token) throw new Error('No token is given')
  const data = getData(token, params)
  const res = await rqt(`https://graph.facebook.com/${path}`, {
    data,
    method: 'POST',
  })
  const { data: d, error } = JSON.parse(res)
  if (error) throw res
  return d
}

export const graphGet = async (path, token, params = {}, straight) => {
  if (!token) throw new Error('No token is given')
  const data = getData(token, params)
  const p = path.startsWith('/') ? path : `/${path}`
  const url = getUrl(`https://graph.facebook.com${p}`, data)
  const res = await rqt(url)
  const r = JSON.parse(res)
  if (straight) return r
  const { data: d, error } = r
  if (error) throw new Error(res)
  if (!d) throw new Error('no data')
  return d
}
