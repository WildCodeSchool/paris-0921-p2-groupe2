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

  updateGear(objects) {
    let gear = {
      intelligence: 0,
      strength: 0,
      speed: 0,
      durability: 0,
      power: 0,
      combat: 0,
    };

    for (const key in objects) {
      gear.intelligence += objects[key].intelligence;
      gear.strength += objects[key].strength;
      gear.speed += objects[key].speed;
      gear.durability += objects[key].durability;
      gear.power += objects[key].power;
      gear.combat += objects[key].combat;
    }

    // console.log(`Initial stats : ${this.intelligence} ${this.strength} ${this.speed} ${this.durability} ${this.power} ${this.combat}`);
    this.intelligence = Math.round((this.intelligence / 100) * (100 + gear.intelligence));
    this.strength = Math.round((this.strength / 100) * (100 + gear.strength));
    this.speed = Math.round((this.speed / 100) * (100 + gear.speed));
    this.durability = Math.round((this.durability / 100) * (100 + gear.durability));
    this.power = Math.round((this.power / 100) * (100 + gear.power));
    this.combat = Math.round((this.combat / 100) * (100 + gear.combat));
    // console.log(`New stats : ${this.intelligence} ${this.strength} ${this.speed} ${this.durability} ${this.power} ${this.combat}`);
  }
}
