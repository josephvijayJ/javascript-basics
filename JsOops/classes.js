class Books {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getAges() {
    const age = new Date().getFullYear() - this.year;
    return `This book is ${age} years old after publishing `;
  }

  static topbooks() {
    return 'Rich Dad/Poor Dad';
  }
}
class Bookstore extends Books {
  constructor(title, author, year, branch) {
    super(title, author, year);
    this.branch = branch;
  }
  get_topBranch() {
    if (
      this.branch === 'Chennai' ||
      this.branch === 'Madurai' ||
      this.branch === 'Coimbatore'
    ) {
      return `${this.branch} is one of the top Book store branches`;
    } else {
      return `${this.branch} is not one among the top Book store brances`;
    }
  }
}
//Instantiating Objects
const book1 = new Books('Crime', 'Rajesh', 2001);
const book2 = new Books('romantic', 'Potter', 2005);
const book3 = new Books('comedy', 'Harry', 1999);
console.log(book1.getAges());
console.log(Books.topbooks());

const Tamilnadu = new Bookstore(
  'ponniyinSelvan',
  'Bharathiyar',
  '1800',
  'Madurai'
);
console.log(Tamilnadu.get_topBranch());
