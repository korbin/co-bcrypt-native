'use strict';

var bcrypt = require('bcrypt');
var extend = require('util')._extend;

extend(exports, bcrypt);

//Make all original functions available at bcrypt.unwrapped
exports.unwrapped = {
  genSalt: bcrypt.genSalt,
  hash: bcrypt.hash,
  compare: bcrypt.compare,
};

exports.genSalt = function genSalt (rounds) {
  return function (cb) {
    return bcrypt.genSalt(rounds, cb);
  };
};

exports.hash = function hash (data, salt) {
  return function (cb) {
    return bcrypt.hash(data, salt, cb);
  };
};

exports.compare = function compare (data, encrypted) {
  return function (cb) {
    return bcrypt.compare(data, encrypted, cb);
  };
};
