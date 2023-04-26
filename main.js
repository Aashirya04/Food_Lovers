const search_box = document.getElementById('search');
// search_box.addEventListener('click', () => )


function search() {
    const searchbox = document.getElementById("searchbar").value.toUpperCase(); 
    const fooditem = document.getElementById("box-container");
    const box = document.querySelectorAll(".box");
    const x = fooditem.getElementsByTagName("h3");


for(var i=0; i < box.length; i++){
    let match = box[i].getElementsByTagName('h3')[0];

    if (match){
       let textvalue = match.textContent || match.innerHTML

       if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
          box[i].style.display = "";  
       } else {
           box[i].style.display = "none";
       }
    }

}
}


const ham = document.getElementById('hamburger');
const lists = document.querySelector('.navlist');
const close =document.querySelector('.closeme');
const listItems = document.getElementById('lists');

ham.addEventListener('click',() => {
    lists.classList.toggle('active');
})
close.addEventListener('click',()=>{
    lists.classList.toggle('active');
})

listItems.addEventListener('click' , () =>{
    lists.classList.toggle('active');
})