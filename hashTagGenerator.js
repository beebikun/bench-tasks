testIt([
  ['Example of NEW hashtag', '#ExampleOfNewHashtag'],
  ['Example of NEW “hashtag”', '#ExampleOfNewHashtag'],
  ['ExampleOf new”', '#ExampleOfNew'],
  ['Example OF NEW”', '#ExampleOfNew'],
  ['ExampleA ofAnew”', '#ExampleAOfAnew'],
  ['ExampleA OfAnew”', '#ExampleAOfAnew'],
  ['ExampleA OfANEW”', '#ExampleAOfAnew'],
  ['Example o!F NE!W”', '#ExampleOfNew'],
  ['Example !oF NE!W”', '#ExampleOfNew'],
  ['exampleOF !oF NE!W”', '#ExampleOfOfNew'],
  ['Example2 3 o!F NE!W1”', '#Example23OfNew1'],
  ['Exa7mpleOf ExampleOF 1newA !NE?W new”', '#Exa7mpleOfExampleOf1NewANewNew'],
  ['EXAMPLEOf new”', '#ExampleofNew'],
  ['a'.repeat(101), ''],
  ['', ''],
]);


function getHashTag(value) {
  const striped = value
    // be sure that all words start with upper letter
    .replace(/\S+/g, (v) => v.replace(/[A-Za-z]/, (l) => l.toUpperCase()))
    // turn words in a proper camel case, eg CAMEL -> Camel, CamelCASE -> CamelCase
    .replace(/[A-Z][^\sa-z]+/g, (v) => v.charAt(0) + v.slice(1).toLowerCase())
    // remove not valid symbols
    .replace(/\W/g, '');

  const l = striped.length;
  return l === 0 || l > 100 ? '' : `#${striped}`;
}

function testIt(testCases) {
  const errors = [];
  testCases.forEach(([value, expected], i) => {
    const result = getHashTag(value);
    if (result !== expected) {
      // const error = `Expect "${ expected }" for "${ value }". "${ result }" received.`;
      const error = `(${i}) Receive "${ result }" instead of "${ expected }" for "${ value }".`;
      errors.push(error);
    }
  });
  if (errors.length) {
    errors.forEach(error => console.log(error))
  } else {
    console.log(getHashTag('well done!'));
  }
}
