export default function loadBalancer(chinaDownload, USDownload) {
  return new Promise((resolve, reject) => {
    Promise.race([chinaDownload, USDownload])
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      })
  })
}
