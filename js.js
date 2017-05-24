function count (num1, num2, mark) {
    switch (mark) {
        case "+":
        return num1 + num2;
        case "-":
        return num1 - num2;
        case "*":
        return num1 * num2;
        case "/":
        if (num2 != 0) {
            return num1 / num2;
        } else {
        return "error!"
        }
    }    
}

alert( count(3,2,'+') );
alert( count(3,2,'-') );
alert( count(3,2,'*') );
alert( count(3,2,'/') );
