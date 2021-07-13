
let mainTagsContainer = document.querySelector('.main__tagscontainer');
let tagInput = document.querySelector('.tagInput');
let tagAdd = document.querySelector('.add');

let reset = (mode)=>{
    console.log('de8ka');

        tagInput.firstElementChild.value = '';
   
   if (mode === 1){
        tagAdd.classList.add('hidden');
        tagInput.classList.remove('hidden');
    }else if (mode ===2){
        tagAdd.classList.remove('hidden');
        tagInput.classList.add('hidden');

    }
   
}
let addElementTag = (val) =>{
    let newElement = document.createElement('section');
    newElement.classList.add('tagscontainer__tag');
    newElement.innerHTML = 
    `
    <p class="tag__text">${val}</p>
    <button class="tag__remove hidden">
        <img src="./images/close(1).png" alt="" />
    </button>
    <div class="tag__cover"></div>
    `
    return newElement;
}


let addTag = () => {
    reset(1);
    tagInput.addEventListener('keydown' ,(e)=>{
    if(e.key === "Enter" ){
        if (tagInput.firstElementChild.value != ''){
            mainTagsContainer.insertBefore(addElementTag(tagInput.firstElementChild.value),tagInput);
            reset(2);
        }
        }else if (e.key === "Escape"){
            console.log('destro');
            reset(2);
        }
    })
    tagInput.lastElementChild.addEventListener('click' ,(e)=>{
        reset(2);
       
    });
}
    



mainTagsContainer.addEventListener('click', (e)  =>{
    let target = e.target;
    let lengthOfClass = target.classList.length;
if (e.target.classList.contains('tag__cover')){
    if(lengthOfClass === 1){
        target.parentNode.remove();
    }else if(lengthOfClass === 2){
        addTag();
    }
   
   } 

}
);
mainTagsContainer.addEventListener('mouseover', (e)  =>{
    
   if (e.target.classList.contains('tag__cover') && e.target.classList.length === 1 ){
       
       e.target.previousElementSibling.classList.toggle('hidden');
       e.target.parentNode.style.backgroundColor = 'hsl(0, 100%, 60%)';
      
   }

});
mainTagsContainer.addEventListener('mouseout', (e)  =>{
      if (e.target.classList.contains('tag__cover') && e.target.classList.length === 1){
        
        e.target.previousElementSibling.classList.toggle('hidden');
        e.target.parentNode.style.backgroundColor = '';
        
    }
 
 });


