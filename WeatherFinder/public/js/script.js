function getWeather() {
  const country = document.getElementById('country-input').value.trim();
  const welcomeText = document.getElementById('welcome-text-container');
  const resultContainer = document.getElementById('result-container');
  const errorDiv = document.getElementById('error');

  resultContainer.innerHTML = '';
  errorDiv.style.display = 'none';

  if (!country) {
    alert('Please enter a country name');
    return;
  }

  fetch(`/weather?country=${country}`)
    .then(res => res.json())
    .then(data => {
      welcomeText.style.display = 'none';

      if (data.error) {
        errorDiv.textContent = `ERROR: ${data.error}`;
        errorDiv.style.display = 'block';
      } else {
        const infoItems = [
          `Country: ${data.country}`,
          `Latitude: ${data.latitude}`,
          `Longitude: ${data.longitude}`,
          `Forecast: ${data.forecast}`
        ];

        infoItems.forEach(item => {
          const div = document.createElement('div');
          div.className = 'info-box';
          div.textContent = item;
          resultContainer.appendChild(div);
        });

        resultContainer.style.display = 'block';
      }
    })
    .catch(err => {
      console.error(err);
      errorDiv.textContent = 'Error fetching data. Please try again later.';
      errorDiv.style.display = 'block';
      welcomeText.style.display = 'none';
    });
}