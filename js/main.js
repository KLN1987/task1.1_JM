const inputIndividual = document.querySelector('.input-individual');
const individualText = document.querySelector('.radio__description');

document.addEventListener('click', function(evt) {
  const target = event.target;
  if(target.closest('.individual') || inputIndividual.checked) {
    individualText.style.display = 'block';
  }
  else {
    individualText.style.display = 'none';
  }
})