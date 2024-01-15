document.addEventListener('DOMContentLoaded', function () {
    // Fetch product data
    fetch('service.json')
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

  //   const titleSpan = document.createElement('span');
    //   titleSpan.textContent = 'entry';

    //   const titleh2 = document.createElement('h2');
    //   titleh2.classList.add('price');
    //   titleh2.textContent = '$14';

    //   const month = document.createElement('span');
    //   month.classList.add('month');
    //   month.textContent = 'entry';

    //   const percentage = document.createElement('span');
    //   percentage.classList.add('percentage');
    //   percentage.textContent = 'entry';

    //   const cardBody = document.createElement('div');
    //   cardBody.classList.add('card-body')

    //   const description = document.createElement('p');
    //   description.textContent = `hello world`;


    //   const buyBtn = document.createElement('button');
    //     buyBtn.classList.add('buy-button')
    //   buyBtn.textContent = `Buy Now`;