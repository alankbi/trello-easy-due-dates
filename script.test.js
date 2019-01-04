var mockCardObject = {
    card: function (str1, str2) {
        var cardObject = {};
        cardObject[str1] = 1;
        cardObject[str2] = new Date('1/2/19');
        return Promise.resolve(cardObject);
    },
    set: function (scope, visbility, key, value) {
        return Promise.resolve();
    }
}

function testFormatDate() {
    console.log('Test formatDate: should format 1/12/19 to be 2019-01-12')
    var date = new Date('1/12/19');
    var result = formatDate(date);
    console.log('Expected: 2019-01-12\tActual: ' + result);
}

function testOnShiftBack() {
    var result = onShiftBack(mockCardObject);
    result.then(function (value) {
        console.log('Test onShiftBack: should shift 1/2/19 back one day to 1/3/19')
        console.log('Expected: 1/3/2019\tActual: ' + value.toLocaleDateString('en-US'));
    });
}

function testShiftDateBack() {
    console.log('Test shiftDateBack: should shift 1/2/19 back one day to 1/3/19')
    var date = new Date('1/2/19');
    var result = shiftDateBack(date);
    console.log('Expected: 1/3/2019\tActual: ' + result.toLocaleDateString('en-US'));
}

function runAllTests() {
    console.log('All Tests:');
    testFormatDate();
    //testOnShiftBack();
    testShiftDateBack();
}