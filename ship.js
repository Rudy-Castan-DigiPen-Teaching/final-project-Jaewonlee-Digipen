//Jaewon Lee, Final Project, cs099, Spring, 2020
function Ship(){
	this.pos = createVector(width/2, height/2);
	this.r = 10;
	this.heading = 0;
	this.rotation = 0;
	this.vel = createVector(0, 0);
	this.isBoosting = false;
	this.c = color(100, 255,100);

	this.boosting = function(b) {
		this.isBoosting = b;
	}

	this.render = function(){
		push(); 
		translate(this.pos.x, this.pos.y);
		rotate(this.heading + PI/2);
		fill(0);
		stroke(this.c);
		triangle(-this.r, this.r, this.r, this.r, 0, -this.r - 5);
		pop();
	}

	this.update = function(){
		if(this.isBoosting){
			this.boost();	
		}
		this.pos.add(this.vel);
		this.vel.mult(0.99);
	}

	this.boost = function(){
		var force = p5.Vector.fromAngle(this.heading);
		force.mult(0.2);//전신 속도 제한
		this.vel.add(force);
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

	this.setRotation = function(a){
		this.rotation = a;
	}

	this.turn = function(){
		this.heading += this.rotation;
	}

	this.hits = function(aliens){
		var d = dist(this.pos.x, this.pos.y, aliens.pos.x, aliens.pos.y);
		if (d < this.r + aliens.r){
			return true;
		} else {
			return false;
		}
	}
}