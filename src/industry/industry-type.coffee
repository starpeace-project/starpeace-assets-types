_ = require('lodash')

Translation = require('../language/translation')

###*
# @typedef {object} STARPEACE.industry.IndustryType~JSON
# @property {string} id - unique identifier of industry type
# @property {object} label - translation object with label of industry
###

###*
# Class representing an industry type
# @memberof STARPEACE.industry
#
# @property {string} id - unique identifier of industry type
# @property {STARPEACE.invention.Translation} label - translation with label of industry
###
class IndustryType

  ###*
  # Retrieve JSON representation of object
  # @return {IndustryType~JSON} JSON representation of IndustryType
  ###
  toJSON: () ->
    {
      id: @id
      label: @label.toJSON()
    }

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  is_valid: () ->
    return false unless _.isString(@id) && @id.length > 0
    return false unless @label?.is_valid()
    true

  ###*
  # Parse raw JSON into a IndustryType object
  # @params {IndustryType~JSON} json - raw JSON object to parse into IndustryType
  # @return {IndustryType} Level representation of parsed JSON
  ###
  @from_json = (json) ->
    type = new IndustryType()
    type.id = json.id
    type.label = Translation.from_json(json.label)
    type

exports = module.exports = IndustryType
