const FOOD_COLORING = {
  RED: 'red',
  PURPLE: 'purple',
  GREEN: 'green'
};
class SnakeFood {

  constructor(width, height) {
    this.x = 0;
    this.y = 0;
    this.color = FOOD_COLORING;
    //type, color, size
  }

  show(ctx) {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x * 20, this.y * 20, 20, 20);
  }


}

module.exports = SnakeFood;
