let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

// script.js

const texts = {
    es: {
        name: "Arnau Gimenez Duran",
        title: "Ingeniero de Sistemas de Telecomunicaciones - Estudiante",
        aboutTitle: "Sobre Mí",
        aboutText1: "<span>Hola! Soy Arnau.</span> Soy un estudiante de ingenieria en sistemas de telecomunicaciones y software con una sólida experiencia en el diseño, desarrollo y mantenimiento de sistemas críticos. Mi enfoque se centra en integrar tecnologías de vanguardia para resolver problemas complejos y mejorar la eficiencia operativa.",
        aboutText2: "Mis habilidades abarcan desde el diseño de redes de comunicaciones hasta el desarrollo de software robusto y escalable. Tengo experiencia en múltiples lenguajes de programación como Python, Java, C++ y tecnologías web como HTML, CSS y JavaScript.",
        aboutText3: "Me apasiona innovar y aplicar las últimas tendencias tecnológicas para ofrecer soluciones que optimicen el rendimiento y la seguridad de las infraestructuras de comunicaciones y software.",
        personalInfoTitle: "Datos Personales",
        role: "ESTUDIANTE",
        interestsTitle: "Intereses",
        interestTravel: "VIAJAR",
        interestSport: "DEPORTE",
        interestBooks: "LIBROS",
        skillsTitle: "Skills",
        technicalSkillsTitle: "Technical Skills",
        professionalSkillsTitle: "Professional Skills",
        portfolioTitle: "PORTFOLIO",
        contactTitle: "CONTACTO",
        contactName: "Tú Nombre",
        contactPhone: "Número telefónico",
        contactEmail: "Dirección de correo",
        contactSubject: "Tema",
        contactMessage: "Mensaje"
    },
    en: {
        name: "Arnau Gimenez Duran",
        title: "Telecommunications Systems Engineer - Student",
        aboutTitle: "About Me",
        aboutText1: "<span>Hello! I'm Arnau.</span> I am a telecommunications and software systems engineering student with a solid background in the design, development, and maintenance of critical systems. My focus is on integrating cutting-edge technologies to solve complex problems and improve operational efficiency.",
        aboutText2: "My skills range from designing communication networks to developing robust and scalable software. I have experience in multiple programming languages such as Python, Java, C++, and web technologies like HTML, CSS, and JavaScript.",
        aboutText3: "I am passionate about innovating and applying the latest technological trends to provide solutions that optimize the performance and security of communication and software infrastructures.",
        personalInfoTitle: "Personal Information",
        role: "STUDENT",
        interestsTitle: "Interests",
        interestTravel: "TRAVEL",
        interestSport: "SPORT",
        interestBooks: "BOOKS",
        skillsTitle: "Skills",
        technicalSkillsTitle: "Technical Skills",
        professionalSkillsTitle: "Professional Skills",
        portfolioTitle: "PORTFOLIO",
        contactTitle: "CONTACT",
        contactName: "Your Name",
        contactPhone: "Phone Number",
        contactEmail: "Email Address",
        contactSubject: "Subject",
        contactMessage: "Message"
    }
};

function changeLanguage(lang) {
    document.getElementById('name').innerHTML = texts[lang].name;
    document.getElementById('title').innerHTML = texts[lang].title;
    document.getElementById('aboutTitle').innerHTML = texts[lang].aboutTitle;
    document.getElementById('aboutText1').innerHTML = texts[lang].aboutText1;
    document.getElementById('aboutText2').innerHTML = texts[lang].aboutText2;
    document.getElementById('aboutText3').innerHTML = texts[lang].aboutText3;
    document.getElementById('personalInfoTitle').innerHTML = texts[lang].personalInfoTitle;
    document.getElementById('role').innerHTML = texts[lang].role;
    document.getElementById('interestsTitle').innerHTML = texts[lang].interestsTitle;
    document.getElementById('interestTravel').innerHTML = texts[lang].interestTravel;
    document.getElementById('interestSport').innerHTML = texts[lang].interestSport;
    document.getElementById('interestBooks').innerHTML = texts[lang].interestBooks;
    document.getElementById('skillsTitle').innerHTML = texts[lang].skillsTitle;
    document.getElementById('technicalSkillsTitle').innerHTML = texts[lang].technicalSkillsTitle;
    document.getElementById('professionalSkillsTitle').innerHTML = texts[lang].professionalSkillsTitle;
    document.getElementById('portfolioTitle').innerHTML = texts[lang].portfolioTitle;
    document.getElementById('contactTitle').innerHTML = texts[lang].contactTitle;
    document.getElementById('contactName').placeholder = texts[lang].contactName;
    document.getElementById('contactPhone').placeholder = texts[lang].contactPhone;
    document.getElementById('contactEmail').placeholder = texts[lang].contactEmail;
    document.getElementById('contactSubject').placeholder = texts[lang].contactSubject;
    document.getElementById('contactMessage').placeholder = texts[lang].contactMessage;
}
