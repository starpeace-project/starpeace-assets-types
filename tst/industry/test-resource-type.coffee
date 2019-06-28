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
      assert.strictEqual(type.label_plural.german, JSON.label_plural.DE)
      assert.strictEqual(type.label_plural.english, JSON.label_plural.EN)
      assert.strictEqual(type.label_plural.spanish, JSON.label_plural.ES)
      assert.strictEqual(type.label_plural.french, JSON.label_plural.FR)
      assert.strictEqual(type.label_plural.italian, JSON.label_plural.IT)
      assert.strictEqual(type.label_plural.portuguese, JSON.label_plural.PT)
      assert.strictEqual(type.unit_id, 'unit-id')
      assert.strictEqual(type.price, 12.34)
      assert.ok(type.is_valid())
      assert.deepStrictEqual(type.toJSON(), JSON)
    )
  )
)
