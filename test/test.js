
var assert = chai.assert;

describe('Array', function () {
  it('should start empty', function (done) {
    var arr = [];

    assert.equal(arr.length, 0);

    setTimeout(function(){
      done();
    },1000);
  });

  it('fun1',function(){
    assert.equal(A.fun1(),2);
  });

  describe('addClass', function () {
    it('should add class to element', function () {
      var element = { className: '' };
      A.addClass(element, 'test-class');
      assert.equal(element.className, 'test-class');
    });
    it('should not add a class which already exists', function () {
      var element = { className: 'exists' };
      A.addClass(element, 'exists');
      var numClasses = element.className.split(' ').length;
      assert.equal(numClasses, 1);
    });

    it('should append new class after existing one', function () {
      var element = { className: 'exists' };

      A.addClass(element, 'new-class');

      var classes = element.className.split(' ');
      assert.equal(classes[1], 'new-class');
    });
  });

  after(function(){
    console.log(JSON.stringify(window.__coverage__));
  })
});