localStorage.like = 0

var likes = 0;


function myFunction(){
    if(likes===0){
        localStorage.like = 0;
    }
    if(localStorage.like ==0){
     document.getElementById("lk").innerHTML = likes += 2; 
        localStorage.like = 1;

}
    if(localStorage.like ==1){
     document.getElementById("lk").innerHTML = likes -= 1; 
                // localStorage.like = 0;
console.log("P")
}
}

function draw(){
          document.getElementById("lke").innerHTML = likes 


   
}