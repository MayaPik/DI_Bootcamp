

const express = require('express');
const app = express();

const {
    getCategories,
    getPostsByCategory,
    getPostsByTitle,
} = require("./modules");

app.set("view engine", "ejs");
app.set("views", __dirname + "/public/pages");

app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));

app.get("/", async (req, res) => {
    try {
      const posts = await getPosts();
      res.render("index", { posts });
    } catch (err) {
      console.log(err);
    }
});

app.listen(3005, () => console.log('Example app listening on port 3005!'));

let Parser = require('rss-parser');
let parser = new Parser();


const getPosts = async () => {
    const feed = await parser.parseURL("https://www.thefactsite.com/feed/");
    return feed["items"];
};

app.get("/search", async (req, res) => {
    try {
      const posts = await getPosts();
      const categories = getCategories(posts);
      res.render("search", { categories });
    } catch (err) {
      console.log(err);
    }
});
  
app.post("/search/category", async (req, res) => {
    const posts = await getPosts();
    const categories = getCategories(posts);
    const categorySelected = req.body.categorySelect;
    const filteredPosts = getPostsByCategory(posts, categorySelected);
    res.render("search", { filteredPosts, categories });
});
  
app.post("/search/title", async (req, res) => {
    const posts = await getPosts();
    const keyword = req.body.searchKeyword;
    const categories = getCategories(posts);
    const filteredPosts = getPostsByTitle(posts, keyword);
    console.log(filteredPosts);
    res.render("search", { filteredPosts, categories });
});



