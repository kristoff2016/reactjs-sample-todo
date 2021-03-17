import StateProvider, { StateContext } from 'containers/StateProvider'
import { mount } from 'enzyme'
import React from 'react'

describe('#StateProvider', () => {
  let render
  const initialState = {}
  beforeAll(() => {
    render = jest.fn()
    mount(
      <StateProvider initialState={initialState}>
        <StateContext.Consumer>{render}</StateContext.Consumer>
      </StateProvider>
    )
  })
  it('Provides state as property of context', () => {
    expect(render.mock.calls[0][0].state).toEqual(initialState)
  })
})