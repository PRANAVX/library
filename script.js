let books = []

const formdiv = document.getElementById("formdiv");
const addbookbtn = document.getElementById("addbook");
const form = document.getElementById("bookform")
const aside = document.getElementById("asideid")


const bookdata = function(name,authorname,pages,read){
    name=name;
    authorname=authorname;
    pages=pages;
    read=read;
    const btn = document.createElement("button")
    btn.setAttribute("name",name);
    
    btn.onclick=(e)=>{
        deletebook(e.target.name)
        displayBooks()
    }
    return{name,authorname,pages,read,btn}
}

function deletebook(x){
    console.log(x)

    books.forEach(function(book,index){
        if(book.name==x){
            books.splice(index,1);
            console.log(books)
        }
    })

}

form.onsubmit = function(e){
    const x=bookdata(e.target.bookname.value,e.target.authorname.value,e.target.pages.value,false)
    books.push(x)
    displayForm(false);
    displayBooks();
    form.reset()
    return false;
}

addbookbtn.onclick = ()=>{
    displayForm(true);
}

function displayForm(flag){
    if(flag==true){
        formdiv.classList.remove("active");
    }else{
        formdiv.classList.add("active");
    }
    
}


function displayBooks(){
    aside.innerHTML="";
    books.forEach(function(book){
        const div = document.createElement("div")
        div.classList.add("bookdiv")
        div.innerHTML=`<br>`
        div.innerHTML+=`Book Name - ${book.name} <br>`
        div.innerHTML+=`Author's Name - ${book.authorname} <br>`
        div.innerHTML+=`Pages - ${book.pages} <br> <br>`
        book.btn.innerHTML="Delete";
        div.appendChild(book.btn);
        aside.appendChild(div);

    })
    
}
