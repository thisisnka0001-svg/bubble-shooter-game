// =======================================
// Bubble Rewards
// Bubble Shooter
// Part 1
// =======================================

const GAME_WIDTH = 900;
const GAME_HEIGHT = 600;

const BUBBLE_RADIUS = 20;

const COLORS = [
    0xff4d4d,
    0x4da6ff,
    0x22c55e,
    0xffd43b,
    0xb84dff
];

class BubbleShooter extends Phaser.Scene {

    constructor() {
        super("BubbleShooter");
    }

    preload() {

    }

    create() {

        this.score = 0;

        this.grid = [];

        this.createUI();

        this.createGrid();

        this.createShooter();

        this.createAim();

    }

    update() {

        if (!this.aimLine) return;

        const pointer = this.input.activePointer;

        this.aimLine.setTo(

            this.cannon.x,
            this.cannon.y,

            pointer.x,
            pointer.y

        );

    }

    createUI() {

        this.cameras.main.setBackgroundColor("#16213e");

        this.add.text(
            20,
            20,
            "🎮 Bubble Rewards",
            {
                fontSize: "30px",
                color: "#ffffff",
                fontStyle: "bold"
            }
        );

        this.scoreText = this.add.text(
            700,
            20,
            "Score : 0",
            {
                fontSize: "24px",
                color: "#22c55e"
            }
        );

    }
        createGrid() {

        const startX = 70;
        const startY = 80;
        const gapX = 46;
        const gapY = 42;

        for (let row = 0; row < 6; row++) {

            this.grid[row] = [];

            for (let col = 0; col < 15; col++) {

                const x = startX + col * gapX;
                const y = startY + row * gapY;

                const color =
                    Phaser.Utils.Array.GetRandom(COLORS);

                const bubble = this.add.circle(
                    x,
                    y,
                    BUBBLE_RADIUS,
                    color
                );

                bubble.color = color;

                this.grid[row][col] = bubble;

            }

        }

    }

    createShooter() {

        this.cannon = this.add.rectangle(

            GAME_WIDTH / 2,
            GAME_HEIGHT - 45,

            24,
            80,

            0x22c55e

        );

        this.currentBubble = this.add.circle(

            GAME_WIDTH / 2,
            GAME_HEIGHT - 90,

            BUBBLE_RADIUS,

            Phaser.Utils.Array.GetRandom(COLORS)

        );

    }

    createAim() {

        this.aimLine = this.add.line(

            0,
            0,

            GAME_WIDTH / 2,
            GAME_HEIGHT - 45,

            GAME_WIDTH / 2,
            GAME_HEIGHT - 180,

            0xffffff

        );

        this.aimLine.setLineWidth(2);

    }
    }

// =======================================
// Phaser Config
// =======================================

const config = {

    type: Phaser.AUTO,

    width: GAME_WIDTH,

    height: GAME_HEIGHT,

    parent: "gameArea",

    backgroundColor: "#16213e",

    scene: BubbleShooter

};

new Phaser.Game(config);
