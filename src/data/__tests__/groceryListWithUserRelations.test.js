/* global test, describe, it, expect */
'use strict'
import {groceryListWithUserRelationsFilePath} from '../../../files.js'
const groceryListWithUserRelations = require(groceryListWithUserRelationsFilePath)

describe('groceryListWithUserRelations data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of groceryListWithUserRelations', () => {
    expect(groceryListWithUserRelations).not.toBe('')
  })
})
