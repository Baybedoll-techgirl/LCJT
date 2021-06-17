var myHeaders = new Headers();
myHeaders.append("Cookie", "XSRF-TOKEN=eyJpdiI6ImFxdFhIWG1Db2MySVUxTEU1MldNdnc9PSIsInZhbHVlIjoiK2Y4VUJhVVBSUGF6Zmcxc3BTRWp2UCtqVVJMTllxQW1yazl5SzlBaTFJUmhcL1BzNlwvY01cL1FBRTQ4M1h0ZmdSWTNnd01YczF4TU5kdjU0Y3hCTEVBd0lld3FwajhibkRoWVN0V1VpTmRROUVPSWpoM1czUTc3ODFhaU1PYUNCOG8iLCJtYWMiOiIyMmRhNmNlMzkxZTgzNTVmMDNlMDY2ZmIwNTEwMWFiZGYyMTNiZmZiMWQ5YThhNWFmZDNjMDJlMWQyZThmYmRiIn0%3D; quziapi_session=eyJpdiI6IkVuMG1UdWNRdEhXUTJzS1NvM0N2QXc9PSIsInZhbHVlIjoiVTFZVm1cL3dlNHNEbzF3RWZRUU96QitMUlFFQm1lTlhsMnJ5ZGRmd1ZodXBuZ2JaM015VWlBTnV6eGVBVk5CUUdOR3VZVkVSTE1BUm1QcVNvWWxCM0trTWNlbnp1M01NUTE1RUNydHZYc2daa0FnQTdMY1dJWDkwTXlrTHhneWpkIiwibWFjIjoiZTQyZjFjNzAwNWQyNGUyZmUxODUxYzMyNGI4ZjgyZDUxMzJmNjdlYjQwMjU2NWY1OTQ3Mzc3YzQ4NmQzZjhjNyJ9");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://quizapi.io/api/v1/questions?limit=10&apiKey=q6NHZAHRcFHFl0runQZzub3k1TORxv8uEicmoSKg&difficulty=Easy&category=code", requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result)
    document.getElementById('questions').innerText=result[0].question;
   
  })
  .catch(error => console.log('error', error));
document.getElementById('questions').innerText='Somestring'

