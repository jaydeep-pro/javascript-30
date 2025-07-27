 const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  const isOpen = this.classList.contains('open');
  panels.forEach(panel => panel.classList.remove('open'));
  if (!isOpen) this.classList.add('open');
}

    function toggleActive(e) {
      if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
      }
    }

    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));