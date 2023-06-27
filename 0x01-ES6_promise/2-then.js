export default function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      console.log('Got a response from the API');
      const response = {
        status: 200,
        body: 'success',
      };
      return response;
    })
    .catch(() => {
      console.log('Got a response from the API');
      return new Error();
    });
}
