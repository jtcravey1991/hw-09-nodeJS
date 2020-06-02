// function that takes the data generated from inquirer and outputs a string of the markdown file in the format of a README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description

[![ForTheBadge uses-git](https://ForTheBadge.com/images/badges/uses-git.svg)](https://GitHub.com/)

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Testing](#testing)
* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

${data.questions}

`;
}
// exports the function
module.exports = generateMarkdown;
