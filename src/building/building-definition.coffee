_ = require('lodash')

Translation = require('../language/translation')

###*
# @typedef {object} STARPEACE.building.BuildingDefinition~JSON
# @property {string} id - unique identifier for building definition
# @property {string} imageId - default building image definition identifier for this building
# @property {string} constructionImageId - building image definition identifier to use during construction of this building
# @property {STARPEACE.language.Translation~JSON} name - translation object with name of building
# @property {string} zoneId - identifier for city zone of this building
# @property {string} industryCategoryId - identifier for category of this building
# @property {string} industryTypeId - identifier for industry type of this building
# @property {string} sealId - identifier for seal of this building
# @property {boolean} restricted - flag indicating whether this building is restricted from tycoon construction
# @property {string[]} requiredInventionIds - array of invention definition identifiers that must be researched before construction of this building
###

###*
# Class representing building definition metadata
# @memberof STARPEACE.building
#
# @property {string} id - unique identifier for building definition
# @property {string} imageId - default building image definition identifier for this building
# @property {string} constructionImageId - building image definition identifier to use during construction of this building
# @property {STARPEACE.language.Translation} name - translation object with name of building
# @property {string} zoneId - identifier for city zone of this building
# @property {string} industryCategoryId - identifier for category of this building
# @property {string} industryTypeId - identifier for industry type of this building
# @property {string} sealId - identifier for seal of this building
# @property {boolean} restricted - flag indicating whether this building is restricted from tycoon construction
# @property {string[]} requiredInventionIds - array of invention definition identifiers that must be researched before construction of this building
###
exports = module.exports = class BuildingDefinition

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  isValid: () ->
    return false unless _.isString(@id) && @id?.length > 0
    return false unless _.isString(@imageId) && @imageId?.length > 0
    return false unless _.isString(@constructionImageId) && @constructionImageId?.length > 0

    return false unless @name?.isValid()

    return false unless _.isString(@zoneId) && @zoneId?.length > 0
    return false unless _.isString(@sealId) && @sealId?.length > 0
    return false unless _.isString(@industryCategoryId) && @industryCategoryId?.length > 0
    return false unless _.isString(@industryTypeId) && @industryTypeId?.length > 0

    true

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.BuildingDefinition~JSON} JSON representation of BuildingDefinition
  ###
  toJson: () ->
    json = {
      id: @id
      name: @name?.toJson()
      imageId: @imageId
      constructionImageId: @constructionImageId
      industryCategoryId: @industryCategoryId
      sealId: @sealId
      industryTypeId: @industryTypeId
      zoneId: @zoneId
    }
    json.restricted = true if @restricted
    json.requiredInventionIds = @requiredInventionIds if @requiredInventionIds?.length
    json

  ###*
  # Parse raw JSON into a BuildingDefinition object
  # @param {STARPEACE.building.BuildingDefinition~JSON} json - raw JSON object to parse into BuildingDefinition
  # @return {STARPEACE.building.BuildingDefinition} BuildingDefinition representation of parsed JSON
  ###
  @fromJson: (json) ->
    definition = new BuildingDefinition()
    definition.id = json.id
    definition.imageId = json.imageId
    definition.constructionImageId = json.constructionImageId
    definition.name = Translation.fromJson(json.name)
    definition.zoneId = json.zoneId
    definition.industryCategoryId = json.industryCategoryId
    definition.industryTypeId = json.industryTypeId
    definition.sealId = json.sealId
    definition.restricted = json.restricted || false
    definition.requiredInventionIds = json.requiredInventionIds || []
    definition
