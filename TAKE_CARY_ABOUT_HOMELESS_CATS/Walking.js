
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.height = 800;
canvas.width = 1280;

const startFrogimg = new Image();
startFrogimg.src = "img/startfrog2_2.png";
const overimg = new Image();
overimg.src = "img/warm3.jpg";
const maskimg = new Image();
maskimg.src = "img/mask.png";
const startimg = new Image();
startimg.src = 'img/start.png';
const fishimg2 = new Image();
fishimg2.src = 'img/fish.png';
const opened_canimg = new Image();
opened_canimg.src = 'img/opened_can.png';
const player = new Image();
player.src = 'img/pl2.png';
const animal = new Image();
animal.src = 'img/warm.png';
const cat_upimg = new Image();
cat_upimg.src = 'img/cat1.png';
var boxf = new Image();
boxf.src = 'img/9.png';
const background = new Image();
background.src = "img/bg2.jpg";
const pitimg = new Image();
pitimg.src = "img/pit.png";
const lakeimg = new Image();
lakeimg.src = "img/lake.png";
const fishimg = new Image();
fishimg.src = 'img/fish2_3_3.png';
const fishing_rodimg = new Image();
fishing_rodimg.src = 'img/fishing_rod.png';
const storeimg = new Image();
storeimg.src = 'img/store2_1.png';
const basketimg = new Image();
basketimg.src = 'img/bascket.png';
const pumimg = new Image();
pumimg.src = 'img/pum.png';
const fingerimg = new Image();
fingerimg.src = 'img/finger3.png';
const finger_leftimg = new Image();
finger_leftimg.src = 'img/finger_left1.png';

const start_getReady = new Audio();
start_getReady.src = "sound/start_getReady.mp3";
const game_start = new Audio();
game_start.src = "sound/game_start.mp3";
const game = new Audio();
game.src = "sound/game.mp3";
const menu = new Audio();
menu.src = "sound/menu.mp3";
const hole_s = new Audio();
hole_s.src = "sound/hole.mp3";
const start_worm = new Audio();
start_worm.src = "sound/start_worm.mp3";
const walk = new Audio();
walk.src = "sound/walk.mp3";
const worms = new Audio();
worms.src = "sound/worm.mp3 ";
const start_darkplace_sound = new Audio();
start_darkplace_sound.src = "sound/start_darkplace.mp3";
const drop_bone_sound = new Audio();
drop_bone_sound.src = "sound/drop_bone.mp3";
const crush_worm_sound = new Audio();
crush_worm_sound.src = "sound/crush_worm.mp3 ";
const escape_worm = new Audio();
escape_worm.src = "sound/escape_worm.mp3 ";
const drop_fish_sound = new Audio();
drop_fish_sound.src = "sound/drop_fish.mp3 ";
const finger_sound = new Audio();
finger_sound.src = "sound/finger.mp3 ";
const cat_sounds = new Audio();
cat_sounds.src = "sound/cat_sounds.mp3 ";
const yelling_sound = new Audio();
yelling_sound.src = "sound/R.mp3 ";


const pum =[];
const fingerUp = [];
const finger_left = [];
let game_s = false;

let bondDropimg = document.querySelector('#bone1'),
	 fishDropimg = document.querySelector('#fish1'),
	 cat = document.querySelector('#cat span'),
	 cat1 = document.querySelectorAll('#cat span.tabcontent'),
	 bone_dis = document.querySelector('#bone1'),
	 fish_dis = document.querySelector('#fish1'),
   article = document.querySelectorAll('article'),
   article1 = document.querySelector('.article1'),
   article2 = document.querySelector('.article2'); 

let worm = 0;
let fish_drop = 0;
let fish_bone = 0;
let cat_up_count = 5;


const character=[];
const character2=[];
const character3=[];
const boxeff =[];
const keys = [];
let numofC = 1;
// let cats =2;

const state = {
	    current : 0,
	    startdark: 0,
	    getReady : 1,
	    game : 2,
	    over : 3,   
	};
   

const getReady = {
  w: 800,
  h: 600,
  x: 200,
  y: 100,

   draw: function(){
        ctx.drawImage(startimg, this.x, this.y, this.w, this.h);   
        }
    }

  const over = {
  w: 600,
  h: 600,
  x: 350,
  y: 100,

   draw: function(){
        ctx.drawImage(overimg, this.x, this.y, this.w, this.h);   
        }
    }

const box = {
    x:0,
    y:0,

  draw: function() {
   
       for (i in boxeff){
        ctx.drawImage(boxf, 270 * Math.floor(boxeff[i].animx),280 * Math.floor(boxeff[i].animy), 270, 280, boxeff[i].x, boxeff[i].y, 100,100);
        
      }
    }
}


const opened_can = {
  x:1000,
  y:700,

  draw: function () {
   
     ctx.drawImage(opened_canimg, this.x, this.y, 60, 60);
  }
}


const fon = {
  w:canvas.width,
  h: canvas.height,
  x:0,
  y:0,

  time: 400,
  timer_finfer: 50,

  draw: function() {
  
    ctx.drawImage(background, this.x, this.y, this.w, this.h);

    // ctx.lineWidth = 1;
    // ctx.font = "35px Teko";
    // ctx.fillStyle = "#b7a8bd";
    // ctx.strokeStyle = "#000";
    // ctx.fillText(fon.time, 250,150); 
    // ctx.strokeText(fon.time, 250, 150);

    // ctx.lineWidth = 1;
    // ctx.font = "80px Teko";
    // ctx.fillStyle = "#b7a8bd";
    // ctx.strokeStyle = "#000";
    // ctx.fillText(fon.timer_finfer, 140,190); 
    // ctx.strokeText(fon.timer_finfer, 140, 190);

     ctx.lineWidth = 1;
    ctx.font = "80px Teko";
    ctx.fillStyle = "#b7a8bd";
    ctx.strokeStyle = "#000";
    ctx.fillText(worm, 20,90); 
    ctx.strokeText(worm, 20, 90);

     ctx.lineWidth = 1;
    ctx.font = "80px Teko";
    ctx.fillStyle = "#b7a8bd";
    ctx.strokeStyle = "#000";
    ctx.fillText(cat_up_count, 1100,90); 
    ctx.strokeText(cat_up_count, 1100, 90);



    ctx.lineWidth = 1;
    ctx.font = "80px Teko";
    ctx.fillStyle = "#38abc8";
    ctx.strokeStyle = "#000";
    ctx.fillText(fish_drop, 280,90); 
    ctx.strokeText(fish_drop, 280, 90);
    

    ctx.lineWidth = 1;
    ctx.font = "80px Teko";
    ctx.fillStyle = "#e4e5c5";
    ctx.strokeStyle = "#000";
    ctx.fillText(fish_bone, 560,90); 
    ctx.strokeText(fish_bone, 560, 90);
  },

  update: function() {
    if (worm>=2) this.timer_finfer--;
    if (this.timer_finfer <=0) this.timer_finfer = 60; 
    if (worm>0) fon.time--;
    if(worm === 0 ) this.time = 400;
    if(this.time <=0) {
        this.time = 400;
        worm = 0;

       const timeEscapestart = new Promise((escapeWarm, reject) => {
        setTimeout (() => {  
        warm.frameY = 0;
        warm.maxFrame = 8;
        warm.minFrame = 0;
        warm.reset()
        escape_worm.play();

        escapeWarm();
        },1000);
      });
      timeEscapestart.then(() => {
      return new Promise ((escapeWarm2, reject)=>{
          setTimeout (() =>{
        warm.frameY2 = 3;
        warm.maxFrame2 = 5;
        warm.minFrame2 = 0;

        escapeWarm2();  
        reject();
        },1500);
      }).then(() => {
      return new Promise ((escapeWarm3, reject)=>{
          setTimeout (() =>{
        warm.frameY3 = 1;
        warm.maxFrame3 = 8;
        warm.minFrame3 = 0;
        escape_worm.play();

        escapeWarm3();  
        reject(); 
        },2000);
      }).catch(()=> {
      console.error('I dont want to escape fron here))')
      }).finally(()=> {
      setTimeout (() => {
         warm.frameY = 4;
        },2000);
      setTimeout (() => {
        warm.frameY2 = 4;
        },3000);
      setTimeout (() => {
        warm.frameY3 = 4;
        },4000);
      });
  })
     });
    }else if (worm >= 2){
      worm = 2;
    }

  }
}

const cat_up = {
  cat_up_w:130,
  cat_up_h:100,
  cat_up_x:1150,
  cat_up_y:20,

  draw: function() {
   
    ctx.drawImage(cat_upimg, this.cat_up_x, this.cat_up_y, this.cat_up_w, this.cat_up_h);
  }
}

const lake = {
  w:500,
  h: 400,
  x:-220,
  y:520,

  draw: function() {
   
    ctx.drawImage(lakeimg, this.x, this.y, this.w, this.h); 
  }
 }

 const bask = {
    x: 70,
    y: 10,
    w: 80,
    h: 108,

  wowm_like_w:70,
  wowm_like_h: 70,
  wowm_like_x:65,
  wowm_like_y:50,
  wowm_like_frameX: 0,
  wowm_like_frameY: 11,
   
  draw: function() { 
  
        ctx.drawImage(basketimg, this.x, this.y, this.w, this.h);
        ctx.drawImage(animal, this.wowm_like_w * this.wowm_like_frameX , this.wowm_like_h * this.wowm_like_frameY, this.wowm_like_w, this.wowm_like_h, this.wowm_like_x, this.wowm_like_y, 70, 70); 
  }
};

const hole = {
    x: 500,
    y: -200,
    w: 80,
    h: 100,
   
  draw: function() {
 
        ctx.drawImage(pitimg, this.x, this.y, this.w, this.h);
      }
    }
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const worm_start = {
    x: 600,
    y: 600,
    width: 70,
    height: 74.5,
    frameX: 0,
    frameY: 0,
    speed: 0.8,
    maxFrame:0,
    minFrame:0,

    draw: function () {
     
      ctx.drawImage(animal, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, 60, 60);
      if (this.frameX <this.maxFrame) this.frameX++;
      else this.frameX = this.minFrame;
    
  },

    update: function () {

       const start_worm_move = new Promise((startWarm, reject) => {
    
        worm_start.x-=2;
        worm_start.frameY = 9;
        worm_start.maxFrame = 11;
        worm_start.minFrame = 0;
        worm_start.width = 71;
        worm_start.height= 70;
        window.addEventListener("keydown", function(e) {
        keys[e.keyCode] = false;
        //delete keys[e.keyCode]; 
        });

        setTimeout (() => {
        worm_start.x+=10; 
        worm_start.frameY = 0;
        worm_start.maxFrame = 8;
        worm_start.minFrame = 0;
        
        var start_worm_play = start_worm.play(); 
        if (start_worm_play !== undefined) {
        start_worm_play.then( () => {
        start_worm.play();
         })
         } 

        startWarm();
        },4000);
      });
      start_worm_move.then(() => {
      return new Promise ((startWarm2, reject)=>{
        setTimeout (() => {
        worm_start.x -=7; 
        worm_start.frameY = 7;
        worm_start.maxFrame = 9;
        worm_start.minFrame = 0;
        
        var start_worm_play = start_worm.play();
        if (start_worm_play !== undefined) {
        start_worm_play.then( () => {
        start_worm.pause();
        start_worm.currentTime = 0;  
         })
         } 
       
        if (worm_start.frameX <worm_start.maxFrame) worm_start.frameX++;
        else this.frameX = this.minFrame;

        startWarm2();  
        reject();
        },4000);
      })
     })
      start_worm_move.then(() => {
         return new Promise ((continue_move_worm2, reject)=>{
          setTimeout (() => { 
          worm_start.y = 900;
          window.addEventListener("keydown", function(e) {
          keys[e.keyCode] = true;
          });
        continue_move_worm2();  
        reject();
        },6000);
      }).catch(()=> {
      console.error('I dont want to escape fron here))')
      }).finally(()=> {
        setTimeout (() => {
        hole.y = 600;
        hole.x = 840;
      },50);
      });
    })

  }
}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const warm = {

    x: bask.x+10,
    y: bask.y+50,
    width: 70,
    height: 74.5,
    frameX: 0,
    frameY: 0,
    speed: 0.8,

    x2: bask.x+15,
    y2: bask.y+30,
    width2: 70,
    height2: 74.5,
    frameX2: 0,
    frameY2: 0,
    speed2: 0.8,

    x3: bask.x,
    y3: bask.y+50,
    width3: 70,
    height3: 74.5,
    frameX3: 0,
    frameY3: 0,
    speed3: 0.8,

   draw: function () {
  
      ctx.drawImage(animal, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, 50, 50);
      if (this.frameX <this.maxFrame) this.frameX++;
      else this.frameX = this.minFrame;

      ctx.drawImage(animal, this.width2 * this.frameX2, this.height2 * this.frameY2, this.width2, this.height2, this.x2, this.y2, 50, 50);
      if (this.frameX2 <this.maxFrame2) this.frameX2++;
      else this.frameX2 = this.minFrame2;

      ctx.drawImage(animal, this.width3 * this.frameX3, this.height3 * this.frameY3, this.width3, this.height3, this.x3, this.y3, 50, 50);
      if (this.frameX3 <this.maxFrame3) this.frameX3++;
      else this.frameX3 = this.minFrame3;
   
 },

   update: function () {
    warm.x +=warm.speed;
     warm.y2 +=warm.speed2;
     warm.x3 -=warm.speed3;
    },
    reset: function() {
    	warm.x = bask.x+30;
    	warm.y2 = bask.y+60;
      warm.x3 = bask.x+10;
    }

};
   


const fish = {
  x: 150,
  y: 700,
  width:440,
  height: 480,
  frameX: 0,
  frameY: 0,


  draw: function () {
 
     ctx.drawImage(fishimg, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, 80, 80);
     fish.frameX++;
     if (fish.frameX >=32)  fish.frameX = 0;
   }
 }

 const fishing_rod = {
  x: 90,
  y: 530,
  w: 180,
  h: 180,

  draw: function () {

     ctx.drawImage(fishing_rodimg, this.x, this.y, this.w, this.h);  
   },
    update() {
       
       if (Math.abs(looker.x-fishing_rod.x-70)<50 && worm >=2) {
        worm = 0;
        drop_fish();
         if (fish_drop >1) {
          fish_drop = 1; 
          finger.x = 280;
          fingerAppear()
        }else {
          finger.x = 20;
                 }
              }
          }       
       }
          
 

  const store = {
  		x: 980,
       y: 100,
       w: 350,
       h: 450,

  draw: function () {
  
     ctx.drawImage(storeimg, store.x, store.y, store.w, store.h);
   
   },
   update: function () {
      
        if (Math.abs(looker.x+15-store.x-25)<0.1 && fish_drop>1) {
        fish_drop = 0;  /////// 0 !!!!!!!!!!!!!!!!!!!
        if (fish_drop <=0) fish_drop = 0; 
        drop_bone();
        }

         if (cat_up_count ===0) {
            const pause_state_over = setTimeout(() => {
               if(state.current == state.game){
                  state.current = state.over;
                 hideTab();
                 hideTab_bone();
                  }
              }, 5000);
            } 
          } 
        }       
   

const finger_left_fishing_rod = {
  x_left: 220,
  y_left: 660,
  width_left:285,
  height_left:110,
  frameX_left: 0,
  frameY_left: 0,

  draw: function() {
 ctx.drawImage(finger_leftimg, this.width_left * this.frameX_left, this.height_left * this.frameY_left, this.width_left, this.height_left, this.x_left, this.y_left, 150,60 );

     this.frameX_left++;
    if (this.frameX_left >=6)  this.frameX_left = 0;
  }
};

 const finger = {
  x: 20,
  y: 90,
  width:130,
  height: 500,
  frameX: 0,
  frameY: 0,

  

   draw: function () {
     ctx.drawImage(fingerimg, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, 60, 150 );

     this.frameX++;
    if (this.frameX >=8)  this.frameX = 0; 
		},
	}

 const pumeff = {
    x:0,
    y:0,
   
  draw: function() {
          for (i in pum){
        ctx.drawImage(pumimg, 270 * Math.floor(pum[i].animx),280 * Math.floor(pum[i].animy), 270, 280, pum[i].x, pum[i].y, 100,100);
    }
  },
   update: function() {
     for (i in pum) {
	   pum[i].animx=pum[i].animx+0.5;
	   if (pum[i].animx>2) {pum[i].animy++; pum[i].animx=0};
	   if (pum[i].animy>2) pum.splice(i,1);
	      }
	  	}
	}


class anim{
  constructor(width, height, frameX, frameY, x, y, speed, direction, stepCount){
   
    this.width = width;
    this.height = height;
    this.frameX = frameX;
    this.frameY = frameY;
    this.x = x;
    this.y =  y;
    this.speed = speed;
    this.direction = direction;
    this.stepCount= stepCount;
  }

  draw() {
    
    ctx.drawImage(animal, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, 60,60);

      if (this.frameX <this.maxFrame) this.frameX++;
      else this.frameX = this.minFrame; 
    
  };

  update() {      

    if (this.stepCount ==0) {
    this.stepCount = Math.floor(100*Math.random());
    this.direction = Math.floor( 4*Math.random()); // 0-7
   } 
   else {
    this.stepCount--;
    worms.play();
   }

    switch(this.direction) {
       case 0:
      this.y--;
      this.frameY = 2;
      this.maxFrame = 5;
      this.minFrame = 0;
    break;
   
   case 1:
        this.x++;;
        this.frameY = 0;
        this.maxFrame = 8;
        this.minFrame = 0;
    break;
   
    case 2:
        this.y++;
        this.frameY = 3;
        this.maxFrame = 5;
        this.minFrame = 0;
    break;

     case 3:
         this.x--;
         this.frameY = 1;
         this.maxFrame = 8;
         this.minFrame = 0;
    break;    
    }

   if (this.y<=400) this.y = 400;
   if (this.y>=740) this.y=740;
   if (this.x<=220) this.x=220;
   if (this.x>=1000) this.x=1000;    
    }
  }
     
      
        
           
  
           

         const worm_app = new Promise((startWarm, reject) => {
         setTimeout (() => {  
          character2.push(new anim( 70, 74.5, 0, 0, 840, 600, 0, this.direction, 0));
        startWarm();
        },30000)      	
      });
       worm_app.then(() => {
      	return new Promise ((startWarm2, reject)=>{
        if (state.current == state.game){ 
        setTimeout (() => {
       	var worm_game_sound = game.play();
       	if (worm_game_sound !== undefined) {
  		  worm_game_sound.then(() => {
   			game.play();
  		})
  		}
        startWarm2();  
        reject();
        },2000);
    	}
      }).catch(()=> {
      console.error('I dont want to escape fron here))')
      })
  })
   
		
    // const start_game = setTimeout (() => {
    //   character2.push(new anim( 70, 74.5, 0, 0, 840, 600, 0, this.direction, 0));
    //    }, 60000 /*50*/);

    //character3.push(new anim( 70, 74.5, 0, 0, 600, 600, 20,1,0));
      
const looker = {
  x: 200,
  y:500,
  width:90,
  height: 106,
  frameX: 0,
  frameY: 0,
  speed: 10,
  moving: false,
  // direction: true, 

  draw: function () {
   
     ctx.drawImage(player, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, 90, 110);
     
      if (this.frameX <this.maxFrame) this.frameX++;
      else this.frameX = this.minFrame;
    
  },

  flap: function(){
   
  },

  update: function () {

   if(player.frameX <14 && player.moving) player.frameX++;
   else player.frameX = 0; 

     for (i in boxeff) {
      boxeff[i].animx=boxeff[i].animx+0.5;
   if (boxeff[i].animx>2) {boxeff[i].animy++; boxeff[i].animx=0};
   if (boxeff[i].animy>2) boxeff.splice(i,1);
  }
   
     for (i in character2){
      if (Math.abs(looker.x+15-character2[i].x-25)<50 && Math.abs(looker.y+25-character2[i].y-25)<50)   {
        console.log('good'); 
        worm++;
        crush_worm_sound.play();
        if(worm>=3) fingerAppear();
        if (worm >=2 && fon.timer_finfer > 0) {
         const time_finger_left = setTimeout (() => {
          fingerAppear_left();
         }, 10000) 
        }
        
        character2.splice(i,1); 
        pum.push({x:looker.x-10,y:looker.y+25,animx:0,animy:0});
        for (i=0; i<numofC; i++) {
        character2.push(new anim( 70, 74.5, 0, 0, 840, 600, 0, this.direction, 0));
        }
      };
    };
  },
  reset: function() {
    worm =0;
    fish_drop = 0;
    fish_bone = 0;
    cat_up_count = 5;
    looker.x = 200;
    looker.y =500; 
  }
}

function drop_fish() {

  if (fishDropimg.style.margin <= `-450px` ) {
         // bondDrop.style.display =`block`;
        fishDropimg.style.margin = `80px 50px 5px -180px`;
        fishDropimg.style.transition = '0.5s all';
        drop_fish_sound.play();
       }
};

function looker_fish() {
  if (fishDropimg.style.margin == `80px 50px 5px -180px` && looker.x >= 450 && looker.x<500 && looker.y >450 && looker.y<500) {
      fish_drop++;
      fishDropimg.style.cssText = `
      margin: -400px 100px 20px -300px;
      transition: 0.5s all;
      width: 160px;
      height: 120px;
    `
  }
};

function drop_bone() {

  if (bondDropimg.style.margin <= `-450px` ) {
         // bondDrop.style.display =`block`;
        bondDropimg.style.margin = `80px 50px 5px -180px`;
        bondDropimg.style.transition = '0.5s all';
        drop_bone_sound.play();
       }
};

function looker_bone() {
  if (bondDropimg.style.margin == `80px 50px 5px -180px` && looker.x >= 450 && looker.x<500 && looker.y >450 && looker.y<500) {
      fish_bone++;
      cats_remove();
      //cats_remove_boxeff();
      bondDropimg.style.cssText = `
      margin: -400px 100px 20px 0px;
      transition: 0.5s all;
      width: 160px;
      height: 100px;
    `
  }
}; 


function cats_remove(){
  let cat = document.querySelector('#cat span');
  let catDisappear = []
  catDisappear.push(cat);

  catDisappear.forEach(item => {
     item.remove();
     boxeff.push({x:1080,y:20,animx:0,animy:0});
     cat_up_count--;
     cat_sounds.play();   
    })
  }

function fingerAppear(){
          fingerUp.push(finger);
          finger_sound.play();
          const fingerTime = setTimeout(() => {
          fingerUp.splice(i,1);
        },2500)      
	}

function fingerAppear_left(){
          finger_left.push(finger_left_fishing_rod);
          finger_sound.play();
          const finger_left_Time = setTimeout(() => {
          finger_left.splice(i,1); 
        },2500)
       }


function hideTab_bone() {
  bone_dis.style.display = 'none';
  fish_dis.style.display = 'none';
  };
function showTab_bone() {
  bone_dis.style.display = 'block';
  fish_dis.style.display = 'block';
  };
 

function hideTab() {
    cat1.forEach(item => {
  item.style.display = 'none';
  })
  };

function showTab() {
  cat1.forEach(item => {
  item.style.display = 'block';
  })
  }

function windowClose() {
  window.close();
};

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

function time_sound_game(){
 const start_treck = new Promise((start, reject) => {

        start_getReady.pause();
        start_getReady.currentTime = 0;
        game_start.play();
        var hole_s_play = hole_s.play();
        
 
        if (hole_s_play !== undefined) {
          hole_s_play.then( () => {
          setTimeout (()=> {
            hole_s.pause();
            hole_s.currentTime = 1;
          },4000) 
        })
       }

        start();
      }).catch(()=> {
      console.error('start_sound_game doesnt work')
      })
    }

 function sound_start() {
     let start_w = start_darkplace_sound.play(); 
      if (start_w !== undefined) {
      start_w.then(() => {
        start_darkplace_sound.play(); 
      }).catch(error => {
        console.log('Autoplay was prevented'); 
      });
    } 
  }; 


window.addEventListener("keydown", function(e) {
   //console.log(e);
  keys[e.keyCode] = true;
  looker.moving = true;
  walk.play();
});

window.addEventListener("keyup", function(e) {
 delete keys[e.keyCode];
   looker.moving = false;
});

function movePlayer() {

   
   if (keys[87] && looker.y >400-looker.width) {
    looker.y -=looker.speed
    looker.width = 81;
    looker.height = 108;
    looker.frameY = 4;
    looker.maxFrame = 9;
    looker.minFrame = 0;
    looker.moving = true; 

      for (i in character2){
             if(looker.x > 600 && character2[i].x > 600 &&   character2[i].y> 500) {
              character2[i].x+=10;
             character2[i].frameY = 0;
             character2[i].maxFrame = 8;
             character2[i].minFrame = 0;
           }else if (looker.x < 600 && character2[i].x < 600 &&   character2[i].y> 500) {
             character2[i].x-=20;
             character2[i].y-=20;
             character2[i].frameY = 1;
             character2[i].maxFrame = 8;
             character2[i].minFrame = 0;
           }else if (looker.y < 550 && character2[i].y < 550 && looker.x < 600 && character2[i].x < 600) {
              character2[i].x+=25;
              character2[i].y-=20;
             character2[i].frameY = 0;
             character2[i].maxFrame = 8;
             character2[i].minFrame = 0;
           }else if (looker.x > 600 && character2[i].x > 600 &&   character2[i].y< 500) {
              character2[i].x-=30;
              character2[i].y-=30;
              // character2[i].x+=10;
             character2[i].frameY = 1;
             character2[i].maxFrame = 8;
             character2[i].minFrame = 0;
           } else {
             character2[i].y-=10;
              character2[i].x-=10;
              character2[i].frameY = 1;
              character2[i].maxFrame = 8;
              character2[i].minFrame = 0;
           
            }
          }
        }

    else if (keys[83] && looker.y < canvas.height-80) {
    looker.y +=looker.speed;
     looker.width = 90;
     looker.height = 108;
    looker.frameY = 5;
    looker.maxFrame = 9;
    looker.minFrame = 0;
    looker.moving = true;

       for (i in character2){
        if (looker.x > 600 && character2[i].x > 600 && looker.y > 400 && character2[i].y> 400){
              //character2[i].y+=10;
              character2[i].x-=20;
              character2[i].y+=15;
              character2[i].frameY = 1;
             character2[i].maxFrame = 5;
             character2[i].minFrame = 0;
        }
        else if (looker.x < 600 && character2[i].x < 600 && looker.y > 400 && character2[i].y> 400) {
                character2[i].x-=10;
                character2[i].y+=20;
              character2[i].frameY = 1;
             character2[i].maxFrame = 8;
             character2[i].minFrame = 0;
        }
      }
    }

  else if (keys[65] && looker.x > 290-looker.width) {
      looker.x -=looker.speed;
      looker.width = 88;
      looker.height = 110;
      looker.frameY = 3;
      looker.maxFrame = 4;
      looker.minFrame = 0;
      looker.moving = true;

       for (i in character2){
        if (looker.y >= 500 && character2[i].y> 500 && looker.x < 600) {
            character2[i].y-=10;
            character2[i].x-=10;
             character2[i].frameY = 1;
             character2[i].maxFrame = 8;
             character2[i].minFrame = 0;            
            }
        else if (looker.y > 500 && character2[i].y> 500 && looker.x > 600){
            character2[i].y-=10;
            character2[i].x-=10;
             character2[i].frameY = 1;
             character2[i].maxFrame = 5;
             character2[i].minFrame = 0;            
        } else if (looker.y < 500 && looker.x < 600) {
              character2[i].y+=15;
              character2[i].frameY = 3;
             character2[i].maxFrame = 5;
             character2[i].minFrame = 0;            
        } else {
              character2[i].x-=10;
              character2[i].frameY = 1;
             character2[i].maxFrame = 8;
             character2[i].minFrame = 0;
                }
              }
          } 


        else if (keys[68] && looker.x < 1090 -looker.width) {
          looker.x +=looker.speed;
          looker.width = 85;
           looker.height = 112;
          looker.frameY = 2;
          looker.maxFrame = 4;
          looker.minFrame = 0;
          looker.moving = true;

     
         for (i in character2){
           if (looker.y > 500) {
          character2[i].y-=10;
           character2[i].frameY = 2;
           character2[i].maxFrame = 5;
           character2[i].minFrame = 0;
         
          }else {
          character2[i].y+=10;
           character2[i].frameY = 3;
           character2[i].maxFrame = 5;
           character2[i].minFrame = 0;
           
      }
      if (looker.x > 600) {
          character2[i].x+=10;
          character2[i].frameY = 1;
          character2[i].maxFrame = 8;
          character2[i].minFrame = 0;  
          }else if(looker.x > 600 && character2[i].x> 600) {
          character2[i].y+=10;
          character2[i].frameY = 2;
          character2[i].maxFrame = 5;
          character2[i].minFrame = 0;      
          }        
      else {
          character2[i].x+=10;
          character2[i].frameY = 0;
       character2[i].maxFrame = 8;
       character2[i].minFrame = 0;
           
      }
    }
    } 
    
    else if (keys[82]) {
    looker.width = 80;
    looker.height = 107;
    looker.frameY = 6;
    looker.maxFrame = 4;
    looker.minFrame = 0;
    yelling_sound.play();

      
      for(i in character2) {
         switch(character2[i].direction) {
         case 0:
         character2[i].x-=6;
         character2[i].frameY = 1;
         character2[i].maxFrame = 8;
         character2[i].minFrame = 0;
    break;
     case 1:
         character2[i].x-=6;
         character2[i].frameY = 1;
         character2[i].maxFrame = 8;
         character2[i].minFrame = 0;
    break;
     case 2:
         character2[i].x-=6;
         character2[i].frameY = 1;
         character2[i].maxFrame = 8;
         character2[i].minFrame = 0;
    break;
     case 3:
         character2[i].x-=6;
         character2[i].frameY = 1;
         character2[i].maxFrame = 8;
         character2[i].minFrame = 0;
    break;  
       }
      }
    }

  //!!!!!!!!!!!!!!!!!
  else if (looker.x >= 670 && looker.y >= 520 ) {
  const block = setTimeout(function(){
       looker.x -=looker.speed;      
      }, 200);;
    looker.width = 88;
    looker.height = 108;
    looker.frameY = 3;
    looker.maxFrame = 4;
    looker.minFrame = 0;
    looker.moving = false;
    window.addEventListener("keydown", function(e) {
  keys[e.keyCode] = false;
  delete keys[e.keyCode];
});
     if (looker.x <= 670 ) {
     window.addEventListener("keydown", function(e) {
  keys[e.keyCode] = true;
     });
    }

  }  
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  
    else {
    looker.width = 90;
    looker.height = 108;
    looker.frameY = 0;
    looker.frameX = 0;
    
  } 
   }
  
////////////////////////////////////////////



const startFrog = {

  x_frog: 200,
  y_frog: 190,
  w_frog: 275.9,
  h_frog: 200,
  frameX: 0,
  frameY: 2,

   x_mask: 540,
  y_mask: 270,
  w_mask: 75,
  h_mask: 75,
  move: 5,

  w: 65.4,
  h: 95,
  x: 400,
  y: 300,
  frameX1: 3,
  frameY1: 1,
  move1:8,
  animx:0,


  draw: function(){
   
           if(state.current == state.startdark) {
           ctx.fillStyle = "#000"; 
          ctx.fillRect(0,0, canvas.width, canvas.height);

          ctx.drawImage(startFrogimg, this.w_frog * this.frameX, this.h_frog, this.w_frog, this.h_frog, this.x_frog, this.y_frog, 200, 200);
          ctx.drawImage(maskimg, this.x_mask, this.y_mask, this.w_mask, this.h_mask);

            this.x_mask = this.x_mask-this.move;
            if (this.x_mask <= 360) {
              this.x_mask= -100;
            }


            setTimeout(function(){
                if(startFrog.frameX <9) {
                     startFrog.frameX++;
                     startFrog.frameY = 1;    
                 }
              else startFrog.frameX = 9;
                }, 3000); 
                }  

          hideTab();
        }
      }

	

	const startBtn = {
	    x : 230,
	    y : 130,
	    w : 210,
	    h : 170, 
	};

	const quiteStart = {
	    x : 825,
	    y : 120,
	    w : 120,
	    h : 200,
	    }
 //  draw: function(){
 //  ctx.fillRect(this.x,this.y,this.w,this.h); // x, y, width, height
 // ctx.fillStyle = "#ff0000"; // red*/
 //   }  

  
//////!!!!!!!!!!!!!!!
   const startdark = setTimeout(function(){
      
       if(state.current == state.startdark) state.current = state.getReady;
           
          }, 9000);
////!!!!!!!!!!!!!!!!!!!!!!!!!!!!
canvas.addEventListener("click", function(evt){
    switch(state.current){
        // case state.startdark:
        //  state.current = state.getReady;
        //   break;

       
        case state.getReady:
            
            let rect = canvas.getBoundingClientRect();
            let clickX = evt.clientX - rect.left;
            let clickY = evt.clientY - rect.top;

            let rect4 = canvas.getBoundingClientRect();
            let clickX4 = evt.clientX - rect4.left;
            let clickY4 = evt.clientY - rect4.top;
            
                        
  if(clickX >= startBtn.x && clickX <= startBtn.x + startBtn.w && clickY >= startBtn.y && clickY <= startBtn.y + startBtn.h){
           state.current = state.game;
           menu.play();
          
        }
  if(clickX4 >= quiteStart.x && clickX4 <= quiteStart.x + quiteStart.w && clickY4 >= quiteStart.y && clickY4 <= quiteStart.y + quiteStart.h){
           windowClose();
           menu.play();
    }
  break;

        case state.game: 
            looker.flap();  
         
             break;
 if (state.current == state.game) state.current = state.over;
        case state.over:

                looker.reset();
                

             state.current = state.getReady; 
             break;
        }
      });



function draw() {
	  if (state.current == state.startdark) {
      sound_start();
      startFrog.draw();
    }

	  if (state.current == state.getReady) {
      getReady.draw();   
      game.pause();
      game.currentTime = 0;
      start_getReady.play();
      start_darkplace_sound.pause();
      start_darkplace_sound.currentTime = 0; 
    }

	  if (state.current == state.over) over.draw();
    

   	  if (state.current == state.game){
	    fon.draw();
	    worm_start.draw(); 
	    hole.draw();
	    lake.draw();
	    fish.draw();
	    cat_up.draw();
	    store.draw();
	    bask.draw();
	    warm.draw();
	    box.draw();
	    opened_can.draw();
	    looker.draw();
	   for (i in finger_left){finger_left_fishing_rod.draw()};
	    for (i in fingerUp){finger.draw()};
	    
	    fishing_rod.draw();
	    pumeff.draw();
	   //for (i =0; i <character.length; i++) {character[i].draw()};
	  // for (i in character) { };

      for (i in character2) {
        character2[i].draw()};
      
	    //for (i in character3) {character3[i].draw()};
	  showTab();
	  showTab_bone();

    time_sound_game();
      
      if(!game_s){
       const game_sound_start = setTimeout(() => {
      	game.play();
    	   },20000);
        }	
  		}
  	}


function update() {
  
	if (state.current == state.game){ 

	   looker.update();
	   pumeff.update();
	   store.update();
	   warm.update();
	   fishing_rod.update();
	   fon.update();
	   looker_bone();
	   looker_fish();
	   looker.flap();
	   worm_start.update(); 
	 
	   for (i =0; i <character.length; i++) {character[i].update()};
	for (i in character2) {character2[i].update()};
	   // for (i in character3) {character3[i].update()};
		}
	}

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

  ctx.clearRect(0,0, canvas.width, canvas.height);

    draw();
    update();
    movePlayer();
    games_s=false;

   }
}
startAnimating(10);

 window.addEventListener('resize', function() {
  canvas.height = 600;
  canvas.width = 800;
});



	