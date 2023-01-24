import { assert } from "chai";

import { CityZone } from '../../src';

describe('CityZone', () => {
  describe('#fromJson', () => {
    it('should be able to create from json', async () => {
      const JSON = {
        id: "COMMERCIAL",
        label: {
          "DE": "Kommerziell",
          "EN": "Commercial",
          "ES": "Comercial",
          "FR": "Commercial",
          "IT": "Commerciale",
          "PT": "Comercial"
        },
        value: 7,
        color: 4814040,
        miniMapColor: 4814040,
        includedCityZoneIds: ["SERVICE"]
      };

      const zone = CityZone.fromJson(JSON);
      assert.isOk(zone);
      assert.strictEqual(zone.id, JSON.id);
      assert.strictEqual(zone.value, JSON.value);
      assert.strictEqual(zone.color, JSON.color);
      assert.strictEqual(zone.miniMapColor, JSON.miniMapColor);
      assert.strictEqual(zone.includedCityZoneIds, JSON.includedCityZoneIds);
      assert.isOk(zone.isValid());
      assert.deepStrictEqual(zone.toJson(), JSON);
    });
  });
});
