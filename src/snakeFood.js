
class SnakeFood {
  constructor(width, height, color, score) {
    this.x = 0;
    this.y = 0;
    this.width = 20;
    this.height = 20;
    this.color = color;
    this.score = score;
    //type, color, size
  }

  show(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x * 20, this.y* 20, this.width, this.height);
  }
}

module.exports = SnakeFood;
