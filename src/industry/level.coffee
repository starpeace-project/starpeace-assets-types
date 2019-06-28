_ = require('lodash')

Translation = require('../language/translation')

###*
# @typedef {object} STARPEACE.industry.Level~JSON
# @property {string} id - unique identifier of level
# @property {object} label - translation object with label of level
# @property {number} level - unique number of this level starting at one and incrementing
###

###*
# Class representing a tycoon level
# @memberof STARPEACE.industry
#
# @property {string} id - unique identifier of level
# @property {STARPEACE.invention.Translation} label - translation with label of level
# @property {number} level - unique number of this level starting at one and incrementing
###
class Level

  ###*
  # Retrieve JSON representation of object
  # @return {Level~JSON} JSON representation of Level
  ###
  toJSON: () ->
    {
      id: @id
      label: @label.toJSON()
      level: @level
    }

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  is_valid: () ->
    return false unless _.isString(@id) && @id.length > 0
    return false unless @label?.is_valid()
    return false unless @level? && @level > 0
    true

  ###*
  # Parse raw JSON into a Level object
  # @params {Level~JSON} json - raw JSON object to parse into Level
  # @return {Level} Level representation of parsed JSON
  ###
  @from_json = (json) ->
    level = new Level()
    level.id = json.id
    level.label = Translation.from_json(json.label)
    level.level = json.level
    level

exports = module.exports = Level
