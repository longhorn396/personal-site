export default function apiRequest(
  path: string,
  params: RequestInit,
  callback: CallableFunction,
  onError?: CallableFunction,
  fin?: CallableFunction,
) {
  fetch(path, params)
    .then(async (res) => {
      if (res.ok && res.body) {
        await callback(res)
      } else {
        if (onError) {
          await onError(res)
        } else {
          console.error(res)
          window.alert('We encountered an unexpected response\nPlease see the console for more details.')
        }
      }
    })
    .catch((err) => {
      console.error(err)
      window.alert('We encountered an error\nPlease see the console for more details.')
    })
    .finally(() => fin && fin())
}
