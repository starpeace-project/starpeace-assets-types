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
      assert.deepStrictEqual(unit.label_plural.toJSON(), JSON.label_plural)
      assert.ok(unit.is_valid())
      assert.deepStrictEqual(unit.toJSON(), JSON)
    )
  )
)
