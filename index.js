var input = document.getElementById('vinNum').value;
console.log(input);


const searchVIN = () => {
    console.log(input);
    var vin = 'JH4KA7561PC008269'; // Replace 'YOUR_VIN' with the actual VIN
    var apiKey = 'oJK2qx14QYc9fMXUjUWuEw==w0z37ycB8l814k4l'; // Replace 'YOUR_API_KEY' with your actual API key
    
    var url = 'https://api.api-ninjas.com/v1/vinlookup?vin=' + vin;
    
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
        
      })
      .catch(error => {
        console.error('Error:', error);
      });
    
}

  