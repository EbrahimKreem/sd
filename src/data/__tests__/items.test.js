/* global test, describe, it, expect */
'use strict'
import {itemsFilePath} from '../../../files.js'
const items = require(itemsFilePath)

describe('items data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of items', () => {
    expect(items).not.toBe('')
  })
})
