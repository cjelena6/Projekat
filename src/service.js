const dostupanBudzet = document.querySelector("#dostupan-budzet");


function ispisMesec() {
    let date = new Date();
    dostupanBudzet.innerHTML = `${date.toLocaleString("sh-SP", {
        month: "long",
    })}:`;
}


export { ispisMesec}
