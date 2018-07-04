function getObjectType(value) {
  return Object.prototype.toString.call(value);
}

export default { getObjectType };
