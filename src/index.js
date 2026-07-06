function printStar() {
  const star = [
    '    *    ',
    '   ***   ',
    '  *****  ',
    ' ******* ',
    '*********',
    '   ***   ',
    '   ***   ',
  ];
  star.forEach(line => console.log(line));
}

module.exports = { printStar };
