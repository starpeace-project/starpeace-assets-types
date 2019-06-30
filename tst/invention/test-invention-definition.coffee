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
      assert.strictEqual(invention.category_id, 'category')
      assert.strictEqual(invention.industry_type_id, 'industry')
      assert.deepStrictEqual(invention.name.toJSON(), JSON.name)
      assert.deepStrictEqual(invention.depends_on_ids, ['id1', 'id2'])
      assert.ok(invention.is_valid())
      assert.deepStrictEqual(invention.toJSON(), JSON)
    )
  )
)
