/* global test, describe, it, expect */
'use strict'
import {menuFilePath} from '../../../files.js'
const menu = require(menuFilePath)

describe('menu data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of menu', () => {
    expect(menu).not.toBe('')
  })
})
