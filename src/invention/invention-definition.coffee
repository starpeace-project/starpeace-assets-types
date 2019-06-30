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
# @property {string} category_id - Category of invention
# @property {string} industry_type_id - Industry type of invention
# @property {STARPEACE.language.Translation} name - Translation object with name of invention
# @property {STARPEACE.language.Translation} description - Translation with description of invention
# @property {string[]} depends_on_ids - Array of other invention definition identifiers this depends on
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

    return false unless @category_id?.length > 0
    return false unless @industry_type_id?.length > 0

    return false unless @name?.is_valid()
    return false unless @description?.is_valid()

    # TODO: validate @properties
    true

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.invention.InventionDefinition~JSON} JSON representation of InventionDefinition
  ###
  toJSON: () ->
    {
      id: @id
      category: @category_id
      industry_type: @industry_type_id
      name: @name.toJSON()
      description: @description.toJSON()
      depends_on: @depends_on_ids
      properties: @properties
    }

  ###*
  # Parse raw JSON into a InventionDefinition object
  # @params {STARPEACE.invention.InventionDefinition~JSON} json - raw JSON object to parse into InventionDefinition
  # @return {STARPEACE.invention.InventionDefinition} InventionDefinition representation of parsed JSON
  ###
  @from_json: (json) ->
    definition = new InventionDefinition(json.id)
    definition.category_id = json.category
    definition.industry_type_id = json.industry_type
    definition.name = Translation.from_json(json.name)
    definition.description = Translation.from_json(json.description)
    definition.depends_on_ids = json.depends_on || []
    definition.properties = json.properties || {}

    definition

exports = module.exports = InventionDefinition
