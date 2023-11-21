(() => {

  //variables
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  //Variables AJAX
  const infoboxesCon = document.querySelector("#infoBoxes");
  const materialsCon = document.querySelector("#materials-con");

  //This information needs to be removed then pulled with an AJAX Call using the Fetch API
  //this is the api url https://swiftpixel.com/earbud/api/infoboxes"

  // const infoBoxes = [
  //   {
  //     title: 'Noise-cancelling microphones',
  //     text: 'Noise-cancelling microphones and a rear copper shield are optimally placed to quickly detect outside noises, working together to counter noise before it disturbs your experience.',
  //     image: 'images/ear-piece.jpg'
  //   },
  //   {
  //     title: 'Comfortable fit',
  //     text: 'Three pairs of ultra comfortable silicone tips are included. The tips create an acoustic seal that blocks outside audio and secures the earbuds in place.',
  //     image: 'images/ear-piece.jpg'
  //   },
  //   {
  //     title: '360 AUDIO',
  //     text: '360 Audio places sound all around you, while Dolby Head Tracking™ technology delivers an incredible three-dimensional listening experience.',
  //     image: 'images/ear-piece.jpg'
  //   },
  //   {
  //     title: 'Ultra Fast Charging',
  //     text: 'Charge your earbuds in 30 minutes or less with our hyper charging technology.',
  //     image: 'images/ear-piece.jpg'
  //   },
  // ];
  


  // Spinner
  // const spinner = `<svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  // viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
  // <path fill="#333" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
  // <animateTransform
  // attributeName="transform"
  // attributeType="XML"
  // type="rotate"
  // dur="1s"
  // from="0 50 50"
  // to="360 50 50"
  // repeatCount="indefinite" />
  // </path>
  // </svg>`;

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
//   function getData() {

//     infoboxesCon.innerHTML = spinner;

//     fetch("https://swiftpixel.com/earbud/api/infoboxes")
//     .then(response => response.json())
//     .then(infoboxes => {
//       console.log(infoboxes);

//       let ul = document.createElement("ul");
      
//       infoboxes.results.forEach(result => {
       
//         const li = document.createElement("li");

//         const img = document.createElement("img");
//         img.src = result.picture.thumbnail;

//         const h3 = document.createElement("h3");
//         h3.textContent = `${result.name.first} ${result.name.last}`;

//         const p = document.createElement("p");
//         p.textContent = result.email;

//         li.appendChild(img);
//         li.appendChild(h3);
//         li.appendChild(p);
//         ul.appendChild(li);
//     });

//     infoboxesCon.innerHTML = "";
//     infoboxesCon.appendChild(ul);   

//     })
//     .catch(error => console.error(error)); //catch and report any errors
//   }

//   getData();

// })();

  //functions
  function modelLoaded() {
    hotspots.forEach(hotspot => {
      hotspot.style.display = "block";
    });
  }

// AJAX Function 1
function loadInfoBoxes() {
  // infoboxesCon.innerHTML = spinner;

  fetch("https://swiftpixel.com/earbud/api/infoboxes")
    .then(response => response.json())
    .then(infoBoxes => {
      console.log(infoBoxes);

      // let ul = document.createElement("ul");

      // infoboxes.results.forEach(result => {
        infoBoxes.forEach((infoBox, index) => {

        // const li = document.createElement("li");
        let selected = document.querySelector (`#hotspot-${index+1}`);

        // const imageElement = document.createElement("img");
        // imageElement.src = feature.picture.thumbnail;

        const imgElement = document.createElement('img');
         // img.src = result.image.thumbnail;
        // img.src = feature.picture.thumbnail;
        imgElement.src = infoBox.picture.thumbnail;

        const titleElement = document.createElement('h2');
        // h2.textContent = result.title;
        // h2.textContent = feature.heading;
        titleElement.textContent = infoBox.heading;

        const textElement = document.createElement('p');
        // p.textContent = result.text;
        // p.textContent = feature.description;
        textElement.textContent = infoBox.description;

        // li.appendChild(imageElement);
        selected.appendChild(imgElement);
        // li.appendChild(titleElement);
        selected.appendChild(titleElement);
        // li.appendChild(textElement);
        selected.appendChild(textElement);
        // ul.appendChild(li);
      })

      .catch(error => console.error(error));

      // infoboxesCon.innerHTML = "";
      // infoboxesCon.appendChild(ul);
    })
    // .catch(error => console.error(error));
  }
//  getData();
// loadInfoBoxes();


  //AJAX function 2

  function loadMaterialList() {
    materialsCon.innerHTML = spinner;

    fetch("https://swiftpixel.com/earbud/api/materials")
      .then(response => response.json())
      .then(materialList => {
        console.log(materialList);

        // let ul = document.createElement("ul");

        materialList.forEach(material => {
          // const li = document.createElement("li");

          const h3 = document.createElement('h3');
          h3.textContent = material.heading;

          const p = document.createElement('p');
          p.textContent = material.description;

          li.appendChild(h3);
          li.appendChild(p);
          // ul.appendChild(li);
        });

        // materialsCon.innerHTML = "";
        // materialsCon.appendChild(ul);
      })
      // .catch(error => console.error(error));
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

