const fs = require("fs");

function generateMarkdown(questionData) {
  const {
    title,
    description,
    example,
    topicsCovered,
    hints,
    solution,
    explanation,
  } = questionData;

  let markdown = `\` ${title}\`\n\n`;
  markdown += ` ${description}\n\n`;
  markdown += `\`Example:\`\n\n\`\`\`javascript\n${example}\n\`\`\`\n\n`;

  markdown += `\`Topics Covered:\`\n`;
  topicsCovered.forEach((topic, index) => {
    markdown += `${topic}`;
    if (index < topicsCovered.length - 1) {
      markdown += ", ";
    }
  });
  markdown += `\n \n`;

  markdown += `**Hints:**\n`;
  hints.forEach((hint, index) => {
    markdown += `- [${hint.title}](${hint.link})`;
    if (index < hints.length - 1) {
      markdown += ", ";
    }
  });
  markdown += `\n\n`;

  markdown += `<details>\n  <summary>Solution</summary>\n\n`;
  markdown += `### Let's look at the solution:\n\n\`\`\`javascript\n${solution}\n\`\`\`\n\n`;
  markdown += `**Explanation:**\n\n${explanation}\n`;
  markdown += `</details>\n \n`;
  markdown += `---- \n`;

  return markdown;
}

// Question Data
const questionData = {
  title: "Question 1: Convert a string to a valid number",

  description:
    'Write a function to convert a string containing a number (e.g., "123") into an actual number. If it is not a valid number, return NaN.',
  example: `
function convertToNumber(str) {
   // Your code here
}

console.log(convertToNumber("123")); // 123
console.log(convertToNumber("abc")); // NaN
  `,

  topicsCovered: ["Number methods i.e. Number()", "isNaN()"],

  hints: [
    {
      title: "isNaN()",
      link: "https://www.w3schools.com/jsref/jsref_isnan.asp",
    },
    {
      title: "JS Numbers",
      link: "https://www.w3schools.com/jsref/jsref_number.asp",
    },
  ],

  solution: `
function convertToNumber(str) {
    const number = Number(str); // Try to convert the string to a number
    return isNaN(number) ? NaN : number; // If conversion fails, return NaN
}

console.log(convertToNumber("123"));  // 123
console.log(convertToNumber("abc"));  // NaN
console.log(convertToNumber("12.34")); // 12.34
  `,

  explanation: `
- Number(str): tries to convert the string to a number.
- isNaN(number): checks if the result is not a valid number and returns NaN if it's invalid.
  `,
  
};

// Generate Markdown
const markdown = generateMarkdown(questionData);

// Save Markdown to a file
fs.appendFileSync("readme.md", markdown, "utf8");

console.log("Markdown file saved as question1.md");
