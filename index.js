module.exports = function (string) {
  return Buffer.from(string, 'utf8').toString('base64');
};