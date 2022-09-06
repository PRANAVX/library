let myLibrary=[{name:"a",author:"s",pages:32,read:true},{name:"a",author:"s",pages:32,read:true},{name:"a",author:"s",pages:32,read:true}];





const root = document.getElementById("root");
const form = document.getElementById("formforbook");
const formdata= document.getElementById("formdata")
const addBook = document.getElementById("addbook");
const bookContainer = document.getElementById("bookcontainer");




addBook.addEventListener('click',()=>formForBook());

formdata.onsubmit = (e)=>{
    root.classList.remove("hide");
    form.classList.add("active");
    bookContainer.innerHTML="";
    addBookToLibrary(getData(e));
    formdata.reset();
    return false;
}


    



function Book(name,author,pages,read){
    this.name=name;
    this.author=author;
    this.pages=pages;
    this.read=read;
}


function addBookToLibrary(book){
    myLibrary.push(book);
    myLibrary.forEach((x)=>{displayBooks(x);
})
    bookContainer.setAttribute("style","grid-template-columns:1fr 1fr ; grid-template-rows:1fr 1fr 1fr;");
}


function displayBooks(x){
   
    const divBook = document.createElement("div");
    const bname = document.createElement("p");
    const aname = document.createElement("p");
    const pcount = document.createElement("p");
    const removebtn = document.createElement("button");
    removebtn.textContent="remove";
    bname.textContent=x.name;
    aname.textContent=x.author;
    pcount.textContent=x.pages;
    divBook.appendChild(bname);
    divBook.appendChild(aname);
    divBook.appendChild(pcount);
    divBook.appendChild(removebtn);
    divBook.className="divbook";

    bookContainer.appendChild(divBook);

    removebtn.onclick=()=>{
        myLibrary.splice(myLibrary.indexOf(x)-1,1);
        bookContainer.innerHTML="";
        myLibrary.forEach((x)=>{displayBooks(x);
        })

    } 
    }

function formForBook(){
    form.classList.remove("active");
    root.classList.add("hide");

}

function getData(e){
    return new Book(e.currentTarget.name.value,e.currentTarget.author.value,e.currentTarget.pages.value,e.currentTarget.read.checked)

}




