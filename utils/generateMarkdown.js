// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadge;
  switch(license) {
    case apache:
      licenseBadge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
      break;
    case mit:
      licenseBadge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
      break;
    case none:
      licenseBadge = ``;
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  ${data.toc}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Features
  ${data.features}

  ## Tests
  ${data.tests}

  ## Badges
  ${data.badges}

  ## Credits
  ${data.credits}

  ## How to Contribute
  ${data.contribute}

  ## License
  ${data.license}
`;
}

module.exports = generateMarkdown;
