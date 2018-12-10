let rqt = require('rqt'); const { jqt } = rqt; if (rqt && rqt.__esModule) rqt = rqt.default;
const { stringify } = require('querystring');

const getData = (data, access_token) => ({
  ...(access_token ? { access_token } : {}),
  ...data,
})

const getGraphPath = (path) => {
  const p = path.startsWith('/') ? path : `/${path}`
  return 'https://graph.facebook.com' + p
}

       const graphPost = async (path, token, params = {}) => {
  if (!token) throw new Error('No token is given')
  const data = getData(params, token)
  const u = getGraphPath(path)
  const res = await rqt(u, {
    data,
    method: 'POST',
  })
  const { data: d, error } = JSON.parse(res)
  if (error) throw res
  return d
}

       const getUrl = (url, params = {}) => {
  const s = stringify(params)
  return `${url}?${s}`
}

       const facebookDialogUrl = ({
  client_id, redirect_uri, state, scope,
}) => {
  const u = getUrl('https://www.facebook.com/dialog/oauth', {
    client_id,
    redirect_uri,
    state,
    scope,
  })
  return u
}

       const exchange = async ({
  client_id,
  redirect_uri,
  client_secret,
  code,
}) => {
  const url = getGraphPath('/oauth/access_token')
  const res = await jqt(url, {
    method: 'POST',
    data: {
      client_id,
      redirect_uri,
      client_secret,
      code,
    },
  })
  const { access_token } = res
  if (!access_token) {
    const er = new Error('No access token: \n' + JSON.stringify(res, null, 2))
    throw er
  }
  return access_token
}

/**
 * @param {string} path The edge path with or without forward /.
 * @param {string} token The access token. If object is passed, no access token is used.
 */
       const graphGet = async (path, token, params = {}, straight) => {
  if (!token) throw new Error('No token is given')
  const noToken = typeof token == 'object'
  const data = noToken ? token : getData(params, token)
  const u = getGraphPath(path)
  const url = getUrl(u, data)
  const res = await rqt(url)
  const r = JSON.parse(res)
  if (straight) return r
  const { data: d, error } = r
  if (error) throw new Error(res)
  if (!d) throw new Error('no data')
  return d
}


module.exports.graphPost = graphPost
module.exports.getUrl = getUrl
module.exports.facebookDialogUrl = facebookDialogUrl
module.exports.exchange = exchange
module.exports.graphGet = graphGet