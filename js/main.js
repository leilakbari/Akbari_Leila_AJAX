(() => {

  //variables
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  //Variables AJAX
  // const infoboxesCon = document.querySelector("#infoBoxes");
  const materialsCon = document.querySelector("#materials-con");
  const materialsTemplate = document.querySelector("#material-template");
  // const spinner = document.getElementById('spinner');
  

  //This information needs to be removed then pulled with an AJAX Call using the Fetch API
  //this is the api url https://swiftpixel.com/earbud/api/infoboxes"
  

    //This information needs to be removed then pulled with an AJAX Call using the Fetch API
    //this is the api url https://swiftpixel.com/earbud/api/materials"

  // const materialListData = [
  //   {
  //     heading: "Precision-Crafted Polymers",
  //     description: "Our earbuds are meticulously molded from high-quality plastics, ensuring a blend of elegance, comfort, and resilience that's second to none."
  //   },
  //   {
  //     heading: "Luxurious Silicone Harmony",
  //     description: "Our uniquely engineered ear tips are cocooned in plush silicone, delivering an opulent embrace for your ears, ensuring an unrivaled fit and exquisite audio experience."
  //   },
  //   {
  //     heading: "Rubberized Cables",
  //     description: "Experience the unparalleled freedom of movement with our flexible rubber cables that promise durability without compromise."
  //   },
  //   {
  //     heading: "Enhanced Comfort Sensors",
  //     description: "A touch of magic in the form of built-in microphones and sensors empowers your earbuds to obey your every command, making your audio journey seamless and enchanting."
  //   },
  //   {
  //     heading: "Artistic Mesh Guard",
  //     description: "Shielded by artful mesh screens, our speakers remain untarnished, keeping your listening experience pristine."
  //   }
  // ];


// AJAX Function 1 - Test
// function loadInfoBoxes() {
//   // infoboxesCon.innerHTML = spinner;

//   fetch("https://swiftpixel.com/earbud/api/infoboxes")
//     .then(response => response.json())
//     .then(infoBoxes => {
//       console.log(infoBoxes);

//       // let ul = document.createElement("ul");

//       // infoboxes.results.forEach(result => {
//         infoBoxes.forEach((infoBox, index) => {

//         // const li = document.createElement("li");
//         let selected = document.querySelector (`#hotspot-${index+1}`);

//         // const imageElement = document.createElement("img");
//         // imageElement.src = feature.picture.thumbnail;

//         const imgElement = document.createElement('img');
//          // img.src = result.image.thumbnail;
//         // img.src = feature.picture.thumbnail;
//         imgElement.src = infoBox.picture.thumbnail;

//         const titleElement = document.createElement('h2');
//         // h2.textContent = result.title;
//         // h2.textContent = feature.heading;
//         titleElement.textContent = infoBox.heading;

//         const textElement = document.createElement('p');
//         // p.textContent = result.text;
//         // p.textContent = feature.description;
//         textElement.textContent = infoBox.description;

//         // li.appendChild(imageElement);
//         selected.appendChild(imgElement);
//         // li.appendChild(titleElement);
//         selected.appendChild(titleElement);
//         // li.appendChild(textElement);
//         selected.appendChild(textElement);
//         // ul.appendChild(li);
//       })

//       .catch(error => console.error(error));

//       // infoboxesCon.innerHTML = "";
//       // infoboxesCon.appendChild(ul);
//     })
//     // .catch(error => console.error(error));
//   }
// //  getData();
// // loadInfoBoxes();


//  Spinner

  // const spinner = `<svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  // viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
  // <path fill="#333" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
  // <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite" /> </path> </svg>`;

  // Spinner Function


 
//functions
function modelLoaded() {
  hotspots.forEach(hotspot => {
    hotspot.style.display = "block";
  });
}

// AJAX function 1

  function loadInfoBoxes() {
    // infoboxesCon.innerHTML = spinner;

    fetch("https://swiftpixel.com/earbud/api/infoboxes")
      .then((response) => response.json())
      .then((infoBoxes) => {
        console.log(infoBoxes);
  
        infoBoxes.forEach((infoBox, index) => {

          let selected = document.querySelector(`#hotspot-${index + 1}`);
  
          const imgElement = document.createElement('img');
          // imgElement.src = infoBox.picture.thumbnail;

          // imgElement.src = `images/${index.thumbnail}`;

          const imagePath = `images/${infoBox.thumbnail}`;

          imgElement.onload = () => {
            // Image loaded successfully
            console.log(`Image loaded successfully: ${imagePath}`);
          };
  
          imgElement.onerror = () => {
            // Image failed to load
            console.error(`Error loading image: ${imagePath}`);
          };
  
          imgElement.src = imagePath;
  
          const titleElement = document.createElement('h2');
          titleElement.textContent = infoBox.heading;
  
          const textElement = document.createElement('p');
          textElement.textContent = infoBox.description;
  
          selected.appendChild(imgElement);
          selected.appendChild(titleElement);
          selected.appendChild(textElement);
        })
      })
      // .catch(error => console.error(error));
      .catch(error => console.error("Error fetching or processing data:", error));
  }

  //AJAX function 2 - Test

  // function loadMaterialList() {
  //   materialsCon.innerHTML = spinner;

  //   fetch("https://swiftpixel.com/earbud/api/materials")
  //     .then(response => response.json())
  //     .then(materialList => {
  //       console.log(materialList);

  //       // let ul = document.createElement("ul");

  //       materialList.forEach(material => {
  //         // const li = document.createElement("li");

  //         const h3 = document.createElement('h3');
  //         h3.textContent = material.heading;

  //         const p = document.createElement('p');
  //         p.textContent = material.description;

  //         li.appendChild(h3);
  //         li.appendChild(p);
  //         // ul.appendChild(li);
  //       });

  //       // materialsCon.innerHTML = "";
  //       // materialsCon.appendChild(ul);
  //     })
  //     // .catch(error => console.error(error));
  // }

  // AJAX Function 2
  function loadMaterialList() {
    fetch("https://swiftpixel.com/earbud/api/materials")
      .then(response => response.json())
      .then(materialListData => {
        materialListData.forEach(material => {
          const clone = materialsTemplate.content.cloneNode(true);
          
          const materialHeading = clone.querySelector(".material-heading");
          if (materialHeading) {
            materialHeading.textContent = material.heading;
          } else {
            console.error("Error: Missing .material-heading in template");
          }
  
          const materialDescription = clone.querySelector(".material-description");
          if (materialDescription) {
            materialDescription.textContent = material.description;
          } else {
            console.error("Error: Missing .material-description in template");
          }
          
          materialsCon.appendChild(clone);
        });
      })
      .catch(error => console.error("Fetch error:", error));
  }


  function showInfoOnMouseOver() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfoOnMouseOut() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  //Event listeners
  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfoOnMouseOver);
    hotspot.addEventListener("mouseleave", hideInfoOnMouseOut);
  });

  // Call the AJAX functions

  // getData();
  loadInfoBoxes();
  loadMaterialList();

})();

