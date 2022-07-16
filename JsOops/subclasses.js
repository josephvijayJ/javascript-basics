class Books {
    constructor(title,author,year){
        this.title = title;
        this.author = author;
        this.year = year;

    }
getAges(){
const age = new Date().getFullYear() - this.year;
return `This book is ${age} years old after publishing `
};
}

class Magazine extends Books{
     constructor(title,author,year,month){
         super(title,author,year)
         this.month = month;
     }
}

const mag1 = new Magazine('Adventorous','Peeky Claw','1891','Oct');
console.log(mag1.title);