function solve() {
    return  {
        mage: function ( heroName ) {
            this.name = heroName
            this.health = 100
            this.mana = 100;
            this.cast = ( spellName ) => {
                this.mana -= 1;
                console.log(`${this.name} cast ${spellName}`)
            }
            return this;
        },
        fighter: function ( fighterName ) {
            this.name = fighterName
            this.health = 100
            this.stamina = 100
            this.fight = () => {
                this.stamina -= 1;
                console.log(`${this.name} slashes at the foe!`);
            }
            return this;
        }
    }
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
