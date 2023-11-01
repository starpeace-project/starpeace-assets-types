import { assert } from "chai";

import { CompanySeal } from '../../src/index.js';

describe('CompanySeal', () => {
  describe('#fromJson', () => {
    it('should be able to create from json', async () => {
      const JSON = {
        id: 'id',
        nameShort: 'name',
        nameLong: 'long name',
        descriptions: [
          {
            DE: 'de description 1',
            EN: 'en description 1',
            ES: 'es description 1',
            FR: 'fr description 1',
            IT: 'it description 1',
            PT: 'pt description 1'
          },
          {
            DE: 'de description 2',
            EN: 'en description 2',
            ES: 'es description 2',
            FR: 'fr description 2',
            IT: 'it description 2',
            PT: 'pt description 2'
          }
        ],
        pros: {
          DE: 'de pros',
          EN: 'en pros',
          ES: 'es pros',
          FR: 'fr pros',
          IT: 'it pros',
          PT: 'pt pros'
        },
        cons: {
          DE: 'de cons',
          EN: 'en cons',
          ES: 'es cons',
          FR: 'fr cons',
          IT: 'it cons',
          PT: 'pt cons'
        },
        strengths: {
          DE: 'de strengths',
          EN: 'en strengths',
          ES: 'es strengths',
          FR: 'fr strengths',
          IT: 'it strengths',
          PT: 'pt strengths'
        },
        weaknesses: {
          DE: 'de weaknesses',
          EN: 'en weaknesses',
          ES: 'es weaknesses',
          FR: 'fr weaknesses',
          IT: 'it weaknesses',
          PT: 'pt weaknesses'
        },
        playable: true,
        buildingIds: ['bid1', 'bid2']
      };

      const seal = CompanySeal.fromJson(JSON);
      assert.isOk(seal);
      assert.strictEqual(seal.id, JSON.id);
      assert.strictEqual(seal.nameShort, JSON.nameShort);
      assert.strictEqual(seal.nameLong, JSON.nameLong);
      assert.deepStrictEqual(seal.descriptions.map(d => d.toJson()), JSON.descriptions);
      assert.deepStrictEqual(seal.pros?.toJson(), JSON.pros);
      assert.deepStrictEqual(seal.cons?.toJson(), JSON.cons);
      assert.deepStrictEqual(seal.strengths?.toJson(), JSON.strengths);
      assert.deepStrictEqual(seal.weaknesses?.toJson(), JSON.weaknesses);
      assert.strictEqual(seal.playable, JSON.playable);
      assert.deepStrictEqual(seal.buildingIds, ['bid1', 'bid2']);
      assert.isOk(seal.isValid());
      assert.deepStrictEqual(seal.toJson(), JSON);
    });
  });
});
