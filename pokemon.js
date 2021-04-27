class Pokemon {
    constructor(name, types, hp, moves) {
        this.name = name;
        this.types = types;
        this.hp = hp;
        this.moves = moves;
        this.alive = true;
        this.maxhp = hp;
    }
}
exports.Pokemon = Pokemon