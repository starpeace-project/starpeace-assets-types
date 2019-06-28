_ = require('lodash')

###*
# @typedef {object} STARPEACE.language.Translation~JSON
# @property {string} DE - German translation value
# @property {object} EN - English translation value
# @property {object} ES - Spanish translation value
# @property {object} FR - French translation value
# @property {object} IT - Italian translation value
# @property {object} PT - Portuguese translation value
###

###*
# Class representing a multi-language translation
# @memberof STARPEACE.language
#
# @property {string} german - German translation value
# @property {string} english - English translation value
# @property {string} spanish - Spanish translation value
# @property {string} french - French translation value
# @property {string} italian - Italian translation value
# @property {string} portuguese - Portuguese translation value
###
class Translation

  ###*
  # Retrieve JSON representation of object
  # @return {Translation~JSON} JSON representation of Translation
  ###
  toJSON: () ->
    {
      DE: @german
      EN: @english
      ES: @spanish
      FR: @french
      IT: @italian
      PT: @portuguese
    }

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  is_valid: () ->
    return false unless _.isString(@german) && @german.length > 0
    return false unless _.isString(@english) && @english.length > 0
    return false unless _.isString(@spanish) && @spanish.length > 0
    return false unless _.isString(@french) && @french.length > 0
    return false unless _.isString(@italian) && @italian.length > 0
    return false unless _.isString(@portuguese) && @portuguese.length > 0
    true

  ###*
  # Parse raw JSON into a Translation object
  # @params {Translation~JSON} json - raw JSON object to parse into Translation
  # @return {Translation} Translation representation of parsed JSON
  ###
  @from_json = (json) ->
    translation = new Translation()
    translation.german = json.DE
    translation.english = json.EN
    translation.spanish = json.ES
    translation.french = json.FR
    translation.italian = json.IT
    translation.portuguese = json.PT
    translation

exports = module.exports = Translation
