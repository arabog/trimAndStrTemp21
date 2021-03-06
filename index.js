// para: s
// return s         ss      sss         ssss       sssss
// eg. a  aa        aaa       aaaa      aaaaa
// pseudo code


function fiveLine(s){
          // trim d argument
          s = s.trim();

          // // loop 5 times
          let k = '';

          for(let i = 0; i < 5; i++) {
          // for each subsequent loop add extra s and console log
                    k = k + s

                    console.log(k);

          }
}


fiveLine("  a")
fiveLine("\txy \n")
fiveLine("           Ok               ")
fiveLines("           OkOK               ")
fiveLines("\n\n\n\nabc\t\t\t")


console.log("===============================");
// using string template
function fiveLines(s){
          // trim d argument
          s = `${s}`.trim()

          // // loop 5 times
          let k = '';

          for(let i = 0; i < 5; i++) {
          // for each subsequent loop add extra s and console log
                    k = `${k + s}`

                    console.log(k);

          }
}

fiveLines("  a")
fiveLines("\txy \n")
fiveLines("\n\n\n\nabc\t\t\t")
fiveLines("           Ok               ")
fiveLines("           OkOK               ")


// codewar solution
function fiveLine(s){
          // trim d argument
          s = s.trim();

          let tmp = s;
          let newS = [s]

          for(let i = 1; i < 5; i++) {
          // for each subsequent loop add extra s and console log
                    newS.push(s = s + tmp)

}

          return newS.join('/n')

}

function fiveLine(s){
          s = s.trim();
          return `${s}\n${s}${s}\n${s}${s}${s}\n${s}${s}${s}${s}\n${s}${s}${s}${s}${s}`;
}
