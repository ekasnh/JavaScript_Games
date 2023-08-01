import platform from '../img/platform.png'
import background from '../img/background.png'
import hills from '../img/hills.png'
import platformSmallTall from '../img/platformSmallTall.png'
console.log(platform)

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.height = 576
canvas.width = 1024

const gravity = 1.5
class Player {
    constructor() {
        this.speed = 10
        this.position ={
            x: 100,
            y: 100
        }

        this.velocity = {
            x:0,
            y:0
        }
        this.width = 30
        this.height = 30
    }
    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x,this.position.y,this.width,this.height)
        
    }
    update() {
        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        
        if (this.position.y +this.height + this.velocity.y <= canvas.height)
        this.velocity.y += gravity
    }
}

class Platform {
    constructor({x,y,image}) {
        this.position = {
            x,y
        }
        // collison detection code error is in width and height may fix in future code
        this.image = image
        this.width = 580
        this.height = 125        
    }
    draw() {
        c.drawImage(this.image,this.position.x,this.position.y)
    }
}
class GenericObject {
    constructor({x,y,image}) {
        this.position = {
            x,y
        }
        // collison detection code error is in width and height may fix in future code
        this.image = image
        this.width = 580
        this.height = 125        
    }
    draw() {
        c.drawImage(this.image,this.position.x,this.position.y)
    }
}
function createImage(imageSrc) {
const image = new Image()
image.src = imageSrc 
return image
} 

let platformImage = createImage(platform)


let player = new Player()
let platforms = []

let genricObjects = []
const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}
function init () {
platformImage = createImage(platform)

player = new Player()
platforms = [
  new Platform({
    x:4500,
    y:170,
    image : createImage(platformSmallTall)
  }),
  
  new Platform({
    x:-1,
    y:470,
    image: platformImage
  }), 
  new Platform({
    x:200,
    y:470,
    image : platformImage
  }),
  new Platform({
    x:900,
    y:470,
    image : platformImage
  }),
  new Platform({
    x:1700,
    y:470,
    image : platformImage
  }),
  new Platform({
    x:2500,
    y:470,
    image : platformImage
  }),
  new Platform({
    x:3500,
    y:470,
    image : platformImage
  }),
  new Platform({
    x:4900,
    y:470,
    image : platformImage
  })
]

genricObjects = [
  new GenericObject({
    x: -1,
    y: -1,
    image: createImage(background)
  }),
  new GenericObject({
    x: -1,
    y: -1,
    image: createImage(hills)
  })
]
}

//to win
let scrollOffSet = 0

//player update problem
function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0,0,canvas.width,canvas.height)
    genricObjects.forEach(genricObjects => {
      genricObjects.draw()
    })

    platforms.forEach(platform => {
        platform.draw()
    })
    player.update()

    if(keys.right.pressed && player.position.x < 400)
    {
        player.velocity.x = player.speed
    } 
    else if ((keys.left.pressed && player.position.x > 100)|| (keys.left.pressed && scrollOffSet == 0 && player.position.x>0))
    {
        player.velocity.x = -player.speed
    } 
    else {
        player.velocity.x = 0

        if (keys.right.pressed) {
            scrollOffSet += player.speed
            platforms.forEach(platform => {
                platform.position.x -= player.speed})
            genricObjects.forEach(genricObjects => {
              genricObjects.position.x -= player.speed *.66 
            })
        }
        else if (keys.left.pressed && scrollOffSet>0) {
            scrollOffSet -= 5
            platforms.forEach(platform => {
            platform.position.x += player.speed
        })
        genricObjects.forEach(genricObjects => {
              genricObjects.position.x += player.speed *.66 
            })  
        }    
    }

    // platform collison detection 
    platforms.forEach(platform => {
        platform.draw()
    
    if(player.position.y  + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) 
    {
        player.velocity.y = 0 
    }
})

// win condition
if (scrollOffSet > 5000) {
    console.log("you win")
}
// loose condition
if(player.position.y > canvas.height) {
  console.log("loose")
  init()
}
}
init()
animate()

window.addEventListener('keydown',({keyCode}) => {
// console.log(keyCode)

switch (keyCode) {
    case 65:console.log('left')
    keys.left.pressed = true
    break
    case 83: console.log('down')
    player.velocity.y += 20
    break
    case 68: console.log('right')
    keys.right.pressed = true
    break
    case 87: console.log('up')
    player.velocity.y -= 30
    break
}
console.log(keys.right.pressed)
})

window.addEventListener('keyup',({keyCode}) => {
// console.log(keyCode)

switch (keyCode) {
    case 65:console.log('left')
    keys.left.pressed = false
    break
    case 83: console.log('down')
    player.velocity.y += 20
    break
    case 68: console.log('right')
    keys.right.pressed = false
    break
    case 87: console.log('up')
    break
}
console.log(keys.right.pressed)
})