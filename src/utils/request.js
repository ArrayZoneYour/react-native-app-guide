export const getPosts = async () => {
  const resp = await fetch('http://127.0.0.1:3004/posts', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  //   React Native Debugger
  //   console .log()
  if (resp.status === 200) {
    return await resp.json()
  } else {
    return { error: 'Network error' }
  }
}
