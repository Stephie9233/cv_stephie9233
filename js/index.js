window.addEventListener("DOMContentLoaded", () => {
    if(localStorage.length > 0) {
        window.location = "home.html";
    }
})

const nav = document.querySelector(".body__header--nav")

/* Gestion des statistiques*/

let visitors = [];

/*Gestion du rôle*/
let role;
/* On récupère les inputs*/
const recruiter = document.querySelector("#recruiter");
const visitor = document.querySelector("#visitor");

function getRule() {
    if(recruiter.checked) {return role = "recruteur";}
    role = "visiteur";
    return role;
};

/* Gestion de la source*/
let from;

/* On récupère les inputs*/
const socialNetworks = document.querySelector("#socialNetwork");
const application = document.querySelector("#application");
const other = document.querySelector("#other");
function getSource() {
    if(socialNetworks.checked) {return from = "réseaux sociaux";}
    else if(application.checked) {return from = "candidature";}
    from = "autre";
    return from;
}
const btn = document.querySelector("#btn")

document.addEventListener('DOMContentLoaded', () => {
    nav.style.visibility = "hidden"
})

btn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('formulaire soumis');
    getRule();
    console.log(role);
    getSource();
    console.log(from);
    localStorage.setItem("statistiques", "ok");
    let user = {role: `${role}`, from: `${from}`}
    console.log(user);
    visitors.push(user);
    window.location = "home.html"   
})

