import Phaser from 'phaser/build/custom/phaser-split';

export class App {
  constructor(resources, element) {
    this.resources = resources;
    this.game = new Phaser.Game(1258, 600, Phaser.AUTO, element, this);
  }
  preload() {
    this.game.load.image('arrow', `${this.resources}/arrow.png`);
  }
  create() {

    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.game.stage.backgroundColor = '#0072bc';

    this.sprite = this.game.add.sprite(400, 300, 'arrow');
    this.sprite.anchor.setTo(0.5, 0.5);

    //  Enable Arcade Physics for the sprite
    this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);

    //  Tell it we don't want physics to manage the rotation
    this.sprite.body.allowRotation = false;
  }
  update() {
    this.sprite.rotation = this.game.physics.arcade.moveToPointer(
      this.sprite,
      60,
      this.game.input.activePointer,
      500
    );
  }
  render() {
    this.game.debug.spriteInfo(this.sprite, 32, 32);
  }
}
