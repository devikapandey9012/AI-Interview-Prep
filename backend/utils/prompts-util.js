export const questionAnswerPrompt = (
  role,
  experience,
  topicsToFocus,
  numberOfQuestions,
) => {
  return `
You are a senior software engineer conducting a technical interview.

Generate exactly ${numberOfQuestions} interview questions.

Profile:
- Role: ${role}
- Experience: ${experience} years
- Topics to focus on: ${topicsToFocus || "general topics for this role"}

STRICT INSTRUCTIONS:
- Return ONLY valid JSON.
- Do NOT include any explanations, markdown, or extra text.
- Do NOT wrap the response in \`\`\` or any formatting.
- The output must be a pure JSON array.

Each item in the array must follow this structure:
{
  "question": "string",
  "answer": "string (markdown formatted)"
}

ANSWER FORMATTING RULES:
- Use **bold** for key terms
- Use bullet points or numbered lists where appropriate
- Include short explanations in paragraphs
- Include a code block using \`\`\`js if relevant (max 10 lines)
- Keep answers structured and readable
- Avoid long walls of text

Example format (structure only, do not copy content):

[
  {
    "question": "What is REST API?",
    "answer": "**Definition:** ...\\n\\n**Key points:**\\n- ...\\n- ...\\n\\n\`\`\`js\\n// example\\n\`\`\`"
  }
]
`;
};

export const conceptExplainPrompt = (question) => {
  return `
You are a senior developer explaining concepts to a junior developer.

Explain the following interview question:
"${question}"

STRICT INSTRUCTIONS:
- Return ONLY valid JSON
- Do NOT include markdown, backticks, or extra text outside JSON
- Do NOT wrap the response in code blocks

Output format:
{
  "title": "Short concept title (max 5 words)",
  "explanation": "Markdown formatted explanation as a string"
}

EXPLANATION RULES:
- Start with a **one-line definition** in bold
- Explain in 2–3 short paragraphs
- Use bullet points where needed
- Include a small code example (optional, under 10 lines) using \`\`\`js
- End with a **Key Takeaway** sentence

Example structure (do not copy content):

{
  "title": "Event Loop in JS",
  "explanation": "**Definition:** ...\\n\\nParagraphs...\\n\\n**Key Takeaway:** ..."
}
`;
};