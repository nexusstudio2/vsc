const menuData = {
  entradas: [
    {
      name: "Guacamole de la casa",
      price: "$120",
      description: "Aguacate fresco, pico de gallo, chile serrano y totopos crujientes."
    },
    {
      name: "Queso flameado",
      price: "$145",
      description: "Queso asadero fundido con chorizo norteño y tortillas de harina."
    },
    {
      name: "Sopa de tortilla",
      price: "$105",
      description: "Caldo de jitomate, tortilla frita, aguacate, crema y chile pasilla."
    },
    {
      name: "Elote tatemado",
      price: "$95",
      description: "Elote a las brasas con mayonesa de chile, queso y limon."
    }
  ],
  fuertes: [
    {
      name: "Cabrito al pastor",
      price: "$390",
      description: "Receta tradicional con frijoles charros, cebollitas y salsa roja."
    },
    {
      name: "Arrachera norteña",
      price: "$295",
      description: "Corte jugoso con papas, chiles toreados y tortillas recien hechas."
    },
    {
      name: "Enchiladas de chile colorado",
      price: "$165",
      description: "Rellenas de queso, bañadas en salsa de chile seco y crema."
    },
    {
      name: "Tampiqueña Sabor Norteño",
      price: "$320",
      description: "Carne asada, enchilada, arroz rojo, guacamole y frijoles."
    }
  ],
  bebidas: [
    {
      name: "Margarita de tamarindo",
      price: "$145",
      description: "Tequila blanco, tamarindo natural, limon y escarcha de chile."
    },
    {
      name: "Agua de jamaica",
      price: "$55",
      description: "Infusion fria de jamaica con toque de canela."
    },
    {
      name: "Mezcal joven",
      price: "$130",
      description: "Servido con naranja, sal de gusano y chile en polvo."
    },
    {
      name: "Cafe de olla",
      price: "$65",
      description: "Cafe caliente con piloncillo, canela y clavo."
    }
  ],
  postres: [
    {
      name: "Pan de elote",
      price: "$95",
      description: "Servido tibio con crema dulce y ralladura de naranja."
    },
    {
      name: "Flan de cajeta",
      price: "$90",
      description: "Flan cremoso con cajeta artesanal y nuez tostada."
    },
    {
      name: "Churros con chocolate",
      price: "$105",
      description: "Churros dorados con azucar y salsa de chocolate espeso."
    },
    {
      name: "Nieve de limon",
      price: "$75",
      description: "Postre fresco con sal de chile y hojas de hierbabuena."
    }
  ]
};

const topbar = document.getElementById("topbar");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const menuList = document.getElementById("menuList");
const tabButtons = document.querySelectorAll(".tab-btn");
const reservationForm = document.getElementById("reservationForm");
const formMessage = document.getElementById("formMessage");
const dateInput = document.getElementById("date");

function renderMenu(category) {
  menuList.innerHTML = menuData[category].map((item) => `
    <article class="menu-item">
      <h3>${item.name}</h3>
      <span class="menu-price">${item.price}</span>
      <p>${item.description}</p>
    </article>
  `).join("");
}

function updateHeader() {
  if (window.scrollY > 20) {
    topbar.classList.add("scrolled");
  } else {
    topbar.classList.remove("scrolled");
  }
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((tab) => tab.classList.remove("active"));
    button.classList.add("active");
    renderMenu(button.dataset.category);
  });
});

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen.toString());
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

reservationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const people = document.getElementById("people").value;
  const date = dateInput.value;
  const time = document.getElementById("time").value;

  formMessage.textContent = `Gracias, ${name}. Recibimos tu solicitud para ${people} el ${date} a las ${time}.`;
  reservationForm.reset();
  dateInput.min = new Date().toISOString().split("T")[0];
});

window.addEventListener("scroll", updateHeader);

dateInput.min = new Date().toISOString().split("T")[0];
renderMenu("entradas");
updateHeader();