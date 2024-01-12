

const searchVIN = () => {
var input = document.getElementById('vinNum').value;

    var vin = input; // Replace 'YOUR_VIN' with the actual VIN
    var apiKey = 'oJK2qx14QYc9fMXUjUWuEw==w0z37ycB8l814k4l'; // Replace 'YOUR_API_KEY' with your actual API key
    console.log(vin);
    
    var url = 'https://api.api-ninjas.com/v1/vinlookup?vin='+vin;
    
    fetch(url, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json();
      })
      .then(result => {
        console.log(result);
        document.getElementById('country').innerHTML = result.country
        document.getElementById('manufacturer').innerHTML = result.manufacturer;
        document.getElementById('region').innerHTML = result.region
        document.getElementById('vds').innerHTML = result.vds
        document.getElementById('vis').innerHTML = result.vis
        document.getElementById('wmi').innerHTML = result.wmi
        document.getElementById('year').innerHTML = result.years


      })
      .catch(error => {
        console.error('Error:', error);
      });
    
}

  