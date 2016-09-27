module.exports = {
  getValues(options) {
    return options.array.reduce(function(prev, object, idx) {
      return prev.concat(object[options.key]);
    }, []);
  }
};
