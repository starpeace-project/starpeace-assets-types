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
exports = module.exports = class StoreDefinition extends SimulationDefinition
  ###*
  # Type identifier for simulation definition
  # @static
  ###
  @TYPE: () -> 'STORE'

  ###*
  # Create a StoreDefinition object
  # @param {STARPEACE.building.simulation.SimulationDefinition~JSON} json - raw JSON object to populate into simulation definition
  ###
  constructor: (json) ->
    super(json)

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  isValid: () ->
    return false unless super.isValid()
    return false unless Array.isArray(@labor) && @labor?.length > 0 && _.every(@labor, (l) -> l.isValid())
    return false unless Array.isArray(@operations) && (!@operations.length || _.every(@operations, (o) -> o.isValid()))
    return false unless Array.isArray(@products) && @products?.length > 0 && _.every(@products, (p) -> p.isValid())
    true

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.simulation.store.StoreDefinition~JSON} JSON representation of StoreDefinition
  ###
  toJson: () ->
    _.assign(super.toJson(), {
      labor: _.map(@labor, (l) -> l.toJson())
      operations: _.map(@operations, (o) -> o.toJson())
      products: _.map(@products, (p) -> p.toJson())
    })

  ###*
  # Parse raw JSON into a StoreDefinition object
  # @param {STARPEACE.building.simulation.store.StoreDefinition~JSON} json - raw JSON object to parse into StoreDefinition
  # @return {STARPEACE.building.simulation.store.StoreDefinition} StoreDefinition representation of parsed JSON
  ###
  @fromJson: (json) ->
    definition = new StoreDefinition(json)
    definition.labor = _.map(json.labor, ResourceQuantity.fromJson)
    definition.operations = _.map(json.operations, ResourceQuantity.fromJson)
    definition.products = _.map(json.products, StoreProduct.fromJson)
    definition
