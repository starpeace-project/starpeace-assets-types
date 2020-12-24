_ = require('lodash')
assert = require('assert')

STARPEACE = require('../../lib')

describe('STARPEACE.concrete.ConcreteDefinition', ->
  describe('require', ->
    it('should be able to load from global', ->
      assert.ok(STARPEACE)
      assert.ok(STARPEACE.concrete)
      assert.ok(STARPEACE.concrete.ConcreteDefinition)
    )
  )
  describe('#fromJson', ->
    it('should be able to create from json', ->
      JSON = {
        id: 'id'
        image: 'image.gif'
      }

      concrete = STARPEACE.concrete.ConcreteDefinition.fromJson(JSON)
      assert.ok(concrete)
      assert.strictEqual(concrete.id, JSON.id)
      assert.strictEqual(concrete.image, JSON.image)
      assert.ok(concrete.isValid())
      assert.deepStrictEqual(concrete.toJson(), JSON)
    )
  )
)
