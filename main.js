// needed this to get the modal.hide to make my modal go away after button pressed
const myModal = new bootstrap.Modal(document.getElementById('exampleModal'))

// Student data //
const students = [
  {
    id: 1,
    name: "Harry Potter",
    house: "Gryffindor",
    imageUrl: "https://heroprop.com/wp-content/uploads/2021/02/Harry-Potter-The-Chamber-of-Secrets-Harrys-Daniel-Radcliffe-Broken-Lens-Movie-Prop.jpg",
  },
  {
    id: 2,
    name: "Cho Chang",
    house: "Ravenclaw",
    imageUrl: "https://images.ctfassets.net/usf1vwtuqyxm/2etTX5DhYmujFyyePBZlxE/26d0fe01bfc74016de6a893b34faab71/cho-chang_3_1800x1248.png",
  },
  {
    id: 3,
    name: "Cedric Diggory",
    house: "Hufflepuff",
    imageUrl: "https://images.ctfassets.net/usf1vwtuqyxm/6tVgu5UdC8WKo4AYqCkSWY/476a2ecc9537000651e2bb729588ec49/CedricDiggory_WB_F4_CedricDiggoryInTriwizardMaze_Still_080615_Land.jpg?fm=jpg&q=70&w=2560",
  },
  {
    id: 4,
    name: "Draco Malfoy",
    house: "Slytherin",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/16/Draco_Mal.JPG",
  }
];

// Utility function //
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
  };

// sort function //
const sortFunction = () => {
  const house = Math.floor(Math.random() * 4) 
  const houseId = ["Gryffindor", "Ravenclaw", "Hufflepuff", "Slytherin"];
  const nameInput = document.querySelector('#name');
  console.log(houseId[house]);

  const newStudent = {
    
    id: students.length +1,
    name: nameInput.value,
    house: houseId[house],
    imageUrl: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${nameInput.value}`,
  
  }
  students.push(newStudent);
  myModal.hide()
  nameInput.value = ""
};

// sort button for my form //
document.querySelector("#sortBtn").addEventListener("click", (e) => {
  sortFunction()
  cardsOnDom(students);
  filterButton();
});

// Filter student buttons //
const filterButton = () => {
  domString = `
  <div class="d-flex flex-wrap justify-content-between my-3">
    <button class="btn btn-secondary btn-lg buttonRow" id="gryffindor">Gryffindor</button>
    <button class="btn btn-secondary btn-lg buttonRow" id="ravenclaw">Ravenclaw</button>
    <button class="btn btn-secondary btn-lg buttonRow" id="hufflepuff">Hufflepuff</button>
    <button class="btn btn-secondary btn-lg buttonRow" id="slytherin">Slytherin</button>
    <button class="btn btn-secondary btn-lg buttonRow" id="all">All Students</button></button>
  </div>
  `;
renderToDom('#filterBtns', domString)
};

// Cards //
const cardsOnDom = (students) => {
  let domString = "";
  students.map((student) => {

    domString += `<div class="card" ${student.house}" style="width: 18rem;">
    <img src="${student.imageUrl}" class="card-img-top" alt=${student.name}>
    <div class="card-body"> First Years
      <h5 class="card-title">${student.name}</h5>
      <p class="student-house">${student.house}</p>
      <button class="btn btn-primary" id="expel--${student.id}">Expel</button>
    </div>
    </div>`;
  })
  renderToDom('#studentCards', domString)
};


const showGryffindorButton = document.querySelector("#gryffindor");
const showRavenclawButton = document.querySelector("#ravenclaw");
const showHufflepuffButton = document.querySelector("#hufflepuff");
const showSlytherinButton = document.querySelector("#slytherin");
const showAllButton = document.querySelector("#all");


document.querySelector('#filterBtns').addEventListener("click", (e) => {
  if (e.target.id.includes("gryffindor")) {
    const gryff = students.filter((students) => students.house === "Gryffindor");
    cardsOnDom(gryff);
  } else if (e.target.id.includes("ravenclaw")) {
    const raven = students.filter((students) => students.house === "Ravenclaw");
    cardsOnDom(raven);
  } else if (e.target.id.includes("hufflepuff")) {
    const huffle = students.filter((students) => students.house === "Hufflepuff");
    cardsOnDom(huffle);
  } else if (e.target.id.includes("slytherin")) {
    const slyth = students.filter((students) => students.house === "Slytherin");
    cardsOnDom(slyth);
  } else if (e.target.id.includes("all")) {
    cardsOnDom(students);
  }
  
});


// Expelled //

function renderExpelled() {
  let domString = "";
  expelled.map((expelledStudents) => {

    domString += `<div class="expelled-cards${expelledStudents.house}" style="width: 18rem;">
    <img src="${expelledStudents.imageUrl}" class="card-img-top" alt=${expelledStudents.name}>
    <div class="card-body">
      <h5 class="card-title">${expelledStudents.name}</h5>
      <p class="student-house">${expelledStudents.house}</p>
      <button class="btn btn-primary" id="expel--${expelledStudents.id}">Expel</button>
    </div>
    </div>`;
  })
  renderToDom('#expelCards', domString)
  
};

document.querySelector('#expelCards').addEventListener("click", (e) => {
  if (e.target.id.includes("expel")) {
    const[, id] = e.target.id.split("--");
    const index = students.findIndex((student) => student.id === Number(id));

    expelledStudents.push(students[index]);

    students.splice(index, 1);
    cardsOnDom(students);
    gone();
  }
})
