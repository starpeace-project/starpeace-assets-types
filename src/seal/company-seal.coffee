_ = require('lodash')

Translation = require('../language/translation')

###*
# @typedef {object} STARPEACE.seal.CompanySeal~JSON
# @property {string} id - identifier of seal
# @property {string} nameShort - short name of seal
# @property {string} nameLong - long or full name of seal
# @property {string[]} buildingIds - array of building definition identifiers constructable by seal
###

###*
# Class representing company seal, with metadata and buildings allowed defined.
# @memberof STARPEACE.seal
#
# @property {string} id - Unique identifier of seal
# @property {string} nameShort - Short name for seal (same in all languages)
# @property {string} nameLong - Longer full name for seal (may be same as json.name_short; same in all languages)
# @property {string[]} buildingIds - Array of building definition identifiers that can be constructed by seal
###
exports = module.exports = class CompanySeal

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  isValid: () ->
    return false unless _.isString(@id) && @id.length > 0
    return false unless _.isString(@nameShort) && @nameShort.length > 0
    return false unless _.isString(@nameLong) && @nameLong.length > 0
    return false unless _.isBoolean(@playable)
    return false unless _.isArray(@descriptions) && @descriptions.length > 0 && _.every(@descriptions, (d) -> d.isValid())
    true

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.seal.CompanySeal~JSON} JSON representation of CompanySeal
  ###
  toJson: () ->
    json = {
      id: @id
      nameShort: @nameShort
      nameLong: @nameLong
      descriptions: _.map(@descriptions, (d) -> d.toJson())
      playable: @playable
      buildingIds: @buildingIds
    }
    json.pros = @pros.toJson() if @pros?
    json.cons = @cons.toJson() if @cons?
    json.strengths = @strengths.toJson() if @strengths?
    json.weaknesses = @weaknesses.toJson() if @weaknesses?
    json

  ###*
  # Parse raw JSON into a CompanySeal object
  # @params {STARPEACE.seal.CompanySeal~JSON} json - raw JSON object to parse into CompanySeal
  # @return {STARPEACE.seal.CompanySeal} CompanySeal representation of parsed JSON
  ###
  @fromJson = (json) ->
    seal = new CompanySeal()
    seal.id = json.id
    seal.nameShort = json.nameShort
    seal.nameLong = json.nameLong
    seal.descriptions = _.map(json.descriptions, Translation.fromJson)
    seal.playable = json.playable
    seal.pros = Translation.fromJson(json.pros) if json.pros?
    seal.cons = Translation.fromJson(json.cons) if json.cons?
    seal.strengths = Translation.fromJson(json.strengths) if json.strengths?
    seal.weaknesses = Translation.fromJson(json.weaknesses) if json.weaknesses?
    seal.buildingIds = json.buildingIds || []
    seal
