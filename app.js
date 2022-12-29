var teg = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div']
var teg1 = {}
let sorted = {}

for(let i = 0; i < teg.length; i++){
    if(!teg1[teg[i]]){
        teg1[teg[i]] = 0
    }
    teg1[teg[i]]++
}

console.log(Object.keys(teg1).sort((a, b) => teg1[a] > teg1[b] ? -1 : 1).forEach(e => sorted[e] = teg1[e]))

console.log(sorted)


