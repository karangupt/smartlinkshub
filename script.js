document.getElementById('searchBar').addEventListener('input', function() {
  const query = this.value.toLowerCase();
  const boxes = document.querySelectorAll('.box');
  let found = false;
  boxes.forEach(box => {
    const tags = box.getAttribute('data-tags');
    if (tags.includes(query)) {
      box.style.display = 'block';
      found = true;
    } else {
      box.style.display = 'none';
    }
  });
  if (!found && query.length > 3) {
    setTimeout(() => {
      if (confirm(`No match found. Search "${query}" on Google?`)) {
        window.open(`https://www.google.com/search?q=${query}`, '_blank');
      }
    }, 1000);
  }
});
