let filterToggle =true;
// Student data go here //
// Need to finish filling these out //
const students = [
  {
    id: 1,
    name: "Harry Potter",
    hobby: "Breaking my glasses",
    house: "Gryffindor",
    imageUrl: "https://heroprop.com/wp-content/uploads/2021/02/Harry-Potter-The-Chamber-of-Secrets-Harrys-Daniel-Radcliffe-Broken-Lens-Movie-Prop.jpg",
  },
  {
    id: 2,
    name: "Cho Chang",
    hobby: "Helping the D.A.",
    house: "Ravenclaw",
    imageUrl: "https://static.wikia.nocookie.net/warner-bros-entertainment/images/6/6b/A9B99E2A-F63B-401D-A7DC-D02B520D2096.webp/revision/latest?cb=20210730031843",
  },
  {
    id: 3,
    name: "Cedric Diggory",
    hobby: "Hanging out in graveyards",
    house: "Hufflepuff",
    imageUrl: "https://static.wikia.nocookie.net/harrypotter/images/9/90/Cedric_Diggory_Profile.png/revision/latest?cb=20161123045136",
  },
  {
    id: 4,
    name: "Vincent Crabbe",
    hobby: "Eating cake",
    house: "Slytherin",
    imageUrl: "https://static.wikia.nocookie.net/harrypotter/images/b/ba/Vincent_Crabbe.jpg/revision/latest?cb=20091224183746",
  }
];

// Utility function //
renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
  };

// sort function //

// Filter student buttons //
const filterBtn = () => {
  domString = `
  <div class="d-flex flex-wrap justify-content-between my-3">
    <button class="btn btn-secondary btn-lg buttonRow" id="gryfiyndor">Gryffindor</button>
    <button class="btn btn-secondary btn-lg buttonRow" id="ravenclaw">Ravenclaw</button>
    <button class="btn btn-secondary btn-lg buttonRow" id="huffkepuff">Hufflepuff</button>
    <button class="btn btn-secondary btn-lg buttonRow" id="slytherin">Slytherin</button>
    <button class="btn btn-secondary btn-lg buttonRow" id="expelled">Expelled</button>
    <button class="btn btn-secondary btn-lg buttonRow" id="">All Students</button></button>
  </div>
  `;
renderToDom('#filterBtn', domString)
};

// Cards //
const cardOnDom = (students) => {
  let domString = "";
  students.map(student => {

    domString += `<div class="card" style="width: 18rem;">
    <img src="${student.imageUrl}" class="card-img-top" alt=${student.name}>
    <div class="card-body">
      <h5 class="card-title">${student.name}</h5>
      <p class="hobby">${student.specialSkill}</p>
      <p class="type">${student.type}</p>
      <button class="btn btn-primary" id="expel--${student.id}">Delete</button>
    </div>
    </div>`;
  })
  renderToDom('#studentCards', domString)
};
