function findIndexFromCoordinate(x, y) {
    let temp1 = (50 * (y / 16)) - 1;
    let temp2 = x / 16;
    return temp1 + temp2;

}

function thePosition(num, px) {
    return Math.floor(num / px) * px;
}

function getPos(box) {
    let boxArray = [[], [], [], [], [], [], [], [], []];

    let pos = thePosition(box.leftEdge, 16);
    let mos = thePosition(box.bottomEdge, 16);
    console.log(pos);
    console.log(mos);


    boxArray[0] = [pos, mos - 32];
    boxArray[1] = [pos + 16, mos - 32];
    boxArray[2] = [pos + 32, mos - 16];
    boxArray[3] = [pos + 32, mos];
    boxArray[4] = [pos + 16, mos + 16];
    boxArray[5] = [pos, mos + 16];
    boxArray[6] = [pos - 16, mos];
    boxArray[7] = [pos - 16, mos - 16];


    return boxArray;
}



function indexArray(box) {
    let thisArray = getPos(box);
    let temp1;
    let temp2;
    for (let i = 0; i < 8; i++) {
        temp1 = thisArray[i][0];
        temp2 = thisArray[i][1];
        arrayOfIndex[i] = findIndexFromCoordinate(temp1, temp2);
    }
    return arrayOfIndex;
}


//this newSpriteArray returns an array with all of the hurt boxes of neighboring tiles
function newSpriteArray(box) {
    let spriteArray = new Array(8);
    let ind = indexArray(box);

    for (let i = 0; i < 8; i++) {
        let index = ind[i];
        spriteArray[i] = constantHurtBox[index];
    }

    return spriteArray;
}