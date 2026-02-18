function createConveyor(x, y) {

    const conveyorAnimations = {
        'spin': {
            frames: [
                { x: 0, y: 0, width: 240, height: 15},
                { x: 240, y: 0, width: 240, height: 15},
                { x: 480, y: 0, width: 240, height: 15},
                { x: 720, y: 0, width: 240, height: 15},
            ],
            duration: 0.12
        }
    }
    const entity = {
        removeFromWorld: false,
        position: new Position(x, y),
        sprite: new Sprite(ASSET_MANAGER.getAsset("./assets/sprites/conveyor.png"), 0, 0, 240, 15, 5, 5),
        animator: new Animator(conveyorAnimations, 'spin'),
        collider: new Collider(2400, 75), 
        conveyor: new Conveyor(),
    }

    return entity;
}