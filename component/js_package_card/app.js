document.addEventListener('DOMContentLoaded', function () {
    // Fetch product data
    fetch('package_data.json')
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

      const titleSpan = document.createElement('span');
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