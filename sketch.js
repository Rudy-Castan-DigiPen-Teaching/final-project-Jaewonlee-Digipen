//Jaewon Lee, Final Project, cs099, Spring, 2020
let BackgroundColor = 120;
let CurrentScene = MAIN_MENU;

let MainMenuScene;
let CreditsScene;
let OptionsScene;
let GameScene;

let gamescene
let bg;
let hit;
let booster;
let click;
let explose;
let laser;
let basesound;
let gamebgm;

function preload() {
  hit = loadSound('hit.wav')
  booster = loadSound('booster.wav')
  click = loadSound('click.wav')
  explose = loadSound('explose.wav')
  laser = loadSound('laser.wav')
  gamebgm = loadSound('Student.mp3')
  bg = loadImage('background.png');
  gamescene = loadImage('gamescene.PNG')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  gamebgm.setVolume(0.7)
  hit.setVolume(0.2)
  booster.setVolume(0.2)
  click.setVolume(0.3)
  explose.setVolume(0.2)
  laser.setVolume(0.2)
  MainMenuScene = new MainMenu();
  CreditsScene = new CreditsScreen();
  OptionsScene = new OptionsScreen();
  Game = new game();
  //우주선 생성 
  ship = new Ship();
  // 외계인 생성
  for (let i = 0; i < 20; i++) {
    aliens.push(new Aliens());
  }
  // 적 함선 
  for (let i = 0; i < 30; i++) {
    enemy.push(new Enemy());
  }
  gamebgm.loop()
}

function draw() {
  background(gamescene);
  switch (CurrentScene) {
    case MAIN_MENU:
      MainMenuScene.Update();
      MainMenuScene.Draw();
      break;
    case CREDITS_SCREEN:
      CreditsScene.Update();
      CreditsScene.Draw();
      break;
    case OPTIONS_SCREEN:
      OptionsScene.Update();
      OptionsScene.Draw();
      break;
    case GAME:
      Game.Update()
      Game.Draw()
  }
}