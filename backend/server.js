const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

app.get("/posts", async (req, res) => {

    try {
        const [response1, response2] = await Promise.all([
            axios.get('https://jsonplaceholder.typicode.com/posts'),
            axios.get('https://jsonplaceholder.typicode.com/photos')
        ]);

        const posts = response1.data;
        const photos = response2.data;

       
    
        const combinedData = posts.map((post, index) => {
            return { ...post, ...photos[index] };
        });

        res.json(combinedData);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});