//Factory for a player
function createPlayer(x = 550, y = 0, respawnX = 550, respawnY = 0) {


    const playerAnimations = {
        'idle-right': {
            frames: [
                { x: 0, y: 0, width: 16, height: 24}
            ],
            duration: 0.15,
            loops: false
        },
        'idle-left': {
            frames: [
                { x: 0, y: 24, width: 16, height: 24}
            ],
            duration: 0.15,
            loops: false
        },
         'walk-right': {
            frames: [
                { x: 0, y: 0, width: 16, height: 24},
                { x: 16, y: 0, width: 16, height: 24},
                { x: 32, y: 0, width: 16, height: 24},
                { x: 48, y: 0, width: 16, height: 24},
                { x: 64, y: 0, width: 16, height: 24},
                { x: 80, y: 0, width: 16, height: 24},
                { x: 96, y: 0, width: 16, height: 24},
                { x: 112, y: 0, width: 16, height: 24}
            ],
            duration: 0.15,
            loops: true
        },
        'walk-left': {
            frames: [
                { x: 0, y: 24, width: 16, height: 24},
                { x: 16, y: 24, width: 16, height: 24},
                { x: 32, y: 24, width: 16, height: 24},
                { x: 48, y: 24, width: 16, height: 24},
                { x: 64, y: 24, width: 16, height: 24},
                { x: 80, y: 24, width: 16, height: 24},
                { x: 96, y: 24, width: 16, height: 24},
                { x: 112, y: 24, width: 16, height: 24}
            ],
            duration: 0.1,
            loops: true
        },
        'jump-right': {
            frames: [
                { x: 0, y: 48, width: 16, height: 24},
                { x: 16, y: 48, width: 16, height: 24},
                { x: 32, y: 48, width: 16, height: 24},
                { x: 48, y: 48, width: 16, height: 24},
                { x: 64, y: 48, width: 16, height: 24},
                { x: 80, y: 48, width: 16, height: 24},
                { x: 96, y: 48, width: 16, height: 24},
                { x: 112, y: 48, width: 16, height: 24}
            ],
            duration: 0.15,
            loops: true
        },
        'jump-left': {
            frames: [
                { x: 0, y: 72, width: 16, height: 24},
                { x: 16, y: 72, width: 16, height: 24},
                { x: 32, y: 72, width: 16, height: 24},
                { x: 48, y: 72, width: 16, height: 24},
                { x: 64, y: 72, width: 16, height: 24},
                { x: 80, y: 72, width: 16, height: 24},
                { x: 96, y: 72, width: 16, height: 24},
                { x: 112, y: 72, width: 16, height: 24}
            ],
            duration: 0.15,
            loops: true
        }
    }

    const entity = {
        removeFromWorld: false,
        position: new Position(x, y),
        playercontrolled: new PlayerControlled(300, respawnX, respawnY),
        collider: new Collider(60, 120, 10, 0),
        velocity: new Velocity(0, 0),
        sprite: new Sprite(ASSET_MANAGER.getAsset("./assets/sprites/robonut.png"), 0, 0, 16, 24, 5, 5),
        gravity: new Gravity(1200),
        animator: new Animator(playerAnimations, 'idle-right'),
        facing: new Facing('right')
    }

    const img = ASSET_MANAGER.getAsset("./assets/sprites/robonut.png");
    console.log(img.width, img.height);
    return entity;
}