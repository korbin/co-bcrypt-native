'use strict';

/**
 * Test setup.
 *
 * @param {Hydro} hydro
 * @api public
 */

module.exports = function (hydro) {
  return hydro.set({
    formatter: 'hydro-dot',
    plugins: [
      'hydro-bdd',
      'hydro-chai',
      'hydro-co'
    ],
    suite: 'co-bcrypt-native',
    tests: [
      'test/index.test.js'
    ]
  });
};
