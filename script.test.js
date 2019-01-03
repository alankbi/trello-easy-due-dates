var mockCardObject = {
    card: function (str) {
        if (str === 'due') {
            return Promise.resolve(new Date('1/2/19'));
        } else {
            return Promise.resolve();
        }
    },
}

function testOnShiftForward() {
    console.log('Test onShiftFoward: should shift 1/2/19 forward one day to 1/1/19')
    var result = onShiftForward(mockCardObject);
    result.then(function (value) {
        console.log('Expected: 1/1/19\tActual: ' + value.toLocaleDateString('en-US'));
    });
}

function testOnShiftBack() {
    
}


function runAllTests() {
    console.log('All Tests:');
    testOnShiftForward();
    testOnShiftBack();
}