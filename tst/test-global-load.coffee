assert = require('assert')

STARPEACE = require('../lib')

describe('STARPEACE', ->
  describe('require', ->
    it('should be able to load from global', ->
      assert.ok(STARPEACE)

      assert.ok(STARPEACE.building)
      assert.ok(STARPEACE.building.simulation)
      assert.ok(STARPEACE.building.simulation.bank)
      assert.ok(STARPEACE.building.simulation.bank.BankDefinition)

      assert.ok(STARPEACE.industry)
      assert.ok(STARPEACE.industry.ResourceUnit)

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
      unit = STARPEACE.industry.ResourceUnit.from_json(JSON)
      assert.ok(unit)
      assert.strictEqual(unit.id, 'id')
      assert.ok(unit.label_plural)
      assert.ok(unit.is_valid())
      assert.deepStrictEqual(unit.toJSON(), JSON)
    )
  )
)
