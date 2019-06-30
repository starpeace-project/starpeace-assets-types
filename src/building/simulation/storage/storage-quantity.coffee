_ = require('lodash')


###*
# @typedef {object} STARPEACE.building.simulation.storage.StorageQuantity~JSON
# @property {string} resource_id - identifier of resource type of storage
# @property {number} max - maximum amount of resource that can be stored
###

###*
# Class representing a storage quantity of a resource
# @memberof STARPEACE.building.simulation.storage
#
# @property {string} resource_id - identifier of resource type of storage
# @property {number} max - maximum amount of resource that can be stored
###
class StorageQuantity

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.simulation.storage.StorageQuantity~JSON} JSON representation of StorageQuantity
  ###
  toJSON: () ->
    {
      resource: @resource_id
      max: @max
    }

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  is_valid: () ->
    return false unless _.isString(@resource_id) && @resource_id.length > 0
    return false unless _.isNumber(@max) && @max > 0
    true

  ###*
  # Parse raw JSON into a StorageQuantity object
  # @param {STARPEACE.building.simulation.storage.StorageQuantity~JSON} json - raw JSON object to parse into StorageQuantity
  # @return {STARPEACE.building.simulation.storage.StorageQuantity} StorageQuantity representation of parsed JSON
  ###
  @from_json: (json) ->
    output = new StorageQuantity()
    output.resource_id = json.resource
    output.max = json.max
    output

exports = module.exports = StorageQuantity
