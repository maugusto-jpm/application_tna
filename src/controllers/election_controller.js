const ElectionCalculation = require('../models/election_calculation');


module.exports = {
  percentage_of_valid_vows(_, res) {
    const election_calculator = new ElectionCalculation(
      1_000, // total_voters
      800,   // valids
      150,   // white_vows
      50     // null_vows
    );

    return res.json({
      result: election_calculator.percentage_of_valid_vows()
    });
  },

  percentage_of_white_vows(_, res) {
    const election_calculator = new ElectionCalculation(
      1_000, // total_voters
      800,   // valids
      150,   // white_vows
      50     // null_vows
    );

    return res.json({
      result: election_calculator.percentage_of_white_vows()
    });
  },

  async percentage_of_null_vows(_, res) {
    const election_calculator = new ElectionCalculation(
      1_000, // total_voters
      800,   // valids
      150,   // white_vows
      50     // null_vows
    );

    return res.json({
      result: election_calculator.percentage_of_null_vows()
    });
  }
};