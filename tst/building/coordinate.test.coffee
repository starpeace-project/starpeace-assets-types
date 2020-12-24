assert = require('assert')

STARPEACE = require('../../lib')

describe('STARPEACE.building.Coordinate', ->
  describe('require', ->
    it('should be able to load from global', ->
      assert.ok(STARPEACE)
      assert.ok(STARPEACE.building)
      assert.ok(STARPEACE.building.Coordinate)
    )
  )
  describe('#fromJson', ->
    it('should be able to create from json', ->
      JSON = {
        x: 73
        y: 52
      }

      coordinate = STARPEACE.building.Coordinate.fromJson(JSON)
      assert.ok(coordinate)
      assert.strictEqual(coordinate.x, JSON.x)
      assert.strictEqual(coordinate.y, JSON.y)
      assert.ok(coordinate.isValid())
      assert.deepStrictEqual(coordinate.toJson(), JSON)
    )
  )
)
