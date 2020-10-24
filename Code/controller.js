class controller {
    constructor(sprite){
        this.sprite = sprite;
        this.hori = sprite.x;
        this.vert = sprite.y;
        this.vx = 0;
        this.vy = 0;
        this.curr = [];
        this.size = 0;
        //this.time = 0;
    }

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

    move(){
        this.sprite.x += this.vx;
        this.sprite.y += this.vy;
        
        return true;
    }

    calculateParameters(){
        this.hori = this.sprite.x;
        this.vert = this.sprite.x;
    }

    moveLeft(){
        this.sprite.x -= this.vx;
        return true;
    }

    Jump(){
        this.sprite.y -= this.vy;
        //this.sprite.y += this.vy;
        return true;
    }

    stopMovement(e, spriteHurtBox){
        if (e.key == 'd' || e.key == 'a') {
            if (spriteHurtBox.downCollision == true) {
                this.vx = 0;
            }
        } if (e.key == 'w'){
            this.vy = 6;
            
        }
        
        else if (spriteHurtBox.downCollision == false) {
            this.vy = 6;

        } else if (spriteHurtBox.downCollision == true) {
            this.vy = 0;
        }
    }

    clearList(){
        this.curr = [];
    }
}

function keypress(e) {
    controller.keyP(e);
}

function keydown(e) {

}

function keyup(e) {

}



