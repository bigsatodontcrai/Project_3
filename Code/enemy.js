
app.view.setAttribute('tabindex', 0);
const tileSize = 16;
const SCALE = 2;
let bumped = true;





class Keyboard {

    constructor() {
        this.pressed = {};
    }

    watch(element) {

        element.addEventListener('keydown', (e) => {
            this.pressed[e.key] = true;
            console.log(e.key);
        });

        element.addEventListener('keyup', (e) => {
            this.pressed[e.key] = false;
        });
    }

}

let kb = new Keyboard();
kb.watch(app.view);


let collisionMap =[ 0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
                    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0, 
                    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   1,   1,   1,   0,   0, 
                    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0, 
                    0,   0,   0,   0,   0,   1,   1,   1,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0, 
                    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   1,   1,   1,   0,   0,   0,   0,   0,   0,   0,   0,   0, 
                    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,    1,  1,   1, 
                    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   1,   1,   1,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   1,   1,   1,   0,   0,   0,   0, 
                    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   1,   1,   1,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0, 
                    0,   0,   0,   0,   0,   0,   0,   0,   0,   1,   1,   1,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   1,   1,   1,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0, 
                    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   1,   1,   1,   1,   0,   0,   0,   0,   0,   0,   0,   0,   0,   1,   1, 
                    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   1,   1,   1,   1,   1,   0,   0,   0,   0,   1,   1,   0,   0,   0,   1,   1, 
                    1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   0,   0,   1,   1,   1,   1,   0,   0,   0,   0,   0,   0,   0,   1,   1,   1,   1,   0,   0,   1,   1,   1,   1,   1,   1,   0,   0,   1,   1,   1,   1,   1,   0,   0,   1,   1, 
                    1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   0,   0,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   0,   0,   1,   1,   1,   1,   1,   1,   0,   0,   1,   1,   1,   1,   1,   1,   1,   1,   1, 
                    1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   0,   0,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   0,   0,   1,   1,   1,   1,   1,   1,   0,   0,   1,   1,   1,   1,   1,   1,   1,   1,   1]

let map = {height: 15, width: 50};

function testCollision(worldX, worldY) 
{

    let mapX = Math.floor(worldX / tileSize);
    let mapY = Math.floor(worldY / tileSize);

    return collisionMap[mapY * map.width + mapX];
}

let enemyResource;
enemyResource = PIXI.Loader.shared.resources["./Assets/Walk.json"].spritesheet;
let Goomba = new PIXI.AnimatedSprite(resource.animations.walk);
Goomba.height = 32;
Goomba.width = 40;
Goomba.anchor.set(0.5, 0);
//let Goomba = new PIXI.Sprite.from("./Assets/Walk.png");
Goomba.play();
app.stage.addChild(Goomba)

let goombaStat = {

    x: 335, y: 0,

    vx: 0, vy: 0,
    direction: 0,
    jumped: false,
}

let inAir = true;


app.ticker.add((time) => {
    Goomba.x = goombaStat.x;

    Goomba.y = goombaStat.y + tileSize;

    goombaStat.vy = Math.min(5, goombaStat.vy + 1)

    // if(goombaStat.vx > 0)
    // {
    //     goombaStat.vx -= 1;
    // }
    // if(goombaStat.vx < 0)
    // {
    //     goombaStat.vx += 1;
    // }


    let touchingGround = testCollision(
        goombaStat.x + 2,
        goombaStat.y + 1)
        ||
        testCollision (goombaStat.x + tileSize - 3,
        goombaStat.y + 1);

    if (goombaStat.vy > 0) {
        for (let i = 0; i < goombaStat.vy; i++) {
            let pointX1 = goombaStat.x + 2;
            let pointX2 = goombaStat.x + tileSize  - 3;
            let testY = goombaStat.y + tileSize * 2;
           // console.log(Goomba.y + 80)
            if (testY > map.height * tileSize|| testCollision(pointX1, testY) || testCollision(pointX2, testY)) {
              goombaStat.vy = 0;
              break;
            }
            goombaStat.y = goombaStat.y + 1;
          }
    }
    
    if (goombaStat.vy < 0) {
        for (let i = goombaStat.vy; i < 0; i++) {
          let pointX1 = goombaStat.x + 2;
          let pointX2 = goombaStat.x + tileSize - 3;
          let testY = goombaStat.y + tileSize - 16;
          if (testCollision(pointX1, testY) || testCollision(pointX2, testY)) {
            goombaStat.vy = 0;
            break;
          }
          goombaStat.y = goombaStat.y - 1;
        }
      }


      if (goombaStat.vx > 0) {
        for (let i = 0; i < goombaStat.vx; i++) {
          let testX = goombaStat.x + tileSize - 2;
          let testY1 = goombaStat.y + 5;
          let testY2 = goombaStat.y + tileSize;
          let testY3 = goombaStat.y + tileSize * 2 - 1; //
          if (testX >= map.width * tileSize || testCollision(testX, testY1) || testCollision(testX, testY2) || testCollision(testX, testY3)) {
            goombaStat.vx = 0;
            bumped = false;
            break;
          }
          goombaStat.x = goombaStat.x + 0.3;
        }
      }
      
      //console.log(Goomba.y)

      if (goombaStat.vx < 0) {
        goombaStat.direction = 1;
        for (let i = goombaStat.vx; i < 0; i++) {
          let testX = goombaStat.x + 1;
          let testY1 = goombaStat.y + 5;
          let testY2 = goombaStat.y + tileSize;
          let testY3 = goombaStat.y + tileSize * 2 - 1; //
          if (testX < 0 || testCollision(testX, testY1) || testCollision(testX, testY2) || testCollision(testX, testY3)) {
            goombaStat.vx = 0;
            bumped = true;
            break;
          }
          goombaStat.x = goombaStat.x - 0.3;
        }
      }

      //console.log(Goomba.x)

      if (bumped == true) {
        goombaStat.vx = 0.1;
      }
      if (bumped == false) {
        goombaStat.vx = -0.1;
      }
});

