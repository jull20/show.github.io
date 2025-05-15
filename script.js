let btn_share = document.querySelector(".share_btn");
btn_share.addEventListener("click", function(){
    let share_block = document.querySelector(".share");
    share_block.classList.toggle("visible-hidden");
    this.classList.toggle("dark");
})