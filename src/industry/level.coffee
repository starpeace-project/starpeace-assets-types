_ = require('lodash')

Translation = require('../language/translation')

###*
# @typedef {object} STARPEACE.industry.Level~JSON
# @property {string} id - unique identifier of level
# @property {STARPEACE.language.Translation~JSON} label - translation object with label of level
# @property {number} level - unique number of this level starting at one and incrementing
###

###*
# Class representing a tycoon level
# @memberof STARPEACE.industry
#
# @property {string} id - unique identifier of level
# @property {STARPEACE.language.Translation} label - translation with label of level
# @property {number} level - unique number of this level starting at one and incrementing
###
exports = module.exports = class Level

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  isValid: () ->
    return false unless _.isString(@id) && @id.length > 0
    return false unless @label?.isValid()
    return false unless @level? && @level > 0
    true

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.industry.Level~JSON} JSON representation of Level
  ###
  toJson: () ->
    {
      id: @id
      label: @label.toJson()
      level: @level
    }

  ###*
  # Parse raw JSON into a Level object
  # @params {STARPEACE.industry.Level~JSON} json - raw JSON object to parse into Level
  # @return {STARPEACE.industry.Level} Level representation of parsed JSON
  ###
  @fromJson = (json) ->
    level = new Level()
    level.id = json.id
    level.label = Translation.fromJson(json.label)
    level.level = json.level
    level
