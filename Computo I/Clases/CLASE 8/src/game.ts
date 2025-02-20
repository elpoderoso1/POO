abstract class Game {
    public play(): void {
        this.startGame();
        this.endGame();
    }

    protected abstract startGame(): void;
    protected abstract endGame(): void;
}

class SoccerGame extends Game {
    protected startGame(): void {
        console.log(`El juego ha empezado.`);
    }

    protected endGame(): void {
        console.log(`El juego a finalizado.`);
    }
}

const Game1 = new SoccerGame();
Game1.play();