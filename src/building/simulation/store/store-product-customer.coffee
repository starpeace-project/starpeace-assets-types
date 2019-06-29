_ = require('lodash')

ResourceQuantity = require('../../../industry/resource-quantity')

###*
# @typedef {object} STARPEACE.building.simulation.store.StoreProductCustomer~JSON
# @property {string} resource_id - identifier of resource type of customer
# @property {number} max_velocity - maximum amount of resource that can be bought by customers per hour
# @property {number} probability - base probability customers will purchase products per hour
###

###*
# Class representing store building customer metadata
# @memberof STARPEACE.building.simulation.store
#
# @property {string} resource_id - identifier of resource type of customer
# @property {number} max_velocity - maximum amount of resource that can be bought by customers per hour
# @property {number} probability - base probability customers will purchase products per hour
###
class StoreProductCustomer

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.simulation.store.StoreProductCustomer~JSON} JSON representation of StoreProductCustomer
  ###
  toJSON: () ->
    {
      resource: @resource_id
      max_velocity: @max_velocity
      probability: @probability
    }

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  is_valid: () ->
    return false unless _.isString(@resource_id) && @resource_id.length > 0
    return false unless _.isNumber(@max_velocity) && @max_velocity > 0
    return false unless _.isNumber(@probability) && @probability > 0 && @probability <= 1.0
    true

  ###*
  # Parse raw JSON into a StoreProductCustomer object
  # @param {STARPEACE.building.simulation.store.StoreProductCustomer~JSON} json - raw JSON object to parse into StoreProductCustomer
  # @return {STARPEACE.building.simulation.store.StoreProductCustomer} StoreProductCustomer representation of parsed JSON
  ###
  @from_json: (json) ->
    customer = new StoreProductCustomer()
    customer.resource_id = json.resource
    customer.max_velocity = json.max_velocity
    customer.probability = json.probability
    customer

exports = module.exports = StoreProductCustomer
