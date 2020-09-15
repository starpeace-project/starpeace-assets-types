_ = require('lodash')

CoordinateList = require('./coordinate-list')
ImageEffect = require('./image-effect')

###*
# @typedef {object} STARPEACE.building.BuildingImageDefinition~JSON
# @property {string} id - unique identifier for building image definition
# @property {string} imagePath - path to image file for building
# @property {number} tileWidth - width of building in game tiles
# @property {number} tileHeight - height of building in game tiles
# @property {STARPEACE.building.CoordinateList~JSON[]} hitArea - array of coordinate lists representing vertices of each polygon making up building hit area
# @property {STARPEACE.building.ImageEffect~JSON[]} effects - array of image effects for building
###

###*
# Class representing image metadata for a building definition
# @memberof STARPEACE.building
#
# @property {string} id - unique identifier for building image definition
# @property {string} imagePath - path to image file for building
# @property {number} tileWidth - width of building in game tiles
# @property {number} tileHeight - height of building in game tiles
# @property {STARPEACE.building.CoordinateList[]} hitArea - array of coordinate lists representing vertices of each polygon making up building hit area
# @property {STARPEACE.building.ImageEffect[]} effects - array of image effects for building
###
exports = module.exports = class BuildingImageDefinition

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  isValid: () ->
    return false unless _.isString(@id) && @id?.length > 0
    return false unless _.isString(@imagePath) && @imagePath?.length > 0
    return false unless _.isNumber(@tileWidth) && @tileWidth? && @tileWidth > 0
    return false unless _.isNumber(@tileHeight) && @tileHeight? && @tileHeight > 0
    return false unless @hitArea?.length > 0 && _.every(@hitArea, (a) -> a.isValid())
    return false unless !@effects?.length || _.every(@effects, (e) -> e.isValid())
    true

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.BuildingImageDefinition~JSON} JSON representation of BuildingImageDefinition
  ###
  toJson: () ->
    {
      id: @id
      imagePath: @imagePath
      tileWidth: @tileWidth
      tileHeight: @tileHeight
      hitArea: _.map(@hitArea, (lc) -> lc.toJson())
      effects: _.map(@effects, (e) -> e.toJson())
    }

  ###*
  # Parse raw JSON into a BuildingImageDefinition object
  # @param {STARPEACE.building.BuildingImageDefinition~JSON} json - raw JSON object to parse into BuildingImageDefinition
  # @return {STARPEACE.building.BuildingImageDefinition} BuildingImageDefinition representation of parsed JSON
  ###
  @fromJson: (json) ->
    definition = new BuildingImageDefinition()
    definition.id = json.id
    definition.imagePath = json.imagePath
    definition.tileWidth = json.tileWidth
    definition.tileHeight = json.tileHeight
    definition.hitArea = _.map(json.hitArea, CoordinateList.fromJson)
    definition.effects = _.map(json.effects, ImageEffect.fromJson)
    definition
