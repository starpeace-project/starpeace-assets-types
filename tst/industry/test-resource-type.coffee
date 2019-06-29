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
  describe('#from_json', ->
    it('should be able to create from json', ->
      JSON = {
        id: 'id'
        label_plural: {
          DE: 'de label_plural'
          EN: 'en label_plural'
          ES: 'es label_plural'
          FR: 'fr label_plural'
          IT: 'it label_plural'
          PT: 'pt label_plural'
        }
        unit_id: 'unit-id'
        price: 12.34
      }

      type = STARPEACE.industry.ResourceType.from_json(JSON)
      assert.ok(type)
      assert.strictEqual(type.id, 'id')
      assert.deepStrictEqual(type.label_plural.toJSON(), JSON.label_plural)
      assert.strictEqual(type.unit_id, 'unit-id')
      assert.strictEqual(type.price, 12.34)
      assert.ok(type.is_valid())
      assert.deepStrictEqual(type.toJSON(), JSON)
    )
  )
)
