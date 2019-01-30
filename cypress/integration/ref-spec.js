import HelloWorld from '../../src/ref.jsx'
import React from 'react'
import { mount } from '../../lib'

/* eslint-env mocha */
describe.only('HelloWorld with a ref', () => {
  it('mounts', () => {
    mount(<HelloWorld/>)
  })
})
