export default function base64Encode(string) {
  if (process.browser) {
    return btoa(string);
  } else {
    return Buffer.from(string, 'binary').toString('base64');
  }
}
