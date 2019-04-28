_ = require('lodash')

  ###*
  # @memberof module:STARPEACE
  # @typedef {Object} CompanySeal~JSON
  # @property {string} id identifier of seal
  # @property {string} name_short short name of seal
  # @property {string} name_long long or full name of seal
  # @property {string[]} buildings array of building definition identifiers constructable by seal
  ###

###*
# Class representing company seal, with metadata and buildings allowed defined.
# @memberof module:STARPEACE
###
class CompanySeal

  ###*
  # Retrieve JSON representation of object
  # @return {...CompanySeal~JSON} {@link CompanySeal~JSON} representation of CompanySeal
  ###
  toJSON: () ->
    {
      id: @id
      name_short: @name_short
      name_long: @name_long
      buildings: @buildings if @buildings?.length
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
  # @params {Object} json - raw JSON object to parse into CompanySeal
  # @params {string} json.id - identitifier of seal
  # @params {string} json.name_short - short name for seal
  # @params {string} json.name_long - longer full name for seal (may be same as json.name_short)
  # @params {string[]} json.buildings - array of building definition identifiers constructable by seal
  # @return {CompanySeal} CompanySeal representation of parsed JSON
  ###
  @from_json = (json) ->
    seal = new CompanySeal()
    seal.id = json.id
    seal.name_short = json.name_short
    seal.name_long = json.name_long
    seal.buildings = json.buildings || []
    seal

exports = module.exports = CompanySeal
