const getCategories = (rssFeedArray) => {
    const categories = new Set();
    rssFeedArray.forEach((item) => {
      item.categories.forEach((category) => {
        categories.add(category);
      });
    });
    return categories;
  };
  
const getPostsByCategory = (posts, category) => {
    return posts.filter((post) => post.categories.includes(category));
};

const getPostsByTitle = (posts, title) => {
    return posts.filter((post) =>
        post.title.toLowerCase().includes(title.toLowerCase())
    );
};
  
module.exports = {
  getCategories,
  getPostsByCategory,
  getPostsByTitle,
};