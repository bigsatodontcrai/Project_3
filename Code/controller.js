class controller {
    /**
     * class contructor
     * @param {element} sprite - PIXI sprite element
     */
    constructor(sprite){
        this.jumpspeed = -3;
        this.fallspeed = 3;
        this.sprite = sprite;
        this.hori = sprite.x;
        this.vert = sprite.y;
        this.vx = 0;
        this.vy = 0;
        this.curr = [];
        this.size = 0;
        //this.time = 0;
    }

    /**
     * movement - controlls the distances of how far the character moves on each keystroke
     * @param {KeyboardEvent} e 
     * @param {hurtBox} spriteHurtBox 
     * @return boolean 
     */
    movement (e, spriteHurtBox) {
        this.curr.push(e.key);
        this.size++;
        if(e.key == 'a'){
            this.vx = -3;
        } if (e.key == 'd'){
            this.vx = 3;
        } if (e.key == 'w'){
            if(spriteHurtBox.downCollision){
                this.vy = -3;
            } else {
                this.vy = 3;
            }
        } 
        return true;
         
    }

    /**
     * move - moves the character accross the screen
     * @return boolean
     */
    move(){
        //alert('hey ' + this.vy);
        
        this.sprite.x += this.vx;
        //alert(this.sprite.y);
        this.sprite.y += this.vy;
        //alert(this.sprite.y);
        return true;
    }

    /**
     * calculateParameters - calculate the parameters of the character 
     */
    calculateParameters(){
        this.hori = this.sprite.x;
        this.vert = this.sprite.y;
    }

    /**
     * moveLeft - moves the character left
     * @return boolean
     */
    moveLeft(){
        this.sprite.x -= this.vx;
        return true;
    }

    /**
     * Jump - the character jumps
     * @return boolean
     */
    Jump(){
        this.sprite.y -= this.vy;
        //this.sprite.y += this.vy;
        return true;
    }

    /**
     * stopMovement - stops the character from moving if it hits something
     * @param {KeyboardEvent} e 
     * @param {hurtBox} spriteHurtBox 
     */
    stopMovement(e, spriteHurtBox){
        if (e.key == 'd' || e.key == 'a') {
            if (spriteHurtBox.downCollision) {
                this.vx = 0;
            }
        } if (e.key == 'w' && spriteHurtBox.downCollision == false) {
            this.vy = 3;
        } /*else if (spriteHurtBox.downCollision == true) {
            this.vy = -3;
        }*/
    }

    /**
     * clearList - clears the list
     */
    clearList(){
        this.curr = [];
    }
}

/**
 * 
 * @param {KeyBoardEvent} e 
 */
function keypress(e) {
    controller.keyP(e);
}

/**
 * keydown - 
 * @param {KeyBoardEvent} e 
 */
function keydown(e) {

}

/**
 * keyup - 
 * @param {KeyBoardEvent} e 
 */
function keyup(e) {

}



