// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});


describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
});
it('should return a string when called', function () {
    expect(typeof sayHello()).toBe('string');
});
it('should return "Hello, Jane!" when called with "Jane"', function (){
    expect(sayHello("Jane")).toBe("Hello, Jane!");
});
it('should return "Hello, Alex!" when called with "Alex"', function () {
    expect(sayHello("Alex")).toBe("Hello, Alex!");
});
it('should return "Hello, Pat!" when called with "Pat"', function () {
    expect(sayHello("Pat")).toBe("Hello, Pat!");
});
it('should return "Hello, World!" when called with no argument', function () {
    expect(sayHello()).toBe("Hello, World!");
});

it('should return "Hello, World!" when called with true', function () {
    expect(sayHello(true)).toBe("Hello, World!");
});

it('should return "Hello, World!" when called with false', function () {
    expect(sayHello(false)).toBe("Hello, World!");
});

it('should return "Hello, World!" when called with null', function () {
    expect(sayHello(null)).toBe("Hello, World!");
});

it('should return "Hello, World!" when called with an empty string', function () {
    expect(sayHello("")).toBe("Hello, World!");
});

it('should return "Hello, World!" when called with a number', function () {
    expect(sayHello(2.3)).toBe("Hello, World!");
});

it('should return "Hello, World!" when called with a number inside a string', function () {
    expect(sayHello("5")).toBe("Hello, World!");
});

it('should return "Hello, World!" when called with an empty array', function () {
    expect(sayHello([])).toBe("Hello, World!");
});

it('should return "Hello, World!" when called with an empty object', function () {
    expect(sayHello({})).toBe("Hello, World!");
});

it('should return "Hello, World!" when called with a function', function () {
    expect(sayHello(function() {})).toBe("Hello, World!");
});

describe('isFive', function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });

    it('should return a boolean value', function () {
        expect(typeof isFive()).toBe('boolean');
    });

    it('should return true when passed 5', function () {
        expect(isFive(5)).toBe(true);
    });

    it('should return true when passed the string "5"', function () {
        expect(isFive('5')).toBe(true);
    });
});

describe('isEven', function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });

    it('should return a boolean no matter the input', function () {
        expect(typeof isEven(2)).toBe('boolean');
        expect(typeof isEven(-4)).toBe('boolean');
        expect(typeof isEven(3)).toBe('boolean');
        expect(typeof isEven("banana")).toBe('boolean');
        expect(typeof isEven("8")).toBe('boolean');
        expect(typeof isEven(Infinity)).toBe('boolean');
        expect(typeof isEven(true)).toBe('boolean');
        expect(typeof isEven(false)).toBe('boolean');
        expect(typeof isEven()).toBe('boolean');
    });

    it('should return true when executed with isEven(2)', function () {
        expect(isEven(2)).toBe(true);
    });

    it('should return true when executed with isEven(-4)', function () {
        expect(isEven(-4)).toBe(true);
    });

    it('should return false when executed with isEven(3)', function () {
        expect(isEven(3)).toBe(false);
    });

    it('should return false when called with isEven("banana")', function () {
        expect(isEven("banana")).toBe(false);
    });

    it('should return true when called with isEven("8")', function () {
        expect(isEven("8")).toBe(true);
    });

    it('should return false when called with isEven(Infinity)', function () {
        expect(isEven(Infinity)).toBe(false);
    });

    it('should return false when called with isEven(true)', function () {
        expect(isEven(true)).toBe(false);
    });

    it('should return false when called with isEven(false)', function () {
        expect(isEven(false)).toBe(false);
    });

    it('should return false when called without an argument', function () {
        expect(isEven()).toBe(false);
    });
});


