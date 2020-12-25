_ = require('lodash')
assert = require('assert')

STARPEACE = require('../../lib')

describe('STARPEACE.plane.PlaneDefinition', ->
  describe('require', ->
    it('should be able to load from global', ->
      assert.ok(STARPEACE)
      assert.ok(STARPEACE.plane)
      assert.ok(STARPEACE.plane.PlaneDefinition)
    )
  )
  describe('#fromJson', ->
    it('should be able to create from json', ->
      JSON = {
        id: 'id'
        image: 'image.png'
        width: 16
        height: 16
      }

      plane = STARPEACE.plane.PlaneDefinition.fromJson(JSON)
      assert.ok(plane)
      assert.strictEqual(plane.id, JSON.id)
      assert.strictEqual(plane.image, JSON.image)
      assert.strictEqual(plane.width, JSON.width)
      assert.strictEqual(plane.height, JSON.height)
      assert.ok(plane.isValid())
      assert.deepStrictEqual(plane.toJson(), JSON)
    )
  )
)
