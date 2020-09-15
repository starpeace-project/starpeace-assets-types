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
  describe('#fromJson', ->
    it('should be able to create from json', ->
      JSON = {
        resourceId: 'id'
        maxVelocity: 1234
        weightEfficiency: 1.234
        weightQuality: 0.1234
      }

      quantity = STARPEACE.industry.ResourceQuantity.fromJson(JSON)
      assert.ok(quantity)
      assert.strictEqual(quantity.resourceId, JSON.resourceId)
      assert.strictEqual(quantity.maxVelocity, JSON.maxVelocity)
      assert.strictEqual(quantity.weightEfficiency, JSON.weightEfficiency)
      assert.strictEqual(quantity.weightQuality, JSON.weightQuality)
      assert.ok(quantity.isValid())
      assert.deepStrictEqual(quantity.toJson(), JSON)
    )
  )
)
