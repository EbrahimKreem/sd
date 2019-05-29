/* global describe, it, expect */
'use strict'
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

const { nutritions2FilePath } = require('../files')
const nutritionalAttributes = require(nutritions2FilePath)

describe('nutritionalAttributes data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of nutritionalAttributes', () => {
    expect(nutritionalAttributes).not.toBe('')
  })
})

describe('testng for nutritionalAttribute json data schema', () => {
  it('validates nutritionalAttribute json schema', () => {
    const schema = {
      properties: {
        Nutrition: { type: 'string' },
        Description: { type: 'string' },
        ImpliedUnits: { type: 'string' }
           
      required: [ 'Nutrition', 'Description', 'ImpliedUnits' ]
    }

    expect({ Nutrition: 'K', Description: 'Potassium, K', ImpliedUnits: 'gram' }).toMatchSchema(schema)
  })
})
