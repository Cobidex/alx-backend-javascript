export default function uploadPhoto(filename) {
  return promise.reject(
    new Error(
      `${filename} cannot be processed`,
    ));
}
