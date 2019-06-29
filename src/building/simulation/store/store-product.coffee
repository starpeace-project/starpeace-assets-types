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
class StoreProduct

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.simulation.store.StoreProduct~JSON} JSON representation of StoreProduct
  ###
  toJSON: () ->
    {
      inputs: _.map(@inputs, (i) -> i.toJSON())
      outputs: _.map(@outputs, (o) -> o.toJSON())
    }

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  is_valid: () ->
    return false unless Array.isArray(@inputs) && (!@inputs.length || _.every(@inputs, (i) -> i.is_valid()))
    return false unless Array.isArray(@outputs) && (!@outputs.length || _.every(@outputs, (o) -> o.is_valid()))
    true

  ###*
  # Parse raw JSON into a StoreProduct object
  # @param {STARPEACE.building.simulation.store.StoreProduct~JSON} json - raw JSON object to parse into StoreProduct
  # @return {STARPEACE.building.simulation.store.StoreProduct} StoreProduct representation of parsed JSON
  ###
  @from_json: (json) ->
    stage = new StoreProduct()
    stage.inputs = _.map(json.inputs, ResourceQuantity.from_json)
    stage.outputs = _.map(json.outputs, StoreProductOutput.from_json)
    stage

exports = module.exports = StoreProduct
