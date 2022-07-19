// Returns a license badge based on which license is passed into the function.
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

// Returns a license link based on which license is passed into the function.
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

// Returns a table of contents with different information depending on which sections are selected for inclusion in the README, if a table of contents is not selected then an empty string is returned instead.
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
    if (include.includes("Questions")) {
      tableOfContents = tableOfContents + `- [Questions](#questions)
`;
    }
    if (include.includes("License")) {
      tableOfContents = tableOfContents + `- [License](#license)
`;
    }
    return tableOfContents;
  }
}

// Returns a deployed link section from github username and project title inputs, if a deployed link section is not included then an empty string is returned instead.
function renderDeployedLink(github, title, include) {
  if (include.includes("Deployed Link")) {
    return `### Deployed Link
[${title}](https://${github.toLowerCase()}.github.io/${title}/)
`;
  } else {
    return ``;
  }
}

// Returns an installation section from user input, if an installation section is not included then an empty string is returned instead.
function renderInstallationSection(installation, include) {
  if (include.includes("Installation")) {
    return `## Installation
${installation}
`;
  } else {
    return ``;
  }
}

// Returns a usage section from user input, if a usage section is not included then an empty string is returned instead.
function renderUsageSection(usage, include) {
  if (include.includes("Usage")) {
    return `## Usage
${usage}
`;
  } else {
    return ``;
  }
}

// Returns a features section from user input, if a features section is not included then an empty string is returned instead.
function renderFeaturesSection(features, include) {
  if (include.includes("Features")) {
    return `## Features
${features}
`;
  } else {
    return ``;
  }
}

// Returns a tests section from user input, if a tests section is not included then an empty string is returned instead.
function renderTestsSection(tests, include) {
  if (include.includes("Tests")) {
    return `## Tests
${tests}
`;
  } else {
    return ``;
  }
}

// Returns a credits section from user input, if a credits section is not included then an empty string is returned instead.
function renderCreditsSection(credits, include) {
  if (include.includes("Credits")) {
    return `## Credits
${credits}
`;
  } else {
    return ``;
  }
}

// Returns a contribute section from user input, if a contribute section is not included then an empty string is returned instead.
function renderContributeSection(contribute, include) {
  if (include.includes("How to Contribute")) {
    return `## How to Contribute
${contribute}
`;
  } else {
    return ``;
  }
}

// Returns a questions section from github username, linkedin username, and email inputs, if a questions section is not included then an empty string is returned instead.
function renderQuestionsSection(github, linkedin, email, include) {
  if (include.includes("Questions")) {
    return `## Questions
If you have any additional questions, feel free to reach out.
- [Github](https://github.com/${github})
- [LinkedIn](https://www.linkedin.com/in/${linkedin}/)
- Email: ${email}
`;
  } else {
    return ``;
  }
}

// Returns a badges section with different content depending on which badges are selected for inclusion plus the selected license, if there is no selected license and no selected badges then an empty string is returned instead.
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

// Returns the license section using the renderLicenseLink function, if no license is selected then it returns an empty string instead.
function renderLicenseSection(license, include) {
  if (include.includes("License")) {
    return `## License
${renderLicenseLink(license)}`;
  } else {
    return ``;
  }
}

// Generates markdown for README.
function generateMarkdown(data) {
  return `# ${data.title}
${data.summary}

## Description
${data.description}

${renderDeployedLink(data.github, data.title, data.toc)}
${renderTableOfContentsSection(data.toc)}
${renderInstallationSection(data.installation, data.toc)}
${renderUsageSection(data.usage, data.toc)}
${renderFeaturesSection(data.features, data.toc)}
${renderTestsSection(data.tests, data.toc)}
${renderBadgeSection(data.badges, data.license, data.toc)}
${renderCreditsSection(data.credits, data.toc)}
${renderContributeSection(data.contribute, data.toc)}
${renderQuestionsSection(data.github, data.linkedin, data.email, data.toc)}
${renderLicenseSection(data.license, data.toc)}
`;
}

// Exports generated markdown text as a module.
module.exports = generateMarkdown;
