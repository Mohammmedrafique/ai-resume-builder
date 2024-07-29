// controllers/geminiController.js
const axios = require('axios');

const GEMINI_API_ENDPOINT = 'https://gemini.googleapis.com/v1/suggestions';
const API_KEY = process.env.GEMINI_API_KEY;

exports.getSuggestions = async (req, res) => {
  const { jobDescription } = req.body;

  try {
    const response = await axios.post(
      GEMINI_API_ENDPOINT,
      {
        prompt: `Improve a resume based on the following job description: ${jobDescription}`,
        maxTokens: 150,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    res.json(response.data.suggestions || []);
  } catch (error) {
    console.error('Error fetching suggestions:', error);
    res.status(500).json({ error: 'Error fetching suggestions' });
  }
};
