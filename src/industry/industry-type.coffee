_ = require('lodash')

Translation = require('../language/translation')

###*
# @typedef {object} STARPEACE.industry.IndustryType~JSON
# @property {string} id - unique identifier of industry type
# @property {STARPEACE.language.Translation~JSON} label - translation object with label of industry
###

###*
# Class representing an industry type
# @memberof STARPEACE.industry
#
# @property {string} id - unique identifier of industry type
# @property {STARPEACE.language.Translation} label - translation with label of industry
###
exports = module.exports = class IndustryType

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  isValid: () ->
    return false unless _.isString(@id) && @id.length > 0
    return false unless @label?.isValid()
    true

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.industry.IndustryType~JSON} JSON representation of IndustryType
  ###
  toJson: () ->
    {
      id: @id
      label: @label?.toJson()
    }

  ###*
  # Parse raw JSON into a IndustryType object
  # @params {STARPEACE.industry.IndustryType~JSON} json - raw JSON object to parse into IndustryType
  # @return {STARPEACE.industry.IndustryType} Level representation of parsed JSON
  ###
  @fromJson = (json) ->
    type = new IndustryType()
    type.id = json.id
    type.label = Translation.fromJson(json.label)
    type
