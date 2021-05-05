
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let enemy=[],aster=[],gun=[],heart=[],fire=[],fire2=[],fire_enemy=[],expl=[];
	
let timer_bull=0,timer_heart=0,timer_fire=0,timer_fire2=0,timer_aster=0,timer_enemy=0;timer_fire_enemy=0;

let bul = 0, lifes = 100, time = 10000;

const fin = document.querySelector('.final'),
	  over = document.querySelector('.over'),
	  progress = document.querySelector('.progress'),
	  progress2 = document.querySelector('.progress2'),
	  pictures_bullit =document.querySelector('.pictures_bullit');

const modal_menu_back_win = document.querySelector('.menu').addEventListener('click', () => {
	  if (state.current == state.win) state.current = state.getReady;
	});
const modalCloseBtn_over = document.querySelector('.data-close_over').addEventListener('click', closeModal);

const  modalGameBtn_over = document.querySelector('.data-game').addEventListener("click", () => {
	if (state.current == state.getReady || state.current == state.over) {state.current = state.game;reset()}	
    })

const article = document.querySelectorAll('article'),
      article1 = document.querySelector('.article1'),
      article2 = document.querySelector('.article2');

const startFrogimg = new Image();
startFrogimg.src = "img/startfrog2_2.png";
const maskimg = new Image();
maskimg.src = "img/mask.png";
const start0img = new Image();
start0img.src = 'img/basic.png';
const astimg = new Image();
astimg.src = "img/basic.png";
const heartimg = new Image();
heartimg.src = 'img/shit_smooth.png';
const gunimg = new Image();
gunimg.src = 'img/basic.png';
const enemyimg = new Image();
enemyimg.src = 'img/basic.png';
const fireimg = new Image();
fireimg.src = 'img/basic.png';
const shipimg = new Image();
shipimg.src = 'img/basic.png';
const fonimg = new Image();
fonimg.src = 'img/fon24.jpg';
const winimg = new Image();
winimg.src = 'img/win1.jpg';
const explimg = new Image();
explimg.src = 'img/ex.png';
const shiimg = new Image();
shiimg.src = 'img/s2_1.png';
const over2img = new Image();
over2img.src = 'img/over2_2.png';

const getStart = new Audio ();
getStart.src = "sou/getReady.mp3";
const getOver = new Audio ();
getOver.src = "sou/over.mp3";
const getOverbefore = new Audio ();
getOverbefore.src = "sou/over1.mp3";
const getGame = new Audio ();
getGame.src = "sou/game.mp3";
const getPatron = new Audio ();
getPatron.src = "sou/gun.mp3";
const getHeart = new Audio ();
getHeart.src = "sou/heart.mp3";
const getBullit = new Audio ();
getBullit.src = "sou/bullit.mp3";
const getExplosion = new Audio ();
getExplosion.src = "sou/explosion.mp3";
const getGameover = new Audio ();
getGameover.src = "sou/gameover.mp3";



class Images {
	constructor(sX,sY,x,y,width,height,width_size,height_size,speed,frameX, frameY) {
		this.sX=sX;
		this.sY=sY;
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		this.width_size=width_size;
		this.height_size=height_size;
		this.speed=speed;
		this.frameX=frameX;
      	this.frameY=frameY;
	}

	draw() {
		context.drawImage(start0img, this.sX, this.sY, this.width, this.height, this.x,this.y, this.width_size, this.height_size);
	}
	draw_ship() {
		context.drawImage(shipimg, this.sX, this.sY, this.width, this.height, this.x, this.y, this.width_size, this.height_size);
	}
	draw_over() {
		context.drawImage(over2img, this.sX, this.sY, this.width, this.height, this.x, this.y, this.width_size, this.height_size); 
	}
	draw_fon() {
		context.drawImage(fonimg, this.sX, this.sY, this.width, this.height, this.x, this.y, this.width_size, this.height_size);    
        context.drawImage(fonimg, this.sX, this.sY, this.width, this.height, this.x, this.y - this.height,this.width_size, this.height_size);
	}
	draw_frog(){
    context.fillStyle = "#000"; 
    context.fillRect(0,0, canvas.width, canvas.height);
    context.drawImage(startFrogimg, this.width * this.frameX, this.height * this.frameY, this.width , this.height, this.x,this.y, this.width_size , this.height_size);
    }
    draw_mosk() {
    context.drawImage(maskimg, this.x, this.y, this.width, this.height);
    this.x = this.x-this.speed;
    if (this.x <= 440) this.x= -100;  
    }
    draw_shield() {
    	context.drawImage(shiimg, Math.floor(this.frameX),180*Math.floor(this.frameY),this.width , this.height, ship.x-30, ship.y, this.width_size , this.height_size);
    	this.frameX=this.frameX+1;
		if (this.frameX>12) {this.frameY++; this.frameX=0};
		if (this.frameY>11) {this.frameX=0; this.frameY=0};
    }
  	update_fon() {
  		this.y = (this.y + this.speed)%(this.height/2);
  		}
  	update_enyme_bul() {
		for (i in fire_enemy) {
		if (Math.abs(fire_enemy[i].x+25-ship.x-15)<50 && Math.abs(fire_enemy[i].y-ship.y)<25) {	
  		expl.push({x:ship.x-25,y:ship.y-25,frameX:0,frameY:0});
		getExplosion.play();
		fire_enemy.splice(i,1);
		lifes -=30;	
  		}
	}
  }
}

 const fon = new Images(0,0,0,0,canvas.width,canvas.height,canvas.width,canvas.height,2,0,0)
 const curson = new Images(70,155,390,410,175,175,85,85,0,0,0);
 const ship = new Images (315,470,150,150,110,140, 50, 60,0,0,0)
 const gameOver = new Images(0,0,760,100,500,630,400,400,0,0,0);
 const startFrog = new Images(0,0,200,190,277,200,275.9,200,0,0,1);
 const mosk = new Images (0,0,540,270,75,75,75,75,1,0,0);
 const ship_shield = new Images(0,0,0,0,180,70,120,60,0,0,0);



const main = (function() {
	const draw1 = () => {
		for (e in expl) {
			context.drawImage(explimg, 605*Math.floor(expl[e].frameX),605*Math.floor(expl[e].frameY),128,128, expl[e].x, expl[e].y, 100, 100);
			
			expl[e].frameX=expl[e].frameX+0.15;
			if (expl[e].frameX>7) {expl[e].frameY++; expl[e].frameX=0}
			if (expl[e].frameY>7)
			expl.splice(e,1);
			}
		}
	const draw2=() => {
			for(i in fire) {
			context.drawImage(fireimg, fire[i].sX, fire[i].sY, fire[i].w, fire[i].h, fire[i].x, fire[i].y, 30, 60);

			fire[i].x=fire[i].x+fire[i].dx;
			fire[i].y=fire[i].y+fire[i].dy;
			if(fire[i].y<-25) fire.splice(i,1);	
			if(bul  <=0) fire.splice(i,1);
		}

		canvas.addEventListener('click', function() {
		timer_fire+=0.5;
		if (timer_fire%1200==0) {
		fire.push({sX:420, sY:660, w:70, h:110, x:ship.x+5, y:ship.y, dx:0, dy:-5.2});
		fire.push({sX:420, sY:660, w:70, h:110, x:ship.x+10, y:ship.y, dx:+8, dy:-5.2});
		fire.push({sX:420, sY:660, w:70, h:110, x:ship.x+15, y:ship.y, dx:-6, dy:-5.2});
		fire.push({sX:420, sY:660, w:70, h:110, x:ship.x+5, y:ship.y, dx:-3, dy:-5.2});
		fire.push({sX:420, sY:660, w:70, h:110, x:ship.x+10, y:ship.y, dx:+3, dy:-5.2});
		fire.push({sX:420, sY:660, w:70, h:110, x:ship.x+15, y:ship.y, dx:+6, dy:-5.2});
			
		bul--;
 		if (bul <=0) bul=0;
			}
		})

		timer_fire2++;
		for (i in fire2){
		context.drawImage(fireimg, fire2[i].sX, fire2[i].sY, fire2[i].w, fire2[i].h, fire2[i].x, fire2[i].y, 30, 60);
		fire2[i].x=fire2[i].x+fire2[i].dx;
		fire2[i].y=fire2[i].y+fire2[i].dy;
		if(fire2[i].y<-25) fire2.splice(i,1);
		}
		if (timer_fire2%150==0) fire2.push({sX:310, sY:630, w:60, h:130, x:ship.x, y:ship.y, dx:0, dy:-5});
	}
	const draw3 = () => {
		for(i in gun) {
		context.drawImage(gunimg, gun[i].sX, gun[i].sY, gun[i].w, gun[i].h, gun[i].x,gun[i].y,50,50);
			
		if (Math.abs(ship.x+25-gun[i].x-25)<50 && Math.abs(ship.y+5-gun[i].y-5)<40) {			
		bul+=6;
		getPatron.play();
		gun[i].del=1;
		gun.splice(i,1);
		break;
		};

		gun[i].x=gun[i].x+gun[i].dx;
		gun[i].y=gun[i].y+gun[i].dy;
		
		if (gun[i].x>=canvas.width || gun[i].x<0) gun[i].dx=-gun[i].dx;
		if(gun[i].y>=canvas.height) gun.splice(i,1);
		}

		timer_bull++;
		if (timer_bull%1000==0) {
		gun.push({sX: 420,sY: 660,w: 65,h: 110,x:Math.random()*canvas.width,y:-150, dx:Math.random()*2-1, dy:Math.random()*2+2,dxangle:Math.random()*0.01-0.01,del:0})
		}

		if (bul<=1 ) {
		let picture = document.getElementById("picture");
		let picture2 = document.getElementById("picture2");
		let picture3 = document.getElementById("picture3");
		picture2.style.display="inline";
		picture3.style.display="inline";
		picture.style.display = "none";	
		} 
		else {
		picture.style.display = "inline";
		picture2.style.display="none";
		picture3.style.display="none";
		}
	}

	const draw4 =() => {
		for(i in aster) {
		context.save();
		context.translate(aster[i].ast_x+25, aster[i].ast_y+25);
		context.rotate(aster[i].angle);
		context.drawImage(astimg, 415, 150, 120, 130, -25,-25,50,50);
		context.restore();
		}

		timer_aster++;
		if (timer_aster%10==0) {
		aster.push({
		ast_x:Math.random()*canvas.width,
		ast_y:-150, 
		dx:Math.random()*2-1, 
		dy:Math.random()*2+2,
		angle:0,
		dxangle:Math.random()*0.15-0.05,
		del:0
			})
		}

		if (lifes <=0) {
		if (state.current == state.game) {
			state.current = state.over; 

			getGame.pause();
			getGame.currentTime = 0; 
			getGame.pause(); 
			getGame.currentTime = 0;	
			}
			lifes=0;
			aster[i].del=1;
			heart.splice(i,1);
			gun.splice(i,1);
			fire.splice(i,1);	
			aster.splice(i,1);
			}
		if(state.current == state.game){
			getStart.pause();
	 		getStart.currentTime = 0;
	        getGame.play();  	
        	}

		for (i in aster) {
		if (Math.abs(ship.x+25-aster[i].ast_x-15)<30 && Math.abs(ship.y+5-aster[i].ast_y-5)<40) {
		expl.push({x:ship.x-25,y:ship.y-25,frameX:0,frameY:0});
		getExplosion.play();
		lifes-=10;
		aster.splice(i,1);
		}
		}

		for (i in aster) {
		aster[i].ast_x=aster[i].ast_x+aster[i].dx; 
		aster[i].ast_y=aster[i].ast_y+aster[i].dy;
		aster[i].angle=aster[i].angle+aster[i].dxangle;

		if (aster[i].ast_x>=canvas.width || aster[i].ast_x<0) aster[i].dx=-aster[i].dx;
		if (aster[i].ast_y>=canvas.height) aster.splice(i,1);

		for (j in fire2){
		if (Math.abs(aster[i].ast_x+25-fire2[j].x-15)<50 && Math.abs(aster[i].ast_y-fire2[j].y)<25) {	
		expl.push({x:aster[i].ast_x-25,y:aster[i].ast_y-25,frameX:0,frameY:0});
		getExplosion.play();
		fire2.splice(j,1);
		aster.splice(i,1);
				}	
			}
		for(j in fire) {
		if (Math.abs(aster[i].ast_x+25-fire[j].x-15)<50 && Math.abs(aster[i].ast_y-fire[j].y)<25) {	
		expl.push({x:aster[i].ast_x-25,y:aster[i].ast_y-25,frameX:0,frameY:0});
		getExplosion.play();
		if (aster[i].del=1) {
		fire.splice(j,1);
		aster.splice(i,1);
					}		
				}
			}
		}
	}

	const draw5 = () => {
	for(i in enemy) {
	context.drawImage(enemyimg, enemy[i].sX, enemy[i].sY, enemy[i].w, enemy[i].h, enemy[i].x, enemy[i].y, 80,50);
	}
	for (i in fire_enemy) {
	context.drawImage(enemyimg, fire_enemy[i].sX, fire_enemy[i].sY, fire_enemy[i].w, fire_enemy[i].h, fire_enemy[i].x, fire_enemy[i].y, 40,50);
	}
	
	timer_enemy++;
	if (timer_enemy%500==0) {
		enemy.push({sX:40,sY:330,x: -100,y: 100,w:165,h:100,dx:0.1,dy:0,})
		}

	for(i in enemy){
	enemy[i].x = enemy[i].x +enemy[i].dx;
	enemy[i].y = 100+0.1*Math.sin(enemy[i].x);
		if (enemy[i].x>=canvas.width)  enemy[i].dx-=0.01;
		else if  (enemy[i].x<=canvas.width)  enemy[i].dx+=0.01;
	else enemy[i].x=enemy[i].x+0.3;
	}

  	for (j in fire){
  	 	for (i in enemy){
	  	if (Math.abs(enemy[i].x+25-fire[j].x-15)<50 && Math.abs(enemy[i].y-fire[j].y)<25) {	
	  		expl.push({x:enemy[i].x-25,y:enemy[i].y-25,frameX:0,frameY:0});
			getExplosion.play();
			fire.splice(j,1);
			enemy.splice(i,1);	
			}
		}
	}

	timer_fire_enemy++;
	for (i in enemy){			
	if (timer_fire_enemy%100==0){
	fire_enemy.push({sX:200, sY:660, w:60, h:110, x:enemy[i].x, y:enemy[i].y, dx:+1, dy:-5});
	fire_enemy.push({sX:200, sY:660, w:60, h:110, x:enemy[i].x, y:enemy[i].y, dx:-1, dy:-5});	
	} 

   for (j in fire2){
    if (Math.abs(enemy[i].x+25-fire2[j].x-15)<50 && Math.abs(enemy[i].y-fire2[j].y)<25) {	
	expl.push({x:enemy[i].x-25,y:enemy[i].y-25,frameX:0,frameY:0});
	getExplosion.play();
	fire2.splice(j,1);
	enemy.splice(i,1);
			}
		}	
	}

	for(i in fire_enemy) { 
	fire_enemy[i].x=fire_enemy[i].x-fire_enemy[i].dx;
	fire_enemy[i].y=fire_enemy[i].y-fire_enemy[i].dy;
	if(fire_enemy[i].y>canvas.height) fire_enemy.splice(i,1);
		}
	}

	const draw6 = () => {
		if(state.current == state.game) time--; 

		if (time <=500) {timer_aster-=2;timer_fire2--;bul =0;timer_bull--;timer_heart--;timer_enemy--;timer_fire_enemy--;getOverbefore.play();};
		
		if (time <=0 ) {
	 	getOverbefore.pause();
	 	getOverbefore.currentTime = 0;
	 	getGame.pause();
	 	getGame.currentTime = 0;
			
		if (state.current == state.game) {
			state.current = state.win;   
			getOver.play();
		}
		time=0;		
    	}
	}

	const draw7 = () => {
		for(i in heart) {
			context.drawImage(heartimg, heart[i].x,heart[i].y,40,40);
			
			if (Math.abs(ship.x+25-heart[i].x-25)<50 && Math.abs(ship.y+5-heart[i].y-5)<40) {
			getHeart.play();
			lifes+=20;
			if (lifes >=99) lifes=100;
			heart[i].del=1;
			heart.splice(i,1);
			}
		}

		for(i in heart) {
		heart[i].x=	heart[i].x+	heart[i].dx;
		heart[i].y=heart[i].y+heart[i].dy;

		if (heart[i].x>=canvas.width || heart[i].x<0) heart[i].dx=-heart[i].dx;
		if(heart[i].y>=canvas.height) heart.splice(i,1);
		}

		timer_heart++;
		if (timer_heart%800==0) {
		heart.push({x:Math.random()*canvas.width,y:-150, dx:Math.random()*2-1, dy:Math.random()*2+2,dxangle:Math.random()*0.01-0.01,del:0})
			};
		}
	
	return {
      boom:draw1,
      fire_bull:draw2,
      bull:draw3,
      asteroid:draw4,
      enemy:draw5,
      end:draw6,
      heart:draw7
 	}
}());

const state = {
    current : 0,
    startdark: 0,
    getReady : 1,
    game : 2,
    over : 3,
    win:4,
}

     const startdark = setTimeout(function(){ 
       if(state.current == state.startdark) state.current = state.getReady;   
        }, 6000);

canvas.addEventListener("mousemove", function(event) {
	
	ship.x=event.offsetX-25;
	ship.y=event.offsetY-50;

	curson.x = event.offsetX-25;
	curson.y =event.offsetY-50;
});

///////////////////////////////

//touchmove

canvas.addEventListener("touchmove", function(event) {
	ldelay=new Date();
	// ship.x=event.offsetX-25;
	// ship.y=event.offsetY-50;
	event.preventDefault();
	event.stopPropagation();
	ship.x=event.changedTouches[0].pageX-25;
	ship.y=event.changedTouches[0].pageY-50;
	  if (ship.x < canvas.width) ship.x=50;
	  if (ship.x>canvas.width) ship.x = canvas.width;
	  if (ship.y < 50) ship.y = 50;
	  if (ship.y>canvas.height) ship.y = canvas.height;      
	}, false);

canvas.addEventListener("touchend", function(event) {
var pdelay=new Date();
if(event.changedTouches[0].pageX==ship.x &&
event.changedTouches[0].pageY==ship.y &&
(pdelay.getTime()-ldelay.getTime())>400){
  if (ship.x < canvas.width) ship.x=50;
  if (ship.x>canvas.width) ship.x = canvas.width;
  if (ship.y < 50) ship.y = 50;
  if (ship.y>canvas.height) ship.y = canvas.height; 
        }
}, false);

//////////////////////////////////////////


let fps, fpsInterval, startTime, now, then, elapsed;

function startAnimating(fps) {
  fpsInterval = 1000/fps;
  then = Date.now();
  startTime = then;
  animate();
}

  function animate() {
  requestAnimationFrame(animate);
  now = Date.now();
  elapsed = now-then;
  if(elapsed >fpsInterval) {
  then = now - (elapsed % fpsInterval);
   }

   context.clearRect(0,0, canvas.width, canvas.height);
	update();
	render();
}
 startAnimating(10);

 window.addEventListener('resize', function() {
  canvas.height = window.innerHeight;;
  canvas.width = window.innerWidth;;
});

 function reset() {
 	bul = 0;
	lifes = 100;
	time = 10000;
 }

function update() {
	if (state.current == state.game){fon.update_fon()}
	main.end();
	ship_shield.update_enyme_bul();
};

function render() {

	if (state.current == state.startdark){
	startFrog.draw_frog();
	mosk.draw_mosk();

	const frog =  setTimeout(function(){
    if(startFrog.frameX <6) {startFrog.frameX++; startFrog.frameY = 1}
    else startFrog.frameX =  6;
    }, 1500); 
	}

	if (state.current == state.getReady){
	fon.draw_fon();
	curson.draw();
	showTabContent_over()
	hideTabContent()
	reset()

	getGame.pause();
 	getGame.currentTime = 0;
 	getOver.pause();
	getOver.currentTime = 0;
	getStart.play();
	}
	if (state.current == state.game){
	hideTabContent_over();
	showTabContent_top_stuff();
	fon.draw_fon();
	ship.draw_ship();
	main.heart();
	main.fire_bull();
	main.boom();
	main.bull();
	main.asteroid();
	main.enemy();
	ship_shield.draw_shield();
	}

	if (state.current == state.over){
	showTabContent_over();
	hideTabContent_top_stuff();
	fon.draw_fon();
	curson.draw();
	gameOver.draw_over();

	aster.splice(i,1);
	gun.splice(i,1);			
	fire.splice(i,1);
	fire2.splice(i,1);					
	heart.splice(i,1);
	enemy.splice(i,1);
	fire_enemy.splice(i,1);
	expl.splice(i,1);
	}
	
	if (state.current == state.win){
	showTabContent();
	hideTabContent_top_stuff();
	aster.splice(i,1);
	gun.splice(i,1);			
	fire.splice(i,1);
	fire2.splice(i,1);				
	heart.splice(i,1);
	enemy.splice(i,1);
	fire_enemy.splice(i,1);
	expl.splice(i,1);
	}
};



  function progressBarSim(al) {
  let bar = document.getElementById('progressBar');
  let status = document.getElementById('status');
  status.innerHTML = al+"%";
    bar.value = al;
  al = time;
  al--;
	let sim = setTimeout("progressBarSim("+al+")",100);
	if(al == time){
	  status.innerHTML = "100%";
	  bar.value = 100;
	  clearTimeout(sim);
	}
}
	let amountLoaded = 0;
	progressBarSim(amountLoaded);


  function progressBarSim2(al2) {
  let bar2 = document.getElementById('progressBar2');
  let status2 = document.getElementById('status2');
  status2.innerHTML = al2+"%";
    bar2.value = al2;
  al2 = lifes;
  al2++;
	let sim2 = setTimeout("progressBarSim2("+al2+")",300);
	if(al2 == 100){
	  status2.innerHTML = "100%";
	  bar2.value = 100;
	  clearTimeout(sim2);

	}
}
	let amountLoaded2 = 0;
	progressBarSim2(amountLoaded2);


 window.addEventListener('resize', function() {
  canvas.height = canvas.height;
  canvas.width = canvas.width;
});


	function closeModal() {
		window.close();
	}

	function hideTabContent() {
	fin.classList.add('hide');
	fin.classList.remove('show');
	};

	function showTabContent() {
	fin.classList.add('show');
	fin.classList.remove('hide');
	}

	function hideTabContent_over() {
	over.classList.add('hide');
	over.classList.remove('show');
	};

	function showTabContent_over() {
	over.classList.add('show');
	over.classList.remove('hide');
	}

	function showTabContent_top_stuff() {
	progress.classList.add('show');
	progress2.classList.add('show');
	pictures_bullit.classList.add('show');
	progress.classList.remove('hide');
	progress2.classList.remove('hide');
	pictures_bullit.classList.remove('hide');
		
	}
	function hideTabContent_top_stuff() {
	progress.classList.add('hide');
	progress2.classList.add('hide');
	pictures_bullit.classList.add('hide');
	progress.classList.remove('show');
	progress2.classList.remove('show');
	pictures_bullit.classList.remove('show');
		
	}


 const hideElement = () => {
      article1.classList.add('hide');
      article2.classList.add('show');
    };
    const deleteElement = (e) => {
        e.target.remove();
      };
    article.forEach(btn => {
    btn.addEventListener('click', hideElement);
    });
    article.forEach(btn => {
    btn.addEventListener('click', deleteElement);
    });


	function stars() {
				let count = 20;
				let scene = document.querySelector('#wrapper');
				let i = 0;
				while (i < count) {
					let star = document.createElement('i');
					let x = Math.floor(Math.random() * window.innerWidth);

					let duration = Math.random() * 1;
					let h = Math.random() * 100;

					star.style.left = x + 'px';
					star.style.width = 1 + 'px';
					star.style.height = 5 + h + 'px';
					star.style.animationDuration = duration + 's';

					scene.appendChild(star);
					i++;
				}
			}
	stars();

