//Factory for a player
function createPlayer(x, y, respawnX = 300, respawnY = 590) {


    const playerAnimations = {
        'idle-right': {
            frames: [
                { x: 0, y: 32, width: 32, height: 32},
                { x: 32, y: 32, width: 32, height: 32},
                { x: 64, y: 32, width: 32, height: 32},
                { x: 96, y: 32, width: 32, height: 32},
                { x: 128, y: 32, width: 32, height: 32},
            ],
            duration: 0.15
        },
        'idle-left': {
            frames: [
                { x: 0, y: 160, width: 32, height: 32},
                { x: 32, y: 160, width: 32, height: 32},
                { x: 64, y: 160, width: 32, height: 32},
                { x: 96, y: 160, width: 32, height: 32},
                { x: 128, y: 160, width: 32, height: 32},
            ],
            duration: 0.15
        },
         'walk-right': {
            frames: [
                { x: 0, y: 64, width: 32, height: 32},
                { x: 32, y: 64, width: 32, height: 32},
                { x: 64, y: 64, width: 32, height: 32},
                { x: 96, y: 64, width: 32, height: 32},
                { x: 128, y: 64, width: 32, height: 32},
                { x: 160, y: 64, width: 32, height: 32},
                { x: 192, y: 64, width: 32, height: 32},
                { x: 224, y: 64, width: 32, height: 32},
            ],
            duration: 0.15
        },
        'walk-left': {
            frames: [
                { x: 0, y: 192, width: 32, height: 32},
                { x: 32, y: 192, width: 32, height: 32},
                { x: 64, y: 192, width: 32, height: 32},
                { x: 96, y: 192, width: 32, height: 32},
                { x: 128, y: 192, width: 32, height: 32},
                { x: 160, y: 192, width: 32, height: 32},
                { x: 192, y: 192, width: 32, height: 32},
                { x: 224, y: 192, width: 32, height: 32},
            ],
            duration: 0.15
        },
        'jump-right': {
            frames: [
                { x: 0, y: 96, width: 32, height: 32},
                { x: 32, y: 96, width: 32, height: 32},
            ],
            duration: 0.15
        },
        'jump-left': {
            frames: [
                { x: 0, y: 224, width: 32, height: 32},
                { x: 32, y: 224, width: 32, height: 32},
            ],
            duration: 0.15
        }
    }

    const entity = {
        removeFromWorld: false,
        position: new Position(x, y),
        playercontrolled: new PlayerControlled(300, respawnX, respawnY),
        collider: new Collider(60, 105, 10, 0),
        velocity: new Velocity(0, 0),
        sprite: new Sprite(ASSET_MANAGER.getAsset("./assets/sprites/robonut.png"), 0, 0, 16, 21, 5, 5),
        gravity: new Gravity(1200),
        //animator: new Animator(playerAnimations, 'idle-right'),
        facing: new Facing('right')
    }

    const img = ASSET_MANAGER.getAsset("./assets/sprites/robonut.png");
    console.log(img.width, img.height);
    return entity;
}