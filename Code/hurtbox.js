class hurtBox {
    constructor(sprite) {
        this.sprite = sprite;
        this.height = sprite.height;
        this.width = sprite.width;
        this.xLoc = sprite.x;
        this.yLoc = sprite.y;
        this.immutable = false;
        this.vx = 0;
        this.vy = 0;
        this.rightEdge = 0;
        this.leftEdge = 0;
        this.topEdge = 0;
        this.bottomEdge = 0;
        this.rightCollision = false;
        this.leftCollision = false;
        this.upCollision = false;
        this.downCollision = false;
    }

    calculateEdges(){
        this.rightEdge = this.sprite.x + this.sprite.width;
        this.leftEdge = this.sprite.x;
        this.topEdge = this.sprite.y - this.sprite.height;
        this.bottomEdge = this.sprite.y;
        //hurtbox is updated every frame for the character while it's constant
        //for the other objects
    }

    calculateCharEdges(){
        this.rightEdge = this.sprite.x + 2 * this.sprite.width/3;
        this.leftEdge = this.sprite.x + this.sprite.width/3;
        this.topEdge = this.sprite.y - 16*3;
        this.bottomEdge = this.sprite.y - 16;

        console.log(this.topEdge);
        console.log(this.bottomEdge);
        

    }//yes redundant function but for now to compensate for the assets offset

    updateVelocity(controller){
        this.vx = controller.vx;
        this.vy = controller.vy;
    }

    updateHurtBox(controller){
        this.calculateCharEdges();
        this.updateVelocity(controller);
    }

    updateCollisionStatements(box){
        let updatedXR = this.rightEdge + this.vx;
        let updatedXL = this.leftEdge + this.vx;
        let updatedYT = this.topEdge + this.vy;
        let updatedYD = this.bottomEdge + this.vy;

        

        let RC = updatedXR > box.leftEdge && updatedXR < box.rightEdge;
        let LC = updatedXL < box.rightEdge && updatedXR > box.leftEdge;
        let UC = updatedYT < box.bottomEdge && updatedYT > box.topEdge;
        let DC = updatedYD > box.topEdge && updatedYD < box.bottomEdge;

        this.rightCollision = RC && box != 0;
        this.leftCollision = LC && box != 0;
        this.upCollision = UC && box != 0;
        this.downCollision = DC && box != 0;
    }

    isCollide(){
        return this.rightCollision || this.leftCollision || this.upCollision || this.downCollision;
    }

    collide(box, controller, Forward){
        this.updateCollisionStatements(box);
        if(this.rightCollision && Forward == 1) {
            controller.vx = 0;
        }
        if(this.leftCollision && Forward == -1){
            controller.vx = 0;
        }
        if(this.upCollision){
            controller.vy = 6;
        } if (this.downCollision){
            controller.vy = 0;
        }
        return this.isCollide();
    }
}