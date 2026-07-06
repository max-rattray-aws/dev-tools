const star = [
  '    *    ',
  '   ***   ',
  '  *****  ',
  ' ******* ',
  '*********',
  '   ***   ',
  '   ***   ',
];

function printStar() {
  star.forEach(line => console.log(line));
}

function getStar() {
  return star.join('\n');
}

module.exports = { printStar, getStar, star };
