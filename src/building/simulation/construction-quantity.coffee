_ = require('lodash')

###*
# @typedef {object} STARPEACE.building.simulation.ConstructionQuantity~JSON
# @property {string} resourceId - identifier of resource type required
# @property {number} quantity - total amount of resource required
# @property {number} maxVelocity - maximum amount of resource that can be used for construction per hour
###

###*
# Class representing building construction quantities
# @memberof STARPEACE.building.simulation
#
# @property {string} resourceId - identifier of resource type required
# @property {number} quantity - total amount of resource required
# @property {number} maxVelocity - maximum amount of resource that can be used for construction per hour
###
exports = module.exports = class ConstructionQuantity

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  isValid: () ->
    return false unless _.isString(@resourceId) && @resourceId.length > 0
    return false unless _.isNumber(@quantity) && @quantity > 0
    return false unless _.isNumber(@maxVelocity) && @maxVelocity > 0
    true

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.simulation.ConstructionQuantity~JSON} JSON representation of ConstructionQuantity
  ###
  toJson: () ->
    {
      resourceId: @resourceId
      quantity: @quantity
      maxVelocity: @maxVelocity
    }

  ###*
  # Parse raw JSON into a ConstructionQuantity object
  # @param {STARPEACE.building.simulation.ConstructionQuantity~JSON} json - raw JSON object to parse into ConstructionQuantity
  # @return {STARPEACE.building.simulation.ConstructionQuantity} ConstructionQuantity representation of parsed JSON
  ###
  @fromJson: (json) ->
    quantity = new ConstructionQuantity()
    quantity.resourceId = json.resourceId
    quantity.quantity = json.quantity
    quantity.maxVelocity = json.maxVelocity
    quantity
