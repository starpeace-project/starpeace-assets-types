_ = require('lodash')

CoordinateList = require('./coordinate-list')
ImageEffect = require('./image-effect')

###*
# @typedef {object} STARPEACE.building.BuildingImageDefinition~JSON
# @property {string} id - unique identifier for building image definition
# @property {string} image_path - path to image file for building
# @property {number} tile_width - width of building in game tiles
# @property {number} tile_height - height of building in game tiles
# @property {STARPEACE.building.CoordinateList~JSON[]} hit_area - array of coordinate lists representing vertices of each polygon making up building hit area
# @property {STARPEACE.building.ImageEffect~JSON[]} effects - array of image effects for building
###

###*
# Class representing image metadata for a building definition
# @memberof STARPEACE.building
#
# @property {string} id - unique identifier for building image definition
# @property {string} image_path - path to image file for building
# @property {number} tile_width - width of building in game tiles
# @property {number} tile_height - height of building in game tiles
# @property {STARPEACE.building.CoordinateList[]} hit_area - array of coordinate lists representing vertices of each polygon making up building hit area
# @property {STARPEACE.building.ImageEffect[]} effects - array of image effects for building
###
class BuildingImageDefinition
  ###*
  # Create a BuildingImageDefinition object
  # @param {string} id - unique identifier for building image definition
  ###
  constructor: (@id) ->
    @seal_ids = []

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  is_valid: () ->
    return false unless _.isString(@id) && @id?.length > 0
    return false unless _.isString(@image_path) && @image_path?.length > 0
    return false unless _.isNumber(@tile_width) && @tile_width? && @tile_width > 0
    return false unless _.isNumber(@tile_height) && @tile_height? && @tile_height > 0
    return false unless @hit_area?.length > 0 && _.every(@hit_area, 'is_valid')
    return false unless !@effects?.length || _.every(@effects, 'is_valid')
    true

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.BuildingImageDefinition~JSON} JSON representation of BuildingImageDefinition
  ###
  toJSON: () ->
    {
      id: @id
      image_path: @image_path
      tile_width: @tile_width
      tile_height: @tile_height
      hit_area: _.map(@hit_area, (lc) -> lc.toJSON())
      effects: _.map(@effects, (e) -> e.toJSON())
    }

  ###*
  # Parse raw JSON into a BuildingImageDefinition object
  # @param {STARPEACE.building.BuildingImageDefinition~JSON} json - raw JSON object to parse into BuildingImageDefinition
  # @return {STARPEACE.building.BuildingImageDefinition} BuildingImageDefinition representation of parsed JSON
  ###
  @from_json: (json) ->
    definition = new BuildingImageDefinition(json.id)
    definition.image_path = json.image_path
    definition.tile_width = json.tile_width
    definition.tile_height = json.tile_height
    definition.hit_area = _.map(json.hit_area, CoordinateList.from_json)
    definition.effects = _.map(json.effects, ImageEffect.from_json)
    definition

exports = module.exports = BuildingImageDefinition
