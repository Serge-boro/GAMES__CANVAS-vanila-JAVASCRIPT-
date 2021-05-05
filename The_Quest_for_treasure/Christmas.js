const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.width = 1000
canvas.height = 600

const ice = []
const keys = []
//let frogahead=[];
let boxdown = []
let boxeff = []
let graaldown = []
let graaleff = []
let bullef = []
let bullbullef = []
let frogupup = []
let magicbot = []
let timer = 0
let timer2 = 0
let timer3 = 0
let timer4 = 0
let timer5 = 0
let timer6 = 0
let timer_fire = 0
let fire = []

let Window

const kamish = new Image()
kamish.src = 'img/kam_2.png'
const player2 = new Image()
player2.src = 'img/2_1.png'
const water = new Image()
water.src = 'img/water2_2.jpg'
const flowers = new Image()
flowers.src = 'img/flowers_2.png'
const frogup = new Image()
frogup.src = 'img/frog_4.png'
const background = new Image()
background.src = 'img/fon.jpg'
const boxf = new Image()
boxf.src = 'img/9.png'
const graalf = new Image()
graalf.src = 'img/graalef.png'
const bull = new Image()
bull.src = 'img/bull_2.png'
const bullbull = new Image()
bullbull.src = 'img/bullbull4_1.png'
const castleStart = new Image()
castleStart.src = 'img/castleStart.png'
const knightimg = new Image()
knightimg.src = 'img/knight.png'
const startFrogimg = new Image()
startFrogimg.src = 'img/startfrog2_2.png'
const maskimg = new Image()
maskimg.src = 'img/mask.png'
const finalyspriteimg = new Image()
finalyspriteimg.src = 'img/finalysprite4_1.png'
const crownimg = new Image()
crownimg.src = 'img/crown4.png'
const shieldimg = new Image()
shieldimg.src = 'img/shield.png'
const boatimg = new Image()
boatimg.src = 'img/sunkenboat.png'
const flyy = new Image()
flyy.src = 'img/fly.png'
const fireimg = new Image()
fireimg.src = 'img/global.png'
const fire_playerimg = new Image()
fire_playerimg.src = 'img/global.png'
const iceeff = new Image()
iceeff.src = 'img/global.png'
const menuimg = new Image()
menuimg.src = 'img/global.png'
const startimg = new Image()
startimg.src = 'img/global.png'
const scoreMenuimg = new Image()
scoreMenuimg.src = 'img/global.png'
const startquiteimg = new Image()
startquiteimg.src = 'img/global.png'
const pauseimg = new Image()
pauseimg.src = 'img/global.png'
const magicbottle = new Image()
magicbottle.src = 'img/global.png'
const treasuresimg = new Image()
treasuresimg.src = 'img/global.png'

const crush_landlord2 = new Audio()
crush_landlord2.src = 'sounds/crush_landlord2.mp3'
const disappear_frog = new Audio()
disappear_frog.src = 'sounds/disappear_frog.mp3'
const frog_ahead = new Audio()
frog_ahead.src = 'sounds/frog_ahead.mp3'
const game = new Audio()
game.src = 'sounds/game.mp3'
const game_overSound = new Audio()
game_overSound.src = 'sounds/game-over.mp3'
const gold = new Audio()
gold.src = 'sounds/gold.mp3'
const heroe_inwater = new Audio()
heroe_inwater.src = 'sounds/heroe_inwater.mp3'
const magic_throw = new Audio()
magic_throw.src = 'sounds/magic_throw.mp3 '
const open_chest = new Audio()
open_chest.src = 'sounds/open_chest.mp3'
const restore_magic_health = new Audio()
restore_magic_health.src = 'sounds/restore_magic_health.mp3'
const scoreSound = new Audio()
scoreSound.src = 'sounds/score.mp3'
let startSound = new Audio()
startSound.src = 'sounds/start.mp3'
const start_darkplace = new Audio()
start_darkplace.src = 'sounds/start_darkplace.mp3'
const start_game = new Audio()
start_game.src = 'sounds/start_game.mp3'
const take_graal = new Audio()
take_graal.src = 'sounds/take_graal.mp3'
const throw_frog = new Audio()
throw_frog.src = 'sounds/throw_frog.mp3'
const yelling = new Audio()
yelling.src = 'sounds/yelling.mp3'
const flySound = new Audio()
flySound.src = 'sounds/fly.mp3'

const score = {
  w_chest: 170,
  h_chest: 170,
  x_chest: 860,
  y_chest: 0,
  frameX: 1,
  frameY: 2,

  sX_coin: 475,
  sY_coin: 800,
  w_coin: 130,
  h_coin: 140,
  x_coin: 750,
  y_coin: 10,

  sX_mS: 300,
  sY_mS: 380,
  w_mS: 370,
  h_mS: 300,
  x_mS: 300,
  y_mS: 40,

  best: parseInt(localStorage.getItem('best')) || 0,
  value: 0,

  draw: function () {
    ctx.drawImage(
      crownimg,
      this.w_chest * this.frameX,
      this.h_chest * this.frameY,
      this.w_chest,
      this.h_chest,
      this.x_chest,
      this.y_chest,
      150,
      150
    )
    ctx.drawImage(
      menuimg,
      this.sX_coin,
      this.sY_coin,
      this.w_coin,
      this.h_coin,
      this.x_coin,
      this.y_coin,
      50,
      50
    )

    if (state.current == state.game) {
      ctx.lineWidth = 1
      ctx.font = '35px Teko'
      ctx.fillStyle = '#b7a8bd'
      ctx.strokeStyle = '#000'
      ctx.fillText(player.life, 20, 50)
      ctx.strokeText(player.life, 20, 50)

      ctx.lineWidth = 1
      ctx.font = '35px Teko'
      ctx.fillStyle = '#b7a8bd'
      ctx.strokeStyle = '#3e18d9'
      ctx.fillText(waterFire.magic, 160, 50)
      ctx.strokeText(waterFire.magic, 160, 50)

      ctx.fillStyle = '#000'
      ctx.strokeStyle = 'yellow'
      ctx.lineWidth = 2
      ctx.font = '35px Teko'

      ctx.fillText(this.value, 810, 50)
      ctx.strokeText(this.value, 810, 50)

      showTab()
    } else if (state.current == state.score) {
      ctx.drawImage(
        scoreMenuimg,
        this.sX_mS,
        this.sY_mS,
        this.w_mS,
        this.h_mS,
        this.x_mS,
        this.y_mS,
        400,
        310
      )
      // SCORE VALUE
      ctx.fillStyle = 'yellow'
      ctx.strokeStyle = '#000'
      ctx.font = '55px Teko'
      ctx.fillText(this.value, 550, 150)
      ctx.strokeText(this.value, 550, 150)
      // BEST SCORE
      ctx.fillText(this.best, 520, 240)
      ctx.strokeText(this.best, 520, 240)
    }
  },
  update: function () {
    if (state.current == state.over) {
      this.x_chest = 1200
      this.x_coin = 1200
    }
    if (state.current == state.game) {
      this.x_chest = 860
      this.x_coin = 750
    }
  },

  reset: function () {
    this.value = 0
    this.frameX = 1
    //this.best = 0;
  },
}

const shield = {
  sX: 0,
  sY: 0,
  w: 1078,
  h: 1280,
  x: 80,
  y: 20,

  sX_m: 0,
  sY_m: 660,
  w_m: 200,
  h_m: 300,
  x_m: 190,
  y_m: 15,

  draw: function () {
    ctx.drawImage(
      shieldimg,
      this.sX,
      this.sY,
      this.w,
      this.h,
      this.x,
      this.y,
      50,
      50
    )

    ctx.drawImage(
      magicbottle,
      this.sX_m,
      this.sY_m,
      this.w_m,
      this.h_m,
      this.x_m,
      this.y_m,
      50,
      70
    )
  },
  update: function () {
    if (state.current == state.startdark || state.current == state.over) {
      this.x = -100
      this.x_m = -100
    }
    if (state.current == state.game) {
      this.x = 80
      this.x_m = 220
    }
  },
}

const flow = {
  sX: 100,
  sY: 250,
  w: 640,
  h: 650,
  x: 800,
  y: 350,

  sX1: 750,
  sY1: 370,
  x2: 650,

  x3: 470,

  x4: 230,

  moving: 0.5,
  speed: 2,
  time: 0,
  time2: 0,

  draw: function () {
    ctx.drawImage(
      flowers,
      this.sX,
      this.sY,
      this.w,
      this.h,
      this.x,
      this.y,
      this.w * 0.2,
      this.h * 0.25
    )

    ctx.drawImage(
      flowers,
      this.sX1,
      this.sY1,
      this.w,
      this.h,
      this.x2,
      this.y,
      this.w * 0.2,
      this.h * 0.25
    )

    ctx.drawImage(
      flowers,
      this.sX1,
      this.sY1,
      this.w,
      this.h,
      this.x3,
      this.y,
      this.w * 0.2,
      this.h * 0.25
    )

    ctx.drawImage(
      flowers,
      this.sX,
      this.sY,
      this.w,
      this.h,
      this.x4,
      this.y,
      this.w * 0.2,
      this.h * 0.25
    )
  },
  update: function () {
    this.x2 = this.moving + this.speed
    this.x2 = 650 + 20 * Math.sin(this.moving)
    if (this.moving >= 500) {
      moving = 0
    } else {
      this.moving = this.moving + 0.02
    }
    this.time = setTimeout(flow.update, 50)
  },

  update2: function () {
    this.x3 = this.moving + this.speed
    this.x3 = 450 - 5 * Math.sin(this.moving)
    if (this.moving >= 200) {
      moving = 0
    } else {
      this.moving = this.moving + 0.05
    }
    this.time2 = setTimeout(flow.update2, 50)
  },
}

const kam = {
  sX: 0,
  sY: 0,
  w: 800,
  h: 600,
  x: -100,
  y: 270,

  draw: function () {
    ctx.drawImage(
      kamish,
      this.sX,
      this.sY,
      this.w,
      this.h,
      this.x,
      this.y,
      this.w * 0.4,
      this.h * 0.4
    )
  },
}

const waterbac = {
  sX: 0,
  sY: 540,
  w: 1000,
  h: 200,
  x: 0,
  y: canvas.height - 150,

  sX_b: 0,
  sY_b: 0,
  w_b: 626,
  h_b: 565,
  x_b: 120,
  y_b: 250,

  sX_tr: 620,
  sY_tr: 645,
  w_tr: 840,
  h_tr: 468,
  x_tr: 250,
  y_tr: 385,

  draw: function () {
    ctx.drawImage(
      water,
      this.sX,
      this.sY,
      this.w,
      this.h,
      this.x,
      this.y,
      this.w,
      this.h
    )
    ctx.drawImage(
      boatimg,
      this.sX_b,
      this.sY_b,
      this.w_b,
      this.h_b,
      this.x_b,
      this.y_b,
      200,
      200
    )
    ctx.drawImage(
      treasuresimg,
      this.sX_tr,
      this.sY_tr,
      this.w_tr,
      this.h_tr,
      this.x_tr,
      this.y_tr,
      150,
      90
    )
  },
}

const fon = {
  w: 1000,
  h: 600,
  x: 0,
  y: 0,
  dx: 2,

  draw: function () {
    ctx.drawImage(background, 0, 0, this.w, this.h)
  },
}

const box = {
  x: 0,
  y: 0,
  // point: 0,

  draw: function () {
    for (i in boxdown) {
      ctx.drawImage(
        crownimg,
        boxdown[i].width * boxdown[i].frameX,
        boxdown[i].height * boxdown[i].frameY,
        boxdown[i].width,
        boxdown[i].height,
        boxdown[i].x,
        boxdown[i].y,
        70,
        70
      )
    }
    for (i in boxeff) {
      ctx.drawImage(
        boxf,
        270 * Math.floor(boxeff[i].animx),
        280 * Math.floor(boxeff[i].animy),
        270,
        280,
        boxeff[i].x,
        boxeff[i].y,
        100,
        100
      )
    }
  },
  update: function () {
    timer++
    if (timer % 100 == 0) {
      boxdown.push({
        x: Math.random() * 950,
        y: -100, //50,
        width: 170,
        height: 170,
        frameX: 1,
        frameY: 1,
        dx: 0,
        dy: 25,
      })
    }

    for (i in boxdown) {
      if (
        state.current == state.getReady ||
        state.current == state.over ||
        state.current == state.startdark ||
        state.current == state.score
      ) {
        boxdown.splice(i, 1)
      }
    }

    for (i in boxdown) {
      boxdown[i].y = boxdown[i].y + boxdown[i].dy
      if (
        (boxdown[i].y >= 415 && boxdown[i].x > 200 && boxdown[i].x < 310) ||
        (boxdown[i].y >= 415 && boxdown[i].x > 450 && boxdown[i].x < 520) ||
        (boxdown[i].y >= 415 && boxdown[i].x > 620 && boxdown[i].x < 710) ||
        (boxdown[i].y >= 415 && boxdown[i].x > 780 && boxdown[i].x < 890)
      ) {
        boxdown[i].dy -= 5
        boxdown[i].y = 415 - boxdown[i].dy * 8
        if (boxdown[i].y >= 650) boxdown.splice(i, 1)
      } else {
        boxdown[i].dy -= 0.01
      }

      for (i in boxdown) {
        if (
          Math.abs(player.x + 25 - boxdown[i].x - 15) < 50 &&
          Math.abs(player.y + 5 - boxdown[i].y - 5) < 20
        ) {
          score.value += 10
          gold.play()
          open_chest.play()
          score.frameX = 2
          if ((score.frameX = 2)) {
            setTimeout(function () {
              score.frameX = 0
            }, 3000)
          }

          score.best = Math.max(score.value, score.best)
          localStorage.setItem('best', score.best)

          boxeff.push({ x: player.x, y: player.y - 25, animx: 0, animy: 0 })
          boxdown.splice(i, 1)
        }
      }

      for (i in boxdown) {
        if (
          (boxdown[i].y >= 415 && boxdown[i].x <= 200) ||
          (boxdown[i].y >= 415 && boxdown[i].x > 310 && boxdown[i].x < 450) ||
          (boxdown[i].y >= 415 && boxdown[i].x > 520 && boxdown[i].x < 620) ||
          (boxdown[i].y >= 415 && boxdown[i].x > 710 && boxdown[i].x < 780) ||
          (boxdown[i].y >= 415 && boxdown[i].x > 890)
        ) {
          bullef.push({
            x: boxdown[i].x - 40,
            y: boxdown[i].y + 15,
            animx: 0,
            animy: 0,
          })
          boxdown[i].y *= bullef
          boxdown.splice(i, 1)
        }
      }
    }
  },
}

const graal = {
  x: 0,
  y: 0,

  draw: function () {
    for (i in graaldown) {
      ctx.drawImage(
        crownimg,
        graaldown[i].width * graaldown[i].frameX,
        graaldown[i].height * graaldown[i].frameY,
        graaldown[i].width,
        graaldown[i].height,
        graaldown[i].x,
        graaldown[i].y,
        70,
        70
      )
    }
    for (i in graaleff) {
      take_graal.play()
      ctx.drawImage(
        graalf,
        270 * Math.floor(graaleff[i].animx),
        280 * Math.floor(graaleff[i].animy),
        270,
        280,
        graaleff[i].x,
        graaleff[i].y,
        100,
        100
      )
    }
  },
  update: function () {
    timer5++
    if (timer5 % 500 == 0) {
      graaldown.push({
        x: 470,
        y: -100, //50,
        width: 170,
        height: 170,
        frameX: 0,
        frameY: 1,
        dx: 0,
        dy: 25,
      })
    }

    for (i in graaldown) {
      if (
        state.current == state.getReady ||
        state.current == state.over ||
        state.current == state.startdark ||
        state.current == state.score
      ) {
        graaldown.splice(i, 1)
      }
    }

    for (i in graaldown) {
      graaldown[i].y = graaldown[i].y + graaldown[i].dy

      if (graaldown[i].y >= 415) {
        graaldown[i].dy -= 5
        graaldown[i].y = 415 - graaldown[i].dy * 12
        if (graaldown[i].y >= 650) graaldown.splice(i, 1)
      } else {
        graaldown[i].dy -= 0.01
      }
    }

    for (i in graaldown) {
      if (
        Math.abs(player.x + 25 - graaldown[i].x - 15) < 50 &&
        Math.abs(player.y + 5 - graaldown[i].y - 5) < 20
      ) {
        player.life += 100
        take_graal.play()
        graaldown.splice(i, 1)
        if (player.life >= 100) player.life = 100

        graaleff.push({
          x: shield.x - 20,
          y: shield.y - 25,
          animx: 0,
          animy: 0,
        })
      }
    }
  },
}

const player = {
  x: 840,
  y: 400,
  width: 64,
  height: 64,
  frameX: 0,
  frameY: 0,
  moving: false,
  speed: 2,
  dy: 0,

  jumping: true,
  x_velocity: 0,
  y_velocity: 0,

  life: 100,

  x_mag: 20,
  y_mag: 15,
  width_mag: 192,
  height_mag: 192,
  frameX_mag: 0,
  frameY_mag: 0,

  draw: function () {
    ctx.drawImage(
      player2,
      player.width * player.frameX,
      player.height * player.frameY,
      player.width,
      player.height,
      player.x,
      player.y,
      player.width,
      player.height
    )

    ctx.drawImage(
      fire_playerimg,
      player.width_mag * player.frameX_mag,
      player.height_mag * player.frameY_mag,
      player.width_mag,
      player.height_mag,
      player.x + 15,
      player.y + 30,
      35,
      35
    )

    for (i in bullef) {
      ctx.drawImage(
        bull,
        341 * Math.floor(bullef[i].animx),
        150 * Math.floor(bullef[i].animy),
        341,
        150,
        bullef[i].x,
        bullef[i].y,
        150,
        50
      )
    }
    for (i in bullbullef) {
      ctx.drawImage(
        bullbull,
        143 * Math.floor(bullbullef[i].animx),
        154 * Math.floor(bullbullef[i].animy),
        143,
        154,
        bullbullef[i].x,
        bullbullef[i].y,
        66,
        80
      )
    }
  },

  flap: function () {},

  update: function () {
    if (
      state.current == state.getReady ||
      state.current == state.over ||
      state.current == state.startdark
    ) {
      player.speed = 0
      player.x = 840
    }

    if (state.current == state.game) player.speed = 25
    if (state.current == state.score) player.x = 1150

    if (this.life <= 0) {
      this.life = 0
      if (state.current == state.game) {
        state.current = state.over
      }
    }

    if (frog.frameX < 4) {
      frog.frameX++
      frog.frameY = 1
    } else frog.frameX = 0

    for (i in fire) {
      if (fire[i].frameX < 4) {
        fire[i].frameX++

        fire[i].frameY = 1
      } else fire[i].frameX = 0
    }

    if (player.frameX_mag < 4) {
      player.frameX_mag++

      player.frameY_mag = 1
    } else player.frameX_mag = 0

    for (i in graaleff) {
      graaleff[i].animx = graaleff[i].animx + 0.5
      if (graaleff[i].animx > 2) {
        graaleff[i].animy++
        graaleff[i].animx = 0
      }
      if (graaleff[i].animy > 2) graaleff.splice(i, 1)
    }

    for (i in boxeff) {
      boxeff[i].animx = boxeff[i].animx + 0.5
      if (boxeff[i].animx > 2) {
        boxeff[i].animy++
        boxeff[i].animx = 0
      }
      if (boxeff[i].animy > 2) boxeff.splice(i, 1)
    }

    for (i in bullef) {
      bullef[i].animx = bullef[i].animx + 1.5
      if (bullef[i].animx > 2) {
        bullef[i].animy++
        bullef[i].animx = 0
      }
      if (bullef[i].animy > 2) bullef.splice(i, 1)
    }

    for (i in bullbullef) {
      bullbullef[i].animx = bullbullef[i].animx + 1
      if (bullbullef[i].animx > 3) {
        bullbullef[i].animy++
        bullbullef[i].animx = 1
      }
      if (bullbullef[i].animy > 1) bullbullef.splice(i, 1)
    }

    if (
      (player.y >= 415 && player.y <= 420 && player.x < 200) ||
      (player.y >= 415 &&
        player.y <= 420 &&
        player.x > 310 &&
        player.x < 440) ||
      (player.y >= 415 &&
        player.y <= 420 &&
        player.x > 500 &&
        player.x < 620) ||
      (player.y >= 415 &&
        player.y <= 420 &&
        player.x > 710 &&
        player.x < 780) ||
      (player.y >= 415 && player.y <= 420 && player.x > 890)
    ) {
      player.x = player.x + player.dy
      heroe_inwater.play()

      bullef.push({ x: player.x - 40, y: player.y + 25, animx: 0, animy: 0 })
      //else bullef.push({x:player.x-40,y:player.y+25,animx:0,animy:0});
    }
  },

  stuck: function () {
    if (
      player.x < 200 ||
      (player.x < 440 && player.x > 310) ||
      (player.x < 620 && player.x > 500) ||
      (player.x > 710 && player.x < 780) ||
      player.x > 890
    ) {
      player.y = player.y + player.dy
      player.dy += 3

      if (
        (player.y < 475 && player.y > 460) ||
        (player.y < 530 && player.y > 510)
      ) {
        bullbullef.push({
          x: player.x - 20,
          y: player.y - 25,
          animx: 0,
          animy: 0,
        })
      }

      if (player.y >= 550) {
        player.y = player.y - player.dy
        player.dy -= 3
      }
    }
  },
  reset: function () {
    this.life = 100
    waterFire.magic = 100
  },
}

const frog2 = {
  frameX: 0,
  frameY: 4,

  draw: function () {
    for (i in frogupup) {
      ctx.drawImage(
        frogup,
        frogupup[i].width * this.frameX,
        frogupup[i].height * frogupup[i].frameY,
        frogupup[i].width,
        frogupup[i].height,
        frogupup[i].x,
        frogupup[i].y,
        70,
        60
      )
    }
    for (i in frogupup) {
      ctx.drawImage(
        frogup,
        frogupup[i].width * this.frameX,
        frogupup[i].height * frogupup[i].frameY,
        frogupup[i].width,
        frogupup[i].height,
        frogupup[i].x2,
        frogupup[i].y,
        70,
        60
      )
    }
    for (i in frogupup) {
      ctx.drawImage(
        frogup,
        frogupup[i].width * this.frameX,
        frogupup[i].height * frogupup[i].frameY,
        frogupup[i].width,
        frogupup[i].height,
        frogupup[i].x3,
        frogupup[i].y,
        70,
        60
      )
    }
  },

  update: function () {
    timer2++
    if (timer2 % 100 == 0) {
      frogupup.push({
        x: 560,
        y: 650,
        width: 92,
        height: 76,
        dx: 0,
        dy: 25,
        frameY: 4,
      })
    }

    timer3++
    if (timer3 % 300 == 0) {
      frogupup.push({
        x2: 370,
        y: 650,
        width: 92,
        height: 76,
        dx: 0,
        dy: 25,
        frameY: 4,
      })
    }

    timer4++
    if (timer4 % 500 == 0) {
      frogupup.push({
        x3: 745,
        y: 650,
        width: 92,
        height: 76,
        dx: 0,
        dy: 25,
        frameY: 4,
      })
    }

    for (i in frogupup) {
      if (
        state.current == state.getReady ||
        state.current == state.over ||
        state.current == state.startdark ||
        state.current == state.score
      ) {
        frogupup.splice(i, 1)
      }
    }

    for (i in frogupup) {
      if (
        Math.abs(player.x + 25 - frogupup[i].x) < 50 &&
        Math.abs(player.y - 5 - frogupup[i].y + 10) < 20
      ) {
        player.life -= 10
        yelling.play()
      }
      if (
        Math.abs(player.x + 25 - frogupup[i].x2) < 50 &&
        Math.abs(player.y - 5 - frogupup[i].y + 10) < 20
      ) {
        player.life -= 10
        yelling.play()
      }
      if (
        Math.abs(player.x + 25 - frogupup[i].x3) < 50 &&
        Math.abs(player.y - 5 - frogupup[i].y + 10) < 20
      ) {
        player.life -= 10
        yelling.play()
      }

      if (frogupup[i].y >= 360 || frogupup[i].y <= 400) {
        frogupup[i].dy -= 0.8
        frogupup[i].y = frogupup[i].y - frogupup[i].dy
      }

      if (frogupup[i].y <= 300 || frogupup[i].y <= 310) {
        frogupup[i].frameY = 5
        frogupup[i].dy += 0.05
      }

      if (frogupup[i].y <= 430 && frogupup[i].y >= 414) {
        bullef.push({
          x: frogupup[i].x - 40,
          y: frogupup[i].y + 15,
          animx: 0,
          animy: 0,
        })
        bullef.push({
          x: frogupup[i].x2 - 40,
          y: frogupup[i].y + 15,
          animx: 0,
          animy: 0,
        })
        bullef.push({
          x: frogupup[i].x3 - 40,
          y: frogupup[i].y + 15,
          animx: 0,
          animy: 0,
        })
        bullef.splice(i, 1)
      }
      if (frogupup[i].y >= 650) frogupup.splice(i, 1)
    }
  },
}

const frog = {
  x: 150,
  y: 415,
  width: 120,
  height: 74,
  frameX: 0,
  frameY: 1,
  speed: 15,
  dy: 0,

  draw: function () {
    ctx.drawImage(
      frogup,
      frog.width * frog.frameX,
      frog.height * frog.frameY,
      frog.width,
      frog.height,
      frog.x,
      frog.y,
      80,
      70
    )
  },
  update: function () {
    frog.x = frog.x + frog.speed

    if (
      state.current == state.getReady ||
      state.current == state.over ||
      state.current == state.startdark ||
      state.current == state.score
    )
      frog.x = -100

    if (
      Math.abs(player.x + 25 - frog.x - 25) < 50 &&
      Math.abs(player.y + 5 - frog.y - 5) < 20
    ) {
      player.life -= 10
      yelling.play()
    }

    if (frog.x >= 1100) frog.x = -50

    if (
      frog.x < 200 ||
      (frog.x > 310 && frog.x < 400) ||
      (frog.x > 490 && frog.x < 600) ||
      (frog.x > 700 && frog.x < 750) ||
      frog.x > 890
    )
      bullef.push({ x: frog.x - 40, y: frog.y + 25, animx: 0, animy: 0 })
  },
}

var waterFire = {
  x: player.x + 5,
  y: player.y + 5,
  magic: 100,

  draw: function () {
    for (i in fire) {
      ctx.drawImage(
        fireimg,
        fire[i].width * fire[i].frameX,
        fire[i].height * fire[i].frameY,
        fire[i].width,
        fire[i].height,
        fire[i].x,
        fire[i].y,
        70,
        70
      )
    }
    for (i in ice) {
      ctx.drawImage(
        iceeff,
        ice[i].sX,
        ice[i].sY,
        ice[i].width,
        ice[i].height,
        ice[i].x,
        ice[i].y,
        140,
        130
      )
    }
  },
  update: function () {
    for (i in fire) {
      if (waterFire.magic <= 1 && waterFire.magic >= -10) {
        waterFire.magic = 0
        magic_throw.play()
        fire.splice(i, 1)
      }
    }

    for (i in fire) {
      if ((fire[i].x = fire[i].x - fire[i].dx)) waterFire.magic -= 1
    }

    for (i in fire) {
      if (
        Math.abs(fire[i].x + 25 - frog.x - 15) < 20 &&
        fire[i].y >= 415 &&
        fire[i].y <= 440
      ) {
        fire.splice(i, 1)
        frog.speed = 0
        throw_frog.play()
        var timefrog = setTimeout(function () {
          frog.y = -100
        }, 500)

        ice.push({
          sX: 320,
          sY: 700,
          x: frog.x - 40,
          y: frog.y - 60, //50,
          width: 110,
          height: 100,
        })
      }

      for (i in ice) {
        let timeice = setTimeout(function () {
          ice.splice(i, 1)
          frog.y = 415
          frog.x = -100
          frog.speed = 15
        }, 2000)
      }
    }
  },
}

const magicb = {
  draw: function () {
    for (i in magicbot) {
      ctx.drawImage(
        magicbottle,
        magicbot[i].sX,
        magicbot[i].sY,
        magicbot[i].w,
        magicbot[i].h,
        magicbot[i].x,
        magicbot[i].y,
        50,
        60
      )
    }
  },
  update: function () {
    timer6++
    if (timer6 % 400 == 0) {
      magicbot.push({
        sX: 0,
        sY: 660,
        x: 470,
        y: -100,
        w: 200,
        h: 300,
        dy: 25,
      })
    }

    for (i in magicbot) {
      if (
        state.current == state.getReady ||
        state.current == state.over ||
        state.current == state.startdark ||
        state.current == state.score
      ) {
        magicbot.splice(i, 1)
      }
    }

    for (i in magicbot) {
      magicbot[i].y = magicbot[i].y + magicbot[i].dy

      if (magicbot[i].y >= 415) {
        magicbot[i].dy -= 5
        magicbot[i].y = 415 - magicbot[i].dy * 12
        if (magicbot[i].y >= 650) magicbot.splice(i, 1)
      } else {
        magicbot[i].dy -= 0.01
      }
    }

    for (i in magicbot) {
      if (
        Math.abs(player.x + 25 - magicbot[i].x - 15) < 50 &&
        Math.abs(player.y + 5 - magicbot[i].y - 5) < 20
      ) {
        waterFire.magic += 50

        magicbot.splice(i, 1)
        if (waterFire.magic >= 100) waterFire.magic = 100

        graaleff.push({
          x: shield.x_m - 25,
          y: shield.y_m - 10,
          animx: 0,
          animy: 0,
        })
      }
    }
  },
}

const fly = {
  x: -50,
  y: 200,
  width: 128,
  height: 360,
  frameX: 0,
  frameY: 0,
  speed: 9,

  draw: function () {
    ctx.drawImage(
      flyy,
      this.width * this.frameX,
      this.height,
      this.width,
      this.height,
      this.x,
      this.y,
      80,
      150
    )
  },

  update: function () {
    if (
      state.current == state.getReady ||
      state.current == state.over ||
      state.current == state.startdark ||
      state.current == state.score
    ) {
      this.x = -100
    }

    if (
      Math.abs(player.x - 10 - fly.x + 15) < 50 &&
      Math.abs(player.y - 5 - fly.y + 15) < 20
    ) {
      player.life -= 10
      yelling.play()
      flySound.play()
    }

    fly.x = fly.x + fly.speed

    if (fly.frameX < 1) {
      fly.frameX++
      fly.frameY = 0
    } else fly.frameX = 0
  },

  drawSin: function () {
    fly.x = fly.x + 10
    fly.y = 300 + 80 * Math.sin(fly.x)
    if (fly.x >= 1200) fly.x = 0
    else fly.x = fly.x + 0.3
  },
}

const small = {
  x: 300,
  y: 200,
  width: 64,
  height: 64,
  frameX: 0,
  frameY: 0,
  speed: 9,
  moving: false,
  timer,

  draw: function () {
    ctx.drawImage(
      player2,
      this.width * this.frameX,
      this.height * this.frameY,
      this.width,
      this.height,
      this.x,
      this.y,
      30,
      30
    )
  },

  update: function () {
    if (state.current == state.over) this.x = -200
    if (state.current == state.getReady) this.x = 300

    if (this.frameX < 8 && this.moving) {
      this.frameX++
      this.frameY = 0
    } else {
      this.frameX = 0
      this.moving = true
    }
  },
}

const state = {
  current: 0,
  startdark: 0,
  getReady: 1,
  game: 2,
  over: 3,
  score: 4,
  pause: 5,
}

const startBtn = {
  x: 375,
  y: 210,
  w: 180,
  h: 80,
}

const startBtn2 = {
  x: 520,
  y: 270,
  w: 70,
  h: 30,
}

const quiteBtn3 = {
  x: 410,
  y: 270,
  w: 70,
  h: 30,
}

const quiteStart = {
  x: 905,
  y: 25,
  w: 55,
  h: 55,
}

const gamePause = {
  sX_p: 0,
  sY_p: 575,
  w_p: 230,
  h_p: 85,
  x_p: 400,
  y_p: 150,

  sX_g: 0,
  sY_g: 400,
  w_g: 230,
  h_g: 85,
  x_g: 400,
  y_g: 300,

  sX_q: 0,
  sY_q: 485,
  w_q: 230,
  h_q: 85,
  x_q: 400,
  y_q: 400,

  draw: function () {
    if (state.current == state.pause) {
      ctx.drawImage(
        pauseimg,
        this.sX_p,
        this.sY_p,
        this.w_p,
        this.h_p,
        this.x_p,
        this.y_p,
        230,
        85
      )
      ctx.drawImage(
        pauseimg,
        this.sX_g,
        this.sY_g,
        this.w_g,
        this.h_g,
        this.x_g,
        this.y_g,
        230,
        85
      )
      ctx.drawImage(
        pauseimg,
        this.sX_q,
        this.sY_q,
        this.w_q,
        this.h_q,
        this.x_q,
        this.y_q,
        230,
        85
      )

      save()
    }
  },
}

// const startdark = setTimeout(function(){

//   if(state.current == state.startdark) state.current = state.getReady;

//      }, 8000);

canvas.addEventListener('click', function (evt) {
  switch (state.current) {
    case state.startdark:
      state.current = state.getReady
      startSound.play()
      break

    case state.getReady:
      let rect = canvas.getBoundingClientRect()
      let clickX = evt.clientX - rect.left
      let clickY = evt.clientY - rect.top

      let rect4 = canvas.getBoundingClientRect()
      let clickX4 = evt.clientX - rect4.left
      let clickY4 = evt.clientY - rect4.top

      if (
        clickX >= startBtn.x &&
        clickX <= startBtn.x + startBtn.w &&
        clickY >= startBtn.y &&
        clickY <= startBtn.y + startBtn.h
      ) {
        state.current = state.game
        startSound.pause()
        startSound.currentTime = 0
        game.play()
      }
      if (
        clickX4 >= quiteStart.x &&
        clickX4 <= quiteStart.x + quiteStart.w &&
        clickY4 >= quiteStart.y &&
        clickY4 <= quiteStart.y + quiteStart.h
      ) {
        windowClose()
      }
      break

    case state.game:
      player.flap()

      if (state.current == state.game) state.current = state.pause

      break

    case state.pause:
      if (state.current == state.pause) {
        let rect5 = canvas.getBoundingClientRect()
        let clickX5 = evt.clientX - rect5.left
        let clickY5 = evt.clientY - rect5.top

        let rect6 = canvas.getBoundingClientRect()
        let clickX6 = evt.clientX - rect6.left
        let clickY6 = evt.clientY - rect6.top

        if (
          clickX5 >= gamePause.x_g &&
          clickX5 <= gamePause.x_g + gamePause.w_g &&
          clickY5 >= gamePause.y_g &&
          clickY5 <= gamePause.y_g + gamePause.h_g
        ) {
          state.current = state.game
          start()
        }
        if (
          clickX6 >= gamePause.x_q &&
          clickX6 <= gamePause.x_q + gamePause.w_q &&
          clickY6 >= gamePause.y_q &&
          clickY6 <= gamePause.y_q + gamePause.h_q
        ) {
          windowClose()
        }
      }
      break

    case state.over:
      startFrog.reset()
      player.reset()

      state.current = state.score
      scoreSound.play()

      break

    case state.score:
      let rect2 = canvas.getBoundingClientRect()
      let clickX2 = evt.clientX - rect2.left
      let clickY2 = evt.clientY - rect2.top

      let rect3 = canvas.getBoundingClientRect()
      let clickX3 = evt.clientX - rect3.left
      let clickY3 = evt.clientY - rect3.top

      if (
        clickX2 >= startBtn2.x &&
        clickX2 <= startBtn2.x + startBtn2.w &&
        clickY2 >= startBtn2.y &&
        clickY2 <= startBtn2.y + startBtn2.h
      ) {
        score.reset()
        state.current = state.getReady
        scoreSound.pause()
        scoreSound.currentTime = 0
        startSound.play()
      }

      if (
        clickX3 >= quiteBtn3.x &&
        clickX3 <= quiteBtn3.x + quiteBtn3.w &&
        clickY3 >= quiteBtn3.y &&
        clickY3 <= quiteBtn3.y + quiteBtn3.h
      ) {
        windowClose()
      }
      break
  }
})

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
  move1: 8,
  animx: 0,

  draw: function () {
    if (state.current == state.startdark) {
      ctx.fillStyle = '#000'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }
  },
  draw_frog: function () {
    if (state.current == state.over) {
      game.pause()
      game.currentTime = 0
      crush_landlord2.play()
      game_overSound.play()
      setTimeout(() => {
        crush_landlord2.pause()
        crush_landlord2.currentTime = 0
        game_overSound.pause()
        game_overSound.currentTime = 0
      }, 4000)
      ctx.fillStyle = '#000'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(
        finalyspriteimg,
        this.w * this.frameX1,
        this.h * this.frameY1,
        this.w / 1.2,
        this.h,
        this.x,
        this.y,
        50,
        90
      )
    }
  },
  draw_start: function () {
    ctx.drawImage(
      startFrogimg,
      this.w_frog * this.frameX,
      this.h_frog,
      this.w_frog,
      this.h_frog,
      this.x_frog,
      this.y_frog,
      200,
      200
    )
    ctx.drawImage(maskimg, this.x_mask, this.y_mask, this.w_mask, this.h_mask)
  },
  update: function () {
    this.x_mask = this.x_mask - this.move
    if (this.x_mask <= 360) {
      this.x_mask = -100
    }

    if (
      state.current == state.getReady ||
      state.current == state.over ||
      state.current == state.game
    ) {
      this.x_frog = -200
      this.x_mask = -200
    }
    setTimeout(function () {
      if (startFrog.frameX < 9) {
        startFrog.frameX++

        startFrog.frameY = 1
      } else startFrog.frameX = 9
    }, 3000)
  },

  update_k: function () {
    if (state.current == state.over) {
      if (startFrog.frameX1 < 27) {
        startFrog.x = startFrog.x + startFrog.move1
        startFrog.frameX1++

        startFrog.frameY1 = 1
      } else startFrog.frameX1 = 27
    }
  },

  reset: function () {
    this.frameX1 = 5
    this.x = 400
  },
}

const getReady = {
  sX: 250,
  sY: 0,
  w: 1000,
  h: 600,
  x: 0,
  y: 0,

  sX_knight: 0,
  sY_knight: 0,
  w_knight: 600,
  h_knight: 900,
  x_knight: 20,
  y_knight: 100,

  sX_button: 190,
  sY_button: 825,
  w_button: 270,
  h_button: 120,
  x_button: 370,
  y_button: 200,

  sX_q: 200,
  sY_q: 755,
  w_q: 65,
  h_q: 65,
  x_q: 900,
  y_q: 20,

  draw: function () {
    if (state.current == state.getReady) {
      ctx.drawImage(
        castleStart,
        this.sX,
        this.sY,
        this.w,
        this.h,
        this.x,
        this.y,
        this.w,
        this.h
      )
      ctx.drawImage(
        knightimg,
        this.sX_knight,
        this.sY_knight,
        this.w_knight,
        this.h_knight,
        this.x_knight,
        this.y_knight,
        400,
        500
      )
      ctx.drawImage(
        startimg,
        this.sX_button,
        this.sY_button,
        this.w_button,
        this.h_button,
        this.x_button,
        this.y_button,
        180,
        80
      )
      ctx.drawImage(
        startquiteimg,
        this.sX_q,
        this.sY_q,
        this.w_q,
        this.h_q,
        this.x_q,
        this.y_q,
        65,
        65
      )
    }
  },
  update: function () {
    if (
      state.current == state.getReady ||
      state.current == state.over ||
      state.current == state.startdark ||
      state.current == state.score
    ) {
      for (i in fire) {
        fire.splice(i, 1)
      }
      for (i in ice) {
        ice.splice(i, 1)
      }
      hideTab()
    }
  },
}

window.addEventListener('keydown', function (e) {
  keys[e.keyCode] = true
  player.moving = true
})

window.addEventListener('keyup', function (e) {
  delete keys[e.keyCode]
  player.moving = false
})

function movePlayer() {
  if (keys[82]) {
    player.frameY = 0
    if (player.frameX < 8) player.frameX++
    else player.frameX = 0

    timer_fire++
    start_darkplace.play()

    if (timer_fire % 5 == 0) {
      fire.push({
        x: player.x,
        y: player.y + 10, //50,
        width: 192,
        height: 192,
        frameX: 0,
        frameY: 0,
        animy: 0,
        animx: 0,
        dx: 10,
      })
    }
  }

  if (keys[65]) {
    player.x -= player.speed
    player.frameY = 3
    player.moving = true
    if (player.x <= 0) player.x = 0
  }
  if (keys[68] && player.x < canvas.width - player.width) {
    player.x += player.speed
    player.frameY = 2
    player.moving = true
  }
  if (keys[32] && player.jumping == false) {
    player.y_velocity -= 80
    player.jumping = true
  }

  if (keys[27] && state.current == state.game) state.current = state.pause
  if (keys[27] && state.current != state.game) state.current = state.pause

  player.y_velocity += 20 //gravity
  if (player.y > 0) {
    if (player.y < 415) player.dy = 0
  }

  player.x += player.x_velocity
  player.y += player.y_velocity
  player.x_velocity *= 0.9
  player.y_velocity *= 1

  if (player.y > 415) {
    player.jumping = false
    player.y = 415
    player.y_velocity = 0
  }
}

function handlePlayerFrame() {
  if (player.frameX < 8 && player.moving) player.frameX++
  else player.frameX = 0
}

function draw() {
  fon.draw()
  score.draw()
  waterbac.draw()
  shield.draw()
  flow.draw()
  player.draw()
  fly.draw()
  small.draw()
  box.draw()
  frog.draw()
  kam.draw()
  frog2.draw()
  getReady.draw()
  startFrog.draw()
  startFrog.draw_frog()
  startFrog.draw_start()
  gamePause.draw()
  graal.draw()
  waterFire.draw()
  magicb.draw()
}

function update() {
  flow.update()
  flow.update2()
  fly.update()
  player.update()
  small.update()
  box.update()
  frog.update()
  fly.drawSin()
  frog2.update()
  startFrog.update()
  startFrog.update_k()
  score.update()
  shield.update()
  graal.update()
  waterFire.update()
  getReady.update()
  magicb.update()
}

let fps, fpsInterval, startTime, now, then, elapsed

function startAnimating(fps) {
  fpsInterval = 1000 / fps
  then = Date.now()
  startTime = then
  animate()
}

function animate() {
  requestAnimationFrame(animate)
  now = Date.now()
  elapsed = now - then
  if (elapsed > fpsInterval) {
    then = now - (elapsed % fpsInterval)

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    draw()
    update()
    handlePlayerFrame()
    movePlayer()
    player.stuck()
    player.flap()
  }
}
startAnimating(10)

window.addEventListener('resize', function () {
  canvas.height = 600
  canvas.width = 1000
})

function windowClose() {
  window.close()
}

function save() {
  startAnimating(0)
}

function start() {
  startAnimating(10)
}

const del = document.querySelectorAll('article')
const deleteElement = (e) => {
  e.target.remove()
}

del.forEach((btn) => {
  btn.addEventListener('click', deleteElement)
})

function progressBarSim(al) {
  let bar = document.getElementById('progressBar')
  bar.value = al
  al = waterFire.magic
  al--
  let sim = setTimeout('progressBarSim(' + al + ')', 100)
  if (al == waterFire.magic) {
    bar.value = 100
    clearTimeout(sim)
  }
}
let amountLoaded = 0
progressBarSim(amountLoaded)

const progress = document.querySelector('.progress')
function hideTab() {
  progress.classList.add('hide')
  progress.classList.remove('show')
}

function showTab() {
  progress.classList.add('show')
  progress.classList.remove('hide')
}
