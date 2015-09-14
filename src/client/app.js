var GrassTile = require('./grass-tile');

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var grassTile = new GrassTile(ctx, {x: 10, y: 10});
var grassTile2 = new GrassTile(ctx, {x: 130, y: 10});
var grassTile3 = new GrassTile(ctx, {x: 10, y: 130});

grassTile.draw();
grassTile2.draw();
grassTile3.draw();