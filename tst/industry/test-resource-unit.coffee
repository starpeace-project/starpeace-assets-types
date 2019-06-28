assert = require('assert')

STARPEACE = require('../../lib')

describe('STARPEACE.industry.ResourceUnit', ->
  describe('require', ->
    it('should be able to load from global', ->
      assert.ok(STARPEACE)
      assert.ok(STARPEACE.industry)
      assert.ok(STARPEACE.industry.ResourceUnit)
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
      }

      unit = STARPEACE.industry.ResourceUnit.from_json(JSON)
      assert.ok(unit)
      assert.strictEqual(unit.id, 'id')
      assert.strictEqual(unit.label_plural.german, JSON.label_plural.DE)
      assert.strictEqual(unit.label_plural.english, JSON.label_plural.EN)
      assert.strictEqual(unit.label_plural.spanish, JSON.label_plural.ES)
      assert.strictEqual(unit.label_plural.french, JSON.label_plural.FR)
      assert.strictEqual(unit.label_plural.italian, JSON.label_plural.IT)
      assert.strictEqual(unit.label_plural.portuguese, JSON.label_plural.PT)
      assert.ok(unit.is_valid())
      assert.deepStrictEqual(unit.toJSON(), JSON)
    )
  )
)
