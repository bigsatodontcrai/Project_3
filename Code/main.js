document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(app.view);

    //const level = import('./Assets/Platforms.json');
    container = new PIXI.Container();
    //makePlatforms(level);

    let loadScene = PIXI.Loader.shared.add('./Assets/AssetsOrig.json');
    let loadPlayer = PIXI.Loader.shared.add('./Assets/adventurer-Sheet.json');
    
    loadScene.load(() => {
        let newResource = PIXI.Loader.shared.resources['./Assets/AssetsOrig.json'].spritesheet;
        

        for (let i = 0; i < 50*15; i++) {
            if (platformArray[i] != 0) {
                
                let index = platformArray[i] - 1;
                let loc = 'Assets' + index + '.png';
                
                platformSprites[i] = new PIXI.Sprite(newResource.textures[loc]);
                platformSprites[i].x = (i % 50) * 16;
                let yloc = Math.floor(i/50);
                platformSprites[i].y = (yloc + 1) * 16;
                platformSprites[i].width = 16;
                platformSprites[i].height = 16;
                constantHurtBox[i] = new hurtBox(platformSprites[i]);
                constantHurtBox[i].calculateEdges();
                container.addChild(platformSprites[i]);
            } else {
                platformSprites[i] = 0;
                constantHurtBox[i] = 0;
            }
        }
        
    });

    loadPlayer.load(() => {
        
        playCharacter();
        
        
        container.addChild(sprite);
        app.stage.addChild(container);
        app.renderer.render(app.stage);
    
    });

    

    
});








