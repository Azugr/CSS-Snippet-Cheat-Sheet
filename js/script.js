/*
MIT License
Copyright (c) 2024 [Your Name]
See LICENSE file in the project root for full license information.
*/

// Dark Mode Toggle
const toggleButton = document.getElementById('toggle-theme');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Save the theme preference in local storage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Retrieve theme preference on page load
window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
  }
});

// Click to copy code snippets
const codeBlocks = document.querySelectorAll('pre');

codeBlocks.forEach(block => {
  block.addEventListener('click', () => {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(block);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    
    // Optional: Visual feedback (CSS or JS-based)
    block.style.backgroundColor = "#d8a47f";  // Highlight after copy
    setTimeout(() => {
      block.style.backgroundColor = "";  // Reset after a brief delay
    }, 500);

    alert('CSS Snippet copied to clipboard!');
  });
});
