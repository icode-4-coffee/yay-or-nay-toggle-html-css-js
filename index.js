let nay = true;

document.getElementById("toggle").addEventListener("click", () => {
    if (nay) {
        document.getElementById("toggle").classList.remove("nay-toggle");
        document.getElementById("icon-container").classList.remove("nay-icon-container");
        document.getElementById("nay-icon").classList.add("hide");
    
        document.getElementById("toggle").classList.add("yay-toggle");
        document.getElementById("icon-container").classList.add("yay-icon-container");
        document.getElementById("yay-icon").classList.remove("hide");
    } else {
        document.getElementById("toggle").classList.remove("yay-toggle");
        document.getElementById("icon-container").classList.remove("yay-icon-container");
        document.getElementById("yay-icon").classList.add("hide");
    
        document.getElementById("toggle").classList.add("nay-toggle");
        document.getElementById("icon-container").classList.add("nay-icon-container");
        document.getElementById("nay-icon").classList.remove("hide");
    }

    nay = !nay;
});