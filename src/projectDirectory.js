function Project(name, description, thumbnail, link) {
  this.name = name;
  this.description = description;
  this.thumbnail = thumbnail;
  this.link = link;
}

var projects = [
  new Project(
    "SignAR",
    "An augmented-reality sign language translator for iOS",
    "/assets/signar.png",
    "https://github.com/abreuboom/signar"
  ),

  new Project(
    "bARky",
    "Your personal pet finding assistant. Classify dog breeds and find more like it to adopt near you",
    "/assets/barky.png",
    "https://github.com/abreuboom/barky"
  ),

  new Project(
    "2019 Dance Concept Video",
    "Directed & produced for UPrising Dance Crew",
    "/assets/girlfriend.png",
    "https://youtu.be/wd7AX1eC3-o"
  )
];

export function GetProjects() {
  return projects;
}
