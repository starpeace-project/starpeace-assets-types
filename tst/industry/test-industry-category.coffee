assert = require('assert')

STARPEACE = require('../../lib')

describe('STARPEACE.industry.IndustryCategory', ->
  describe('require', ->
    it('should be able to load from global', ->
      assert.ok(STARPEACE)
      assert.ok(STARPEACE.industry)
      assert.ok(STARPEACE.industry.IndustryCategory)
    )
  )
  describe('#from_json', ->
    it('should be able to create from json', ->
      JSON = {
        id: 'NONE',
        label: {
          DE: 'Keine',
          EN: 'None',
          ES: 'Ninguna',
          FR: 'Aucun',
          IT: 'Nessuna',
          PT: 'Nenhum'
        }
      }

      category = STARPEACE.industry.IndustryCategory.from_json(JSON)
      assert.ok(category)
      assert.strictEqual(category.id, JSON.id)
      assert.deepStrictEqual(category.label.toJSON(), JSON.label)
      assert.ok(category.is_valid())
      assert.deepStrictEqual(category.toJSON(), JSON)
    )
  )
)
