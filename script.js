document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();
  const lokalita = document.getElementById('lokalita').value;
  const gps = document.getElementById('gps').value;
  const poznamka = document.getElementById('poznamka').value;
  const vystup = document.getElementById('vystup');
  const z = document.createElement('div');
  z.innerHTML = `<strong>${lokalita}</strong><br>GPS: ${gps}<br>${poznamka}<hr>`;
  vystup.appendChild(z);
});
