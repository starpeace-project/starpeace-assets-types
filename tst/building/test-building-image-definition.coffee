_ = require('lodash')
assert = require('assert')

STARPEACE = require('../../lib')

describe('STARPEACE.building.BuildingImageDefinition', ->
  describe('require', ->
    it('should be able to load from global', ->
      assert.ok(STARPEACE)
      assert.ok(STARPEACE.building)
      assert.ok(STARPEACE.building.BuildingImageDefinition)
    )
  )
  describe('#fromJson', ->
    it('should be able to create from json', ->
      JSON = {
        id: "generic.college",
        imagePath: "assets/buildings/generic/images/generic.college.gif",
        tileWidth: 8,
        tileHeight: 8,
        hitArea: [
          [{"x":7,"y":139},{"x":254,"y":263},{"x":406,"y":95},{"x":387,"y":81},{"x":254,"y":17}],
          [{"x":320,"y":26},{"x":297,"y":34},{"x":327,"y":51}],
          [{"x":394,"y":72},{"x":387,"y":81},{"x":406,"y":95},{"x":402,"y":74}],
          [{"x":505,"y":140},{"x":406,"y":95},{"x":254,"y":263}],
          [{"x":297,"y":34},{"x":255,"y":16},{"x":254,"y":17},{"x":327,"y":51}]
        ],
        effects: [
          {"x":0.515625,"y":0.0326,"type":"smoke.dark"},
          {"x":0.78125,"y":0.21739,"type":"smoke.dark"}
        ]
      }

      image = STARPEACE.building.BuildingImageDefinition.fromJson(JSON)
      assert.ok(image)
      assert.strictEqual(image.id, JSON.id)
      assert.strictEqual(image.imagePath, JSON.imagePath)
      assert.strictEqual(image.tileWidth, JSON.tileWidth)
      assert.strictEqual(image.tileHeight, JSON.tileHeight)
      assert.deepStrictEqual(_.map(image.hitArea, (cl) -> cl.toJson()), JSON.hitArea)
      assert.deepStrictEqual(_.map(image.effects, (e) -> e.toJson()), JSON.effects)
      assert.ok(image.isValid())
      assert.deepStrictEqual(image.toJson(), JSON)
    )
  )
)
