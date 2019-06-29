_ = require('lodash')

StoreProductCustomer = require('./store-product-customer')

###*
# @typedef {object} STARPEACE.building.simulation.store.StoreProductOutput~JSON
# @property {string} resource_id - identifier of resource type of output
# @property {number} max_velocity - maximum amount of resource that can be sold per hour
# @property {STARPEACE.building.simulation.store.StoreProductCustomer~JSON[]} customers - array of store customer metadata
###

###*
# Class representing store building product output
# @memberof STARPEACE.building.simulation.store
#
# @property {string} resource_id - identifier of resource type of output
# @property {number} max_velocity - maximum amount of resource that can be sold per hour
# @property {STARPEACE.building.simulation.store.StoreProductCustomer[]} customers - array of store customer metadata
###
class StoreProductOutput

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.simulation.store.StoreProductOutput~JSON} JSON representation of StoreProductOutput
  ###
  toJSON: () ->
    {
      resource: @resource_id
      max_velocity: @max_velocity
      customers: _.map(@customers, (c) -> c.toJSON())
    }

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  is_valid: () ->
    return false unless _.isString(@resource_id) && @resource_id.length > 0
    return false unless _.isNumber(@max_velocity) && @max_velocity > 0
    return false unless Array.isArray(@customers) && (!@customers.length || _.every(@customers, (c) -> c.is_valid()))
    true

  ###*
  # Parse raw JSON into a StoreProductOutput object
  # @param {STARPEACE.building.simulation.store.StoreProductOutput~JSON} json - raw JSON object to parse into StoreProductOutput
  # @return {STARPEACE.building.simulation.store.StoreProductOutput} StoreProductOutput representation of parsed JSON
  ###
  @from_json: (json) ->
    output = new StoreProductOutput()
    output.resource_id = json.resource
    output.max_velocity = json.max_velocity
    output.customers = _.map(json.customers, StoreProductCustomer.from_json)
    output

exports = module.exports = StoreProductOutput
