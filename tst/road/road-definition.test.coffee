_ = require('lodash')
assert = require('assert')

STARPEACE = require('../../lib')

describe('STARPEACE.road.RoadDefinition', ->
  describe('require', ->
    it('should be able to load from global', ->
      assert.ok(STARPEACE)
      assert.ok(STARPEACE.road)
      assert.ok(STARPEACE.road.RoadDefinition)
    )
  )
  describe('#fromJson', ->
    it('should be able to create from json', ->
      JSON = {
        id: 'id'
        image: 'image.bmp'
      }

      road = STARPEACE.road.RoadDefinition.fromJson(JSON)
      assert.ok(road)
      assert.strictEqual(road.id, JSON.id)
      assert.strictEqual(road.image, JSON.image)
      assert.ok(road.isValid())
      assert.deepStrictEqual(road.toJson(), JSON)
    )
  )
)
