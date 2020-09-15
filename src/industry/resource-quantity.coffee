_ = require('lodash')

###*
# @typedef {object} STARPEACE.industry.ResourceQuantity~JSON
# @property {string} resourceId - identifier of resource
# @property {number} maxVelocity - maximum quantity of resource per hour
# @property {number} weightEfficiency - importance weight of efficiency on this quantity
# @property {number} weightQuality - importance weight of quality on this quantity
###

###*
# Class representing a resource quantity and metadata
# @memberof STARPEACE.industry
#
# @property {string} resourceId - identifier of resource
# @property {number} maxVelocity - maximum quantity of resource per hour
# @property {number} weightEfficiency - importance weight of efficiency on this quantity
# @property {number} weightQuality - importance weight of qualityy on this quantity
###
exports = module.exports = class ResourceQuantity

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  isValid: () ->
    return false unless _.isString(@resourceId) && @resourceId.length > 0
    return false unless _.isNumber(@maxVelocity) && @maxVelocity > 0
    return false unless _.isNumber(@weightEfficiency) && @weightEfficiency >= 0
    return false unless _.isNumber(@weightQuality) && @weightQuality >= 0
    true

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.industry.ResourceQuantity~JSON} JSON representation of ResourceQuantity
  ###
  toJson: () ->
    {
      resourceId: @resourceId
      maxVelocity: @maxVelocity
      weightEfficiency: @weightEfficiency
      weightQuality: @weightQuality
    }

  ###*
  # Parse raw JSON into a ResourceQuantity object
  # @params {STARPEACE.industry.ResourceQuantity~JSON} json - raw JSON object to parse into ResourceQuantity
  # @return {STARPEACE.industry.ResourceQuantity} ResourceQuantity representation of parsed JSON
  ###
  @fromJson = (json) ->
    quantity = new ResourceQuantity()
    quantity.resourceId = json.resourceId
    quantity.maxVelocity = json.maxVelocity
    quantity.weightEfficiency = if json.weightEfficiency? then json.weightEfficiency else 0
    quantity.weightQuality = if json.weightQuality? then json.weightQuality else 0
    quantity
