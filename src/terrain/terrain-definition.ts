import _ from 'lodash';

/**
 * @memberof STARPEACE.terrain
 * @property {string} type - type of terrain texture
 * @property {string} key - key of terrain image
 */
export interface TerrainTextureJson {
  type: string;
  key: string;
}

export class TerrainTexture {
  type: string;
  key: string;

  constructor (type: string, key: string) {
    this.type = type;
    this.key = key;
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!_.isString(this.type) || !this.type.length) return false;
    if (!_.isString(this.key) || !this.key.length) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.concrete.TerrainTextureJson} JSON representation of TerrainTexture
   */
  toJson (): TerrainTextureJson {
    return {
      type: this.type,
      key: this.key
    };
  }

  /**
   * Parse raw JSON into a TerrainTexture object
   * @params {STARPEACE.concrete.TerrainTextureJson} json - raw JSON object to parse into TerrainTexture
   * @return {STARPEACE.concrete.TerrainTexture} TerrainTexture representation of parsed JSON
   */
  static fromJson (json: TerrainTextureJson): TerrainTexture {
    return  new TerrainTexture(json.type, json.key);
  }
}

/**
 * @memberof STARPEACE.terrain
 * @property {string} id - identifier of terrain
 * @property {number} color - color of terrain within map image
 * @property {string} zone - type of terrain
 * @property {Record<string, TerrainTextureJson>} textures - terrain textures of various orientations
 */
export interface TerrainDefinitionJson {
  id: number;
  color: number;
  zone: string;
  textures: Record<string, TerrainTextureJson>;
}

/**
 * Class representing terrain metadata
 * @memberof STARPEACE.terrain
 *
 * @property {number} id - identifier of terrain
 * @property {number} color - color of terrain within map image
 * @property {string} zone - type of terrain
 * @property {Record<string, TerrainTexture>} textures - terrain textures of various orientations
 */
export class TerrainDefinition {
  id: number;
  color: number;
  zone: string;
  textures: Record<string, TerrainTexture>;

  constructor (id: number, color: number, zone: string, textures: Record<string, TerrainTexture>) {
    this.id = id;
    this.color = color;
    this.zone = zone;
    this.textures = textures;
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!_.isNumber(this.id)) return false;
    if (!_.isNumber(this.color)) return false;
    if (!_.isString(this.zone) || !this.zone.length) return false;
    if (Object.values(this.textures).length && !Object.values(this.textures).every(t => t.isValid())) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.concrete.ConcreteDefinitionJson} JSON representation of ConcreteDefinition
   */
  toJson (): TerrainDefinitionJson {
    return {
      id: this.id,
      color: this.color,
      zone: this.zone,
      textures: Object.fromEntries(Object.entries(this.textures).map(e => [e[0], e[1].toJson()])),
    };
  }

  /**
   * Parse raw JSON into a TerrainDefinition object
   * @params {STARPEACE.concrete.TerrainDefinitionJson} json - raw JSON object to parse into TerrainDefinition
   * @return {STARPEACE.concrete.TerrainDefinition} ConcreteDefinition representation of parsed JSON
   */
  static fromJson (json: TerrainDefinitionJson): TerrainDefinition {
    return  new TerrainDefinition(
      json.id,
      json.color,
      json.zone,
      Object.fromEntries(Object.entries(json.textures).map(e => [e[0], TerrainTexture.fromJson(e[1])])),
    );
  }
}
