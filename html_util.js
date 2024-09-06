window.addEventListener('load', function() {
    const down_btn = document.getElementById("down")
    if (down_btn == null){
        return
    }
    down_btn.addEventListener("click", function (){
        window.scrollTo(0, document.body.scrollHeight)
    });
});



let inp
let count = 0
let timer
let isEnd = false
window.addEventListener('load', function() {
    inp = document.getElementById('in');
    if (!inp){
        return
    }
    inp.addEventListener('click', function () {
        count++;
        if (count >= 6){
            if(isEnd){
                return
            }
            isEnd = true;
            inp.innerHTML = "<a target='_blank' href='/the-hidden.html'>AT3K_CA copyright</a>";
        }
        if (!timer) {
            timer = setTimeout(() => {
                count = 0;
                timer = null;
            }, 2000);
        }
    });

});



function msg_render() {
    const msgDiv = document.getElementById('msg')
    msgDiv.style.display = 'block'
}