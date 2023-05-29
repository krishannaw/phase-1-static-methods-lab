class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-\s']/g, '');
  }

  static titleize(string) {
    const words = string.split(' ');
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];

    const capitalizedWords = words.map((word, index) => {
      if (index === 0 || !exceptions.includes(word)) {
        return this.capitalize(word);
      } else {
        return word;
      }
    });

    return capitalizedWords.join(' ');
  }
}

// Testing the Formatter class
describe("Formatter", () => {
  describe("capitalize", () => {
    it("is a static method", () => {
      expect(typeof Formatter.capitalize).toBe("function");
    });

    it("uppercases the first letter in a String", () => {
      expect(Formatter.capitalize("hello")).toBe("Hello");
      expect(Formatter.capitalize("world")).toBe("World");
    });
  });

  describe("sanitize", () => {
    it("is a static method", () => {
      expect(typeof Formatter.sanitize).toBe("function");
    });

    it("removes non-alphanumeric characters except for dash, single quote, and space", () => {
      expect(Formatter.sanitize("Hello, $world!")).toBe("Hello world");
      expect(Formatter.sanitize("Let's-go to the park!")).toBe("Let's-go to the park");
    });
  });

  describe("titleize", () => {
    it("is a static method", () => {
      expect(typeof Formatter.titleize).toBe("function");
    });

    it("capitalizes all words in a sentence except specified exceptions", () => {
      expect(Formatter.titleize("the cat in the hat")).toBe("The Cat in the Hat");
      expect(Formatter.titleize("a tale of two cities")).toBe("A Tale of Two Cities");
      expect(Formatter.titleize("but where is the love")).toBe("But Where Is the Love");
    });

    it("always capitalizes the first word", () => {
      expect(Formatter.titleize("hello world")).toBe("Hello World");
      expect(Formatter.titleize("goodbye universe")).toBe("Goodbye Universe");
    });
  });
});