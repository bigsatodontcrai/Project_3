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
        this.topEdge = this.sprite.y;
        this.bottomEdge = this.sprite.y + this.sprite.height;
        
        //hurtbox is updated every frame for the character while it's constant
        //for the other objects
    }

    calculateCharEdges(){
        this.rightEdge = this.sprite.x + 0.66 * sprite.width;
        this.leftEdge = this.sprite.x + 0.26 * sprite.width;
        this.topEdge = this.sprite.y + 0.16 * sprite.height;
        this.bottomEdge = this.sprite.y + 0.97 * sprite.height;

        this.width = this.rightEdge - this.leftEdge;
        this.height = this.topEdge - this.bottomEdge;

        console.log(this.topEdge);
        console.log(this.bottomEdge);
        

    }//yes redundant function but for now to compensate for the assets offset

    updateVelocity(controller){
        this.vx = controller.vx;
        this.vy = controller.vy;
    }

    updateHurtBox(controller){
        this.updateVelocity(controller);
        this.calculateCharEdges();
        
    }

    updateCollisionStatements(box){
        let updatedXR = this.rightEdge + this.vx;
        let updatedXL = this.leftEdge + this.vx;
        let updatedYT = this.topEdge + this.vy;
        let updatedYD = this.bottomEdge + this.vy;

        let RC = false;
        let LC = false;
        let UC = false;
        let DC = false;
        
        
        RC = updatedXR > box.leftEdge && updatedXR < box.rightEdge;
        LC = updatedXL < box.rightEdge && updatedXL > box.leftEdge;
        UC = updatedYT < box.bottomEdge && updatedYT > box.topEdge;
        DC = updatedYD > box.topEdge && updatedYD < box.bottomEdge;
        

        this.rightCollision = RC;
        this.leftCollision = LC;
        this.upCollision = UC;
        this.downCollision = DC;
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
            console.log('UP');
            controller.vy = 3;
        } 
        if (this.downCollision) {
            console.log('DOWN');
            controller.vy = 0;
        }
        return this.isCollide();
    }
}