/*================ toggle icon navbar ================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*================ scroll sections active link ================*/

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  /*================ sticky navbar ================*/

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  /*================ remove toggle icon navbar when click navbar link (scroll) ================*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*================ sticky reveal ================*/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*================ typed js ================*/
const typed = new Typed('.multiple-text', {
    strings: ['Analista de Sistemas', 'Dev Frontend em Formação', 'Analista de Suporte de TI', 'Esportista nas horas vagas ;)'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


/*================ input number mask ================*/
const tel = document.getElementById('number') // Seletor do campo de telefone

tel.addEventListener('keypress', (e) => mascaraTelefone(e.target.value)) // Dispara quando digitado no campo
tel.addEventListener('change', (e) => mascaraTelefone(e.target.value)) // Dispara quando autocompletado o campo

const mascaraTelefone = (valor) => {
    valor = valor.replace(/\D/g, "")
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
    tel.value = valor // Insere o(s) valor(es) no campo
}

/*================ settings forms used formsubmit.io ================*/
// class FormSubmit {
//   constructor(settings) {
//     this.settings = settings;
//     this.form = document.querySelector(settings.form);
//     this.formbutton = document.querySelector(settings.button);
//     if (this.form) {
//       this.url = this.form.getAttribut("action");
//     }
//     this.sendForm = this.sendForm.bind(this);
//   }

//   displaySuccess() {
//     this.form,innerHTML = this.settings.success;
//   }

//   displayError() {
//     this.form,innerHTML = this.settings.error;
//   }

//   getFormObject() {
//     const formObject = {};
//     const fields = this.form.querySelectorAll("[name]");
//     fields.forEach((field) => {
//       formObject[field.getAttribute("name")] = field.value;
//     });
//     return formObject;
//   }

//   onSubmission(event) {
//     event.preventDefault();
//     event.target.disabled = true;
//     event.target.innerText = "Enviando...";
//   }

//  async sendForm (event) {
//   try {
//     this.onSubmission(event);
//     await fetch(this.url, {
//       method: "POST",
//       headers: {
//         "Content-Typed": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify(this.gerFormObject()),
//     });
//     this.displaySuccess();
//   } catch (error) {
//     this.displayError();
//     throw new Error(error);
//   }
//  }  

//   init() {
//     if (this.form) this.formbutton.addEventListener("click", this.sendForm);
//     return this;
//   } 
// }

// const FormSubmit = new FormSubmit({
//   form: "[data-form]",
//   button: "[data-button]",
//   success: "<h1 class='success'>Seu e-mail foi enviado com sucesso! Em breve irei entrar em contato.</h1>",
//   error: "<h1 class='error'>Não foi possível enviar sua mensagem! Tente novamente mais tarde ou entre em contato através de outra rede.</h1>",
// });;
// FormSubmit.init();

