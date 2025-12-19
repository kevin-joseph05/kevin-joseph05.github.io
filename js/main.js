const projects = [
  {
    title: "NBA Fantasy Analytics",
    desc: "Player evaluation using Python & SQL",
    link: "https://github.com/..."
  }
];

const container = document.getElementById("projects");

projects.forEach(p => {
  const div = document.createElement("div");
  div.innerHTML = `<h3>${p.title}</h3><p>${p.desc}</p>`;
  container.appendChild(div);
});

