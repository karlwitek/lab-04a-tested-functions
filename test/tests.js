const test = QUnit.test;

function subtract(x, y) {
    return x - y;
}

test(subtract, function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 10;
    const y = 5;
    const expected = 5;
    //Act 
    // Call the function you're testing and set the result to a const
    const difference = subtract(x, y);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(difference, expected);

});

function multiply(x, y) {
    return x * y;
}

test(multiply, function(assert) {
    const x = 4;
    const y = 3;
    const expected = 12;

    const product = multiply(x, y);
    
    assert.equal(product, expected);

});

function divide(x, y) {
    return x / y;
}

test(divide, function(assert) {
    const x = 6;
    const y = 2;
    const expected = 3;

    const quotient = divide(x, y);

    assert.equal(quotient, expected);

});

function isEven(x) {
    if(x % 2 === 0) {
        return true;
    }
    else
    {
        return false;
    }
}

test(isEven, function(assert) {
    const x = 6;

    const expected = true;

    const result = isEven(x);

    assert.equal(result, expected);

});

function getEvenNumbers(upTo) {
    const numbers = [];
    for(let i = 2, i <= upTo, i++) {
        
    }

}


