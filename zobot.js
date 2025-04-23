const fs = require("fs");
const path = require("path");

const project = {
    name: "User123Game",
    scenes: [
        {
            name: "GameScene",
            objects: [
                {
                    name: "Player1",
                    type: "Sprite",
                    x: 50,
                    y: 200,
                    image: "hero1.png"
                },
                {
                    name: "AIPlayer1",
                    type: "Sprite",
                    x: 150,
                    y: 200,
                    image: "hero2.png"
                },
                {
                    name: "AIPlayer2",
                    type: "Sprite",
                    x: 250,
                    y: 200,
                    image: "hero3.png"
                }
            ],
            events: []
        }
    ]
};

const outputDir = path.join(__dirname, "gdev_projects", "User123Game");
fs.mkdirSync(outputDir, { recursive: true });

fs.writeFileSync(
    path.join(outputDir, "project.json"),
    JSON.stringify(project, null, 4)
);

console.log("User123Game has been created successfully!")
