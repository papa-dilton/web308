if (getCookie("gtaEnabled") == "true") {
    forceAddGTA();
}

function getCookie(name) {
    name += "=";
    const cookieArray = document.cookie.split("; ");
    let toReturn;
    cookieArray.forEach((value) => {
        if (value.indexOf(name) == 0) toReturn = value.substring(name.length);
    });
    return toReturn;
}

function addGTA() {
    if (getCookie("gtaEnabled") == "true") {
        return "GTA already enabled"
    } else {
        forceAddGTA()
        return "GTA added. Run removeGTA() to remove."
    }
}

function forceAddGTA() {
    gtaBut = document.createElement("li");
    gtaBut.innerHTML = '<button class="selector">GTA VI</button>';
    gtaBut.setAttribute('id', 'gtaBut')
    document.querySelector(".but-row ul").append(gtaBut)
    document.querySelector("#gtaBut").addEventListener('click', function () {
        changeDiv("gta6")
    })
    document.cookie = "gtaEnabled=true";
    return "Page ready for GTA. Run 'removeGTA()' to remove.";

}

function removeGTA() {
    document.cookie = "gtaEnabled=false";
    location.reload(false);
    return "cookie for GTA removed.";
}

function changeDiv(toDiv) {
    const hl3 = document.querySelector("#store-item-hl3");
    const mc2 = document.querySelector("#store-item-mc2");
    const madden = document.querySelector("#store-item-madden");
    const portal3 = document.querySelector("#store-item-portal3");
    const gta6 = document.querySelector("#store-item-gta6");
    hl3.style.display = 'none'
    mc2.style.display = 'none'
    madden.style.display = 'none'
    portal3.style.display = 'none'
    gta6.style.display = 'none'
    document.querySelector("#store-item-" + toDiv).style.display = 'contents'
}


// obfuscator - https://www.obfuscator.io/