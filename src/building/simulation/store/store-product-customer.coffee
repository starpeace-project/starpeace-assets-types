_ = require('lodash')

ResourceQuantity = require('../../../industry/resource-quantity')

###*
# @typedef {object} STARPEACE.building.simulation.store.StoreProductCustomer~JSON
# @property {string} resourceId - identifier of resource type of customer
# @property {number} maxVelocity - maximum amount of resource that can be bought by customers per hour
# @property {number} probability - base probability customers will purchase products per hour
###

###*
# Class representing store building customer metadata
# @memberof STARPEACE.building.simulation.store
#
# @property {string} resourceId - identifier of resource type of customer
# @property {number} maxVelocity - maximum amount of resource that can be bought by customers per hour
# @property {number} probability - base probability customers will purchase products per hour
###
exports = module.exports = class StoreProductCustomer

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  isValid: () ->
    return false unless _.isString(@resourceId) && @resourceId.length > 0
    return false unless _.isNumber(@maxVelocity) && @maxVelocity > 0
    return false unless _.isNumber(@probability) && @probability > 0 && @probability <= 1.0
    true

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.simulation.store.StoreProductCustomer~JSON} JSON representation of StoreProductCustomer
  ###
  toJson: () ->
    {
      resourceId: @resourceId
      maxVelocity: @maxVelocity
      probability: @probability
    }

  ###*
  # Parse raw JSON into a StoreProductCustomer object
  # @param {STARPEACE.building.simulation.store.StoreProductCustomer~JSON} json - raw JSON object to parse into StoreProductCustomer
  # @return {STARPEACE.building.simulation.store.StoreProductCustomer} StoreProductCustomer representation of parsed JSON
  ###
  @fromJson: (json) ->
    customer = new StoreProductCustomer()
    customer.resourceId = json.resourceId
    customer.maxVelocity = json.maxVelocity
    customer.probability = json.probability
    customer
