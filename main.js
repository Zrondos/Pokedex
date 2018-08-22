M.AutoInit();

class Trainer{
    constructor(name){
    this.name=name;
    this.myPokemon=[];
    }
    all()
    {
        return this.myPokemon;
    }
    get(name)
    {
        for (var i = 0; i < this.myPokemon.length; i++) 
        { 
            if (this.myPokemon[i].name == name)
                {
                    return this.myPokemon[i];
                }
        }
        alert("I don't have that Pokemon...yet!") 
    }
}

class Pokemon{
    constructor(data){
        this.name=data.name
        this.Hp=data.stats[5].base_stat
        this.Attack=data.stats[4].base_stat
        this.Defense=data.stats[3].base_stat
        this.SpecialAttack=data.stats[2].base_stat
        this.SpecialDefense=data.stats[1].base_stat
        this.Speed=data.stats[0].base_stat
        var abilityArray=[]
        var abilitiesLength=data.abilities.length
        for (var i=0; i<abilitiesLength; i++){
        abilityArray.push(data.abilities[i].ability.name)
        }
        this.abilities=abilityArray
    }
}
let pokemonTrainer = new Trainer("Pokemon Master")

//Axios Call for Ninetales
let ninetalesCall = axios.get('https://fizal.me/pokeapi/api/38.json')
let garchompCall = axios.get('https://fizal.me/pokeapi/api/445.json')
let tapuKokoCall = axios.get('https://fizal.me/pokeapi/api/785.json')

axios.all([ninetalesCall, garchompCall, tapuKokoCall])
.then(function (responses) {
    let ninetales = new Pokemon(responses[0].data)
    pokemonTrainer.myPokemon.push(ninetales)

    let garchomp = new Pokemon(responses[1].data)
    pokemonTrainer.myPokemon.push(garchomp)

    let tapuKoko = new Pokemon(responses[2].data)
    pokemonTrainer.myPokemon.push(tapuKoko)

    // console.log(pokemonTrainer)
    // console.log(pokemonTrainer.get("ninetales"))
    function displayStats(pokemon){
            //display HP stats
            let hpElement=document.createElement("li");
            var hp=document.createTextNode("Hp:"+pokemon.Hp)
            // hpElement.appendChild(hp);
            // stats=document.getElementsByClassName("statsList")
            // stats[0].appendChild(hpElement)
            ////display HP stats
            let AttackElement=document.createElement("li");
            var Attack=document.createTextNode("Attack:"+pokemon.Attack)
            AttackElement.appendChild(Attack);
            stats=document.getElementsByClassName("statsList")
            stats[0].appendChild(AttackElement)
            ////display Defense stats
            let DefenseElement=document.createElement("li");
            var Defense=document.createTextNode("Defense:"+pokemon.Defense)
            DefenseElement.appendChild(Defense);
            stats=document.getElementsByClassName("statsList")
            stats[0].appendChild(DefenseElement)
            ////display Special Attack stats
            let SpecialAttackElement=document.createElement("li");
            var SpecialAttack=document.createTextNode("SpecialAttack:"+pokemon.SpecialAttack)
            SpecialAttackElement.appendChild(SpecialAttack);
            stats=document.getElementsByClassName("statsList")
            stats[0].appendChild(SpecialAttackElement)
            ////display Special Defense stats
            let SpecialDefenseElement=document.createElement("li");
            var SpecialDefense=document.createTextNode("SpecialDefense:"+pokemon.SpecialDefense)
            SpecialDefenseElement.appendChild(SpecialDefense);
            stats=document.getElementsByClassName("statsList")
            stats[0].appendChild(SpecialDefenseElement)
            ////display Speed stats
            let SpeedElement=document.createElement("li");
            var Speed=document.createTextNode("Speed:"+pokemon.Speed)
            SpeedElement.appendChild(Speed);
            stats=document.getElementsByClassName("statsList")
            stats[0].appendChild(Speed)
        }
        // currentPokemon=document.getElementById("ninetalesCard").addEventListener("click", function(){return ninetales});
        // currentPokemon=document.getElementById("tapuKokoCard").addEventListener("click", function(){return tapuKoko});
        // currentPokemon=document.getElementById("garchompCard").addEventListener("click", function(){return garchomp});

        document.getElementById("ninetalesCard").addEventListener("click", function(){displayStats(ninetales)});
        document.getElementById("tapuKokoCard").addEventListener("click", function(){displayStats(tapuKoko)});
        document.getElementById("garchompCard").addEventListener("click", function(){displayStats(garchomp)});
});

var ninetalesArray=["Assets/Gifs/alolanninetales.gif","Assets/Gifs/ShinyAlolanNinetales.gif", "Assets/Gifs/Ninetales.gif", "Assets/Gifs/ShinyNinetales.gif"]
var garchompArray=["Assets/Gifs/Garchomp.gif","Assets/Gifs/ShinyGarchomp.gif"]
var tapuKokoArray=["Assets/Gifs/TapuKoko.gif", "Assets/Gifs/TapuKokoShiny.gif"]


