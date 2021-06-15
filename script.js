var myHeaders = new Headers();
myHeaders.append("x-api-key", "q6NHZAHRcFHFl0runQZzub3k1TORxv8uEicmoSKg");
myHeaders.append("Authorization", "Bearer q6NHZAHRcFHFl0runQZzub3k1TORxv8uEicmoSKg");
myHeaders.append("Cookie", "XSRF-TOKEN=eyJpdiI6IndnNkRSaHhLMTNCNXcxblU0Y0ZFN1E9PSIsInZhbHVlIjoiMkY3TDNaZmsyYnVWVjZpWVlHODhONjNSN2RWNG5mWkNjWWMwTmlSWHE5R3V2RlVlWlVPVTFuUVNWaUpTb2JISmo0SVdvXC8wT3F4dndFV1hTQ1RRcjBOY2hLN3NLUTVUckg3REU2NCtwMzVVa1wvOVdXQVZHVW5JckZnUytZOUFqYiIsIm1hYyI6IjljY2FiMTE3Mzg3MjMwOWZkODU2M2U2ODFjOTdmY2Q2ZTkzMjRiMGFmOTA1MjFkMDk0OWYwNjc1NTdmMDJkZWMifQ%3D%3D; quziapi_session=eyJpdiI6InFvZVkydFEyMzV3bDZrWTMreHpIWXc9PSIsInZhbHVlIjoiMmpKY2NiYTJvaWR1eDdMRVpoeWRFd1dhMnRVV2Q3K1RSZEhLVHN2R2hNZXJodHBlbnU0ZVwvY3NFSThvRHhIMWRTZUdVZGRtQWp5UkRoWFcwb3IreCtoWmpJdWwzK1ZqcEVBS3c0M2I1VlU1WEllZ29JYUprSTE4VXAwYWlSMVpKIiwibWFjIjoiN2JiYjVmNWUyNDQwMjg1ZGM4NTlmMDdhZmYwZjRkZTA2OTgxNDBhZjk4MzgxNWFjYjVkOTdkNzM4OGY1ZTg4NyJ9");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://quizapi.io/api/v1/questions?category=Code&difficulty=Easy", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));