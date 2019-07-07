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
  )
];

export function GetProjects() {
  return projects;
}
