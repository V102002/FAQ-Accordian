const accordians=document.querySelectorAll('.accordian');//get the accordian
accordians.forEach(accordian=>{
    //access the answer and the image from each accordian
    const icon=accordian.querySelector(".icon");
    const ans=accordian.querySelector(".answer");
    
    //adding a click eventListener to each accordian
    accordian.addEventListener("click",()=>{
        ans.classList.toggle("active"); //adding the active class based on toggle

        //check if the accordian has been clicked
        if(ans.classList.contains("active")){
            icon.src="./assets/images/icon-minus.svg"
        }else{
            icon.src="./assets/images/icon-plus.svg"
        }
    });
    const backdrop=document.querySelector('.backdrop');
    function changeBackground(){
        if (window.innerWidth<=500) {
            console.log(window.innerWidth);
            backdrop.src='./assets/images/background-pattern-mobile.svg';
        }else{
            backdrop.src='./assets/images/background-pattern-desktop.svg';
        }
    }
    //calling the function to the set the image based on current screen size
    changeBackground();
    window.addEventListener('resize',changeBackground);
});