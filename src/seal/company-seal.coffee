_ = require('lodash')

###*
# Class representing company seal, with metadata and buildings allowed defined.
# @memberof module:STARPEACE
###
class CompanySeal

  ###*
  # Retrieve JSON representation of object
  # @return {object} JSON representation of object
  ###
  toJSON: () ->
    {
      id: @id
      name_short: @name_short
      name_long: @name_long
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
  # @params {json} raw JSON object to parse into CompanySeal
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
