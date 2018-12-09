import rqt, { jqt } from 'rqt'
import { stringify } from 'querystring'

const getData = (data, access_token) => ({
  ...(access_token ? { access_token } : {}),
  ...data,
})

const getGraphPath = (path) => {
  const p = path.startsWith('/') ? path : `/${path}`
  return 'https://graph.facebook.com/' + p
}

export const graphPost = async (path, token, params = {}) => {
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

export const getUrl = (url, params = {}) => {
  const s = stringify(params)
  return `${url}?${s}`
}

export const facebookDialogUrl = ({
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

export const exchange = async ({
  client_id,
  redirect_uri,
  client_secret,
  code,
}) => {
  const url = getGraphPath('/oauth/access_token')
  const res = await jqt(url, {
    client_id,
    redirect_uri,
    client_secret,
    code,
  })
  const { access_token } = res
  if (!access_token) {
    const er = new Error('No access token')
    er.response = res
  }
  return access_token
}

/**
 * @param {string} path The edge path with or without forward /.
 * @param {string} token The access token. If object is passed, no access token is used.
 */
export const graphGet = async (path, token, params = {}, straight) => {
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
