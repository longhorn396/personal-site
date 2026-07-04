/**
 * @jest-environment jsdom
 */
import apiRequest from '../../utils/apiRequest'

describe('apiRequest', () => {
  const originalFetch = global.fetch
  const originalAlert = window.alert
  const flushPromises = () => new Promise((resolve) => setTimeout(resolve, 0))

  beforeEach(() => {
    jest.clearAllMocks()
    global.fetch = jest.fn() as unknown as typeof fetch
    window.alert = jest.fn() as unknown as typeof window.alert
  })

  afterEach(() => {
    global.fetch = originalFetch
    window.alert = originalAlert
  })

  it('calls the callback when the response is ok and has a body', async () => {
    const callback = jest.fn()
    const onError = jest.fn()
    const fin = jest.fn()
    const response = {
      ok: true,
      body: 'body',
    } as unknown as Response

    ;(global.fetch as jest.Mock).mockResolvedValue(response)

    apiRequest('/api/test', { method: 'GET' }, callback, onError, fin)

    await flushPromises()

    expect(global.fetch).toHaveBeenCalledWith('/api/test', { method: 'GET' })
    expect(callback).toHaveBeenCalledWith(response)
    expect(onError).not.toHaveBeenCalled()
    expect(fin).toHaveBeenCalled()
  })

  it('uses the supplied error alert when onError handler is provided', async () => {
    const callback = jest.fn()
    const err = jest.fn()
    const fin = jest.fn()
    const response = {
      ok: false,
      body: null,
    } as unknown as Response

    ;(global.fetch as jest.Mock).mockResolvedValue(response)

    apiRequest('/api/test', { method: 'GET' }, callback, err, fin)

    await flushPromises()

    expect(callback).not.toHaveBeenCalled()
    expect(err).toHaveBeenCalled()
    expect(fin).toHaveBeenCalled()
    expect(window.alert).not.toHaveBeenCalled()
  })

  it('uses the fallback error alert when no onError handler is provided', async () => {
    const callback = jest.fn()
    const fin = jest.fn()
    const response = {
      ok: false,
      body: null,
    } as unknown as Response
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => undefined)

    ;(global.fetch as jest.Mock).mockResolvedValue(response)

    apiRequest('/api/test', { method: 'GET' }, callback, undefined, fin)

    await flushPromises()

    expect(callback).not.toHaveBeenCalled()
    expect(fin).toHaveBeenCalled()
    expect(window.alert).toHaveBeenCalledWith(
      'We encountered an unexpected response\nPlease see the console for more details.',
    )
    expect(consoleErrorSpy).toHaveBeenCalledWith(response)
    consoleErrorSpy.mockRestore()
  })

  it('alerts when fetch rejects', async () => {
    const callback = jest.fn()
    const fin = jest.fn()
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => undefined)

    ;(global.fetch as jest.Mock).mockRejectedValue(new Error('boom'))

    apiRequest('/api/test', { method: 'GET' }, callback, undefined, fin)

    await flushPromises()

    expect(callback).not.toHaveBeenCalled()
    expect(fin).toHaveBeenCalled()
    expect(window.alert).toHaveBeenCalledWith('We encountered an error\nPlease see the console for more details.')
    expect(consoleErrorSpy).toHaveBeenCalled()
    consoleErrorSpy.mockRestore()
  })
})
