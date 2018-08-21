const FOOD_COLORING = {
  RED: 'red',
  PURPLE: 'purple',
  GREEN: 'green'
};
class SnakeFood {

  constructor(width, height) {
    this.x = 15;
    this.y = 15;
    this.width = 20;
    this.height = 20;
    this.color = FOOD_COLORING;
    //type, color, size
  }

  show(ctx) {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x * 20, this.y * 20, this.width + 10, this.height + 10);
  }


}

module.exports = SnakeFood;
