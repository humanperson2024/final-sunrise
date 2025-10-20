let SunrisingImageType = 0

if (SunrisingImageType === 1) {
    document.getElementById("SunrisingImageTypeBtn").innerHTML = "disc/cover"
}
if (SunrisingImageType === 0) {
    document.getElementById("SunrisingImageTypeBtn").innerHTML = "cover"
}

function ToggleSunrisingImage() {
if (SunrisingImageType === 0) {
    SunrisingImageType = 1
}
if (SunrisingImageType === 1) {
    SunrisingImageType = 0
}
}

if (SunrisingImageType === 0) {
    document.getElementById("SunrisingImageTypeBtn").innerText = "disc"
}