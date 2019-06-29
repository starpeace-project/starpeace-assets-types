_ = require('lodash')

SimulationDefinition = require('../simulation-definition')
ResourceQuantity = require('../../../industry/resource-quantity')

StoreProduct = require('./store-product')

###*
# @typedef {object} STARPEACE.building.simulation.store.StoreDefinition~JSON
# @extends STARPEACE.building.simulation.SimulationDefinition~JSON
# @property {STARPEACE.industry.ResourceQuantity~JSON[]} labor - labor requirements for building
# @property {STARPEACE.industry.ResourceQuantity~JSON[]} operations - array of resource quantities required for building operations
# @property {STARPEACE.building.simulation.store.StoreProduct~JSON[]} products - array of output resource products sold by building
###

###*
# Class representing store building simulation definition
# @memberof STARPEACE.building.simulation.store
# @extends STARPEACE.building.simulation.SimulationDefinition
#
# @property {STARPEACE.industry.ResourceQuantity[]} labor - labor requirements for building
# @property {STARPEACE.industry.ResourceQuantity[]} operations - array of resource quantities required for building operations
# @property {STARPEACE.building.simulation.store.StoreProduct[]} products - array of output resource products sold by building
###
class StoreDefinition extends SimulationDefinition
  ###*
  # Type identifier for simulation definition
  # @static
  ###
  @TYPE: () -> 'STORE'

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.simulation.store.StoreDefinition~JSON} JSON representation of StoreDefinition
  ###
  toJSON: () ->
    _.assign(super.toJSON(), {
      labor: _.map(@labor, (l) -> l.toJSON())
      operations: _.map(@operations, (o) -> o.toJSON())
      products: _.map(@products, (p) -> p.toJSON())
    })

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  is_valid: () ->
    return false unless super.is_valid()
    return false unless Array.isArray(@labor) && @labor?.length > 0
    return false if _.find(@labor, (item) -> !item.is_valid())?
    return false unless Array.isArray(@operations)
    return false if @operations.length && _.find(@operations, (item) -> !item.is_valid())?
    return false unless Array.isArray(@products) && @products?.length > 0
    return false if _.find(@products, (item) -> !item.is_valid())?
    true

  ###*
  # Parse raw JSON into a StoreDefinition object
  # @param {STARPEACE.building.simulation.store.StoreDefinition~JSON} json - raw JSON object to parse into StoreDefinition
  # @return {STARPEACE.building.simulation.store.StoreDefinition} StoreDefinition representation of parsed JSON
  ###
  @from_json: (json) ->
    definition = new StoreDefinition(json)
    definition.labor = _.map(json.labor, ResourceQuantity.from_json)
    definition.operations = _.map(json.operations, ResourceQuantity.from_json)
    definition.products = _.map(json.products, StoreProduct.from_json)
    definition

exports = module.exports = StoreDefinition
