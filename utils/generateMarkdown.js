// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadge;
  switch(license) {
    case apache:
      licenseBadge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
      break;
    case gnuG3:
      licenseBadge = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
      break;
    case mit:
      licenseBadge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
      break;
    case bsd2:
      licenseBadge = `![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)`;
      break;
    case bsd3:
      licenseBadge = `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`;
      break;
    case boost:
      licenseBadge = `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
      break;
    case cc:
      licenseBadge = `![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)`;
      break;
    case eclipse:
      licenseBadge = `![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)`;
      break;
    case gnuAffero:
      licenseBadge = `![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)`;
      break;
    case gnuG2:
      licenseBadge = `![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)`;
      break;
    case gnuLesser:
      licenseBadge = `![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)`;
      break;
    case mozilla:
      licenseBadge = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
      break;
    case none:
      licenseBadge = ``;
      break;
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink;
  switch(license) {
    case apache:
      licenseLink = `[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case gnuG3:
      licenseLink = `[GNU General Public License v3.0](https://opensource.org/licenses/GPL-3.0)`;
      break;
    case mit:
      licenseLink = `[MIT License](https://opensource.org/licenses/MIT)`;
      break;
    case bsd2:
      licenseLink = `[BSD 2-Clause "Simplified" License](https://opensource.org/licenses/BSD-2-Clause)`;
      break;
    case bsd3:
      licenseLink = `[BSD 3-Clause "New" or "Revised" License](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case boost:
      licenseLink = `[Boost Software License 1.0](https://opensource.org/licenses/BSL-1.0)`;
      break;
    case cc:
      licenseLink = `[Creative Commons Zero v1.0 Universal](https://choosealicense.com/licenses/cc0-1.0/)`;
      break;
    case eclipse:
      licenseLink = `[Eclipse Public License 2.0](https://opensource.org/licenses/EPL-2.0)`;
      break;
    case gnuAffero:
      licenseLink = `[GNU Affero General Public License v3.0](https://opensource.org/licenses/AGPL-3.0)`;
      break;
    case gnuG2:
      licenseLink = `[GNU General Public License v2.0](https://opensource.org/licenses/GPL-2.0)`;
      break;
    case gnuLesser:
      licenseLink = `[GNU Lesser General Public License v2.1](https://opensource.org/licenses/LGPL-2.1)`;
      break;
    case mozilla:
      licenseLink = `[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)`;
      break;
    case none:
      licenseLink = ``;
      break;
  }
  return licenseLink;
}

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
