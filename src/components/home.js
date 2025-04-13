import carousel from './carousel';

export default function home() {
  const el = document.createElement('div');
  el.innerHTML = `
    <h1>Welcome to Our Restaurant</h1>
    <p>Best food in town!</p>
    <section class="testimonials">
      <h2>What Our Customers Say</h2>
      <blockquote>"Amazing pizza and cozy atmosphere!" - Alex</blockquote>
      <blockquote>"The pasta melted in my mouth. 10/10." - Samira</blockquote>
    </section>
  `;
  el.appendChild(carousel());
  return el;
}