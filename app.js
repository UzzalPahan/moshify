// mobile toggle menu start 

const menu = document.getElementById("menu");
function showMenu() {
  menu.style.right = "0px";
}
function hideMenu() {
  menu.style.right = "-200px";
}

// mobile toggle menu end


//fetch package card start 
document.addEventListener('DOMContentLoaded', function () {
  // Fetch product data
  fetch('data/package_data.json')
    .then(response => response.json())
    .then(packages => {
      // Display product data in cards
      const container = document.getElementById('card_manager');
      container.classList.add('card_manager')

      packages.forEach(singlePackage => {
        const card = createPackageCard(singlePackage);
        container.appendChild(card);
      });
    })
    .catch(error => console.error('Error fetching product data:', error));

  // Function to create a product card
  function createPackageCard(singlePackage) {
    const card = document.createElement('div');
    card.classList.add('card');


    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header')

    const titleSpan = document.createElement('h4');
    titleSpan.textContent = 'entry';

    const titleh2 = document.createElement('h2');
    titleh2.classList.add('price');
    titleh2.textContent = '$14';

    const month = document.createElement('span');
    month.classList.add('month');
    month.textContent = 'entry';

    const percentage = document.createElement('span');
    percentage.classList.add('percentage');
    percentage.textContent = 'entry';

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body')

    const description = document.createElement('p');
    description.textContent = `hello world`;


    const featuresList = document.createElement('ul');
    singlePackage.features.forEach(feature => {
      const listItem = document.createElement('li');
      listItem.textContent = feature;
      featuresList.appendChild(listItem);
    });

    const buyBtn = document.createElement('button');
  buyBtn.classList.add('buy-button')
    buyBtn.textContent = `Buy Now`;


    card.appendChild(cardHeader);
    cardHeader.appendChild(titleSpan)
    cardHeader.appendChild(titleh2)

    titleh2.appendChild(month);
    titleh2.appendChild(percentage);

    cardHeader.appendChild(description);
    
    card.appendChild(cardBody);
    cardBody.appendChild(featuresList);
    cardBody.appendChild(buyBtn);
    
    return card;
  }
});

//fetch package card end 



//fetch service start 
document.addEventListener('DOMContentLoaded', function () {
  // Fetch product data
  fetch('data/service.json')
    .then(response => response.json())
    .then(packages => {
      // Display product data in cards
      const container = document.getElementById('service_section');
      container.classList.add('service_section')

      packages.forEach(singlePackage => {
        const card = createPackageCard(singlePackage);
        container.appendChild(card);
      });
    })
    .catch(error => console.error('Error fetching product data:', error));

  // Function to create a product card
  function createPackageCard(singlePackage) {
    const card = document.createElement('div');
    card.classList.add('uses');
    card.classList.add(singlePackage.class);



    const usesText = document.createElement('div');
    usesText.classList.add('uses_text')
    usesText.classList.add(singlePackage.class)


    const serviceTitle = document.createElement('h2');
    serviceTitle.textContent = "Super Easy to Use";

    const serviceDescription = document.createElement('p');
    serviceDescription.textContent = "Super Easy to Use lorem50 askdjfkldjfldk ";

    const serviceLogo = document.createElement('img');
    serviceLogo.src = singlePackage.logo;
    serviceLogo.alt = singlePackage.logo;


    const serviceContent = document.createElement('div');
    serviceContent.classList.add('uses_content')

    const serviceBtn = document.createElement('button');
    serviceBtn.classList.add('read_more');
    serviceBtn.textContent = "READ MORE"
    

    const usesImg = document.createElement('div');
    usesImg.classList.add('uses_img')

    const mainImg = document.createElement('img');
    mainImg.src = singlePackage.img;
    mainImg.alt = "easy to use";

    
  


    card.appendChild(usesText);
    usesText.appendChild(serviceLogo);
    usesText.appendChild(serviceContent);
    usesText.appendChild(serviceBtn);
    serviceContent.appendChild(serviceTitle);
    serviceContent.appendChild(serviceDescription);
    
    card.appendChild(usesImg);
    usesImg.appendChild(mainImg)
    
    return card;
  }
});

//fetch service end


//initialization swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//swiper end