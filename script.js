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

var container = document.createElement("div")
container.setAttribute("class", "container")
var list1 = document.createElement("ol")
list1.setAttribute("id", "list1")
var list2 = document.createElement("ol")
list2.setAttribute("id", "list2")
var list3 = document.createElement("ol")
list3.setAttribute("id", "list3")
var list4 = document.createElement("ol")
list4.setAttribute("id", "list4")
var list5 = document.createElement("ol")
list5.setAttribute("id", "list5")
container.append(list1,list2,list3,list4,list5)
document.body.append(container)

async function geturl1() {
    var dummy=document.querySelectorAll("#list2, #list3, #list4, #list5")
    for(let x=0;x<4;x++){dummy[x].style.display="none"}
    var res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=10")
    pokemondata(res,document.getElementById("list1"))
}

async function geturl2() {
    var dummy=document.querySelectorAll("#list1, #list3, #list4, #list5")
    for(let x=0;x<4;x++){dummy[x].style.display="none"}
    var res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=10&offset=10")
    pokemondata(res,document.getElementById("list2"))
}

async function geturl3() {
    var dummy=document.querySelectorAll("#list1, #list2, #list4, #list5")
    for(let x=0;x<4;x++){dummy[x].style.display="none"}
    var res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=10&offset=20")
    pokemondata(res,document.getElementById("list3"))
}

async function geturl4() {
    var dummy=document.querySelectorAll("#list1, #list2, #list3, #list5")
    for(let x=0;x<4;x++){dummy[x].style.display="none"}
    var res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=10&offset=30")
    pokemondata(res,document.getElementById("list4"))
}

async function geturl5() {
    var dummy=document.querySelectorAll("#list1, #list2, #list3, #list4")
    for(let x=0;x<4;x++){dummy[x].style.display="none"}
    var res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=10&offset=40")
    pokemondata(res,document.getElementById("list5"))
}


async function pokemondata(url,list) {
    list.style.display="block"
    try {
        var result = await url.json()
        var final = result.results
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
            abdiv.innerHTML = `𝑨̲𝒃̲𝒊̲𝒍̲𝒊̲𝒕̲𝒊̲𝒆̲𝒔̲: ${pkability}`
            var mvdiv = document.createElement("div")
            mvdiv.setAttribute("class", "mvdiv")
            mvdiv.innerHTML = `𝑴̲𝒐̲𝒗̲𝒆̲𝒔̲: ${pkmoves}`
            var wtdiv = document.createElement("div")
            wtdiv.setAttribute("class", "wtdiv")
            wtdiv.innerHTML = `𝑾̲𝒆̲𝒊̲𝒈̲𝒉̲𝒕̲: ${pkweight}`
            eachitem.append(pkname, abdiv, mvdiv, wtdiv)
            list.append(eachitem)
        }
        container.append(list)
    }
    catch (err) {
        console.log(err)
    }
}