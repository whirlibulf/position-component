function ComponentFactory(options) {
  return {
    "x": options.x || 0,
    "y": options.y || 0,
    "z": options.z || 0
  };
}

module.exports = ComponentFactory;
