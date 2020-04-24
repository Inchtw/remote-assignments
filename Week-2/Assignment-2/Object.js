function calculate(args) {
    let result;
    if (args.op === "+") {
    result = args.n1 + args.n2;
    } else if(args.op === "-") {
    result = args.n1 - args.n2;
    } else {
    result = "Not supported";
    }
    return result;
    }

/*  方法ㄧ  直接*/

console.log(calculate({op:'+',n1:2,n2:2}));


/*  方法二 用bracket notation   */

let arg_bracket = {};

arg_bracket['op'] = "-";
arg_bracket['n1'] = 4;
arg_bracket['n2'] = 3;

console.log(calculate(arg_bracket));

/*  方法三 用 dot notation*/

let arg_dot = {};

arg_dot.op = "+";
arg_dot.n1 = 6;
arg_dot.n2 = 4;

console.log(calculate(arg_dot));

/*  方法四 用 class constructor*/

class object_generate {
    constructor(op, n1, n2) {
        this.op = op;
        this.n1 = n1;
        this.n2 = n2;
    }
}
 let quetion = new object_generate('+', 2 , 5);
 console.log(calculate(quetion));  




/* encapsulation practice */

const args ={
    op : "+",
    n1 : 6,
    n2 : 4,
    calculate : function () {
        let result;
        if (args.op === "+") {
        result = args.n1 + args.n2;
        } else if(args.op === "-") {
        result = args.n1 - args.n2;
        } else {
        result = "Not supported";
        }
        return result;
        }
}
// console.log(args.calculate())



// console.log(calculate(args.op,args.n1,args.n2));



    // Try to call calculate function correctly
    /*
    For example, if we have an add function like this:
    function add(args){
    return args.n1+args.n2;
    }
    We can call it by passing an object created by JSON literal:
    add({n1:3, n2:4}); // your first way
    You should find another way to create a proper object.
    // your second way
    */