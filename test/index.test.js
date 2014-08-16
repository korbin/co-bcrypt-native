'use strict';

var expect = require('chai').expect;
var bcrypt = require('../index');

describe('co-bcrypt-native', function () {
  it('stores unwrapped functions', function () {
    expect(bcrypt.unwrapped.genSalt).to.be.a('function');
    expect(bcrypt.unwrapped.genSalt.length).to.eq(3);

    expect(bcrypt.unwrapped.hash).to.be.a('function');
    expect(bcrypt.unwrapped.hash.length).to.eq(3);

    expect(bcrypt.unwrapped.compare).to.be.a('function');
    expect(bcrypt.unwrapped.compare.length).to.eq(3);
  });

  context('genSalt', function () {
    it('returns a thunk', function () {
      var thunk = bcrypt.genSalt();

      expect(thunk).to.be.a('function');
      expect(thunk.length).to.eq(1);
    });

    it('generates a salt', function* () {
      var salt  = yield bcrypt.genSalt(13);
      var split = salt.split('$');
      //$2a$13$xxxxxxxxxxxxxxxxxxxxxx
      expect(split[2]).to.eq('13');
    });
  });

  context('hash', function () {
    it('returns a thunk', function () {
      var thunk = bcrypt.hash();

      expect(thunk).to.be.a('function');
      expect(thunk.length).to.eq(1);
    });

    it('generates a hash', function* () {
      var hash = yield bcrypt.hash('test', 4);

      expect(hash).to.not.be.empty;
    });
  });

  context('compare', function () {
    it('returns a thunk', function () {
      var thunk = bcrypt.compare();

      expect(thunk).to.be.a('function');
      expect(thunk.length).to.eq(1);
    });

    it('generates a comparison', function* () {
      var hash = yield bcrypt.hash('test', 4);
      var comparison = yield bcrypt.compare('test', hash);
      expect(comparison).to.be.true;
    });
  });
});
