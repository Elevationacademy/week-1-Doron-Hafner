/*----------------exercise1----------------

const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
const newgenes=[...genes]
newgenes[2]=genes[genes.length-1]
newgenes[newgenes.length-1]=genes[2]
console.log(newgenes);
const azin2=newgenes.splice(3, 1)
newgenes.push(azin2[0], azin2[0])
newgenes.unshift("FXT")
console.log(newgenes);
*/