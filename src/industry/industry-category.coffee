_ = require('lodash')

Translation = require('../language/translation')

###*
# @typedef {object} STARPEACE.industry.IndustryCategory~JSON
# @property {string} id - unique identifier of industry category
# @property {STARPEACE.language.Translation~JSON} label - translation object with label of industry
###

###*
# Class representing an industry category
# @memberof STARPEACE.industry
#
# @property {string} id - unique identifier of industry category
# @property {STARPEACE.language.Translation} label - translation with label of industry
###
exports = module.exports = class IndustryCategory

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
  # @return {STARPEACE.industry.IndustryCategory~JSON} JSON representation of IndustryCategory
  ###
  toJson: () ->
    {
      id: @id
      label: @label?.toJson()
    }

  ###*
  # Parse raw JSON into a IndustryCategory object
  # @params {STARPEACE.industry.IndustryCategory~JSON} json - raw JSON object to parse into IndustryCategory
  # @return {STARPEACE.industry.IndustryCategory} IndustryCategory representation of parsed JSON
  ###
  @fromJson = (json) ->
    category = new IndustryCategory()
    category.id = json.id
    category.label = Translation.fromJson(json.label)
    category
