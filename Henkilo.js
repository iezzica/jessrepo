const Urheilija = require("./Urheilija");

class Henkilo {
  // Constructor
  constructor(fn, ln, age) {
    this.firstName = fn;
    fn = "";
    this.lastName = ln;
    ln = "";
    this.nickName = nn;
    nn = "";
    this.date = d;
    const d = new Date();
  }
}
module.exports = Henkilo;
