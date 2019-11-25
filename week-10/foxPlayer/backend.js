'use strict';

var jsmediatags = require("jsmediatags");

jsmediatags.read("./assets/music/Purple_Drift.mp3", {
  onSuccess: function(tag) {
    console.log(tag);
  },
  onError: function(error) {
    console.log(':(', error.type, error.info);
  }
});
