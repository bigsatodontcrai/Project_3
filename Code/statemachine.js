/**
 * @file statemachine.js updates the state of the character 
 */
/**
 * updateState - Updates the state of the charcter
 * @param {number} vx x-direction velocity 
 * @param {number} vy y-direction velocity 
 * @param {element} sprite - PIXI sprite element
 * @return string - state of the character
 */
function updateState(vx, vy, sprite) {
    let thisState = '';
    if (vx != 0 && vy == 0) {
        sprite.animationSpeed = 0.1;
        if (vx > 0) {
            if (Forward == -1) {
                //sprite.x = sprite.x - sprite.width;
            }
            Forward = 1;
            sprite.scale.x = Math.abs(sprite.scale.x) * Forward;

        } else if (vx < 0) {
            if (Forward == 1) {
                //sprite.x = sprite.x + sprite.width;
            }
            Forward = -1;
            sprite.scale.x = Math.abs(sprite.scale.x) * Forward;

        }
        thisState = 'running';
    } else if (vy > 0) {
        sprite.animationSpeed = 0.5;
        thisState = 'falling';
    } else if (vy < 0) {
        sprite.animationSpeed = 0.5;
        thisState = 'jumping';
    } else {
        sprite.animationSpeed = 0.1;
        thisState = 'idle';
    }

    return thisState;

}//will move this to statemachine