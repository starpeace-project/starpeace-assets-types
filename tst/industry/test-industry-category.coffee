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
      assert.strictEqual(category.label.german, JSON.label.DE)
      assert.strictEqual(category.label.english, JSON.label.EN)
      assert.strictEqual(category.label.spanish, JSON.label.ES)
      assert.strictEqual(category.label.french, JSON.label.FR)
      assert.strictEqual(category.label.italian, JSON.label.IT)
      assert.strictEqual(category.label.portuguese, JSON.label.PT)
      assert.ok(category.is_valid())
      assert.deepStrictEqual(category.toJSON(), JSON)
    )
  )
)
