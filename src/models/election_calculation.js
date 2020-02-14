class ElectionCalculation {
  constructor(total_voters, valids, white_vows, null_vows) {
    this.total_voters = total_voters;
    this.valids = valids;
    this.white_vows = white_vows;
    this.null_vows = null_vows;
  }

  percentage_of_valid_vows() {
    return (this.valids * 100.0) / this.total_voters;
  }

  percentage_of_white_vows() {
    return (this.white_vows * 100.0) / this.total_voters;
  }

  percentage_of_null_vows() {
    return (this.null_vows * 100.0) / this.total_voters;
  }
};

module.exports = ElectionCalculation;