const buildErrorObj = (code = '', message = '') => {
  return {
    code,
    message
  }
}

module.exports = { buildErrorObj }
