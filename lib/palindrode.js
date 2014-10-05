/*
 * palindrode
 * https://github.com/renjith100/palindrode
 *
 * Copyright (c) 2014
 * Licensed under the MIT license.
 */

'use strict';

exports.awesome = function() {
  return 'awesome';
};

exports.test = function(string) {
  var relevantCharacters,
      filteredString,
      reversedString;

  if (typeof string !== 'string') {
    return false;
  }

  relevantCharacters = string.match(/[a-z0-9]/gi);

  if (!relevantCharacters) {
    return false;
  }

  filteredString = relevantCharacters.join('').toLowerCase();
  reversedString = filteredString.split('').reverse().join('');

  return filteredString.length > 0 && filteredString === reversedString;
};