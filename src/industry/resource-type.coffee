_ = require('lodash')

Translation = require('../language/translation')

###*
# @typedef {object} STARPEACE.industry.ResourceType~JSON
# @property {string} id - unique identifier of resource
# @property {object} label_plural - translation object with plural label of resource
# @property {string} unit_id - identifier of resource unit for this resource
# @property {number} price - base price of this resource in dollars
###

###*
# Class representing resource type metadata
# @memberof STARPEACE.industry
#
# @property {string} id - Unique identifier of resource
# @property {STARPEACE.invention.Translation} label_plural - Translation with plural label of resource
# @property {string} unit_id - Unique identifier of resource unit for this resource
# @property {number} price - Base price of this resource in dollars
###
class ResourceType

  ###*
  # Retrieve JSON representation of object
  # @return {ResourceType~JSON} JSON representation of ResourceType
  ###
  toJSON: () ->
    {
      id: @id
      label_plural: @label_plural.toJSON()
      unit_id: @unit_id
      price: @price
    }

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  is_valid: () ->
    return false unless _.isString(@id) && @id.length > 0
    return false unless @label_plural?.is_valid()
    return false unless _.isString(@unit_id) && @unit_id.length > 0
    return false unless _.isNumber(@price) && @price >= 0
    true

  ###*
  # Parse raw JSON into a ResourceType object
  # @params {ResourceType~JSON} json - raw JSON object to parse into ResourceType
  # @return {ResourceType} ResourceType representation of parsed JSON
  ###
  @from_json = (json) ->
    type = new ResourceType()
    type.id = json.id
    type.label_plural = Translation.from_json(json.label_plural)
    type.unit_id = json.unit_id
    type.price = json.price
    type

exports = module.exports = ResourceType
