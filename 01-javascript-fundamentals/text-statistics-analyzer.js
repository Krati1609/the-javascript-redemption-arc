const analyzeText = (text) => {
  const title = "TEXT ANALYSIS REPORT";
  // 1. Calculate character count
    const words = text.split(" ");
  // 2. Calculate word count using .split(" ")
  // 3. Calculate space count
  // 4. Check if text length is greater than 50 (boolean)

    const report = `Report Title: ${title}
    Character count: ${text.length}
    Word count: ${words.length}
    Space count: ${words.length - 1}
    Check length: ${text.length > 50}`;
    console.log(report);

  // Print formatted report using template literals: `... ${variable} ...`
};

// Test your function!
const myText = "JavaScript in 7 days is going to be intense!";
analyzeText(myText);