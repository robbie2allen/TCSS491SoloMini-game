const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

// QUEUE THE GAME MANIFEST
ASSET_MANAGER.queueManifest(GameManifest.data);

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;
	gameEngine.init(ctx);

	// Add systems (order matters!)
	gameEngine.addSystem(new PlayerInputSystem());
	gameEngine.addSystem(new GravitySystem());
	gameEngine.addSystem(new MovementSystem());
	gameEngine.addSystem(new CollisionSystem());
	gameEngine.addSystem(new AnimationSystem());
	gameEngine.addSystem(new RenderSystem());
	gameEngine.addSystem(new DeathSystem());

	//Add entities
	gameEngine.addEntity(createPlayer(275, 595, 275, 425));
	gameEngine.addEntity(createBox(475, 515));
	gameEngine.addEntity(createBox(675, 515));
	gameEngine.addEntity(createBox(675, 515-80));
	gameEngine.addEntity(createCrate(775, 515-80));
	gameEngine.addEntity(createConveyor(0, 600));
	

	gameEngine.start();
});
