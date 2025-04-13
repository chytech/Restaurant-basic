import pizzaImg from '../assets/pizza.jpg';
import pastaImg from '../assets/pasta.jpg';

const slides = [
  { title: 'Deluxe Pizza', image: pizzaImg },
  { title: 'Truffle Pasta', image: pastaImg },
  { title: 'Something Else', image: pastaImg }, // add more later
];

export default function carousel() {
  const container = document.createElement('div');
  container.className = 'carousel';

  const track = document.createElement('div');
  track.className = 'carousel-track';

  slides.forEach((slide) => {
    const slideEl = document.createElement('div');
    slideEl.className = 'slide';

    const img = document.createElement('img');
    img.src = slide.image;
    img.alt = slide.title;
    img.loading = 'lazy';

    const caption = document.createElement('p');
    caption.textContent = slide.title;

    slideEl.appendChild(img);
    slideEl.appendChild(caption);
    track.appendChild(slideEl);
  });

  container.appendChild(track);

  const leftBtn = document.createElement('button');
  const rightBtn = document.createElement('button');
  leftBtn.textContent = '←';
  rightBtn.textContent = '→';

  leftBtn.className = 'carousel-btn left';
  rightBtn.className = 'carousel-btn right';

  container.appendChild(leftBtn);
  container.appendChild(rightBtn);

  let index = 0;
  const updateSlide = () => {
    track.style.transform = `translateX(-${index * 100}%)`;
  };

  leftBtn.onclick = () => {
    index = index > 0 ? index - 1 : slides.length - 1;
    updateSlide();
  };

  rightBtn.onclick = () => {
    index = (index + 1) % slides.length;
    updateSlide();
  };

  return container;
}
