window.addEventListener('load', function() {
    const down_btn = document.getElementById("down");
    down_btn.addEventListener("click", function (){
        window.scrollTo(0, document.body.scrollHeight);
    });
});