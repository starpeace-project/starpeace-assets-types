_ = require('lodash')

Translation = require('../language/translation')

###*
# @typedef {object} STARPEACE.building.BuildingDefinition~JSON
# @property {string} id - unique identifier for building image definition
# @property {string} image_id - default building image definition identifier for this building
# @property {string} construction_image_id - building image definition identifier to use during construction of this building
# @property {STARPEACE.language.Translation~JSON} name - translation object with name of building
# @property {string} zone - identifier for city zone of this building
# @property {string} industry_type - identifier for category of this building
# @property {string} seal_id - identifier for seal of this building
# @property {boolean} restricted - flag indicating whether this building is restricted from tycoon construction
# @property {string[]} required_inventions - array of invention definition identifiers that must be researched before construction of this building
###

###*
# Class representing building definition metadata
# @memberof STARPEACE.building
#
# @property {string} id - unique identifier for building image definition
# @property {string} image_id - default building image definition identifier for this building
# @property {string} construction_image_id - building image definition identifier to use during construction of this building
# @property {STARPEACE.language.Translation} name - translation object with name of building
# @property {string} zone_id - identifier for city zone of this building
# @property {string} category_id - identifier for category of this building
# @property {string} industry_type_id - identifier for industry type of this building
# @property {string} seal_id - identifier for seal of this building
# @property {boolean} restricted - flag indicating whether this building is restricted from tycoon construction
# @property {string[]} required_invention_ids - array of invention definition identifiers that must be researched before construction of this building
###
class BuildingDefinition
  ###*
  # Create a BuildingDefinition object
  # @param {string} id - unique identifier for building definition
  ###
  constructor: (@id) ->

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  is_valid: () ->
    return false unless _.isString(@id) && @id?.length > 0
    return false unless _.isString(@image_id) && @image_id?.length > 0
    return false unless _.isString(@construction_image_id) && @construction_image_id?.length > 0

    return false unless @name?.is_valid()

    return false unless _.isString(@zone_id) && @zone_id?.length > 0
    return false unless _.isString(@seal_id) && @seal_id?.length > 0
    return false unless _.isString(@category_id) && @category_id?.length > 0
    return false unless _.isString(@industry_type_id) && @industry_type_id?.length > 0

    true

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.BuildingDefinition~JSON} JSON representation of BuildingDefinition
  ###
  toJSON: () ->
    json = {
      id: @id
      name: @name.toJSON()
      image_id: @image_id
      construction_image_id: @construction_image_id
      category: @category_id
      seal_id: @seal_id
      industry_type: @industry_type_id
      zone: @zone_id
    }
    json.restricted = true if @restricted
    json.required_inventions = @required_invention_ids if @required_invention_ids?.length
    json

  ###*
  # Parse raw JSON into a BuildingDefinition object
  # @param {STARPEACE.building.BuildingDefinition~JSON} json - raw JSON object to parse into BuildingDefinition
  # @return {STARPEACE.building.BuildingDefinition} BuildingDefinition representation of parsed JSON
  ###
  @from_json: (json) ->
    definition = new BuildingDefinition(json.id)
    definition.image_id = json.image_id
    definition.construction_image_id = json.construction_image_id
    definition.name = Translation.from_json(json.name)
    definition.zone_id = json.zone
    definition.category_id = json.category
    definition.industry_type_id = json.industry_type
    definition.seal_id = json.seal_id
    definition.restricted = json.restricted || false
    definition.required_invention_ids = json.required_inventions
    definition

exports = module.exports = BuildingDefinition
