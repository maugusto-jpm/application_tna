module.exports = {
  calculate_for(value) {
    if (value <= 1) return 1;
    return value * this.calculate_for(value - 1);
  }
};
