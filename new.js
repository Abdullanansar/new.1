// function reverseString(str) {
//     return str.split('').reverse().join('');
//   }
  
//   const string = 'hello world';
//   const reversedString = reverseString(string);
//   console.log(reversedString); 



function reverseString(str) {
    return str.split("").reverse().join("");
  }
  
  const string = "hello world";
  const reversedString = reverseString(string);
  console.log(reversedString);





  function redirectToUrl(url) {
    window.location.href = url;
  }




  const fs = require('fs');

function getLinesFromFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return data.split('\n');
  } catch (err) {
    console.error(`Error reading file: ${err}`);
    return [];
  }
}






