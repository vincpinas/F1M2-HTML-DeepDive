function setupFotoslider() {
    let volgendeKnop = document.getElementById('volgende-btn')
    let vorigeKnop = document.getElementById('vorige-btn')
    let fotonummer, fotobreedte, aantalfotos, fotoslider

    fotonummer = 0;
    fotobreedte = 300;

    fotoslider = document.getElementById('fotoslider')
    aantalfotos = fotoslider.children.length;

    volgendeKnop.addEventListener("click", () => {
        fotonummer += 1
        if (fotonummer === aantalfotos) {
            fotonummer = 0;
        }

        let afstandNaarLinks = -1 * (fotonummer * fotobreedte)

        fotoslider.style.left = `${afstandNaarLinks}px`;
    })

    vorigeKnop.addEventListener("click", () => {
        fotonummer -= 1
        if (fotonummer < 0) {
            fotonummer = aantalfotos - 1;
        }

        let afstandNaarLinks = -1 * (fotonummer * fotobreedte)

        fotoslider.style.left = `${afstandNaarLinks}px`;
    })
}


window.addEventListener('DOMContentLoaded', setupFotoslider)