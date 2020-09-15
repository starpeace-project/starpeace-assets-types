_ = require('lodash')

ConstructionQuantity = require('./construction-quantity')

###*
# @typedef {object} STARPEACE.building.simulation.SimulationDefinition~JSON
# @property {string} id - unique identifier of building simulation
# @property {string} type - type identifier of building simulation, mapping to child subclass simulation definitions
# @property {number} maxLevel - maximum upgrade level of building
# @property {STARPEACE.building.simulation.ConstructionQuantity~JSON[]} constructionInputs - array of input quantities required for construction
# @property {number} prestige - prestige earned or lost per level of this building simulation
# @property {number} maintainance - maintainance required per level of this building simulation per hour
# @property {number} beauty - beauty earned or lost per level of this building simulation per hour
# @property {number} pollution - pollution earned or lost per level of this building simulation per hour
###

###*
# Base class representing building simulation with common properties for all building simulations
# @memberof STARPEACE.building.simulation
#
# @property {string} id - unique identifier of building simulation
# @property {string} type - type identifier of building simulation, mapping to child subclass simulation definitions
# @property {number} maxLevel - maximum upgrade level of building
# @property {STARPEACE.building.simulation.ConstructionQuantity[]} constructionInputs - array of input quantities required for construction
# @property {number} prestige - prestige earned or lost per level of this building simulation
# @property {number} maintainance - maintainance required per level of this building simulation per hour
# @property {number} beauty - beauty earned or lost per level of this building simulation per hour
# @property {number} pollution - pollution earned or lost per level of this building simulation per hour
###
exports = module.exports = class SimulationDefinition
  ###*
  # Create a SimulationDefinition object
  # @param {STARPEACE.building.simulation.SimulationDefinition~JSON} json - raw JSON object to populate into simulation definition
  ###
  constructor: (json) ->
    @id = json.id
    @type = json.type
    @maxLevel = json.maxLevel
    @constructionInputs = _.map(json.constructionInputs, ConstructionQuantity.from_json)
    @prestige = json.prestige || 0
    @maintainance = json.maintainance || 0
    @beauty = json.beauty || 0
    @pollution = json.pollution || 0

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.simulation.SimulationDefinition~JSON} JSON representation of SimulationDefinition
  ###
  toJson: () ->
    {
      id: @id
      type: @type
      maxLevel: @maxLevel
      constructionInputs: _.map(@constructionInputs, (ci) -> ci.toJson())
      prestige: @prestige
      maintainance: @maintainance
      beauty: @beauty
      pollution: @pollution
    }

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  isValid: () ->
    return false unless _.isString(@id) && @id.length > 0
    return false unless _.isString(@type) && @type.length > 0
    return false unless _.isNumber(@maxLevel) && @maxLevel > 0
    return false unless _.isNumber(@prestige)
    return false unless _.isNumber(@maintainance)
    return false unless _.isNumber(@beauty)
    return false unless _.isNumber(@pollution)
    true
