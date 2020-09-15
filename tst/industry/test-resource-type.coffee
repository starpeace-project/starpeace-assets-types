assert = require('assert')

STARPEACE = require('../../lib')

describe('STARPEACE.industry.ResourceType', ->
  describe('require', ->
    it('should be able to load from global', ->
      assert.ok(STARPEACE)
      assert.ok(STARPEACE.industry)
      assert.ok(STARPEACE.industry.ResourceType)
    )
  )
  describe('#fromJson', ->
    it('should be able to create from json', ->
      JSON = {
        id: 'id'
        labelPlural: {
          DE: 'de label_plural'
          EN: 'en label_plural'
          ES: 'es label_plural'
          FR: 'fr label_plural'
          IT: 'it label_plural'
          PT: 'pt label_plural'
        }
        unitId: 'unit-id'
        price: 12.34
      }

      type = STARPEACE.industry.ResourceType.fromJson(JSON)
      assert.ok(type)
      assert.strictEqual(type.id, JSON.id)
      assert.deepStrictEqual(type.labelPlural.toJson(), JSON.labelPlural)
      assert.strictEqual(type.unitId, JSON.unitId)
      assert.strictEqual(type.price, JSON.price)
      assert.ok(type.isValid())
      assert.deepStrictEqual(type.toJson(), JSON)
    )
  )
)
