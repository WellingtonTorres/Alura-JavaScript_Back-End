const url = 'https://protheus-dev2.adufertil.com.br:8012/RESTSECDEV/WSRESTPC01/grvProgr';  // Replace with your API endpoint URL
const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InBKd3RQdWJsaWNLZXlGb3IyNTYifQ.eyJpc3MiOiJUT1RWUy1BRFZQTC1GV0pXVCIsInN1YiI6IndlbGxpbmd0b24ubWVsbyIsImlhdCI6MTY4NTExNTE3OCwidXNlcmlkIjoiMDAwMzMyIiwiZXhwIjoxNjg1MTE4Nzc4LCJlbnZJZCI6InByb3RoZXVzX2Rlc2Vudm9sdmltZW50b193In0.GnuXKKuMuUe7h2HzZyu_rDrNgVEWtG3L4RxxfXR-suHyeGAVw69efUZrITjbZQG7mcv7Gg4HLuhkavEm6z6_DOWKCAWvoVuMAk6BcTzHPDNQlAQCQTsQ6kxdc3ja_uSsfYTDj0geDiL0eSyEXwZP0MpzxQ8o75JVvJzdd4emvEEz9j9_IhA2upw23AQcgyKE5Fm69r8F7Y-E462vLxnUunv6vf2GpaZMzMyZlOSE0TZ113L2vETMN7gAv_mHW7ETLUjf0exjJKmpte8E6PA0mI9Zuca6AemvW7ocbiqYlnZJ0AxclNIFbUnFFTYHVtTZkObC4iDAhJLlMSjXnQ6ywA';  // Replace with your actual Bearer token

const jsonData = {  // Replace with your JSON data
    
        "id_cliente": "000002",
        "loja_cli": "01",
        "fazenda": "FAZENDA SAO JOSE",
        "ped_cliente": "4508025069",
        "ped_adufertil": "078301",
        "item": "01",
        "dt_fim_ped": "20230510",
        "cod_produto": "MG660URZ-00B1",
        "status": "1",
        "InputProgramacao": [
          {
            "qtd_solicitada": "23",
            "dt_solicitada": "0002-02-22"
          }
        ]
      
};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify(jsonData)
})
  .then(response => response.json())
  .then(data => {
    console.log('Response:', data);
    // Process the response data
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle any errors
  });
