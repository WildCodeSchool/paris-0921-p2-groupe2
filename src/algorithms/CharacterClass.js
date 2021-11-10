export default class Fighter {
  constructor(character) {
    const { intelligence, strength, speed, durability, power, combat } = character['powerstats'];
    this.name = character['name'];
    this.intelligence = Number(intelligence) || 15;
    this.strength = Number(strength) || 15;
    this.speed = Number(speed) || 15;
    this.durability = Number(durability) || 15;
    this.power = Number(power) || 15;
    this.combat = Number(combat) || 15;

    this.alignment = character['biography']['alignment'];
    this.gender = character['appearance']['gender'];
    this.picture = character['image']['url'];
  }
}
