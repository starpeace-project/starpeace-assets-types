_ = require('lodash')

###*
# @typedef {object} STARPEACE.seal.CompanySeal~JSON
# @property {string} id - identifier of seal
# @property {string} nameShort - short name of seal
# @property {string} nameLong - long or full name of seal
# @property {string[]} buildingIds - array of building definition identifiers constructable by seal
###

###*
# Class representing company seal, with metadata and buildings allowed defined.
# @memberof STARPEACE.seal
#
# @property {string} id - Unique identifier of seal
# @property {string} name_short - Short name for seal (same in all languages)
# @property {string} name_long - Longer full name for seal (may be same as json.name_short; same in all languages)
# @property {string[]} building_ids - Array of building definition identifiers that can be constructed by seal
###
class CompanySeal
  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.seal.CompanySeal~JSON} JSON representation of CompanySeal
  ###
  toJSON: () ->
    {
      id: @id
      nameShort: @name_short
      nameLong: @name_long
      buildingIds: @building_ids if @building_ids?.length
    }

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  is_valid: () ->
    return false unless _.isString(@id) && @id.length > 0
    return false unless _.isString(@name_short) && @name_short.length > 0
    return false unless _.isString(@name_long) && @name_long.length > 0
    true

  ###*
  # Parse raw JSON into a CompanySeal object
  # @params {STARPEACE.seal.CompanySeal~JSON} json - raw JSON object to parse into CompanySeal
  # @return {STARPEACE.seal.CompanySeal} CompanySeal representation of parsed JSON
  ###
  @from_json = (json) ->
    seal = new CompanySeal()
    seal.id = json.id
    seal.name_short = json.nameShort
    seal.name_long = json.nameLong
    seal.building_ids = json.buildingIds || []
    seal

exports = module.exports = CompanySeal
