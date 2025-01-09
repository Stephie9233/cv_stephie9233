/* On récupère le tableau des formations*/
import formations from "../datas/formations.js";

console.log(formations);

/* On récupère le container*/
const container = document.querySelector(".body__main--ctn");

function displayStudies(el) {
    const ctn = document.createElement("article");
    ctn.classList.add("body__main--ctn-formation");
    const headFormation = document.createElement("article");
    headFormation.classList.add("body__main--ctn-formation-head");
    const imgFormation = document.createElement("img");
    imgFormation.classList.add("body__main--ctn-formation-head-img");
    imgFormation.setAttribute("src", `assets/img/formations/${el.img}`);
    imgFormation.setAttribute("alt", `logo ${el.school}`);
    headFormation.appendChild(imgFormation);
    const headDetails = document.createElement("article");
    headDetails.classList.add("body__main--ctn-formation-head-details");
    const title = document.createElement("h2");
    title.classList.add("body__main--ctn-formation-head-details-title");
    title.textContent = `${el.title}`;
    headDetails.appendChild(title);
    const session = document.createElement("h3");
    session.classList.add("body__main--ctn-formation-head-details-subtitle");
    session.textContent = `${el.session}`;
    headDetails.appendChild(session);
    const more = document.createElement("p");
    more.classList.add("body__main--ctn-formation-head-details-more");
    more.textContent = `${el.duration}`;
    headDetails.appendChild(more);
    headFormation.appendChild(headDetails)
    ctn.appendChild(headFormation);
    const languages = document.createElement("article");
    languages.classList.add("body__main--ctn-formation-languages");
    for(const language of el.languages) {
        const logoCtn = document.createElement("div");
        logoCtn.classList.add("body__main--ctn-formation-languages-logo");
        const logo = document.createElement("img");
        logo.setAttribute("src", `assets/img/formations/${language.img}`);
        logo.setAttribute("alt", `logo de ${language.name}`)
        logoCtn.appendChild(logo)
        const name = document.createElement("p");
        name.classList.add("body__main--ctn-formation-languages-logo-txt");
        name.textContent = `${language.name}`;
        logoCtn.appendChild(name);
        languages.appendChild(logoCtn);
        ctn.appendChild(languages);
    }
    const program = document.createElement("a");
    program.setAttribute("href", `assets/docs/${el.program}`);
    program.setAttribute("target", "_blank")
    program.classList.add("body__main--ctn-formation-more-link");
    program.textContent = "Programme";
    ctn.appendChild(program);
    container.appendChild(ctn);
}

for(const formation of formations) {
    displayStudies(formation)
}
