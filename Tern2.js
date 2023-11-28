function manyChecks() {
  let a = Math.floor(Math.random() * 20) + 1;
  console.log(`a = ${a}`);
  
  //return (
  //a > 10 ? 'a is bigger than 10' : 'a is less than or equal to 10 ' + (a === 5 ? 'an example of a special case' : '')) + (a === 15 ? 'but a is not 15' : '')+ (a > 5 ? 'and a is greater than 5' : 'and a is less than or equal to 5 ') + (a % 2 ? ' and a is odd' : ' and a is even ');
  
  if (a > 10) {
    res = 'a is bigger than 10 ';
    switch(true){
      case(a!=15):
      res +='but a is not 15 ';
      break;
    }
  } 
  else {
    res = 'a is less than or equal to 10 ';
    switch (true){
      case (a == 5):
        res +='an example of a special case ';
        break;}
    if (a > 5) {
      res += 'and a is greater than 5 '}
    else {
      res += 'and a is less than or equal to 5 '}
  }
  if (a % 2 == 0) {
    res += 'and a is even'
  }
  else {
    res += 'and a is odd'
  }
  console.log(res)
}

manyChecks();
