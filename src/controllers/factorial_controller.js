const Factorial = require('../models/factorial');

module.exports = {
  index(req, res) {
    const { number } = req.body;

    return res.json({
      result: Factorial.calculate_for(number)
    });
  }
};