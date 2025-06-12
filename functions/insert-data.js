import "./database.js";
import {PostModel} from "./models.js";
import posts from "./posts.json" with {type: "json"};

PostModel.insertMany(posts).then(() => {
    console.log("Data inserted successfully");
}).catch(err => {
    console.error("Failed to insert data", err);
});

