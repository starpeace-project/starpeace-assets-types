_ = require('lodash')


###*
# @typedef {object} STARPEACE.building.simulation.storage.StorageQuantity~JSON
# @property {string} resourceId - identifier of resource type of storage
# @property {number} max - maximum amount of resource that can be stored
###

###*
# Class representing a storage quantity of a resource
# @memberof STARPEACE.building.simulation.storage
#
# @property {string} resourceId - identifier of resource type of storage
# @property {number} max - maximum amount of resource that can be stored
###
exports = module.exports = class StorageQuantity

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  isValid: () ->
    return false unless _.isString(@resourceId) && @resourceId.length > 0
    return false unless _.isNumber(@max) && @max > 0
    true

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.simulation.storage.StorageQuantity~JSON} JSON representation of StorageQuantity
  ###
  toJson: () ->
    {
      resourceId: @resourceId
      max: @max
    }

  ###*
  # Parse raw JSON into a StorageQuantity object
  # @param {STARPEACE.building.simulation.storage.StorageQuantity~JSON} json - raw JSON object to parse into StorageQuantity
  # @return {STARPEACE.building.simulation.storage.StorageQuantity} StorageQuantity representation of parsed JSON
  ###
  @fromJson: (json) ->
    output = new StorageQuantity()
    output.resourceId = json.resourceId
    output.max = json.max
    output
