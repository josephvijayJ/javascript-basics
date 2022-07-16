function Books(type,Author,year){

    this.type = type;
    this.Author = Author;
    this.year = year;

    }
    //getAges
    Books.prototype.getAges = function(){
        const age = new Date().getFullYear() - this.year;
        return `THIS BOOK IS ${age} YEARS OLD`;
    };
    //get Author

    Books.prototype.launcher = function(){
        return `The Author of this book is ${this.Author}`;
    };
    // Manipulating data using prototype

    Books.prototype.manipulate = function(newyear){
     this.year = newyear;
     this.checking = true;
    };
    
    
    
    const book1 = new Books('crime','Rajesh','2007');
    const book2= new Books('Romatic','Gangadhar',2011);
    const book3 = new Books('Family-Subject','Kalyani','1995');
    
    console.log(book2);
    book2.manipulate(2010);
    console.log(book2);
    