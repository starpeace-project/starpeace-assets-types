_ = require('lodash')

###*
# @typedef {object} STARPEACE.seal.CompanySeal~JSON
# @property {string} id - identifier of seal
# @property {string} name_short - short name of seal
# @property {string} name_long - long or full name of seal
# @property {string[]} buildings - array of building definition identifiers constructable by seal
###

###*
# Class representing company seal, with metadata and buildings allowed defined.
# @memberof STARPEACE.seal
#
# @property {string} id - Unique identifier of seal
# @property {string} name_short - Short name for seal (same in all languages)
# @property {string} name_long - Longer full name for seal (may be same as json.name_short; same in all languages)
# @property {string[]} buildings - Array of building definition identifiers that can be constructed by seal
###
class CompanySeal
  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.seal.CompanySeal~JSON} JSON representation of CompanySeal
  ###
  toJSON: () ->
    {
      id: @id
      name_short: @name_short
      name_long: @name_long
      buildings: @building_ids if @building_ids?.length
    }

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  is_valid: () ->
    return false unless _.isString(@id) && @id.length > 0
    return false unless @name_short?
    return false unless @name_long?
    true

  ###*
  # Parse raw JSON into a CompanySeal object
  # @params {STARPEACE.seal.CompanySeal~JSON} json - raw JSON object to parse into CompanySeal
  # @return {STARPEACE.seal.CompanySeal} CompanySeal representation of parsed JSON
  ###
  @from_json = (json) ->
    seal = new CompanySeal()
    seal.id = json.id
    seal.name_short = json.name_short
    seal.name_long = json.name_long
    seal.building_ids = json.buildings || []
    seal

exports = module.exports = CompanySeal
