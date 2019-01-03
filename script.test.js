var mockCardObject = {
    card: function (str1, str2) {
        var cardObject = {};
        cardObject[str1] = 1;
        cardObject[str2] = new Date('1/2/19');
        return Promise.resolve(cardObject);
    },
}

function testFormatDate() {
    console.log('Test formatDate: should format 1/12/19 to be 2019-01-12')
    var date = new Date('1/12/19');
    var result = formatDate(date);
    console.log('Expected: 2019-01-12\tActual: ' + result);
}

function testOnShiftForward() {
    var result = onShiftForward(mockCardObject);
    result.then(function (value) {
        console.log('Test onShiftFoward: should shift 1/2/19 forward one day to 1/1/19')
        console.log('Expected: 1/1/19\tActual: ' + value.toLocaleDateString('en-US'));
    });
}

function testOnShiftBack() {
    
}


function runAllTests() {
    console.log('All Tests:');
    testFormatDate();
    testOnShiftForward();
    testOnShiftBack();
}