var pagelist = document.createElement("ul")
pagelist.setAttribute("class", "pagination")
var link1 = createbutton("button", "class", "page-link", "1", "1", geturl1)
var link2 = createbutton("button", "class", "page-link", "2", "2", geturl2)
var link3 = createbutton("button", "class", "page-link", "3", "3", geturl3)
var link4 = createbutton("button", "class", "page-link", "4", "4", geturl4)
var link5 = createbutton("button", "class", "page-link", "5", "5", geturl5)

pagelist.append(link1, link2, link3, link4, link5)
document.body.append(pagelist)

function createbutton(tagname, attrname, attrvalue, data, attr2, eventvalue) {
    var ele1 = document.createElement(tagname)
    ele1.setAttribute("type", "button")
    ele1.setAttribute(attrname, attrvalue)
    ele1.setAttribute("id", attr2)
    ele1.addEventListener("click", eventvalue)
    ele1.innerHTML = data
    return ele1
}

async function geturl1(){
    var res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=10")
    var result = await res.json()
    var final = result.results
    pokemondata(final)
}

async function geturl2(){
    var res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=10&offset=10")
    var result = await res.json()
    var final = result.results
    pokemondata(final)
}

async function geturl3(){
    var res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=10&offset=20")
    var result = await res.json()
    var final = result.results
    pokemondata(final)
}

async function geturl4(){
    var res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=10&offset=30")
    var result = await res.json()
    var final = result.results
    pokemondata(final)
}

async function geturl5(){
    var res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=10&offset=40")
    var result = await res.json()
    var final = result.results
    pokemondata(final)
}


var container = document.createElement("div")
container.setAttribute("class", "container")
var list = document.createElement("ol")
document.body.append(container)


async function pokemondata(final) {
    try {
        for (let i in final) {
            var eachitem = document.createElement("li")
            var pkname = document.createElement("p")
            pkname.innerHTML = `Name: ${final[i].name}`
            var pkurl = await fetch(final[i].url)
            var res = await pkurl.json()
            var abilities = res.abilities
            var moves = res.moves
            pkability = []
            pkmoves = []
            var pkweight = res.weight
            for (let j = 0; j < abilities.length; j++) {
                pkability.push(abilities[j].ability.name)
            }
            for (let k = 0; k < moves.length; k++) {
                pkmoves.push(moves[k].move.name)
            }
            var abdiv = document.createElement("div")
            abdiv.setAttribute("class", "abdiv")
            abdiv.innerHTML = `Abilities: ${pkability}`
            var mvdiv = document.createElement("div")
            mvdiv.setAttribute("class", "mvdiv")
            mvdiv.innerHTML = `Moves: ${pkmoves}`
            var wtdiv = document.createElement("div")
            wtdiv.setAttribute("class", "wtdiv")
            wtdiv.innerHTML = `Weight: ${pkweight}`
            eachitem.append(pkname, abdiv, mvdiv, wtdiv)
            list.append(eachitem)
        }
        container.append(list)
    }
    catch (err) {
        console.log(err)
    }

}


