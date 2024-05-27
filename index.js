document.body.addEventListener('click', (e) => {
  const isExpandableTitle = !!e.target.closest('.expandable__title-bar');
  const expandable = e.target.closest('.expandable');

  if (!isExpandableTitle) {
    return;
  }

  expandable.classList.toggle('expandable--open');
});
