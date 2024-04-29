const projects = [
  {
    title: "1- vazifa",
    githubLink: "https://github.com/Abdullohn001/vazifa",
    vercelLink: "https://vazifa-opal.vercel.app/",
  },
  {
    title: "2- vazifa",
    githubLink: "https://github.com/Abdullohn001/3--dars",
    vercelLink: "https://3-dars-wheat.vercel.app/",
  },
  {
    title: "bg-video",
    githubLink: "https://bg-video-two.vercel.app/",
    vercelLink: "https://bg-video-two.vercel.app/",
  },
  {
    title: "Pixer",
    githubLink: "https://github.com/Abdullohn001/pixer",
    vercelLink: "https://pixer-nu-olive.vercel.app/",
  },
  {
    title: "Costaway",
    githubLink: "https://github.com/Abdullohn001/Castaway",
    vercelLink: "https://castaway-4cy9.vercel.app/",
  },
  {
    title: "Animation",
    githubLink: "https://github.com/Abdullohn001/Animation",
    vercelLink: "https://animation-xg1t.vercel.app/",
  },
  {
    title: "Createx",
    githubLink: "https://github.com/Abdullohn001/Createx",
    vercelLink: "https://createx-eosin.vercel.app/",
  },
  {
    title: "Crowdfunding",
    githubLink: "https://github.com/Abdullohn001/crowdfunding",
    vercelLink: "https://crowdfunding-eta-nine.vercel.app/",
  },
  {
    title: "MyTeam",
    githubLink: "https://github.com/Abdullohn001/my-team",
    vercelLink: "https://my-team-flame.vercel.app/",
  },
  {
    title: "JacaScript_Amaliyot",
    githubLink: "https://github.com/Abdullohn001/javascript_amaliyot",
    vercelLink: "https://javascript-amaliyot.vercel.app/",
  },
  {
    title: "3-dars masalalari",
    githubLink: "https://github.com/Abdullohn001/masalalar",
    vercelLink: "https://masalalar-ruby.vercel.app/",
  },
  {
    title: "4-dars masalalari",
    githubLink: "https://github.com/Abdullohn001/4--dars",
    vercelLink: "https://4-dars-rouge.vercel.app/",
  },
  {
    title: "5 - dars masalari",
    githubLink: "https://github.com/Abdullohn001/5---dars",
    vercelLink: "https://5-dars-nine.vercel.app/",
  },
  {
    title: "6-dars Figma",
    githubLink: "https://github.com/Abdullohn001/6--dars-FIGMA",
    vercelLink: "https://figma-wine-omega.vercel.app/",
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
