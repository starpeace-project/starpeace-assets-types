assert = require('assert')

STARPEACE = require('../../lib')

describe('STARPEACE.building.CoordinateList', ->
  describe('require', ->
    it('should be able to load from global', ->
      assert.ok(STARPEACE)
      assert.ok(STARPEACE.building)
      assert.ok(STARPEACE.building.CoordinateList)
    )
  )
  describe('#fromJson', ->
    it('should be able to create from json', ->
      JSON = [
        {
          x: 73
          y: 52
        },
        {
          x: 101
          y: 32
        }
      ]

      coordinates = STARPEACE.building.CoordinateList.fromJson(JSON)
      assert.ok(coordinates)
      assert.strictEqual(coordinates.coordinates.length, 2)
      assert.strictEqual(coordinates.coordinates[0].x, JSON[0].x)
      assert.strictEqual(coordinates.coordinates[0].y, JSON[0].y)
      assert.strictEqual(coordinates.coordinates[1].x, JSON[1].x)
      assert.strictEqual(coordinates.coordinates[1].y, JSON[1].y)
      assert.ok(coordinates.isValid())
      assert.deepStrictEqual(coordinates.toJson(), JSON)
    )
  )
)
