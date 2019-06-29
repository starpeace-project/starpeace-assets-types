_ = require('lodash')

###*
# @typedef {object} STARPEACE.building.simulation.ConstructionQuantity~JSON
# @property {string} resource - identifier of resource type required
# @property {number} quantity - total amount of resource required
# @property {number} max_velocity - maximum amount of resource that can be used for construction per hour
###

###*
# Class representing building construction quantities
# @memberof STARPEACE.building.simulation
#
# @property {string} resource_id - identifier of resource type required
# @property {number} quantity - total amount of resource required
# @property {number} max_velocity - maximum amount of resource that can be used for construction per hour
###
class ConstructionQuantity

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.simulation.ConstructionQuantity~JSON} JSON representation of ConstructionQuantity
  ###
  toJSON: () ->
    {
      resource: @resource_id
      quantity: @quantity
      max_velocity: @max_velocity
    }

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  is_valid: () ->
    return false unless _.isString(@resource_id) && @resource_id.length > 0
    return false unless _.isNumber(@quantity) && @quantity > 0
    return false unless _.isNumber(@max_velocity) && @max_velocity > 0
    true

  ###*
  # Parse raw JSON into a ConstructionQuantity object
  # @param {STARPEACE.building.simulation.ConstructionQuantity~JSON} json - raw JSON object to parse into ConstructionQuantity
  # @return {STARPEACE.building.simulation.ConstructionQuantity} ConstructionQuantity representation of parsed JSON
  ###
  @from_json: (json) ->
    quantity = new ConstructionQuantity()
    quantity.resource_id = json.resource
    quantity.quantity = json.quantity
    quantity.max_velocity = json.max_velocity
    quantity

exports = module.exports = ConstructionQuantity
