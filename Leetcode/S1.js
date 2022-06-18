/**
 You are given an array of strings ideas that represents a list of names to be used in the process of naming a company. The process of naming a company is as follows:

Choose 2 distinct names from ideas, call them ideaA and ideaB.
Swap the first letters of ideaA and ideaB with each other.
If both of the new names are not found in the original ideas, then the name ideaA ideaB (the concatenation of ideaA and ideaB, separated by a space) is a valid company name.
Otherwise, it is not a valid name.
Return the number of distinct valid names for the company.


Input: ideas = ["coffee","donuts","time","toffee"]
Output: 6
Explanation: The following selections are valid:
- ("coffee", "donuts"): The company name created is "doffee conuts".
- ("donuts", "coffee"): The company name created is "conuts doffee".
- ("donuts", "time"): The company name created is "tonuts dime".
- ("donuts", "toffee"): The company name created is "tonuts doffee".
- ("time", "donuts"): The company name created is "dime tonuts".
- ("toffee", "donuts"): The company name created is "doffee tonuts".
Therefore, there are a total of 6 distinct company names.

The following are some examples of invalid selections:
- ("coffee", "time"): The name "toffee" formed after swapping already exists in the original array.
- ("time", "toffee"): Both names are still the same after swapping and exist in the original array.
- ("coffee", "toffee"): Both names formed after swapping already exist in the original array.

Input: ideas = ["lack","back"]
Output: 0
Explanation: There are no valid selections. Therefore, 0 is returned.
 */

var distinctNames = function (ideas) {
  let map = {},
    count = 0;
  for (let i = 0; i < ideas.length; i++) {
    if (map[ideas[i]] === undefined) {
      map[ideas[i]] = 1;
    }
  }
  //console.log(map);

  for (let i = 0; i < ideas.length; i++) {
    for (let j = i + 1; j < ideas.length; j++) {
      let x = ideas[i].split("");
      let y = ideas[j].split("");
      let temp = x[0];
      x[0] = y[0];
      y[0] = temp;
      if (map[x.join("")] === undefined && map[y.join("")] === undefined) {
        count++;
      }
    }
  }
  return count * 2;
};

// console.log(distinctNames(["coffee", "donuts", "time", "toffee"]));
// console.log(distinctNames(["lack", "back"]));

/**
 * 5289. Fair Distribution of Cookies
User Accepted:1007
User Tried:1414
Total Accepted:1016
Total Submissions:1772
Difficulty:Medium
You are given an integer array cookies, where cookies[i] denotes the number of cookies in the ith bag. You are also given an integer k that denotes the number of children to distribute all the bags of cookies to. All the cookies in the same bag must go to the same child and cannot be split up.

The unfairness of a distribution is defined as the maximum total cookies obtained by a single child in the distribution.

Return the minimum unfairness of all distributions.


Input: cookies = [8,15,10,20,8], k = 2
Output: 31
Explanation: One optimal distribution is [8,15,8] and [10,20]
- The 1st child receives [8,15,8] which has a total of 8 + 15 + 8 = 31 cookies.
- The 2nd child receives [10,20] which has a total of 10 + 20 = 30 cookies.
The unfairness of the distribution is max(31,30) = 31.
It can be shown that there is no distribution with an unfairness less than 31.


Input: cookies = [6,1,3,2,2,4,1,2], k = 3
Output: 7
Explanation: One optimal distribution is [6,1], [3,2,2], and [4,1,2]
- The 1st child receives [6,1] which has a total of 6 + 1 = 7 cookies.
- The 2nd child receives [3,2,2] which has a total of 3 + 2 + 2 = 7 cookies.
- The 3rd child receives [4,1,2] which has a total of 4 + 1 + 2 = 7 cookies.
The unfairness of the distribution is max(7,7,7) = 7.
It can be shown that there is no distribution with an unfairness less than 7.

var distributeCookies = function(cookies, k) {
    
};

 * 
 */

var distributeCookies = function (cookies, k) {
  let result = [],
    map = {};
  cookies.sort((a, b) => b-a);
  for (let i = 0; i < k; i++) {
    map[i + 1] = 0;
    result.push([]);
  }
  //console.log(cookies, map);

  for (let i = 0; i < cookies.length; i = i + k-2) {
    let child = k;
    while (child) {
       // console.log(child,cookies[i],cookies.length-i )
        if(cookies.length-i<=k-1){
            child=1
        }
        if(cookies[i]===undefined){        
            break}

      map[child] +=cookies[i];

      i++;
      child = child - 1;
    }
  }
  let res=Object.values(map).sort((a,b)=>b-a)
  return res[0]
};

console.log(distributeCookies([8, 15, 10, 20,8], 2));
/**[6,1,3,2,2,4,1,2]
3 */