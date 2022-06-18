var bitwiseComplement = function(n) {
    let x=n.toString(2);

    let allbits=Math.pow(2,x.length)-1
        console.log(allbits);
    return n^allbits
};

console.log(bitwiseComplement(5))