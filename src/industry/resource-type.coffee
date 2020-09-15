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
# @property {STARPEACE.language.Translation} labelPlural - Translation with plural label of resource
# @property {string} unitId - Unique identifier of resource unit for this resource
# @property {number} price - Base price of this resource in dollars
###
exports = module.exports = class ResourceType

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  isValid: () ->
    return false unless _.isString(@id) && @id.length > 0
    return false unless @labelPlural?.isValid()
    return false unless _.isString(@unitId) && @unitId.length > 0
    return false unless _.isNumber(@price) && @price >= 0
    true

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.industry.ResourceType~JSON} JSON representation of ResourceType
  ###
  toJson: () ->
    {
      id: @id
      labelPlural: @labelPlural?.toJson()
      unitId: @unitId
      price: @price
    }

  ###*
  # Parse raw JSON into a ResourceType object
  # @params {STARPEACE.industry.ResourceType~JSON} json - raw JSON object to parse into ResourceType
  # @return {STARPEACE.industry.ResourceType} ResourceType representation of parsed JSON
  ###
  @fromJson = (json) ->
    type = new ResourceType()
    type.id = json.id
    type.labelPlural = Translation.fromJson(json.labelPlural)
    type.unitId = json.unitId
    type.price = json.price
    type
