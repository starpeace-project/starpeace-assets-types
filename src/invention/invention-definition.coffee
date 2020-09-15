_ = require('lodash')

Translation = require('../language/translation')

###*
# @typedef {object} STARPEACE.invention.InventionDefinition~JSON
# @property {string} id - identifier of invention
# @property {string} industryCategoryId - category of invention
# @property {string} industryTypeId - industry type of invention
# @property {STARPEACE.language.Translation~JSON} name - translation object with name of invention
# @property {STARPEACE.language.Translation~JSON} description - translation object with description of invention
# @property {string[]} dependsOnIds - array of other invention definition identifiers this depends on
# @property {object} properties - properties of invention
###

###*
# Class representing metadata definition of an invention
# @memberof STARPEACE.invention
#
# @property {string} id - Unique identifier of invention definition metadata
# @property {string} industryCategoryId - Category of invention
# @property {string} industryTypeId - Industry type of invention
# @property {STARPEACE.language.Translation} name - Translation object with name of invention
# @property {STARPEACE.language.Translation} description - Translation with description of invention
# @property {string[]} dependsOnIds - Array of other invention definition identifiers this depends on
# @property {object} properties - Properties of invention
###
exports = module.exports = class InventionDefinition

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  isValid: () ->
    return false unless @id?.length > 0

    return false unless @industryCategoryId?.length > 0
    return false unless @industryTypeId?.length > 0

    return false unless @name?.isValid()
    return false unless @description?.isValid()

    # TODO: validate @properties
    true

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.invention.InventionDefinition~JSON} JSON representation of InventionDefinition
  ###
  toJson: () ->
    {
      id: @id
      industryCategoryId: @industryCategoryId
      industryTypeId: @industryTypeId
      name: @name?.toJson()
      description: @description?.toJson()
      dependsOnIds: @dependsOnIds
      properties: @properties
    }

  ###*
  # Parse raw JSON into a InventionDefinition object
  # @params {STARPEACE.invention.InventionDefinition~JSON} json - raw JSON object to parse into InventionDefinition
  # @return {STARPEACE.invention.InventionDefinition} InventionDefinition representation of parsed JSON
  ###
  @fromJson: (json) ->
    definition = new InventionDefinition()
    definition.id = json.id
    definition.industryCategoryId = json.industryCategoryId
    definition.industryTypeId = json.industryTypeId
    definition.name = Translation.fromJson(json.name)
    definition.description = Translation.fromJson(json.description)
    definition.dependsOnIds = json.dependsOnIds || []
    definition.properties = json.properties || {}
    definition
