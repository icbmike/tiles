function GrassTile(ctx, position){
	this.ctx = ctx;
	this.position = position;
}

GrassTile.prototype.draw = function(){
	this.ctx.fillStyle = "green";
	this.ctx.fillRect(this.position.x, this.position.y, 50, 50);
};

module.exports = GrassTile;