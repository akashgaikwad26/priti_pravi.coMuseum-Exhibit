const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");
const compression = require("compression");
const redis = require("redis");
const app = express();

app.use(express.json());
app.use(cors());
app.use(compression());

const pool = new Pool({
    user: "your_user",
    host: "localhost",
    database: "museum_db",
    password: "your_password",
    port: 5432,
});

const redisClient = redis.createClient();
redisClient.connect();

// Get artifacts with caching
app.get("/artifacts", async (req, res) => {
    try {
        const cachedData = await redisClient.get("artifacts");
        if (cachedData) return res.json(JSON.parse(cachedData));

        const { rows } = await pool.query("SELECT id, title, description FROM Artifacts LIMIT 10");
        redisClient.setEx("artifacts", 3600, JSON.stringify(rows));
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get quiz for an artifact
app.get("/quiz/:artifactId", async (req, res) => {
    try {
        const { artifactId } = req.params;
        const { rows } = await pool.query("SELECT * FROM Quizzes WHERE artifactId = $1", [artifactId]);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
