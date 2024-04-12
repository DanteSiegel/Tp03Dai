class Alumno {
    constructor(username = '', DNI = '', edad = 0) {
      this.username = username;
      this.DNI = DNI;
      this.edad = edad;
    }
  
    toString() {
      return `Alumno: ${this.username}, DNI: ${this.DNI}, Edad: ${this.edad}`;
    }
  }
  
 
  module.exports = Alumno;
  