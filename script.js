const categoryFilter = document.getElementById('category-filter');
const cardContainer = document.getElementById('card-container');

// Fetch JSON data 
fetch('example.json')
    .then(response => response.json())
    .then(data => {
        // Create cards
        data.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.setAttribute('data-category', item.category);

            const image = document.createElement('img');
            image.src = item.image;

            const title = document.createElement('h2');
            title.textContent = item.title;

            const description = document.createElement('p');
            description.textContent = item.description;

            const buy = document.createElement('h4');
            buy.textContent = item.buy;
 
            card.append(image);
            card.appendChild(title);
            card.appendChild(description);
            card.appendChild(buy);

            cardContainer.appendChild(card);
        });
    });

categoryFilter.addEventListener('change', filterCards);

function filterCards() {
    const selectedCategory = categoryFilter.value;
    const cards = cardContainer.querySelectorAll('.card');

    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (selectedCategory === 'all' || selectedCategory === cardCategory) {
            card.style.display = 'inline-block';
        } else {
            card.style.display = 'none';
        }
    });
}
