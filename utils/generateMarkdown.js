// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var licenseBadge;
  switch(license) {
    case 'Apache License 2.0':
      licenseBadge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
      break;
    case 'GNU General Public License v3.0':
      licenseBadge = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
      break;
    case 'MIT License':
      licenseBadge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
      break;
    case 'BSD 2-Clause "Simplified" License':
      licenseBadge = `![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)`;
      break;
    case 'BSD 3-Clause "New" or "Revised" License':
      licenseBadge = `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`;
      break;
    case 'Boost Software License 1.0':
      licenseBadge = `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
      break;
    case 'Creative Commons Zero v1.0 Universal':
      licenseBadge = `![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)`;
      break;
    case 'Eclipse Public License 2.0':
      licenseBadge = `![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)`;
      break;
    case 'GNU Affero General Public License v3.0':
      licenseBadge = `![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)`;
      break;
    case 'GNU General Public License v2.0':
      licenseBadge = `![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)`;
      break;
    case 'GNU Lesser General Public License v2.1':
      licenseBadge = `![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)`;
      break;
    case 'Mozilla Public License 2.0':
      licenseBadge = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
      break;
  }
  console.log(licenseBadge);
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var licenseLink;
  switch(license) {
    case 'Apache License 2.0':
      licenseLink = `[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'GNU General Public License v3.0':
      licenseLink = `[GNU General Public License v3.0](https://opensource.org/licenses/GPL-3.0)`;
      break;
    case 'MIT License':
      licenseLink = `[MIT License](https://opensource.org/licenses/MIT)`;
      break;
    case 'BSD 2-Clause "Simplified" License':
      licenseLink = `[BSD 2-Clause "Simplified" License](https://opensource.org/licenses/BSD-2-Clause)`;
      break;
    case 'BSD 3-Clause "New" or "Revised" License':
      licenseLink = `[BSD 3-Clause "New" or "Revised" License](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case 'Boost Software License 1.0':
      licenseLink = `[Boost Software License 1.0](https://opensource.org/licenses/BSL-1.0)`;
      break;
    case 'Creative Commons Zero v1.0 Universal':
      licenseLink = `[Creative Commons Zero v1.0 Universal](https://choosealicense.com/licenses/cc0-1.0/)`;
      break;
    case 'Eclipse Public License 2.0':
      licenseLink = `[Eclipse Public License 2.0](https://opensource.org/licenses/EPL-2.0)`;
      break;
    case 'GNU Affero General Public License v3.0':
      licenseLink = `[GNU Affero General Public License v3.0](https://opensource.org/licenses/AGPL-3.0)`;
      break;
    case 'GNU General Public License v2.0':
      licenseLink = `[GNU General Public License v2.0](https://opensource.org/licenses/GPL-2.0)`;
      break;
    case 'GNU Lesser General Public License v2.1':
      licenseLink = `[GNU Lesser General Public License v2.1](https://opensource.org/licenses/LGPL-2.1)`;
      break;
    case 'Mozilla Public License 2.0':
      licenseLink = `[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)`;
      break;
  }
  console.log(licenseLink);
  return licenseLink;
}

function renderTableOfContentsSection(include) {
  if (!include.includes("Table of Contents")) {
    return ``;
  } else {
    var tableOfContents = `## Table of Contents
`;
    if (include.includes("Installation")) {
      tableOfContents =  tableOfContents + `- [Installation](#installation)
`;
    }
    if (include.includes("Usage")) {
      tableOfContents = tableOfContents + `- [Usage](#usage)
`;
    }
    if (include.includes("Features")) {
      tableOfContents = tableOfContents + `- [Features](#features)
`;
    }
    if (include.includes("Tests")) {
      tableOfContents = tableOfContents + `- [Tests](#tests)
`;
    }
    if (include.includes("Badges")) {
      tableOfContents = tableOfContents + `- [Badges](#badges)
`;
    }
    if (include.includes("Credits")) {
      tableOfContents = tableOfContents + `- [Credits](#credits)
`;
    }
    if (include.includes("How to Contribute")) {
      tableOfContents = tableOfContents + `- [How to Contribute](#how-to-contribute)
`;
    }
    if (include.includes("License")) {
      tableOfContents = tableOfContents + `- [License](#license)
`;
    }
    return tableOfContents;
  }
}

function renderInstallationSection(include) {
  if (include.includes("Installation")) {
    return `## Installation
${data.installation}
`;
  } else {
    return ``;
  }
}

function renderUsageSection(include) {
  if (include.includes("Usage")) {
    return `## Usage
${data.usage}
`;
  } else {
    return ``;
  }
}

function renderFeaturesSection(include) {
  if (include.includes("Features")) {
    return `## Features
${data.features}
`;
  } else {
    return ``;
  }
}

function renderTestsSection(include) {
  if (include.includes("Tests")) {
    return `## Tests
${data.tests}
`;
  } else {
    return ``;
  }
}

function renderCreditsSection(include) {
  if (include.includes("Credits")) {
    return `## Credits
${data.credits}
`;
  } else {
    return ``;
  }
}

function renderContributeSection(include) {
  if (include.includes("How to Contribute")) {
    return `## How to Contribute
${data.contribute}
`;
  } else {
    return ``;
  }
}

function renderBadgeSection(badges, license, include) {
  if (!include.includes("Badges") || !include.includes("License")) {
    return ``;
  } else { 
    var badgeSection = `## Badges
`;
    if (badges.includes("HTML")) {
      badgeSection = badgeSection + `![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)`;
    }
    if (badges.includes("CSS")) {
      badgeSection = badgeSection + `![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)`;
    }
    if (badges.includes("JavaScript")) {
      badgeSection = badgeSection + `![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)`;
    }
    if (badges.includes("Markdown")) {
      badgeSection = badgeSection + `![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)`;
    }
    if (badges.includes("jQuery")) {
      badgeSection = badgeSection + `![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)`;
    }
    if (badges.includes("Bootstrap")) {
      badgeSection = badgeSection + `![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)`;
    }
    if (badges.includes("Node.js")) {
      badgeSection = badgeSection + `![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)`;
    }
    if (include.includes("License")) {
      badgeSection = badgeSection + `${renderLicenseBadge(license)}`;
    }
    return badgeSection;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, include) {
  if (include.includes("License")) {
    return `## License
${renderLicenseLink(license)}`;
  } else {
    return ``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

${renderTableOfContentsSection(data.toc)}
${renderInstallationSection(data.toc)}
${renderUsageSection(data.toc)}
${renderFeaturesSection(data.toc)}
${renderTestsSection(data.toc)}
${renderBadgeSection(data.badges, data.license, data.toc)}
${renderCreditsSection(data.toc)}
${renderContributeSection(data.toc)}
${renderLicenseSection(data.license, data.toc)}
`;
}

module.exports = generateMarkdown;
