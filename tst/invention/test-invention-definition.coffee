assert = require('assert')

STARPEACE = require('../../lib')

describe('STARPEACE.seal.InventionDefinition', ->
  describe('require', ->
    it('should be able to load from global', ->
      assert.ok(STARPEACE)
      assert.ok(STARPEACE.invention)
      assert.ok(STARPEACE.invention.InventionDefinition)
    )
  )
  describe('#from_json', ->
    it('should be able to create from json', ->
      JSON = {
        id: 'id'
        category: 'category'
        industry_type: 'industry'
        name: {
          DE: 'de name'
          EN: 'en name'
          ES: 'es name'
          FR: 'fr name'
          IT: 'it name'
          PT: 'pt name'
        }
        description: {
          DE: 'de description'
          EN: 'en description'
          ES: 'es description'
          FR: 'fr description'
          IT: 'it description'
          PT: 'pt description'
        }
        depends_on: ['id1', 'id2']
        properties: {

        }
      }

      invention = STARPEACE.invention.InventionDefinition.from_json(JSON)
      assert.ok(invention)
      assert.strictEqual(invention.id, 'id')
      assert.strictEqual(invention.category, 'category')
      assert.strictEqual(invention.industry_type, 'industry')
      assert.strictEqual(invention.name.german, JSON.name.DE)
      assert.strictEqual(invention.name.english, JSON.name.EN)
      assert.strictEqual(invention.name.spanish, JSON.name.ES)
      assert.strictEqual(invention.name.french, JSON.name.FR)
      assert.strictEqual(invention.name.italian, JSON.name.IT)
      assert.strictEqual(invention.name.portuguese, JSON.name.PT)
      assert.deepStrictEqual(invention.depends_on, ['id1', 'id2'])
      assert.ok(invention.is_valid())
    )
  )
)
