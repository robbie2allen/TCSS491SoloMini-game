//Test Box to make sure components and systems are working properly.

function createCrate(x, y, color, speed) {

    const entity = {
        removeFromWorld: false,
        position: new Position(x, y),
        velocity: new Velocity(0, 0),
        gravity: new Gravity(1200),
        sprite: new Sprite(ASSET_MANAGER.getAsset("./assets/sprites/crate.png"), 0, 0, 32, 32, 5, 5),
        collider: new Collider(160, 160),
        box: new Box()
    }
    return entity;
}