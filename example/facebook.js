import { facebookDialogUrl } from '../src'

const url = facebookDialogUrl({
  client_id: '4hkajshd6f7t4ff',
  redirect_uri: 'http://localhost:4350',
  scope: 'manage_pages',
  state: Math.floor(Math.random() * 10000),
})

console.log(url)