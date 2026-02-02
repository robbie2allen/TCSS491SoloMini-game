function createConveyor(x, y) {

    const entity = {
        removeFromWorld: false,
        position: new Position(x, y),
        //sprite: new Sprite(ASSET_MANAGER.getAsset("./assets/sprites/conveyor.png"), 0, 0, 32, 16, 2 , 2),
        collider: new Collider(1200, 75), //x2 from sprite since scale is x2
        conveyor: new Conveyor(),
    }

    return entity;
}