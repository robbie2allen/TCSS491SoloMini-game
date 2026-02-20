// UISystem - renders the HUD (heads-up display)
class UISystem {
    update(deltaTime, game) {

        const ctx = game.ctx;

        //update timer
        console.log(game.elapsedTime);
        game.elapsedTime += deltaTime;

        if(game.elapsedTime > game.bestTime) {
            game.bestTime = game.elapsedTime; 
        }
            
        // Set up UI styling
        ctx.fillStyle = 'black';
        ctx.font = '32px "Press Start 2P"';
        ctx.textBaseline = 'top';
        
        // Draw UI elements
        ctx.fillText("Time: " + game.elapsedTime.toFixed(1) + "   Best Time: " + game.bestTime.toFixed(1), 20, 20);

    }
}