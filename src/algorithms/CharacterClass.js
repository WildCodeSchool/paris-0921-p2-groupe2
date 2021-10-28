export default class Fighter {
  constructor(character) {
    const { intelligence, strength, speed, durability, power, combat } = character['powerstats'];
    this.name = character['name'];
    this.intelligence = Number(intelligence);
    this.strength = Number(strength);
    this.speed = Number(speed);
    this.durability = Number(durability);
    this.power = Number(power);
    this.combat = Number(combat);

    this.alignment = character['biography']['alignment'];
    this.gender = character['appearance']['gender'];
    this.picture = character['image']['url'];
  }
}
