function setupCharacter(){
    resource = PIXI.Loader.shared.resources["./Assets/adventurer-Sheet.json"].spritesheet;
    sprite = new PIXI.AnimatedSprite(resource.animations.idle);
    console.log('its lit');

    sprite = sprite;

    sprite.height = 32;
    sprite.width = 16 * 4;
    sprite.x = -16;
    sprite.y = 176;
    sprite.play();
    sprite.animationSpeed = 0.1;

    spriteHurtBox = new hurtBox(sprite);

    gameController = new controller(sprite);

}


function characterMovement(){
    
        let thing = false;
        if (state != 'jumping') {
            gameController.vy = 3;
        }
        spriteHurtBox.updateHurtBox(gameController);
        arrayOfSprites = newSpriteArray(spriteHurtBox);
        console.log(spriteHurtBox);

        for (let i = 0; i < 8; i++) {

            if (arrayOfSprites[i] == 0) {
                console.log('haha');
            }
            else {
                console.log('sup');
                thing = spriteHurtBox.collide(arrayOfSprites[i], gameController, Forward);
                console.log(arrayOfSprites[i]);
                console.log(thing);
            }
        }
        gameController.move();

        console.log(Forward);

        
    
}

function playCharacter(){
    const newResource = PIXI.Loader.shared.resources['./Assets/adventurer-Sheet.json'];
    setupCharacter();
    
    //gameController.vy = 6;
    let isRun = false;
    let isKeyDown = false;

    document.addEventListener('keydown', (e) => {

        //gameController.movement(e);

    });
    document.addEventListener('keypress', (e) => {

        //gameController.keyP(e);
        isKeyDown = true;
        gameController.movement(e);
        state = updateState(gameController.vx, gameController.vy, sprite);
        let currentTextures = newResource.spritesheet.animations[state];
        if (sprite.textures != currentTextures) {
            sprite.textures = currentTextures;
            sprite.play();
        }


    });
    document.addEventListener('keyup', (e) => {
        gameController.stopMovement(e, spriteHurtBox);
        state = updateState(gameController.vx, gameController.vy, sprite);
        sprite.textures = newResource.spritesheet.animations[state];
        sprite.play();


    });



    sprite.onFrameChange = function () {
        characterMovement();
        state = updateState(gameController.vx, gameController.vy, sprite);
        let currentTextures = newResource.spritesheet.animations[state];
        if (sprite.textures != currentTextures) {
            sprite.textures = currentTextures;
            sprite.play();
        }
    }
}

