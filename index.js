const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    disableActive();
    panel.classList.add('active');
  });
});

function disableActive() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
