

const Textures = {
    Platform: "./Assets/Assets.json",
    Character: "./Assets/adventurer-Sheet.json",
    Background: "./Assets/background.json"
};

const game = document.getElementById('game');

game.height = 500;
game.width = 500;

const app = new PIXI.Application(
    {
        view: game,
        width: 800,
        height: 256,
        backgroundColor: 0xAAAAAA
    }
);

let sprite;

let resource;
let container;
let background;


let platformArray = [163, 163, 0, 0, 0, 0, 0, 0, 163, 0, 0, 0, 0, 138, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 163, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 163, 0, 0, 0, 0, 0, 0, 163, 0, 0, 0, 0, 138, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 163, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 163, 0, 0, 0, 63, 64, 65, 0, 0, 0, 0, 0, 0, 0, 0, 0, 163, 0, 0, 0, 163, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 66, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 163, 0, 0, 0, 78, 79, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 163, 0, 0, 0, 0, 0, 0, 163, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 66, 66, 0, 0, 0, 0, 92, 93, 94, 0, 0, 0, 163, 0, 0, 0, 0, 0, 163, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 163, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 66, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 163, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 66, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 144, 144, 144, 0, 0, 163, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 66, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 144, 144, 144, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 66, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 114, 115, 116, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 66, 66, 0, 0, 0, 0, 0, 0, 0, 130, 128, 129, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 187, 187, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 143, 144, 142, 143, 144, 0, 0, 0, 0, 187, 187, 0, 0, 0, 187, 187, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 0, 0, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 0, 0, 144, 144, 144, 144, 144, 144, 0, 0, 187, 187, 187, 187, 187, 0, 0, 187, 187, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 0, 0, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 0, 0, 144, 144, 144, 144, 144, 144, 0, 0, 187, 187, 187, 187, 187, 187, 187, 187, 187, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 0, 0, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 0, 0, 144, 144, 144, 144, 144, 144, 0, 0, 187, 187, 187, 187, 187, 187, 187, 187, 187];


document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(app.view);

    //const level = import('./Assets/Platforms.json');
    container = new PIXI.Container();
    //makePlatforms(level);

    let loadScene = PIXI.Loader.shared.add('./Assets/AssetsOrig.json');
    let loadPlayer = PIXI.Loader.shared.add('./Assets/adventurer-Sheet.json');
    
    loadScene.load(() => {
        let newResource = PIXI.Loader.shared.resources['./Assets/AssetsOrig.json'].spritesheet;
        
        let platformSprites = new Array(50*15);

        for (let i = 0; i < 50*15; i++) {
            if (platformArray[i] != 0) {
                console.log(i);
                let index = platformArray[i] - 1;
                let loc = 'Assets' + index + '.png';
                console.log(loc);
                platformSprites[i] = new PIXI.Sprite(newResource.textures[loc]);
                platformSprites[i].x = (i % 50) * 16;
                let yloc = Math.floor(i/50);
                platformSprites[i].y = (yloc + 1) * 16;
                container.addChild(platformSprites[i]);
            }
        }
        console.log(platformArray[617]);
    });

    loadPlayer.load(() => {
        
        resource = PIXI.Loader.shared.resources["./Assets/adventurer-Sheet.json"].spritesheet;
        const newResource = PIXI.Loader.shared.resources['./Assets/adventurer-Sheet.json'];
        sprite = new PIXI.AnimatedSprite(resource.animations.idle);
        console.log('its lit');

        sprite = sprite;
        sprite.x = 0;
        sprite.y = 160;
        sprite.scale = new PIXI.Point(1.3, 1.3);
        sprite.play();
        sprite.animationSpeed = 0.1;
        let gameController = new controller(sprite);

        let state = 'idle';
        let frameCounter = 0;
        let isRun = false;
        let Forward = 1;

        document.addEventListener('keydown', (e) => {

            //gameController.movement(e);
            
        });
        document.addEventListener('keypress', (e) => {
            

            if(e.key == 'a') {
                Forward = -1;
                state = 'running';
                sprite.animationSpeed = 0.7;
            } if (e.key == 'd') {
                Forward = 1;

                state = 'running';
                sprite.animationSpeed = 0.7;

            } if (e.key == 'w') {
                sprite.animationSpeed = 0.7;
                state = 'jumping';
            }
                 
            let currentTextures = newResource.spritesheet.animations[state];
            if(sprite.textures != currentTextures) {
                sprite.textures = currentTextures;
                sprite.play();
            }
            gameController.movement(e);
            
            
        });
        document.addEventListener('keyup', (e) => {
            if(e.key == 'd' || e.key == 'a'){
                
                if(sprite.y == 160) {
                    gameController.vx = 0;
                    sprite.animationSpeed = 0.1;
                    state = 'idle';
                    sprite.textures = newResource.spritesheet.animations[state];
                    sprite.play();
                }
            } if (sprite.y < 160) {
                gameController.vy = 4;
                sprite.animationSpeed = 0.3;
                state = 'falling';
                sprite.textures = newResource.spritesheet.animations[state];
                sprite.play();
            } else if (sprite.y == 160) {
                gameController.vy = 0;
            }
            
            
        });

        sprite.onFrameChange = function () {
            sprite.scale.x = Forward;
            gameController.move();
            
            console.log(sprite.x);
            console.log(gameController.vx);
        }
        
        
        container.addChild(sprite);
        app.stage.addChild(container);
        app.renderer.render(app.stage);
    
    });

    

    
});







