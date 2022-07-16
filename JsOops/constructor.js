function Books(type,Author,year){

    this.type = type;
    this.Author = Author;
    this.year = year;
    this.getAges = function(){
        const age = new Date().getFullYear() - year;
        return `this book is ${age} years old`;
    }
    };
    
    
    
    
    const book1 = new Books('crime','Rajesh',2007);
    const book2= new Books('Romatic','Gangadhar',2011);
    const book3 = new Books('Family-Subject','Kalyani',1995);
    
    console.log(book3.getAges());