const starsContainer = document.querySelector('.stars-container');


for (let i = 0; i < 100; i++) {
  const star = document.createElement('div');
  star.classList.add('star');

  
  const size = Math.random() * 3 + 1;
  const left = Math.random() * 100;

  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.left = `${left}%`;
  star.style.animationDuration = `${Math.random() * 4 + 3}s`;
  starsContainer.appendChild(star);
}

const monolito = document.querySelector('.monolito');
const particlesContainer = document.querySelector('#particles-container');

// Partículas al pasar sobre el monolito
monolito.addEventListener('mouseenter', () => {
  for (let i = 0; i < 10; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.width = `${Math.random() * 5 + 2}px`;
    particle.style.height = `${Math.random() * 5 + 2}px`;
    particle.style.backgroundColor = 'blue';
    particle.style.position = 'absolute';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particlesContainer.appendChild(particle);

    setTimeout(() => {
      particle.style.animation = 'particleAnimation 1s forwards';
    }, 10);
  }
});


monolito.addEventListener('click', () => {
  monolito.style.transition = 'filter 0.6s ease';
  monolito.style.filter = 'blur(5px)';

  setTimeout(() => {
    window.location.href = '../index.html';

  }, 700);
});
