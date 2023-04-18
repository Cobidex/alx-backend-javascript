function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    fetch('https://example.com/api/data')
      .then(response => {
        if (response.ok) {
          resolve(response.json());
        } else {
          reject(new Error(`API call failed with status ${response.status}`));
        }
      })
      .catch(error => {
        reject(error);
      });
  });
}
