function Book(title,autor,page){
    this.title = title;
    this.autor = autor;
    this.page = page;
    this.toString = toString;
}

function toString(){
    return this.title + ' de ' +
    this.autor + ', si are ' +
    this.page + ' pagini. '
}
function citeste(){
    return "Acum citesc o carte ";

}

    // export{book}

 export {Book, citeste};