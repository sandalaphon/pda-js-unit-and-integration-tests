var Calculator = require('../../public/js/calculator.js')
// var chai = require('chai');
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  // multiply 3x5 and get 15
  it("can multiply 3x5 and get 15", function(){
    calculator.runningTotal = 0;
    calculator.previousTotal = 5;
    calculator.multiply(3)
    assert.equal(15, calculator.runningTotal)
  })
  // divide 21/7 and get 3
  it("can divide 21/7 and get 3", function(){
    calculator.runningTotal = 0;
    calculator.previousTotal = 21;
    calculator.divide(7)
    assert.equal(3, calculator.runningTotal)
  })
  // add 1+4 and get 5
  it("can add 1+4 and get 5", function(){
    calculator.runningTotal = 0;
    calculator.previousTotal = 1;
    calculator.add(4)
    assert.equal(5, calculator.runningTotal)
  })
  // subtract 7-4 and get 3
  it("can add 1+4 and get 5", function(){
    calculator.runningTotal = 0;
    calculator.previousTotal = 7;
    calculator.subtract(4)
    assert.equal(3, calculator.runningTotal)
  })


///////////////testing Add/////////////

  it('can add 2+2', function(){
    calculator.runningTotal = 0;
    calculator.previousTotal = 2;
    calculator.add(2)
    assert.equal(4, calculator.runningTotal)
  })

  it('can add negative number', function(){
    calculator.runningTotal = 0;
    calculator.previousTotal = 2;
    calculator.add(-2)
    assert.equal(0, calculator.runningTotal)
  })

  it('can add 0', function(){
    calculator.runningTotal = 0;
    calculator.previousTotal = 2;
    calculator.add(0);
    assert.equal(2, calculator.runningTotal)
  })

  it('can add large numbers', function(){
    calculator.runningTotal = 0;
    calculator.previousTotal = 111111;
    calculator.add(111111);
    assert.equal(222222, calculator.runningTotal)
  })

  it('can increase number of digits', function(){
    calculator.runningTotal = 0;
    calculator.previousTotal = 1;
    calculator.add(9);
    assert.equal(10, calculator.runningTotal)
  })

  it('add function can go from negative to positive', function(){
    calculator.runningTotal = 0;
    calculator.previousTotal = -10;
    calculator.add(20);
    assert.equal(10, calculator.runningTotal)
  })

  it('add function can go from positive to negative', function(){
    calculator.runningTotal = 0;
    calculator.previousTotal = 10;
    calculator.add(-100);
    assert.equal(-90, calculator.runningTotal)
  })

  it('can add decimals', function(){
    calculator.runningTotal = 0;
    calculator.previousTotal = 10.2;
    calculator.add(10.2);
    assert.equal(20.4, calculator.runningTotal)
  })

  it('can add decimals summing more than 1', function(){
    calculator.runningTotal = 0;
    calculator.previousTotal = 10.2;
    calculator.add(10.9);
    assert.equal(21.1, calculator.runningTotal)
  })

  ////////////Testing Suubtract //////////

  it('can subtract small numbers', function(){
    calculator.runningTotal = 0;
    calculator.previousTotal = 90;
    calculator.subtract(10);
    assert.equal(80, calculator.runningTotal)
  })

  it('can subtract number where digits change', function(){
    calculator.runningTotal = 0;
    calculator.previousTotal = 3333;
    calculator.subtract(3000);
    assert.equal(333, calculator.runningTotal)
  })

  it('can subtract negative number', function(){
    calculator.runningTotal = 0;
    calculator.previousTotal = 3333;
    calculator.subtract(-3000);
    assert.equal(6333, calculator.runningTotal)
  })
  
  it('can subtract zero', function(){
    calculator.runningTotal = 0;
    calculator.previousTotal = 3333;
    calculator.subtract(0);
    assert.equal(3333, calculator.runningTotal)
  })

  it('can subtract decimals', function(){
    calculator.runningTotal = 0;
    calculator.previousTotal = 3.2;
    calculator.subtract(.1);
    assert.equal(3.1, calculator.runningTotal)
  })


  it('can subtract decimals decrementing digit', function(){
    calculator.runningTotal = 0;
    calculator.previousTotal = 3.2;
    calculator.subtract(.3);
    assert.equal(2.9, calculator.runningTotal.toFixed(1))//toFixed to fix...
  })


////////////////Testing Multiply/////////////

  it('multiply small numbers', function(){
    calculator.runningTotal = 0;
    calculator.previousTotal = 5;
    calculator.multiply(5);
    assert.equal(25, calculator.runningTotal)
  })

  it('multiply negative*positive is negative', function(){
    calculator.runningTotal = 0;
    calculator.previousTotal = 5;
    calculator.multiply(-5);
    assert.equal(-25, calculator.runningTotal)
  })

  it('multiply negative*negative is positive', function(){
    calculator.runningTotal = 0;
    calculator.previousTotal = -5;
    calculator.multiply(-5);
    assert.equal(25, calculator.runningTotal)
  })

  //////////Testing Divide//////////////

  it('can divide to integer result', function(){
    calculator.runningTotal = 0;
    calculator.previousTotal = 64;
    calculator.divide(8);
    assert.equal(8, calculator.runningTotal)
  })

  it('can divide to non recurring decimal', function(){
    calculator.runningTotal = 0;
    calculator.previousTotal = 5;
    calculator.divide(4);
    assert.equal(1.25, calculator.runningTotal)
  })

  it('can divide to recurring decimal', function(){
    calculator.runningTotal = 0;
    calculator.previousTotal = 1;
    calculator.divide(3);
    assert.equal(0.3333333333333333, calculator.runningTotal)
  })
  
  it('can divide negative/positive = negative', function(){
    calculator.runningTotal = 0;
    calculator.previousTotal = -1;
    calculator.divide(3);
    assert.equal(-0.3333333333333333, calculator.runningTotal)
  })

  it('can divide positive/negative = negative', function(){
    calculator.runningTotal = 0;
    calculator.previousTotal = 1;
    calculator.divide(-3);
    assert.equal(-0.3333333333333333, calculator.runningTotal)
  })

  it('can divide negative/negative = positive', function(){
    calculator.runningTotal = 0;
    calculator.previousTotal = -1;
    calculator.divide(-3);
    assert.equal(0.3333333333333333, calculator.runningTotal)
  })

  it('can divide by fraction', function(){
    calculator.runningTotal = 0;
    calculator.previousTotal = 1;
    calculator.divide(.25);
    assert.equal(4, calculator.runningTotal)
  })

  it('can divide by recurring fraction', function(){
    calculator.runningTotal = 0;
    calculator.previousTotal = 1;
    calculator.divide(0.3333333333333333);
    assert.equal(3, calculator.runningTotal)
  })

  it('can handle division by zero', function(){
    calculator.runningTotal = 0;
    calculator.previousTotal = 1;
    calculator.divide(0);
    assert.equal(Infinity, calculator.runningTotal)
  })
////////////////////////////////////////////////////////////////
////////////////  AN ALERT BOX /////////////////////////////////
///// Could be added when dividing by zero /////////////////////
////  Suggested code is in the calculator.js divide file, //////
///  but commented out. //////////////////////////////////////// 

});
