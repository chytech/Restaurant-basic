export default function contact() {
  const div = document.createElement('div');
  div.innerHTML = `
    <h1>Contact & Reservations</h1>
    <p>Phone: 123-456-7890</p>
    <form id="reservation-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Email" required />
      <input type="date" required />
      <input type="time" required />
      <button type="submit">Book Now</button>
    </form>
  `;

  div.querySelector('form').onsubmit = e => {
    e.preventDefault();
    alert('Reservation submitted!');
  };

  return div;
}