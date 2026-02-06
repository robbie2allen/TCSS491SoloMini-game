//Test Box to make sure components and systems are working properly.

function createBox(x, y, color, speed) {

    const entity = {
        removeFromWorld: false,
        position: new Position(x, y),
        velocity: new Velocity(0, 0),
        collider: new Collider(64, 64),
        gravity: new Gravity(1200),
        box: new Box()
    }
    return entity;
}