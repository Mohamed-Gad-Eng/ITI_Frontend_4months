const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/chat", async (req, res) => {
    try {
        const { messages } = req.body;

        const openaiRes = await fetch(
            "https://api.openai.com/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                },
                body: JSON.stringify({
                    model: "gpt-4o-mini",
                    messages,
                    temperature: 0.7,
                    max_completion_tokens: 1000,
                }),
            }
        );

        const data = await openaiRes.json();

        // 🔍 DEBUG OUTPUT
        console.log("OpenAI raw response:", JSON.stringify(data, null, 2));

        if (!data.choices || !data.choices.length) {
            return res.status(500).json({
                error: "Invalid response from OpenAI",
                details: data,
            });
        }

        res.json({
            message: data.choices[0].message.content,
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Chat failed" });
    }
});

app.listen(3001, () => {
    console.log("Backend running on http://localhost:3001");
});
