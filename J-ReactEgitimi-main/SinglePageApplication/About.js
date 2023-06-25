function getAboutPage(){
    let text = "";

    root.innerHTML = "<h1>Yükleniyor...</h1>"

    setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res=> res.json())
        .then(data=> {                
            text = "<ul>";             

            for(let x of data){
                text += "<li>" + x.title + "</li>"
            }   
            
            text += "</ul>"

            root.innerHTML = text;
        });
    }, 2000);           
}