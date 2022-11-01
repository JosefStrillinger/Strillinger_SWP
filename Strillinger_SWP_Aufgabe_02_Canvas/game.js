var bgMusic = new sound("sound/Undertale_Megalovania.mp3");

let game = {
  canvas: document.getElementById("field"),
  start() {
    bgMusic.stop();
    console.log(this.canvas);
    this.context = this.canvas.getContext("2d");
    this.clear();
    this.interval = setInterval(redraw, 20);
    this.intervalNewEnemy = setInterval(newEnemy, 600);
    this.intervalNewBonus = setInterval(newBonus, 3000);
    this.intervalUpdate = setInterval(updateTimeAndScore, 1000);
    let img = new Image();
    img.src = "img/face-cool.png";
    this.player = new sprite(30, 30, img, 10, 120);
    this.enemies = [];
    this.bonus = [];
    this.score = 0;
    this.time = 0;
    bgMusic.play();
    this.keyCode = -1; //when there is no key pressed
    window.addEventListener("keydown", (e) => {
      this.keyCode = e.keyCode;
    });

    window.addEventListener("keyup", (e) => {
      this.keyPressed = -1;
    });
  },
  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  restart() {
    clearInterval(this.interval);
    clearInterval(this.intervalNewEnemy);
    clearInterval(this.intervalNewBonus);
    clearInterval(this.intervalUpdate);
    bgMusic.stop();
    game.start();
  },
};

function start() {
  console.log("Game started");
  game.start();
}

function sprite(width, height, image, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.image = image;
  ctx = game.context;
  ctx.drawImage(this.image, this.x, this.y, this.width, this.height);

  this.redraw = function () {
    ctx = game.context;
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  };
}

function redraw() {
  game.clear();
  game.player.x += 1;
  switch (game.keyCode) {
    case 37: //left
      game.player.x -= 2;
      break;
    case 38: //up
      game.player.y -= 1;
      break;
    case 39: //right
      game.player.x += 1;
      break;
    case 40: //down
      game.player.y += 1;
      break;
  }

  if (game.player.x > game.canvas.width) {
    game.player.x = game.canvas.width - 50;
  } else if (game.player.x < 0) {
    game.player.x = 0;
  }
  if (game.player.y > game.canvas.height) {
    game.player.y = game.canvas.height - 50;
  } else if (game.player.y < 0) {
    game.player.y = 0;
  }

  game.player.redraw();

  game.enemies.forEach((e) => {
    //console.log(e);
    let yDelta = Math.floor(Math.random() * 11) - 5;
    e.x -= 1;
    e.y += yDelta;
    e.redraw();
  });

  game.bonus.forEach((e) => {
    //console.log(e);
    let yDelta = Math.floor(Math.random() * 11) - 5;
    e.x -= 1;
    e.y += yDelta;
    e.redraw();
  });

  collision();
  drawScore();
  drawTime();
}

function newEnemy() {
  let y = Math.floor(Math.random() * 1024);
  let img = new Image();
  img.src = "img/face-devilish.png";
  e = new sprite(30, 30, img, 1000, y);
  game.enemies.push(e);
}

function newBonus() {
  let y = Math.floor(Math.random() * 1024);
  let img = new Image();
  img.src = "img/face-monkey.png";
  e = new sprite(30, 30, img, 1000, y);
  game.bonus.push(e);
}

function collision() {
  distance = 10;
  game.enemies.forEach((e) => {
    if (
      Math.abs(game.player.x - e.x) < distance &&
      Math.abs(game.player.y - e.y) < distance
    ) {
      game.restart();
    }
  });

  game.bonus.forEach((e) => {
    if (
      Math.abs(game.player.x - e.x) < distance &&
      Math.abs(game.player.y - e.y) < distance
    ) {
      game.bonus.splice(game.bonus.indexOf(e), 1);
      game.score += 100;
    }
  });
}

function updateTimeAndScore() {
  game.time += 1;
  game.score += 10;
}

function drawScore() {
  ctx.font = "20px Georgia";
  ctx.strokeText("Score: " + game.score, 50, 50);
}

function drawTime() {
  ctx.font = "20px Georgia";
  ctx.strokeText("Time: " + game.time, 50, 75);
}

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);

  this.play = function () {
    this.sound.play();
  };
  this.stop = function () {
    this.sound.pause();
  };
}
