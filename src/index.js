import './style/style.css';
import home from './components/home';
import menu from './components/menu';
import contact from './components/contact';

const content = document.getElementById('content');

// Nav
const nav = document.createElement('nav');
['Home', 'Menu', 'Contact'].forEach(page => {
  const btn = document.createElement('button');
  btn.textContent = page;
  btn.onclick = () => {
    content.classList.add('fade-out');
    setTimeout(() => {
      content.innerHTML = '';
      if (page === 'Home') content.appendChild(home());
      if (page === 'Menu') content.appendChild(menu());
      if (page === 'Contact') content.appendChild(contact());
      content.classList.remove('fade-out');
    }, 300);
  };
  nav.appendChild(btn);
});

const themeToggle = document.createElement('button');
themeToggle.textContent = 'Toggle Dark Mode';
themeToggle.style.float = 'right';
themeToggle.onclick = () => {
  document.body.classList.toggle('dark');
};
nav.appendChild(themeToggle);


document.body.insertBefore(nav, content);
content.appendChild(home());
