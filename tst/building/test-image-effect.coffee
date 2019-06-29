assert = require('assert')

STARPEACE = require('../../lib')

describe('STARPEACE.building.ImageEffect', ->
  describe('require', ->
    it('should be able to load from global', ->
      assert.ok(STARPEACE)
      assert.ok(STARPEACE.building)
      assert.ok(STARPEACE.building.ImageEffect)
    )
  )
  describe('#from_json', ->
    it('should be able to create from json', ->
      JSON = {
        x: 0.78125
        y: 0.21739
        type:"smoke.dark"
      }

      effect = STARPEACE.building.ImageEffect.from_json(JSON)
      assert.ok(effect)
      assert.strictEqual(effect.type, JSON.type)
      assert.strictEqual(effect.x, JSON.x)
      assert.strictEqual(effect.y, JSON.y)
      assert.ok(effect.is_valid())
      assert.deepStrictEqual(effect.toJSON(), JSON)
    )
  )
)
