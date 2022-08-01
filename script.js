const SUBMIT_BTN = document.querySelector("#submitBtn");
const ONE_STAR = document.getElementById("OneStar");
const TWO_STAR = document.getElementById("TwoStar");
const THREE_STAR = document.getElementById("ThreeStar");
const FOUR_STAR = document.getElementById("FourStar");
const FIVE_STAR = document.getElementById("FiveStar");
const PHOTO = document.getElementById("photo2");
const PHOTO2 = document.getElementById("photo1");
const LOGO = document.querySelector(".topLogo");
const TITLEBOX = document.querySelector(".titleBox");
const FORMBOX = document.querySelector(".FormWrapper");
const TITLE = document.querySelector("#selectedDesc");
const SCRIPT_TITLE = document.getElementById("scriptTitle");
const SCRIPT_DESC = document.getElementById("scriptDescription");


SUBMIT_BTN.addEventListener("click",() =>{
    if(ONE_STAR.checked == true){
        PHOTO.style.display = "flex";
        PHOTO2.style.display = "none";
        LOGO.style.display = "none";
        SUBMIT_BTN.style.display = "none";
        TITLEBOX.style.display = "none";
        FORMBOX.style.display = "none";
        TITLE.style.display = "block";
        TITLE.textContent = "You selected 1 out of 5";
        SCRIPT_TITLE.style.display = "block";
        SCRIPT_DESC.style.display = "inline";
        


    }else{
        console.log("");
    }
    if(TWO_STAR.checked == true){
        PHOTO.style.display = "flex";
        PHOTO2.style.display = "none";
        LOGO.style.display = "none";
        SUBMIT_BTN.style.display = "none";
        TITLEBOX.style.display = "none";
        FORMBOX.style.display = "none";
        TITLE.style.display = "block";
        TITLE.textContent = "You selected 2 out of 5";
        SCRIPT_TITLE.style.display = "block";
        SCRIPT_DESC.style.display = "inline";
        


    }else{
        console.log("");
    }
    if(THREE_STAR.checked == true){
        PHOTO.style.display = "flex";
        PHOTO2.style.display = "none";
        LOGO.style.display = "none";
        SUBMIT_BTN.style.display = "none";
        TITLEBOX.style.display = "none";
        FORMBOX.style.display = "none";
        TITLE.style.display = "block";
        TITLE.textContent = "You selected 3 out of 5";
        SCRIPT_TITLE.style.display = "block";
        SCRIPT_DESC.style.display = "inline";
        


    }else{
        console.log("");
    }
    if(FOUR_STAR.checked == true){
        PHOTO.style.display = "flex";
        PHOTO2.style.display = "none";
        LOGO.style.display = "none";
        SUBMIT_BTN.style.display = "none";
        TITLEBOX.style.display = "none";
        FORMBOX.style.display = "none";
        TITLE.style.display = "block";
        TITLE.textContent = "You selected 4 out of 5";
        SCRIPT_TITLE.style.display = "block";
        SCRIPT_DESC.style.display = "inline";
        


    }else{
        console.log("");
    }
    if(FIVE_STAR.checked == true){
        PHOTO.style.display = "flex";
        PHOTO2.style.display = "none";
        LOGO.style.display = "none";
        SUBMIT_BTN.style.display = "none";
        TITLEBOX.style.display = "none";
        FORMBOX.style.display = "none";
        TITLE.style.display = "block";
        TITLE.textContent = "You selected 5 out of 5";
        SCRIPT_TITLE.style.display = "block";
        SCRIPT_DESC.style.display = "inline";
        


    }else{
        console.log("");
    }
    

}
);