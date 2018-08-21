const FOOD_COLORING = {
  RED: 'red',
  PURPLE: 'purple',
  GREEN: 'green'
};
class SnakeFood {
  constructor(width, height, color) {
    this.x = 15;
    this.y = 15;
    this.width = 20;
    this.height = 20;
    this.color = color;
    //type, color, size
  }

  show(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x * 20, this.y* 20, this.width, this.height);
  }
}

module.exports = SnakeFood;
