assert = require('assert')

STARPEACE = require('../../lib')

describe('STARPEACE.industry.Level', ->
  describe('require', ->
    it('should be able to load from global', ->
      assert.ok(STARPEACE)
      assert.ok(STARPEACE.industry)
      assert.ok(STARPEACE.industry.Level)
    )
  )
  describe('#from_json', ->
    it('should be able to create from json', ->
      JSON = {
        id: 'ENTREPRENEUR'
        label: {
          DE: "Unternehmer"
          EN: "Entrepreneur"
          ES: "Empresario"
          FR: "Entrepreneur"
          IT: "Imprenditore"
          PT: "Empreendedor"
        }
        level: 2
      }

      level = STARPEACE.industry.Level.from_json(JSON)
      assert.ok(level)
      assert.strictEqual(level.id, JSON.id)
      assert.deepStrictEqual(level.label.toJSON(), JSON.label)
      assert.strictEqual(level.level, JSON.level)
      assert.ok(level.is_valid())
      assert.deepStrictEqual(level.toJSON(), JSON)
    )
  )
)
