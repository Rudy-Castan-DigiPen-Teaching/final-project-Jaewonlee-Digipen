//Jaewon Lee, Final Project, cs099, Spring, 2020
function Firework(x, y){
		this.particles = [];
		this.gravity = createVector(0, 0);//이 예제에서는 사용안 함
		this.alpha = 255;

		// Praticles에 추가 
		for(var i = 0; i < 30; i++){
			var p = new Explode(x, y);
			this.particles.push(p);
		}

		this.run = function(){
			for(var i = 0; i < this.particles.length; i++){
				this.particles[i].update();
				this.particles[i].show();
				this.particles[i].applyForce(this.gravity);
				if(this.particles[i].finished()){
					this.particles.splice(i, 1);
				}
			}
		}
	}       