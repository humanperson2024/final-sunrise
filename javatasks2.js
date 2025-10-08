let countdown = 10

setTimeout(SubCountDown, 1000);


function SubCountDown() {
    let result = countdown -= 1
    document.getElementById("demo2").innerHTML = ""
    document.getElementById("demo2").innerText = countdown
    console.log(countdown)
    setTimeout(SubCountDown, 1000);
}