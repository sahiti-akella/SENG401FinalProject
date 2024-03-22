const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: "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",
});

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/chat", cors(), async (req, res) => {
  const { bookName } = req.body;
  const prompt = `Give me 5 recommendations for a book/tv series with a similar plot or theme as ${bookName} and give a two sentence description for each: `;

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    temperature: 1,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  console.log(
    "response:" + JSON.stringify(response.choices[0].message.content)
  );
  res.json(response.choices[0].message.content);
});

const PORT = 8020;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
