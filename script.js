
function btnClicking(){
    document.querySelector("#dec-btn").addEventListener("click",function(){
        document.querySelector("#decryption").style.display = "block"
        document.querySelector("#encryption").style.display = "none"
        document.querySelector("#dec-btn").style.backgroundColor = "lightgrey"
        document.querySelector("#enc-btn").style.backgroundColor = "darkgrey"
        document.querySelector("#result").style.display = "none"
        document.querySelector("#arrow").style.rotate = "630deg"
    })
    document.querySelector("#enc-btn").addEventListener("click",function(){
        document.querySelector("#encryption").style.display = "block"
        document.querySelector("#decryption").style.display = "none"
        document.querySelector("#enc-btn").style.backgroundColor = "lightgrey"
        document.querySelector("#dec-btn").style.backgroundColor = "darkgrey"
        document.querySelector("#arrow").style.rotate = "90deg"
        document.querySelector("#result").style.display = "none"
    })

}
btnClicking()
