const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

const AUDIO_MANAGER = new AudioManager(ASSET_MANAGER);

// QUEUE THE GAME MANIFEST
ASSET_MANAGER.queueManifest(GameManifest.data);

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;
	gameEngine.init(ctx);

	AUDIO_MANAGER.awaitInitialize(canvas, () => {

		//AUDIO_MANAGER.addAudio("Test", "./assets/audio/Victory.wav");
		addAllMusic(AUDIO_MANAGER);
		AUDIO_MANAGER.playLooped("Main_Music");
		console.log("Audio Manager Initialized!");
		//AUDIO_MANAGER.adjustVolume(0.3);
	});

	// Add systems (order matters!)
	gameEngine.addSystem(new PlayerInputSystem());
	gameEngine.addSystem(new GravitySystem());
	gameEngine.addSystem(new MovementSystem());
	gameEngine.addSystem(new CollisionSystem());
	gameEngine.addSystem(new AnimationSystem());
	gameEngine.addSystem(new RenderSystem());
	gameEngine.addSystem(new DeathSystem());
	gameEngine.addSystem(new SpawnSystem());
	gameEngine.addSystem(new UISystem());

	//Add entities
	gameEngine.addEntity(createPlayer());
	gameEngine.addEntity(createConveyor(0, 600));

	gameEngine.start();
});
