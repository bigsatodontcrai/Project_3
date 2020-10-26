/**
 * @file this file handles collisions between two sprites
 */
/**
 * findIndexFromCoordinates - takes coordinates to find the index
 * @param {number} x 
 * @param {number} y 
 * @return number
 */
function findIndexFromCoordinate(x, y) {
    let temp1 = (50 * (y / 16)) - 1;
    let temp2 = x / 16;
    return temp1 + temp2;

}

/**
 * thePosition - finds the position of object
 * @param {number} num 
 * @param {number} px 
 * @return number
 */
function thePosition(num, px) {
    return Math.floor(num / px) * px;
}

/**
 * getPos - gets the position of the sprite element
 * @param {element} box - PIXI sprite element
 * @return arr[][]
 */
function getPos(box) {
    
    let boxArray = [[]];
    let newArray = [];
    let xoffset = 0;
    let pos = thePosition(box.leftEdge, 16) + xoffset;

    let mos = thePosition(box.bottomEdge, 16) - 16;


    boxArray[0] = [pos - 16, mos - 16*3];//top left
    boxArray.push([pos, mos - 16*3]);//top right
    boxArray.push([pos + 16, mos -16*3]);
    boxArray.push([pos + 32, mos - 16*3])

    boxArray.push([pos - 16, mos]);
    boxArray.push([pos, mos]);
    boxArray.push([pos + 16, mos]);
    boxArray.push([pos + 32, mos]);

    boxArray.push([pos - 16, mos - 32]);
    boxArray.push([pos - 16, mos - 16]);

    boxArray.push([pos + 32, mos - 32]);
    boxArray.push([pos + 32, mos - 16]);

    //console.log(boxArray);

    for(let i = 0; i < 12; i++){
        let a = boxArray[i][0];
        let b = boxArray[i][1];
        newArray.push([a/16, b/16]);
    }

    //console.log(newArray);


    return boxArray;
}


/**
 * indexArray - make an array of the index
 * @param {element} box - PIXI sprite element
 * @return arr[]
 */
function indexArray(box) {
    let thisArray = getPos(box);
    let temp1;
    let temp2;

    for (let i = 0; i < 12; i++) {
        temp1 = thisArray[i][0];
        temp2 = thisArray[i][1];
        arrayOfIndex[i] = findIndexFromCoordinate(temp1, temp2);
    }
    return arrayOfIndex;
}


//this newSpriteArray returns an array with all of the hurt boxes of neighboring tiles
/**
 * newSpriteArray - returns an array with all of the hurtBoxes of neighboring tiles
 * @param {element} box - PIXI sprite element
 * @return arr[]
 */
function newSpriteArray(box) {
    let spriteArray = new Array(12);
    let ind = indexArray(box);

    for (let i = 0; i < 12; i++) {
        let index = ind[i];
        spriteArray[i] = constantHurtBox[index];
        
        if(platformSprites[index] != 0){
            platformSprites[index].width = 13;
        }
    }

    return spriteArray;
}