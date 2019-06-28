_ = require('lodash')

###*
# @typedef {object} STARPEACE.industry.ResourceQuantity~JSON
# @property {string} resource - identifier of resource
# @property {number} max_velocity - maximum quantity of resource per day
# @property {number} weight_efficiency - importance weight of efficiency on this quantity
# @property {number} weight_quality - importance weight of qualityy on this quantity
###

###*
# Class representing a resource quantity and metadata
# @memberof STARPEACE.industry
#
# @property {string} resource_id - identifier of resource
# @property {number} max_velocity - maximum quantity of resource per day
# @property {number} weight_efficiency - importance weight of efficiency on this quantity
# @property {number} weight_quality - importance weight of qualityy on this quantity
###
class ResourceQuantity

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.industry.ResourceQuantity~JSON} JSON representation of ResourceQuantity
  ###
  toJSON: () ->
    {
      resource: @resource_id
      max_velocity: @max_velocity
      weight_efficiency: @weight_efficiency
      weight_quality: @weight_quality
    }

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  is_valid: () ->
    return false unless _.isString(@resource_id) && @resource_id.length > 0
    return false unless _.isNumber(@max_velocity) && @max_velocity > 0
    return false unless _.isNumber(@weight_efficiency) && @weight_efficiency >= 0
    return false unless _.isNumber(@weight_quality) && @weight_quality >= 0
    true

  ###*
  # Parse raw JSON into a ResourceQuantity object
  # @params {STARPEACE.industry.ResourceQuantity~JSON} json - raw JSON object to parse into ResourceQuantity
  # @return {STARPEACE.industry.ResourceQuantity} ResourceQuantity representation of parsed JSON
  ###
  @from_json = (json) ->
    quantity = new ResourceQuantity()
    quantity.resource_id = json.resource
    quantity.max_velocity = json.max_velocity
    quantity.weight_efficiency = if json.weight_efficiency? then json.weight_efficiency else 0
    quantity.weight_quality = if json.weight_quality? then json.weight_quality else 0
    quantity

exports = module.exports = ResourceQuantity
