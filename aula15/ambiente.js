let num = [5,6,8,3]
num.push(7) //inclui valor no vetor
num.push(1)
num.sort()
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor é ${num[0]}`)
console.log("Os valores do seu vetor:")
var pos = 0
while(pos < num.length){
    console.log(num[pos])
    pos++
}
console.log(`O valor 8 está na posição ${num.indexOf(8)}`)


