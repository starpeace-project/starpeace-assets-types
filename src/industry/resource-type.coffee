_ = require('lodash')

Translation = require('../language/translation')

###*
# @typedef {object} STARPEACE.industry.ResourceType~JSON
# @property {string} id - unique identifier of resource
# @property {STARPEACE.language.Translation~JSON} labelPlural - translation object with plural label of resource
# @property {string} unitId - identifier of resource unit for this resource
# @property {number} price - base price of this resource in dollars
###

###*
# Class representing resource type metadata
# @memberof STARPEACE.industry
#
# @property {string} id - Unique identifier of resource
# @property {STARPEACE.language.Translation} label_plural - Translation with plural label of resource
# @property {string} unit_id - Unique identifier of resource unit for this resource
# @property {number} price - Base price of this resource in dollars
###
class ResourceType

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.industry.ResourceType~JSON} JSON representation of ResourceType
  ###
  toJSON: () ->
    {
      id: @id
      labelPlural: @label_plural.toJSON()
      unitId: @unit_id
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
  # @params {STARPEACE.industry.ResourceType~JSON} json - raw JSON object to parse into ResourceType
  # @return {STARPEACE.industry.ResourceType} ResourceType representation of parsed JSON
  ###
  @from_json = (json) ->
    type = new ResourceType()
    type.id = json.id
    type.label_plural = Translation.from_json(json.labelPlural)
    type.unit_id = json.unitId
    type.price = json.price
    type

exports = module.exports = ResourceType
