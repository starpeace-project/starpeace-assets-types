_ = require('lodash')

ResourceQuantity = require('../../../industry/resource-quantity')
StoreProductOutput = require('./store-product-output')

###*
# @typedef {object} STARPEACE.building.simulation.store.StoreProduct~JSON
# @property {STARPEACE.industry.ResourceQuantity~JSON[]} inputs - array of input resource quantities
# @property {STARPEACE.building.simulation.store.StoreProductOutput~JSON[]} outputs - array of output resource quantities
###

###*
# Class representing store building simulation product outputs
# @memberof STARPEACE.building.simulation.store
#
# @property {STARPEACE.industry.ResourceQuantity[]} inputs - array of input resource quantities
# @property {STARPEACE.building.simulation.store.StoreProductOutput[]} outputs - array of output resource quantities
###
exports = module.exports = class StoreProduct

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  isValid: () ->
    return false unless Array.isArray(@inputs) && (!@inputs.length || _.every(@inputs, (i) -> i.isValid()))
    return false unless Array.isArray(@outputs) && (!@outputs.length || _.every(@outputs, (o) -> o.isValid()))
    true

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.simulation.store.StoreProduct~JSON} JSON representation of StoreProduct
  ###
  toJson: () ->
    {
      inputs: _.map(@inputs, (i) -> i.toJson())
      outputs: _.map(@outputs, (o) -> o.toJson())
    }

  ###*
  # Parse raw JSON into a StoreProduct object
  # @param {STARPEACE.building.simulation.store.StoreProduct~JSON} json - raw JSON object to parse into StoreProduct
  # @return {STARPEACE.building.simulation.store.StoreProduct} StoreProduct representation of parsed JSON
  ###
  @fromJson: (json) ->
    stage = new StoreProduct()
    stage.inputs = _.map(json.inputs, ResourceQuantity.fromJson)
    stage.outputs = _.map(json.outputs, StoreProductOutput.fromJson)
    stage
