let select = document.querySelector('.countryFetch');
let submit = document.getElementById('submit');
let input = document.getElementsByClassName('remove-placeholder')


function loadCountry(){
    fetch('lorem.txt')
    .then((res)=>res)
    .then((data)=>(console.log(data)))
}

// function checkForEmptyField(e){
//     let good = document.createTextNode('You have been successfully registered');
//     let p =document.getElementById('p-tag');
//     p.innerHTML=good;
//     setTimeout(()=>{p.style.display='none'}, 3000)

// }
// function removePlaceHolderAndAddLabel(e){
//     console.log(e.target)
//  let inputLabel = document.getElementsByClassName('input-label');
//  for(var i =0; i < inputLabel.length; i++){
//  (inputLabel[i]).style.display ='block';
   
//  }
// }
// for (var i =0; i < input.length; i++){
//    input[i].addEventListener('click', removePlaceHolderAndAddLabel);
// }


select.addEventListener('click' , loadCountry);
submit.addEventListener('click', checkForEmptyField);
