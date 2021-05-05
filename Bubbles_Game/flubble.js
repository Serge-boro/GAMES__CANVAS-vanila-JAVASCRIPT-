const canvas = document.querySelector('#myCanvas')
const context = canvas.getContext('2d')

/*canvas.width = 1200;
canvas.height = 800;*/
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const backgraund = new Image()
backgraund.src = 'img/background4.jpg'
const bumble = new Image()
bumble.src = 'img/bumble2_2_1_1.png'
const betimg = new Image()
betimg.src = 'img/bet3.png'
const bet2img = new Image()
bet2img.src = 'img/bet4.png'
const back1img = new Image()
back1img.src = 'img/bg4.png'
const back6img = new Image()
back6img.src = 'img/bg6.png'
const back2img = new Image()
back2img.src = 'img/sky.png'
const back3img = new Image()
back3img.src = 'img/fon.png'
const back4img = new Image()
back4img.src = 'img/fon2.png'
const back5img = new Image()
back5img.src = 'img/fon3.png'
const bloodimg = new Image()
bloodimg.src = 'img/blood2.png'
const button_start_startimg = new Image()
button_start_startimg.src = 'img/button_start.png'
const button_quit_startimg = new Image()
button_quit_startimg.src = 'img/quit_start2.png'
const bord_overimg = new Image()
bord_overimg.src = 'img/board_over.png'
const pointerimg = new Image()
pointerimg.src = 'img/pointer.png'
const flyimg = new Image()
flyimg.src = 'img/fly.png'
const fly2img = new Image()
fly2img.src = 'img/mosq.png'
const fly3img = new Image()
fly3img.src = 'img/bee.png'
const fly4img = new Image()
fly4img.src = 'img/dragonfly.png'
const fly5img = new Image()
fly5img.src = 'img/dladybird.png'
const startFrogimg = new Image()
startFrogimg.src = 'img/startfrog2_2.png'
const maskimg = new Image()
maskimg.src = 'img/mask.png'

const sound1 = new Audio()
sound1.src = 'sound/bubbles-single2.wav'
const sound2 = new Audio()
sound2.src = 'sound/Plop.ogg'
const chuk1 = new Audio()
chuk1.src = 'sound/chuk1.mp3'
const chuk2 = new Audio()
chuk2.src = 'sound/chuk2.mp3'
const fly1 = new Audio()
fly1.src = 'sound/fly.mp3'
const fly2 = new Audio()
fly2.src = 'sound/fly2.mp3'
const startMusic = new Audio()
startMusic.src = 'sound/start_song.mp3'
const finalMusic = new Audio()
finalMusic.src = 'sound/final_song.mp3'

const article = document.querySelectorAll('article'),
  article1 = document.querySelector('.article1'),
  article2 = document.querySelector('.article2')

let score = 0
let bug = 1
let speed_bubble = 0
let speed_fly_fly = 0
let speed_fly_mosq = 0
let speed_fly_dragonfly = 0
let speed_fly_bee = 0
let speed_fly_dladybird = 0

let canvasPos = canvas.getBoundingClientRect()
const mouse = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  click: false,
}

canvas.addEventListener('mousemove', function (event) {
  pointer_canvas.x = event.offsetX - 30
  pointer_canvas.y = event.offsetY - 30
})

canvas.addEventListener('mousedown', (event) => {
  mouse.x = event.x - canvasPos.left
  mouse.y = event.y - canvasPos.top
})

const bubble_eff = [],
  bubble_ar = [],
  fly_arr = [],
  fly2_arr = [],
  fly3_arr = [],
  fly4_arr = [],
  fly5_arr = [],
  blood_arr = []

const bum = () => {
  for (let i = 0; i < bubble_eff.length; i++) {
    bubble_eff[i].frameY = 1
    context.drawImage(
      bumble,
      bubble_eff[i].width * bubble_eff[i].frameX,
      bubble_eff[i].height * bubble_eff[i].frameY,
      bubble_eff[i].width,
      bubble_eff[i].height,
      bubble_eff[i].x,
      bubble_eff[i].y,
      bubble_eff[i].width / 1.5,
      bubble_eff[i].height / 1.5
    )
    if (bubble_eff[i].frameX < 3) {
      bubble_eff[i].frameX++
      bubble_eff[i].frameY++
    } else if (bubble_eff[i].frameY >= 2) bubble_eff.splice(i, 1)
  }
}

const blood_draw = () => {
  for (let i = 0; i < blood_arr.length; i++) {
    context.drawImage(
      bloodimg,
      blood_arr[i].width * blood_arr[i].frameX,
      blood_arr[i].height * blood_arr[i].frameY,
      blood_arr[i].width,
      blood_arr[i].height,
      blood_arr[i].x,
      blood_arr[i].y,
      blood_arr[i].width / 3,
      blood_arr[i].height / 3
    )
    if (blood_arr[i].frameX < 3) {
      blood_arr[i].frameX++
      blood_arr[i].frameY++
    } else if (blood_arr[i].frameY >= 2) blood_arr.splice(i, 1)
  }
}

class Bet {
  constructor() {
    this.x = 650
    this.y = 250
    this.width = 180
    this.height = 180
    this.radius = 50
    this.angle = 0
    this.frameX = 0
    this.frameY = 0
    this.frame = 0
  }
  update() {
    const dx = this.x - mouse.x
    const dy = this.y - mouse.y

    if (mouse.x != this.x) this.x -= dx / 8
    if (mouse.y != this.y) this.y -= dy / 8
  }
  draw() {
    if (this.x >= mouse.x) {
      context.drawImage(
        betimg,
        this.width * this.frameX,
        this.height * this.frameY,
        this.width,
        this.height,
        this.x - 60,
        this.y - 60,
        this.width / 1.5,
        this.height / 1.5
      )
      if (this.frameX === 3) {
        this.frameY++
        this.frameX = 0
      } else if (this.frameY > 1) {
        this.frameY = 0
      } else this.frameX++
    } else {
      context.drawImage(
        bet2img,
        this.width * this.frameX,
        this.height * this.frameY,
        this.width,
        this.height,
        this.x - 60,
        this.y - 60,
        this.width / 1.5,
        this.height / 1.5
      )
    }
    if (this.frameX === 3) {
      this.frameY++
      this.frameX = 0
    } else if (this.frameY > 1) {
      this.frameY = 0
    } else this.frameX++
  }
  draw2() {
    context.drawImage(
      bet2img,
      this.width * this.frameX,
      this.height * this.frameY,
      this.width,
      this.height,
      this.x - 60,
      this.y - 60,
      this.width / 1.5,
      this.height / 1.5
    )

    this.frame++
    if (this.frame > 11) this.frame = 0
    if (this.frame == 3 || this.frame == 7 || this.frame == 11) this.frameX = 0
    else this.frameX++

    if (this.frame < 2) this.frameY = 0
    else if (this.frame < 7) this.frameY = 1
    else if (this.frame < 11) this.frameY = 2
    else this.frameY = 0
  }
}

class Bubble2 {
  constructor() {
    this.sX = 0
    this.sY = 15
    this.width = 135
    this.height = 140
    this.x = Math.random() * canvas.width - 100
    this.y = canvas.height + 100
    this.speed = Math.random() * 5 + 1
    this.width_size = 70
    this.height_size = 70
    this.sound = Math.random() <= 0.5 ? 'sound1' : 'sound2'
  }
  update() {
    this.y -= this.speed
  }
  draw() {
    context.drawImage(
      bumble,
      this.sX,
      this.sY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width_size,
      this.height_size
    )
  }
}

function handBubble() {
  if (speed_bubble % 50 == 0) {
    bubble_ar.push(new Bubble2())
  }
  for (let i = 0; i < bubble_ar.length; i++) {
    bubble_ar[i].update()
    bubble_ar[i].draw()

    if (bubble_ar[i].y < -100) bubble_ar.splice(i, 1)

    if (
      Math.abs(bubble_ar[i].x + 50 - player.x - 50) < 50 &&
      Math.abs(bubble_ar[i].y - 10 - player.y + 10) < 25
    ) {
      bubble_eff.push({
        x: bubble_ar[i].x,
        y: bubble_ar[i].y,
        width: 157,
        height: 170,
        frameX: 0,
        frameY: 0,
      })
      if (bubble_ar[i].sound == 'sound1') sound1.play()
      else sound2.play()
      score++
      bubble_ar.splice(i, 1)
    }
  }
}

class Backgraund {
  constructor(x, y, width, height) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }
  draw() {
    context.drawImage(backgraund, this.x, this.y, this.width, this.height)
  }
  draw2() {
    context.drawImage(back6img, this.x, this.y, this.width, this.height)
  }
  draw_rendered_quit() {
    context.drawImage(
      button_quit_startimg,
      this.x,
      this.y,
      this.width,
      this.height
    )
  }
  draw_rendered_bord() {
    context.drawImage(bord_overimg, this.x, this.y, this.width, this.height)
  }
  draw_pointer() {
    context.drawImage(pointerimg, this.x, this.y, this.width, this.height)
  }
}

class Backgraund_extends extends Backgraund {
  constructor(
    sX,
    sY,
    width,
    height,
    x,
    y,
    frameX,
    frameY,
    width_size,
    height_size,
    speed,
    frame
  ) {
    super(x, y, width, height)
    this.frameX = frameX
    this.frameY = frameY
    this.sX = sX
    this.sY = sY
    this.width_size = width_size
    this.height_size = height_size
    this.speed = speed
    this.frame = frame
  }

  draw() {
    context.drawImage(
      back1img,
      this.sX,
      this.sY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width_size,
      this.height_size
    )
  }
  draw2() {
    context.drawImage(
      back2img,
      this.sX,
      this.sY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width_size,
      this.height_size
    )
  }
  draw3() {
    context.drawImage(
      back3img,
      this.width * this.frameX,
      this.height * this.frameY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width_size,
      this.height_size
    )
    if (this.frameX > 3) {
      this.frameY = 1
      this.frameX = 0
    } else if (this.frameY >= 1) {
      this.frameX = 0
      this.frameY = 0
    } else this.frameX++
  }
  draw4() {
    context.drawImage(
      back4img,
      this.width * this.frameX,
      this.height * this.frameY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width_size,
      this.height_size
    )
    this.frame++
    if (this.frame > 11) this.frame = 0
    if (this.frame == 3 || this.frame == 7 || this.frame == 11) this.frameX = 0
    else this.frameX++

    if (this.frame < 2) this.frameY = 0
    else if (this.frame < 7) this.frameY = 1
    else if (this.frame < 11) this.frameY = 2
    else this.frameY = 0
  }
  draw5() {
    context.drawImage(
      back5img,
      this.width * this.frameX,
      this.height * this.frameY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width_size,
      this.height_size
    )
    if (this.frameX > 2) {
      this.frameY = 1
      this.frameX = 0
    } else if (this.frameY >= 1) {
      this.frameX = 0
      this.frameY = 0
    } else this.frameX++
  }
  draw_frog() {
    context.fillStyle = '#000'
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.drawImage(
      startFrogimg,
      this.width * this.frameX,
      this.height * this.frameY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width_size,
      this.height_size
    )
  }
  draw_mosk() {
    context.drawImage(maskimg, this.x, this.y, this.width, this.height)
    this.x = this.x - this.speed
    if (this.x <= 440) this.x = -100
  }
  draw_button_start() {
    context.drawImage(
      button_start_startimg,
      this.sX,
      this.sY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width_size,
      this.height_size
    )
  }
  update() {
    if (this.x < -200) {
      this.y = this.y
      this.x = canvas.width
    } else {
      this.x -= this.speed
    }
  }
  update2() {
    if (this.x > canvas.width) {
      this.y = this.y
      this.x = -50
    } else {
      this.x += this.speed
    }
  }
}

const handfly = (function () {
  const draw = () => {
    for (let i = 0; i < fly_arr.length; i++) {
      context.drawImage(
        flyimg,
        fly_arr[i].width * fly_arr[i].frameX,
        fly_arr[i].height * fly_arr[i].frameY,
        fly_arr[i].width,
        fly_arr[i].height,
        fly_arr[i].x,
        fly_arr[i].y,
        70,
        70
      )
      if (fly_arr[i].frameX > 3) {
        fly_arr[i].frameY = 1
        fly_arr[i].frameX = 0
      } else if (fly_arr[i].frameY >= 1) {
        fly_arr[i].frameX = 0
        fly_arr[i].frameY = 0
      } else fly_arr[i].frameX++

      if (
        Math.abs(fly_arr[i].x + 50 - player.x - 50) < 70 &&
        Math.abs(fly_arr[i].y - 10 - player.y + 10) < 70
      ) {
        blood_arr.push({
          x: fly_arr[i].x - 50,
          y: fly_arr[i].y,
          width: 256,
          height: 256,
          frameX: 0,
          frameY: 0,
        })
        chuk1.play()
        fly_arr.splice(i, 1)
      }
    }
  }

  const draw2 = () => {
    for (let i = 0; i < fly2_arr.length; i++) {
      context.drawImage(
        fly2img,
        fly2_arr[i].width * fly2_arr[i].frameX,
        fly2_arr[i].height * fly2_arr[i].frameY,
        fly2_arr[i].width,
        fly2_arr[i].height,
        fly2_arr[i].x,
        fly2_arr[i].y,
        70,
        70
      )
      if (fly2_arr[i].frameX == 3) {
        fly2_arr[i].frameY++
        fly2_arr[i].frameX = 0
      } else if (fly2_arr[i].frameY >= 3) {
        fly2_arr[i].frameX = 0
        fly2_arr[i].frameY = 0
      } else fly2_arr[i].frameX++

      if (
        Math.abs(fly2_arr[i].x + 50 - player.x - 50) < 70 &&
        Math.abs(fly2_arr[i].y - 10 - player.y + 10) < 70
      ) {
        blood_arr.push({
          x: fly2_arr[i].x - 50,
          y: fly2_arr[i].y,
          width: 256,
          height: 256,
          frameX: 0,
          frameY: 0,
        })
        chuk2.play()
        fly2_arr.splice(i, 1)
      }
    }
  }
  const draw3 = () => {
    for (let i = 0; i < fly3_arr.length; i++) {
      context.drawImage(
        fly3img,
        fly3_arr[i].width * fly3_arr[i].frameX,
        fly3_arr[i].height * fly3_arr[i].frameY,
        fly3_arr[i].width,
        fly3_arr[i].height,
        fly3_arr[i].x,
        fly3_arr[i].y,
        70,
        70
      )
      if (fly3_arr[i].frameX == 3) {
        fly3_arr[i].frameY++
        fly3_arr[i].frameX = 0
      } else if (fly3_arr[i].frameY >= 3) {
        fly3_arr[i].frameX = 0
        fly3_arr[i].frameY = 0
      } else fly3_arr[i].frameX++

      if (
        Math.abs(fly3_arr[i].x + 50 - player.x - 50) < 70 &&
        Math.abs(fly3_arr[i].y - 10 - player.y + 10) < 70
      ) {
        blood_arr.push({
          x: fly3_arr[i].x - 50,
          y: fly3_arr[i].y,
          width: 256,
          height: 256,
          frameX: 0,
          frameY: 0,
        })
        chuk1.play()
        fly3_arr.splice(i, 1)
      }
    }
  }
  const draw4 = () => {
    for (let i = 0; i < fly4_arr.length; i++) {
      context.drawImage(
        fly4img,
        fly4_arr[i].width * fly4_arr[i].frameX,
        fly4_arr[i].height * fly4_arr[i].frameY,
        fly4_arr[i].width,
        fly4_arr[i].height,
        fly4_arr[i].x,
        fly4_arr[i].y,
        70,
        70
      )
      if (fly4_arr[i].frameX == 3) {
        fly4_arr[i].frameY++
        fly4_arr[i].frameX = 0
      } else if (fly4_arr[i].frameY >= 3) {
        fly4_arr[i].frameX = 0
        fly4_arr[i].frameY = 0
      } else fly4_arr[i].frameX++

      if (
        Math.abs(fly4_arr[i].x + 50 - player.x - 50) < 70 &&
        Math.abs(fly4_arr[i].y - 10 - player.y + 10) < 70
      ) {
        blood_arr.push({
          x: fly4_arr[i].x - 50,
          y: fly4_arr[i].y,
          width: 256,
          height: 256,
          frameX: 0,
          frameY: 0,
        })
        chuk2.play()
        fly4_arr.splice(i, 1)
      }
    }
  }

  const update = () => {
    if (speed_fly_fly % 200 == 0)
      fly_arr.push({
        width: 70,
        height: 70,
        x: canvas.width + 50,
        y: 0,
        frameX: 0,
        frameY: 0,
        speed: Math.random() * 18 + 1,
      })
    for (let i = 0; i < fly_arr.length; i++) {
      fly_arr[i].x = fly_arr[i].x - 20
      fly_arr[i].y = 400 + 100 * Math.sin(fly_arr[i].x)

      if (fly_arr[i].x > 0) fly_arr[i].x = fly_arr[i].x + 0.8
      else if ((fly_arr[i].x -= 100)) {
        fly_arr.splice(i, 1)
        bug--
      }
    }
  }
  const update2 = () => {
    if (speed_fly_mosq % 100 == 0)
      fly2_arr.push({
        width: 77.5,
        height: 82.5,
        x: canvas.width + 50,
        y: Math.random() * canvas.height - 25,
        frameX: 0,
        frameY: 0,
        speed: Math.random() * 18 + 1,
      })
    for (let i = 0; i < fly2_arr.length; i++) {
      fly2_arr[i].x -= fly2_arr[i].speed
      if (fly2_arr[i].x < 0) {
        fly2_arr.splice(i, 1)
        bug--
      }
    }
  }
  const update3 = () => {
    if (speed_fly_bee % 200 == 0)
      fly3_arr.push({
        width: 97,
        height: 82,
        x: -50,
        y: Math.random() * canvas.height - 25,
        frameX: 0,
        frameY: 0,
        speed: Math.random() * 18 + 1,
      })
    for (let i = 0; i < fly3_arr.length; i++) {
      fly3_arr[i].x += fly3_arr[i].speed
      if (fly3_arr[i].x > canvas.width + 50) {
        fly3_arr.splice(i, 1)
        bug--
      }
    }
  }
  const update4 = () => {
    if (speed_fly_dragonfly % 300 == 0)
      fly4_arr.push({
        width: 105,
        height: 94,
        x: -50,
        y: Math.random() * canvas.height - 25,
        frameX: 0,
        frameY: 0,
        speed: Math.random() * 18 + 1,
      })
    for (let i = 0; i < fly4_arr.length; i++) {
      fly4_arr[i].x += fly4_arr[i].speed
      if (fly4_arr[i].x > canvas.width + 50) {
        fly4_arr.splice(i, 1)
        bug--
      }
    }
  }
  return {
    fly_rendored: draw,
    fly_fly: update,
    fly_mosq_rendered: draw2,
    fly_mosq: update2,
    fly_bee_rendered: draw3,
    fly_bee: update3,
    fly_dragonfly_rendered: draw4,
    fly_dragonfly: update4,
  }
})()

class Dladybird {
  constructor() {
    this.width = 140
    this.height = 97
    this.x = Math.random() * canvas.width - 25
    this.y = canvas.height + 100
    this.speed = Math.random() * 12 + 1
    this.width_size = 50
    this.height_size = 50
    this.frameX = 0
    this.frameY = 0
    this.sound = Math.random() <= 0.5 ? 'chuk1' : 'chuk2'
  }
  update() {
    this.y -= this.speed
  }
  draw() {
    context.drawImage(
      fly5img,
      this.width * this.frameX,
      this.height * this.frameY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width_size,
      this.height_size
    )
  }
}

function dladybird_one() {
  if (speed_fly_dladybird % 150 == 0) {
    fly5_arr.push(new Dladybird())
    //console.log(bubble_ar.length);
  }
  for (let i = 0; i < fly5_arr.length; i++) {
    fly5_arr[i].update()
    fly5_arr[i].draw()

    if (fly5_arr[i].frameX == 3) {
      fly5_arr[i].frameY = 1
      fly5_arr[i].frameX = 0
    } else if (fly5_arr[i].frameY >= 1) {
      fly5_arr[i].frameX = 0
      fly5_arr[i].frameY = 0
    } else fly5_arr[i].frameX++

    if (fly5_arr[i].y < -100) {
      fly5_arr.splice(i, 1)
      bug--
    }
  }
}

function dladybird_two() {
  for (let i = 0; i < fly5_arr.length; i++) {
    if (
      Math.abs(fly5_arr[i].x + 50 - player.x - 50) < 50 &&
      Math.abs(fly5_arr[i].y - 10 - player.y + 10) < 25
    ) {
      blood_arr.push({
        x: fly5_arr[i].x - 50,
        y: fly5_arr[i].y,
        width: 256,
        height: 256,
        frameX: 0,
        frameY: 0,
      })
      if (fly5_arr[i].sound == 'chuk1') chuk1.play()
      else chuk2.play()
      fly5_arr.splice(i, 1)
    }
  }
}

const back_land = new Backgraund_extends(
  670,
  300,
  410,
  340,
  600,
  200,
  0,
  0,
  130,
  80,
  1
)
const back_land2 = new Backgraund_extends(
  1175,
  130,
  815,
  615,
  1500,
  250,
  0,
  0,
  150,
  100,
  1
)
const fly_fon = new Backgraund_extends(
  0,
  0,
  145,
  172,
  canvas.width,
  300,
  0,
  0,
  60,
  50,
  5
)
const fly_fon2 = new Backgraund_extends(
  0,
  0,
  170,
  173,
  -50,
  50,
  0,
  0,
  60,
  50,
  5,
  0
)
const fly_fon3 = new Backgraund_extends(
  0,
  0,
  170,
  142,
  canvas.width,
  250,
  0,
  0,
  60,
  50,
  5
)
const sky = new Backgraund_extends(170, 100, 180, 80, 50, 100, 0, 0, 150, 60, 1)
const sky2 = new Backgraund_extends(
  40,
  145,
  120,
  100,
  800,
  150,
  0,
  0,
  80,
  50,
  1
)
const sky3 = new Backgraund_extends(50, 40, 120, 80, 1800, 20, 0, 0, 80, 50, 1)
const sky4 = new Backgraund_extends(
  170,
  100,
  180,
  80,
  1500,
  130,
  0,
  0,
  150,
  60,
  1
)
const sky5 = new Backgraund_extends(40, 145, 120, 100, 900, 20, 0, 0, 80, 50, 1)
const sky6 = new Backgraund_extends(
  170,
  100,
  180,
  80,
  1200,
  80,
  0,
  0,
  150,
  60,
  1
)
const sky7 = new Backgraund_extends(
  170,
  100,
  180,
  80,
  400,
  20,
  0,
  0,
  150,
  60,
  1
)
const sky8 = new Backgraund_extends(50, 40, 120, 80, 500, 150, 0, 0, 80, 50, 1)
const frog = new Backgraund_extends(
  0,
  0,
  275.9,
  200,
  200,
  190,
  0,
  1,
  275.9,
  200,
  0
)
const mosk = new Backgraund_extends(0, 0, 75, 75, 580, 270, 0, 0, 75, 75, 4)
const new_backgraund = new Backgraund(0, 0, canvas.width, canvas.height)
const backgraund_start = new Backgraund(0, 0, canvas.width, canvas.height)
const down_backgraund_start = new Backgraund(0, 750, 900, 200)
const down_backgraund_start2 = new Backgraund(740, 750, 900, 200)
const down_backgraund_start3 = new Backgraund(1480, 750, 900, 200)
const down_backgraund = new Backgraund(0, 700, 600, 230)
const down_backgraund2 = new Backgraund(585, 700, 615, 230)
const down_backgraund3 = new Backgraund(1185, 700, 600, 230)
const down_backgraund4 = new Backgraund(1680, 700, 600, 230)
const player = new Bet()
const button_quit = new Backgraund(1750, 20, 120, 125)
const button_start = new Backgraund_extends(
  25,
  85,
  265,
  130,
  800,
  250,
  0,
  0,
  200,
  90,
  0
)
const button_start_over = new Backgraund_extends(
  25,
  85,
  265,
  130,
  800,
  600,
  0,
  0,
  200,
  90,
  0
)
const button_start_btn = new Backgraund(810, 255, 180, 75)
const button_quit_btn = new Backgraund(1770, 30, 90, 110)
const button_start_over_btn = new Backgraund(810, 605, 180, 75)
const bord_over = new Backgraund(400, 50, 1000, 780)
const pointer_canvas = new Backgraund(50, 50, 60, 60)

function draw() {
  if (state.current == state.startdark) {
    frog.draw_frog()
    mosk.draw_mosk()
    pointer_canvas.draw_pointer()
    setTimeout(function () {
      if (frog.frameX < 9) {
        frog.frameX++
        frog.frameY = 1
      } else frog.frameX = 9
    }, 3000)
  }
  if (state.current == state.getReady) {
    finalMusic.pause()
    finalMusic.currentTime = 0
    sound_start()
    reset_bug()
    new_backgraund.draw()
    player.draw2()
    startAnimating(7)
    down_backgraund_start.draw2()
    down_backgraund_start2.draw2()
    down_backgraund_start3.draw2()
    button_quit.draw_rendered_quit()
    button_start.draw_button_start()
    pointer_canvas.draw_pointer()

    //   	context.fillStyle = "red";
    // context.fillRect(1770, 30, 90, 110);
  }

  if (state.current == state.game) {
    startAnimating(10)
    new_backgraund.draw()
    back_land.draw()
    back_land2.draw()
    sky.draw2()
    sky2.draw2()
    sky3.draw2()
    sky4.draw2()
    sky5.draw2()
    sky6.draw2()
    sky7.draw2()
    sky8.draw2()
    fly_fon.draw3()
    fly_fon2.draw4()
    fly_fon3.draw5()
    down_backgraund.draw2()
    down_backgraund2.draw2()
    down_backgraund3.draw2()
    down_backgraund4.draw2()
    player.draw()
    handBubble()
    dladybird_one()
    dladybird_two()
    handfly.fly_rendored()
    handfly.fly_fly()
    handfly.fly_mosq_rendered()
    handfly.fly_mosq()
    handfly.fly_bee_rendered()
    handfly.fly_bee()
    handfly.fly_dragonfly_rendered()
    handfly.fly_dragonfly()
    blood_draw()
    bum()
    pointer_canvas.draw_pointer()

    context.lineWidth = 1
    context.font = '40px Teko'
    context.fillStyle = '#b7a8bd'
    context.strokeStyle = '#000'
    context.fillText('score:' + score, 20, 50)
    context.strokeText('score:' + score, 20, 50)

    context.lineWidth = 1
    context.font = '40px Teko'
    context.fillStyle = 'red'
    context.strokeStyle = '#000'
    context.fillText('bugs:' + bug, 1750, 50)
    context.strokeText('bugs:' + bug, 1750, 50)

    best_score = parseInt(localStorage.getItem('best_bubble')) || 0
    best_score = Math.max(score, best_score)
    localStorage.setItem('best_bubble', best_score)
  }

  if (state.current == state.over) {
    startMusic.pause()
    startMusic.currentTime = 0
    finalMusic.play()
    new_backgraund.draw()
    button_quit.draw_rendered_quit()
    button_start_over.draw_button_start()
    bord_over.draw_rendered_bord()
    pointer_canvas.draw_pointer()

    // SCORE VALUE
    context.lineWidth = 1
    context.font = '80px Teko'
    context.fillStyle = '#b7a8bd'
    context.strokeStyle = '#000'
    context.fillText(score, 990, 440)
    context.strokeText(score, 990, 440)
    // BEST SCORE
    context.fillText(best_score, 980, 540)
    context.strokeText(best_score, 980, 540)

    reset()
  }
}

function update() {
  if (state.current == state.game) {
    player.update()
    back_land.update()
    back_land2.update()
    fly_fon.update()
    sky.update2()
    sky2.update2()
    sky3.update2()
    sky4.update2()
    sky5.update2()
    sky6.update2()
    sky7.update2()
    sky8.update2()
    fly_fon2.update2()
    fly_fon3.update2()

    state_reset()
  }
}

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
})

function reset_bug() {
  bug = 2
  score = 0
}

function reset() {
  player.x = 650
  player.y = 250
  for (i in fly_arr) {
    fly_arr.splice(i, 1)
  }
  for (i in fly2_arr) {
    fly2_arr.splice(i, 1)
  }
  for (i in fly3_arr) {
    fly3_arr.splice(i, 1)
  }
  for (i in fly4_arr) {
    fly4_arr.splice(i, 1)
  }
  for (i in fly5_arr) {
    fly5_arr.splice(i, 1)
  }
  for (i in bubble_ar) {
    bubble_ar.splice(i, 1)
  }
}

function state_reset() {
  if (bug <= 0) {
    if (state.current == state.game) state.current = state.over
  }
}

function sound_start() {
  let start_w = startMusic.play()
  if (start_w !== undefined) {
    start_w
      .then(() => {
        start_w.play()
      })
      .catch((error) => {
        console.log('Autoplay was prevented')
      })
  }
}

function windowClose() {
  window.close()
}

const hideElement = () => {
  article1.classList.add('hide')
  article2.classList.add('show')
}
const deleteElement = (e) => {
  e.target.remove()
}
article.forEach((btn) => {
  btn.addEventListener('click', hideElement)
})
article.forEach((btn) => {
  btn.addEventListener('click', deleteElement)
})

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

    context.clearRect(0, 0, canvas.width, canvas.height)
    speed_bubble++
    speed_fly_fly++
    speed_fly_mosq++
    speed_fly_bee++
    speed_fly_dragonfly++
    speed_fly_dladybird++

    draw()
    update()
  }
}
startAnimating(10)

const state = { current: 0, startdark: 0, getReady: 1, game: 2, over: 3 }

// const startdark = setTimeout(function(){
// if(state.current == state.startdark) state.current = state.getReady;
// }, 9000);

canvas.addEventListener('click', function (evt) {
  switch (state.current) {
    case state.startdark:
      state.current = state.getReady
      break
    case state.getReady:
      let rect = canvas.getBoundingClientRect()
      let clickX = evt.clientX - rect.left
      let clickY = evt.clientY - rect.top

      let rect2 = canvas.getBoundingClientRect()
      let clickX2 = evt.clientX - rect2.left
      let clickY2 = evt.clientY - rect2.top

      if (
        clickX >= button_start_btn.x &&
        clickX <= button_start_btn.x + button_start_btn.width &&
        clickY >= button_start_btn.y &&
        clickY <= button_start_btn.y + button_start_btn.height
      )
        state.current = state.game
      if (
        clickX2 >= button_quit_btn.x &&
        clickX2 <= button_quit_btn.x + button_quit_btn.width &&
        clickY2 >= button_quit_btn.y &&
        clickY2 <= button_quit_btn.y + button_quit_btn.height
      )
        windowClose()
      break

    case state.game:
      break
      if (state.current == state.game) state.current = state.over

    case state.over:
      let rect3 = canvas.getBoundingClientRect()
      let clickX3 = evt.clientX - rect3.left
      let clickY3 = evt.clientY - rect3.top

      let rect4 = canvas.getBoundingClientRect()
      let clickX4 = evt.clientX - rect4.left
      let clickY4 = evt.clientY - rect4.top

      if (
        clickX3 >= button_start_over_btn.x &&
        clickX3 <= button_start_over_btn.x + button_start_over_btn.width &&
        clickY3 >= button_start_over_btn.y &&
        clickY3 <= button_start_over_btn.y + button_start_over_btn.height
      )
        state.current = state.getReady
      if (
        clickX4 >= button_quit_btn.x &&
        clickX4 <= button_quit_btn.x + button_quit_btn.width &&
        clickY4 >= button_quit_btn.y &&
        clickY4 <= button_quit_btn.y + button_quit_btn.height
      )
        windowClose()
      break
  }
})
