const Henkilo = require("./Henkilo");

// luodaan Urheilijat-olio
function Urheilijat(fn, ln, nn, d, omapaino, imagelink, sport, achievements) {
	this.firstName = fn;
  this.lastName = ln;
  this.nickName = nn;
  this.date = d;
  this.omapaino = omapaino;
	this.imagelink = imagelink;
	this.sport = sport;
	this.achievements = achievements;
}

var Keihäänheittäjä = new Urheilijat("Algot","Keihäs","Al",(2000),55,"kuva1.jpg","keihäänheitto","kultamitalisti");
var Uimari = new Urheilijat("Jenna","Vesi","Jen",(2004),50,"kuva2.jpg","kilpauinti","hopeamitalisti");

console.log(Keihäänheittäjä);
console.log(Uimari);

class Urheilija extends Henkilo {
  // Constructor
  constructor(fn, ln, nn, d, omapaino, imagelink, sport, achievements) {
    this.sport = sport;
    sport = "";
    this.omapaino = omapaino;
    omapaino = 0;
    this.imagelink = imagelink;
    imagelink = "";
    this.achievements = achievements;
    achievements = "";
    super(fn, ln, nn, d);
  }
  get Firstname() {
    return this.fn;
  }
  set Firstname(fn) {
    this.fn = this.fn;
  }
  get Lastname() {
    return this.ln;
  }
  set Lastname(ln) {
    this.ln = ln;
  }
  get Nickname() {
    return this.nn;
  }
  set Nickname(nn) {
    this.nn = nn;
  }
  get Date() {
    return this.d;
  }
  set Date(d) {
    this.date = d;
  }
}
module.exports = Urheilija;