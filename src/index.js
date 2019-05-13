const root = document.getElementById('root');
const headerOnly = document.getElementById('header-only');

const ul = document.createElement('ul');
root.appendChild(ul);

['dog', 'another dog', 'yay dogs', 'Ana Dogg']
  .forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;
    ul.appendChild(li);
  });

const h1 = document.createElement('h1');
h1.textContent = 'This Is A Heading... Here are dogs:';
headerOnly.appendChild(h1);