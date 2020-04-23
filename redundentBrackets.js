const findRedundantBrackets = (str) => {
    const stack = [];

    for (const ch of str) {
        // check if ch is closing bracket otherwise push it to the stack
        if (ch === ')') {
            // ch is closing bracket. pop top element
            let top = stack.pop();
            // console.log(top);
            // let elementInside = 0;
            let flag = true;
            //pop all the elements until top is not opening bracket
            while (top !== '(') {
                if (top === '+' || top === '-' || top === '*' || top === '/') {
                    // valid element is inside
                    flag = false;
                }
                // elementInside += 1;
                console.log(top);
                top = stack.pop();
            }
            if (flag === true) return 1;
        } else {
            stack.push(ch);
        }
    }
    return 0;
};

// (((a+(b))+(c+d)))
console.log(findRedundantBrackets('((a+b))'));
// returns 1 for redundant brackets
// returns 0 for no redundant brackets
