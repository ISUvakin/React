let a = Math.floor(Math.random() * 100);
switch (true) {
    case (a > 10):
        a=a;
        console.log('yes ',a ,' > 10')
        break;
    case (a <= 10):
        console.log('no ',a ,' < 10')
        a=a*2;
        break;
    }
switch (true) {
    case (a > 5):
        console.log('yes', a,' > 5')
        a=(2*a)+1
        break;
    case (a <= 5):
        console.log('no', a,' < 5')
        if (a < 3){
            console.log(1);
            return;}
        else {
            console.log(a,' > 3');
            a=2*(a-2);
            break;}
    }
switch (true){
    case (a > 4):
        console.log(5);
        return;
    case (a <= 4):
        if(a % 2 == 0) {
            console.log(6);
            return;
        }
        else {
            console.log(7);
            return;
        }
    }