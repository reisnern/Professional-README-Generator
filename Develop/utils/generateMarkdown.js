const license = {
  "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
}

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return ''
  }
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  
}


// If there is no license, return an empty string
function renderLicenseSection(license) {

}

function generateMarkdown(data) {
  return `# ${data.title}
  ${license[data.license] || ""}
`;
}

module.exports = generateMarkdown;
