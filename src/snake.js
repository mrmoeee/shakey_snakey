
class Snake {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.scl = 20;
    this.height = this.scl;
    this.width = this.scl;
    this.size = 0;
    this.tail = [];
    this.eaten = '';
    this.alive = true;
  }

  isPoisoned() {
    if (this.eaten === 'purple') {
      this.direction = this.reverse;
      return true;
    } else {
      return false;
    }
  }

  reset(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  direction(x, y) {
    this.xspeed = x;
    this.yspeed = y;

  }

  reverse(x, y) {
    this.xspeed = -x;
    this.yspeed = -y;
  }

  update() {
    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
      if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
        this.alive = false;
        console.log('woah ran into self');
      }
    }
    this.tail[this.size -1] = { x: this.x, y: this.y };

    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }

  show(ctx) {
    ctx.fillStyle = '#b2ffe4';
    for (let i = 0; i < this.tail.length; i++) {
      let currTail = this.tail[i];
      ctx.fillRect(currTail.x * this.scl, currTail.y *
        this.scl, this.scl, this.scl);
    }
    // ctx.fillStyle = '#00b273';
    ctx.fillStyle = 'black';
    ctx.fillRect(this.x * this.scl, this.y * this.scl, this.scl, this.scl);
  }
}

module.exports = Snake;
