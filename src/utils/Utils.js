exports.isFunction = (obj) => {
  return obj && toString.call(obj) === '[object Function]';
}
