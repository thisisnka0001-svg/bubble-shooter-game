const config = {
    type: Phaser.AUTO,
    width: 900,
    height: 600,
    parent: "gameArea",

    backgroundColor: "#1e293b",

    scene: {
        create: create
    }
};

const game = new Phaser.Game(config);

function create() {

    this.add.text(180, 120, "🎮 Bubble Rewards", {
        fontSize: "48px",
        color: "#ffffff",
        fontStyle: "bold"
    });

    this.add.text(220, 220, "Bubble Shooter Loading...", {
        fontSize: "30px",
        color: "#22c55e"
    });

    this.add.text(180, 320, "Powered by Phaser 3", {
        fontSize: "22px",
        color: "#cbd5e1"
    });

}
