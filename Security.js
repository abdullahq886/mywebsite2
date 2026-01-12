<!-- Theme Toggle Button -->
<button id="themeToggle">🌙</button>

<script>
  // Theme ON / OFF
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;

  // Load saved theme from localStorage or default to light
  const savedTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', savedTheme);
  themeToggle.innerText = savedTheme === 'dark' ? '☀️' : '🌙';

  // Toggle theme on click
  themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const newTheme = current === 'light' ? 'dark' : 'light';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggle.innerText = newTheme === 'dark' ? '☀️' : '🌙';
  });
</script>

<style>
  /* Optional styles for demonstration */
  :root {
    --bg-light: #ffffff;
    --text-light: #333333;
    --bg-dark: #121212;
    --text-dark: #f4f4f4;
  }

  html[data-theme="light"] {
    background-color: var(--bg-light);
    color: var(--text-light);
  }

  html[data-theme="dark"] {
    background-color: var(--bg-dark);
    color: var(--text-dark);
  }

  #themeToggle {
    padding: 10px 20px;
    font-size: 1.2rem;
    cursor: pointer;
  }
</style>
