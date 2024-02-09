const url = 'https://protheus-dev2.adufertil.com.br:8012/RESTSECDEV/WSRESTPC01/dadosProg';  // Replace with your API endpoint URL
const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InBKd3RQdWJsaWNLZXlGb3IyNTYifQ.eyJpc3MiOiJUT1RWUy1BRFZQTC1GV0pXVCIsInN1YiI6IndlbGxpbmd0b24ubWVsbyIsImlhdCI6MTY4Njk0Njk4OCwidXNlcmlkIjoiMDAwMzMyIiwiZXhwIjoxNjg2OTUwNTg4LCJlbnZJZCI6InByb3RoZXVzX2Rlc2Vudm9sdmltZW50b193In0.FmCw-BXi65roBRNFlwNovbjCE8yss6q7fSBGPQ2LqUqAdh9snrLnhpnXfulzITu8mD_1Q_obrA6JQIsA2XAhQcm0zZ0YxlKc3yT5VOzukSNbsd15tZiyMpUOdWI1lWdxFMQYZL2u6C2LxcqoBcWc2i2v4lrPNCPpnaeHB09l5htrSQrCByRwEumj40eZvlZLjOehKggZQs4z_a4DCOa0kW60aKW1EwkMmtQevi2kqxJZ4afvIIT5sYGGMkfiNrmaRkU-TL5ZxjMeeYK80ejvsqHrpEtfPxaShIPHUhYTRLBF4te9JEtEmKPgBAxJKPeWM8JTAbfNDq0-3gVcmU5ODg'
const jsonData = {
  "CNPJ" : ["08070566001254"]
};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify(jsonData,null, 2, 'utf-8')
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
