// Lista de semestres y ramos
const data = [
  {
    semestre: "I Semestre",
    ramos: [
      "Lectura comprensiva y expresion escrita",
      "Tecnología de la información y la comunicacion",
      "Salud y bienestar infantil",
      "Educación fisica y salud",
      "Evaluacion inicial diagnostica",
      "Taller de nievalacion y acompañamiento",
      "Fundamentos de la educación parvularia",
      "Educación,cualtura y naturaleza"
    ]
  },
  {
    semestre: "II Semestre",
    ramos: [
      "Introducción a las ciencias sociales",
      "Salud y nutricion infantil",
      "Derechos y sistemas de protección de la infancia",
      "Aprendizaje y sistemas de conocimiento",
      "Ética, relacionalidad y desarrollo humano",
      "Estimulacion temaprana",
      "Fundamentos de la comunicacion humana"
    ]
  },
  {
    semestre: "III Semestre",
    ramos: [
      "Comunicacion en lengua inglesa I",
      "Optativo de formación general I",
      "Aprendizaje, cognición diversidad",
      "Currículum, democracia y transformación social",
      "Bases neurologicas para el aprendizaje",
      "Taller de formación situada: contextualizacion y agenciamiento",
      "Sociedad, cultura y modernidad"
    ]
  },
  {
    semestre: "IV Semestre",
    ramos: [
      "Comunicacion en lengua inglesa II",
      "Gestión y proyectos educativos",
      "Optativo de formación general II",
      "Educación inclusiva",
      "Enfoques curriculares para la educacion parvularia",
      "Lenguaje y pensamiento en la infancia",
      "Creatividad, innovación y proyectos"
    ]
  },
  {
    semestre: "V Semestre",
    ramos: [
      "Mediaciones TIC y ambiente de aprendizaje",
      "Optativo de especialización I",
      "Construccion del pensamiento en ciencias sociales",
      "Evalucion de aprendizajes",
      "Literatura infantil",
      "Construccion del pensamiento en ciencias naturales",
      "Construccion del pensamiento logico-matematico"
    ]
  },
  {
    semestre: "VI Semestre",
    ramos: [
      "Optativo de espelizacion II",
      "Didáctica del lenguaje",
      "Didactica de las ciencias sociales",
      "Juego y aprendizaje infantil",
      "Didáctica de las matemáticas",
      "Didáctica de las ciencias naturales"
    ]
  },
  {
    semestre: "VII Semestre",
    ramos: [
      "Interpretación musical",
      "Motricidad infantil",
      "Artes visuales",
      "Metodologia de la investigacion educativa",
      "Taller de formación situada: acompañamiento reflexivo-critico",
      "Teatro y representación escencia"
    ]
  },
  {
    semestre: "VIII Semestre",
    ramos: [
      "English for teaching children",
      "Optativo de especialización III",
      "Investigación aplicada a la infancia",
      "Corporalidad y movimiento",
      "Didáctica de las artes integradas",
      "Gestión para la educación parvularia"
    ]
  },
  {
    semestre: "IX Semestre",
    ramos: [
      "Optativo de profundización",
      "Seminario de investigación",
      "Didáctica de los lenguajes integrados",
      "Didáctica de las ciencias integradas",
      "Taller de consolidación profesional",
      "Taller de formación situada: desarrollo profesional y aprendizaje servicio"
    ]
  },
  {
    semestre: "X Semestre",
    ramos: [
      "Practica profesional",
      "Seminario de titulo"
    ]
  }
];

// Renderizar malla
const grid = document.getElementById("grid");

data.forEach(({ semestre, ramos }, index) => {
  const semDiv = document.createElement("div");
  semDiv.className = "semester";

  const title = document.createElement("h2");
  title.textContent = semestre;
  semDiv.appendChild(title);

  ramos.forEach((ramo, idx) => {
    const div = document.createElement("div");
    div.className = "subject";
    div.textContent = ramo;
    div.dataset.id = `sem${index + 1}_ramo${idx + 1}`;
    semDiv.appendChild(div);
  });

  grid.appendChild(semDiv);
});

// Comportamiento al hacer clic
document.querySelectorAll(".subject").forEach(el => {
  el.addEventListener("click", () => {
    if (el.classList.contains("locked")) return;
    el.classList.toggle("approved");
  });
});
