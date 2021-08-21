const license = {
  "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
}

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return (
      `![License: MIT](https://img.shields.io/badge/license-${license}-blue.svg)](https://opensource.org/licenses/${license}`
    )
    return ''
  }
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license!== "None") {
    return {
      
    }
  }
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
