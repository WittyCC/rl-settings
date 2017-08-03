(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "AIzaSyBuABXO2DJw30YYg94hBQmhRQ-uBlnIAbs";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#view-location').click(function() {
    var location = $('#location').val();
    $('#location').val("");
    $('.showView').text("You have chosen " + location + ".");
    var img = $('<img />', {src : 'https://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + location +'&fov=90&heading=360&pitch=10&key=' + apiKey});
    img.appendTo('.showView');

    $.get('https://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + location + '&fov=90&heading=360&pitch=10&key=' + apiKey, function(response) {
    });
  });
});

},{"./../.env":1}]},{},[2]);
