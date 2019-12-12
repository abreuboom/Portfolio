function Project(name, description, thumbnail, link, css) {
  this.name = name;
  this.description = description;
  this.thumbnail = thumbnail;
  this.link = link;
  this.css = css;
}

var projects = [
  new Project(
    "SignAR",
    "An augmented-reality sign language translator for iOS",
    "/assets/signar@2x.png",
    "https://github.com/abreuboom/signar", {
      backgroundImage: "linear-gradient(45deg, #36AAFF, #066AB3)",
      color: "white"
    }
  ),

  new Project(
    "Instagram",
    "Software Engineering Intern on the IGTV team",
    "/assets/igtv@2x.png",
    "", {
      // backgroundColor: "#DA5274"
      backgroundColor: "white",
    }
  ),

  new Project(
    "Facebook",
    "Software Engineering Intern at Facebook working on News Feed",
    "/assets/fb@2x.png",
    "", {
      // backgroundColor: "#DA5274"
      backgroundColor: "#1778F2",
      color: "white"
    }
  ),

  // new Project(
  //   "bARky",
  //   "Your personal pet finding assistant. Classify dog breeds and find more like it to adopt near you",
  //   "/assets/barky.png",
  //   "https://github.com/abreuboom/barky",

  // ),

  // new Project(
  //   "2019 Dance Concept Video",
  //   "Directed & produced for UPrising Dance Crew",
  //   "/assets/girlfriend.png",
  //   "https://youtu.be/wd7AX1eC3-o"
  // )
];

export function GetProjects() {
  return projects;
}