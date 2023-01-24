import { assert } from "chai";

import { Level } from '../../src';

describe('Level', () => {
  describe('#fromJson', () => {
    it('should be able to create from json', async () => {
      const JSON = {
        id: 'ENTREPRENEUR',
        label: {
          DE: "Unternehmer",
          EN: "Entrepreneur",
          ES: "Empresario",
          FR: "Entrepreneur",
          IT: "Imprenditore",
          PT: "Empreendedor"
        },
        level: 2
      };

      const level = Level.fromJson(JSON);
      assert.isOk(level);
      assert.strictEqual(level.id, JSON.id);
      assert.deepStrictEqual(level.label.toJson(), JSON.label);
      assert.strictEqual(level.level, JSON.level);
      assert.isOk(level.isValid());
      assert.deepStrictEqual(level.toJson(), JSON);
    });
  });
});
