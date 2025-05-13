// Load theme from localStorage or default to light
const currentTheme = localStorage.getItem('wander-theme') || 'light';
document.body.classList.add(`${currentTheme}-theme`);

const themeBtn = document.getElementById('themeToggleBtn');
themeBtn.addEventListener('click', () => {
  const isLight = document.body.classList.contains('light-theme');
  const newTheme = isLight ? 'dark' : 'light';
  
  document.body.classList.remove('light-theme', 'dark-theme');
  document.body.classList.add(`${newTheme}-theme`);
  localStorage.setItem('wander-theme', newTheme);
});

// Image animation on click
const img = document.getElementById('animatedImage');
img.addEventListener('click', () => {
  img.classList.add('animate');
  img.addEventListener('animationend', () => {
    img.classList.remove('animate');
  }, { once: true });
});
