import pizzaImg from '../assets/pizza.jpg';
import pastaImg from '../assets/pasta.jpg';

export default function menu() {
  const container = document.createElement('div');
  container.className = 'menu';

  const title = document.createElement('h1');
  title.textContent = 'Our Menu';
  container.appendChild(title);

  const items = [
    { name: 'Margherita Pizza', image: pizzaImg },
    { name: 'Creamy Pasta', image: pastaImg },
  ];

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'menu-item';

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.name;
    img.loading = 'lazy'; // Lazy load magic here

    const label = document.createElement('p');
    label.textContent = item.name;

    card.appendChild(img);
    card.appendChild(label);
    container.appendChild(card);
  });

  return container;
}
