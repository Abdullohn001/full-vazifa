const projects = [
  {
    title: "1- vazifa",
    githubLink: "https://github.com/Abdullohn001/vazifa",
    vercelLink: "akademnashir-weld.vercel.app",
  },
  {
    title: "2- vazifa",
    githubLink: "https://github.com/Abdullohn001/3--dars",
    vercelLink: "ansormed-xi.vercel.app",
  },
];

const template = document.querySelector("template");
const worksList = document.querySelector(".works__list");

projects.forEach((project) => {
  const clone = template.content.cloneNode(true);

  const title = clone.querySelector(".works__list__title");
  const linkGithub = clone.querySelector(".works__list__link__github");
  const linkVercel = clone.querySelector(".works__list__link__vercel");

  title.textContent = project.title;
  linkGithub.href = project.githubLink;
  linkVercel.href = project.vercelLink;

  worksList.appendChild(clone);
});
