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
# @property {STARPEACE.language.Translation} label_plural Translation with plural label of unit
###
class ResourceUnit

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.industry.ResourceUnit~JSON} JSON representation of ResourceUnit
  ###
  toJSON: () ->
    {
      id: @id
      labelPlural: @label_plural.toJSON()
    }

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  is_valid: () ->
    return false unless _.isString(@id) && @id.length > 0
    return false unless @label_plural?.is_valid()
    true

  ###*
  # Parse raw JSON into a ResourceUnit object
  # @params {STARPEACE.industry.ResourceUnit~JSON} json - raw JSON object to parse into ResourceUnit
  # @return {STARPEACE.industry.ResourceUnit} ResourceUnit representation of parsed JSON
  ###
  @from_json = (json) ->
    unit = new ResourceUnit()
    unit.id = json.id
    unit.label_plural = Translation.from_json(json.labelPlural)
    unit

exports = module.exports = ResourceUnit
