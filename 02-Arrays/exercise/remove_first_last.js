// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL


// function array(string) {
//     // TODO
//     let strArray = string.split(',')
  
//     if (strArray.length >= 3){
//         strArray.pop();
//         strArray.shift();
//         strArray = strArray.join(' ');
//     } else {
//         strArray = null;
//     }
  
//       return strArray
//   }


// console.log(array("1,2"))

function array(arr){
    return arr.split(",").slice(1,-1).join(" ") || null;
  }

console.log(array("1,2,3,4"))