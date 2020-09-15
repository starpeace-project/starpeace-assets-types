_ = require('lodash')

Translation = require('../language/translation')

###*
# @typedef {object} STARPEACE.industry.ResourceUnit~JSON
# @property {string} id - identifier of resource unit
# @property {STARPEACE.language.Translation~JSON} labelPlural - translation object with plural label of unit
###

###*
# Class representing the unit of quantities of a resource
# @memberof STARPEACE.industry
#
# @property {string} id Unique identifier of resource unit
# @property {STARPEACE.language.Translation} labelPlural Translation with plural label of unit
###
exports = module.exports = class ResourceUnit

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  isValid: () ->
    return false unless _.isString(@id) && @id.length > 0
    return false unless @labelPlural?.isValid()
    true

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.industry.ResourceUnit~JSON} JSON representation of ResourceUnit
  ###
  toJson: () ->
    {
      id: @id
      labelPlural: @labelPlural?.toJson()
    }

  ###*
  # Parse raw JSON into a ResourceUnit object
  # @params {STARPEACE.industry.ResourceUnit~JSON} json - raw JSON object to parse into ResourceUnit
  # @return {STARPEACE.industry.ResourceUnit} ResourceUnit representation of parsed JSON
  ###
  @fromJson = (json) ->
    unit = new ResourceUnit()
    unit.id = json.id
    unit.labelPlural = Translation.fromJson(json.labelPlural)
    unit
