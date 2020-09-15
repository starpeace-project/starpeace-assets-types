_ = require('lodash')

StoreProductCustomer = require('./store-product-customer')

###*
# @typedef {object} STARPEACE.building.simulation.store.StoreProductOutput~JSON
# @property {string} resourceId - identifier of resource type of output
# @property {number} maxVelocity - maximum amount of resource that can be sold per hour
# @property {STARPEACE.building.simulation.store.StoreProductCustomer~JSON[]} customers - array of store customer metadata
###

###*
# Class representing store building product output
# @memberof STARPEACE.building.simulation.store
#
# @property {string} resourceId - identifier of resource type of output
# @property {number} maxVelocity - maximum amount of resource that can be sold per hour
# @property {STARPEACE.building.simulation.store.StoreProductCustomer[]} customers - array of store customer metadata
###
exports = module.exports = class StoreProductOutput

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.simulation.store.StoreProductOutput~JSON} JSON representation of StoreProductOutput
  ###
  toJson: () ->
    {
      resourceId: @resourceId
      maxVelocity: @maxVelocity
      customers: _.map(@customers, (c) -> c.toJson())
    }

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  isValid: () ->
    return false unless _.isString(@resourceId) && @resourceId.length > 0
    return false unless _.isNumber(@maxVelocity) && @maxVelocity > 0
    return false unless Array.isArray(@customers) && (!@customers.length || _.every(@customers, (c) -> c.isValid()))
    true

  ###*
  # Parse raw JSON into a StoreProductOutput object
  # @param {STARPEACE.building.simulation.store.StoreProductOutput~JSON} json - raw JSON object to parse into StoreProductOutput
  # @return {STARPEACE.building.simulation.store.StoreProductOutput} StoreProductOutput representation of parsed JSON
  ###
  @fromJson: (json) ->
    output = new StoreProductOutput()
    output.resourceId = json.resourceId
    output.maxVelocity = json.maxVelocity
    output.customers = _.map(json.customers, StoreProductCustomer.fromJson)
    output
