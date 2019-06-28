assert = require('assert')

STARPEACE = require('../../lib')

describe('STARPEACE.industry.ResourceQuantity', ->
  describe('require', ->
    it('should be able to load from global', ->
      assert.ok(STARPEACE)
      assert.ok(STARPEACE.industry)
      assert.ok(STARPEACE.industry.ResourceQuantity)
    )
  )
  describe('#from_json', ->
    it('should be able to create from json', ->
      JSON = {
        resource: 'id'
        max_velocity: 1234
        weight_efficiency: 1.234
        weight_quality: 0.1234
      }

      quantity = STARPEACE.industry.ResourceQuantity.from_json(JSON)
      assert.ok(quantity)
      assert.strictEqual(quantity.resource_id, 'id')
      assert.strictEqual(quantity.max_velocity, JSON.max_velocity)
      assert.strictEqual(quantity.weight_efficiency, JSON.weight_efficiency)
      assert.strictEqual(quantity.weight_quality, JSON.weight_quality)
      assert.ok(quantity.is_valid())
      assert.deepStrictEqual(quantity.toJSON(), JSON)
    )
  )
)
