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
      }

      unit = STARPEACE.industry.ResourceUnit.fromJson(JSON)
      assert.ok(unit)
      assert.strictEqual(unit.id, JSON.id)
      assert.deepStrictEqual(unit.labelPlural.toJson(), JSON.labelPlural)
      assert.ok(unit.isValid())
      assert.deepStrictEqual(unit.toJson(), JSON)
    )
  )
)
