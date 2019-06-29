_ = require('lodash')

Translation = require('../language/translation')

###*
# @typedef {object} STARPEACE.invention.InventionDefinition~JSON
# @property {string} id - identifier of invention
# @property {string} category - category of invention
# @property {string} industry_type - industry type of invention
# @property {STARPEACE.language.Translation~JSON} name - translation object with name of invention
# @property {STARPEACE.language.Translation~JSON} description - translation object with description of invention
# @property {string[]} depends_on - array of other invention definition identifiers this depends on
# @property {object} properties - properties of invention
###

###*
# Class representing metadata definition of an invention
# @memberof STARPEACE.invention
#
# @property {string} id - Unique identifier of invention definition metadata
# @property {string} category - Category of invention
# @property {string} industry_type - Industry type of invention
# @property {STARPEACE.language.Translation} name - Translation object with name of invention
# @property {STARPEACE.language.Translation} description - Translation with description of invention
# @property {string[]} depends_on - Array of other invention definition identifiers this depends on
# @property {object} properties - Properties of invention
###
class InventionDefinition
  ###*
  # Create an InventionDefinition object
  # @param {string} id - unique identifier of invention definition metadata
  ###
  constructor: (@id) ->

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  is_valid: () ->
    return false unless @id?.length > 0

    return false unless @category?.length > 0
    return false unless @industry_type?.length > 0

    return false unless @name?.is_valid()
    return false unless @description?.is_valid()

    # TODO: validate @properties
    true

  ###*
  # Parse raw JSON into a InventionDefinition object
  # @params {STARPEACE.invention.InventionDefinition~JSON} json - raw JSON object to parse into InventionDefinition
  # @return {STARPEACE.invention.InventionDefinition} InventionDefinition representation of parsed JSON
  ###
  @from_json: (json) ->
    definition = new InventionDefinition(json.id)
    definition.category = json.category
    definition.industry_type = json.industry_type
    definition.name = Translation.from_json(json.name)
    definition.description = Translation.from_json(json.description)
    definition.depends_on = json.depends_on || []
    definition.properties = json.properties || {}

    definition

exports = module.exports = InventionDefinition
