_ = require('lodash')
assert = require('assert')

STARPEACE = require('../../lib')

describe('STARPEACE.sign.SignDefinition', ->
  describe('require', ->
    it('should be able to load from global', ->
      assert.ok(STARPEACE)
      assert.ok(STARPEACE.sign)
      assert.ok(STARPEACE.sign.SignDefinition)
    )
  )
  describe('#fromJson', ->
    it('should be able to create from json', ->
      JSON = {
        id: 'id'
        image: 'image.gif'
        width: 16
        height: 16
      }

      sign = STARPEACE.sign.SignDefinition.fromJson(JSON)
      assert.ok(sign)
      assert.strictEqual(sign.id, JSON.id)
      assert.strictEqual(sign.image, JSON.image)
      assert.strictEqual(sign.width, JSON.width)
      assert.strictEqual(sign.height, JSON.height)
      assert.ok(sign.isValid())
      assert.deepStrictEqual(sign.toJson(), JSON)
    )
  )
)
