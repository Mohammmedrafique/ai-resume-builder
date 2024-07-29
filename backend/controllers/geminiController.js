// // // controllers/geminiController.js
// // const axios = require('axios');

// // const GEMINI_API_ENDPOINT = 'https://gemini.googleapis.com/v1/suggestions';
// // const API_KEY = process.env.GEMINI_API_KEY;

// // exports.getSuggestions = async (req, res) => {
// //   const { jobDescription } = req.body;

// //   try {
// //     const response = await axios.post(
// //       GEMINI_API_ENDPOINT,
// //       {
// //         prompt: `Improve a resume based on the following job description: ${jobDescription}`,
// //         maxTokens: 150,
// //       },
// //       {
// //         headers: {
// //           Authorization: `Bearer ${API_KEY}`,
// //           'Content-Type': 'application/json',
// //         },
// //       }
// //     );

// //     res.json(response.data.suggestions || []);
// //   } catch (error) {
// //     console.error('Error fetching suggestions:', error);
// //     res.status(500).json({ error: 'Error fetching suggestions' });
// //   }
// // };
// // controllers/geminiController.js
// const { GoogleGenerativeAI } = require("@google/generative-ai");

// // Access your API key as an environment variable (see "Set up your API key" above)
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// exports.getSuggestions = async (req, res) => {
//   const { jobDescription, resumeSummary } = req.body;

//   try {
//     // For text-only input, use the gemini-pro model
//     const model = genAI.getGenerativeModel({ model: "gemini-pro" });

//     const prompt = `Given the following job description and resume summary, provide 3-5 specific suggestions to improve the resume:

// Job Description:
// ${jobDescription}

// Resume Summary:
// ${resumeSummary}

// Please format your response as a JSON array of strings, each containing a specific suggestion.`;

//     const result = await model.generateContent(prompt);
//     const response = await result.response;
//     const text = response.text();

//     // Parse the response text as JSON
//     const suggestions = JSON.parse(text);

//     res.json({ suggestions });
//   } catch (error) {
//     console.error("Error fetching suggestions:", error);
//     res
//       .status(500)
//       .json({ error: "Error fetching suggestions", details: error.message });
//   }
// };
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

exports.getSuggestions = async (req, res) => {
  const { resumeSummary } = req.body; // Only get resumeSummary from the request

  try {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `Given the following resume summary, provide 3-5 specific suggestions to improve the resume:

Resume Summary:
${resumeSummary}

Please format your response as a JSON array of strings, each containing a specific suggestion.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text(); // Ensure this is awaited

    // Parse the response text as JSON
    const suggestions = JSON.parse(text);

    res.json({ suggestions });
  } catch (error) {
    console.error("Error fetching suggestions:", error);
    res
      .status(500)
      .json({ error: "Error fetching suggestions", details: error.message });
  }
};
