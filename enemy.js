function Enemy(pos, r){
	if(pos){
		this.pos = pos.copy();
	} else {
		this.pos = createVector(random(width), random(height));
	}
	
	this.vel = p5.Vector.random2D();
	if(r){
		this.r = r * 0.5;
	} else {
		this.r = random(10, 25);
	}
	
	this.total = floor(random(5, 15));
	this.offset = [];
	for (var i = 0; i < this.total; i++){
		this.offset[i] = random(-this.r*0.5, this.r*0.5);
	}

	this.update = function(){
		this.pos.add(this.vel);
	}

	this.edges = function(){
		if(this.pos.x > width + this.r){
			this.pos.x = -this.r;
		} else if (this.pos.x < -this.r){
			this.pos.x = width + this.r;
		}
		if(this.pos.y > height + this.r){
			this.pos.y = -this.r;
		} else if (this.pos.y < -this.r){
			this.pos.y = height + this.r;
		}
	}

	this.render = function(){
		push();
		translate(this.pos.x, this.pos.y);
		fill('gray')
		noStroke();
		rect(0, 0, this.r+20, this.r);
		pop();
	}

	this.breakup = function(){
		var newA = [];
		newA[0] = new Enemy(this.pos, this.r);
		newA[1] = new Enemy(this.pos, this.r);
		return newA;
	}
}