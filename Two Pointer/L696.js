var countBinarySubstrings = function(s) {// solved but not coded by me 
    var front = 0;
    var back = 0;
    var res = 0;
    while (back < s.length) {
        if (front === back) {
            if (s[back + 1] !== s[back]) {
                ++back;
            } else {
                ++front;
                ++back;
            }
        } else {
            if (s[front] !== s[front - 1] || s[back] !== s[back + 1]) {
                res += (back - front + 1) / 2;
                front = back;
            } else {
                ++back;
                --front;
            }
        }
    }
    return res;
};

console.log(countBinarySubstrings("00110011"));
console.log(countBinarySubstrings("10101"));
