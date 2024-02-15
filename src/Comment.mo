// src/Comment.mo
module {
  // Define User type directly
  type User = {
    id: Nat;
    username: Text;
    email: Text;
    // Add other attributes as needed
  };

  // Define Article type directly
  type Article = {
    id: Nat;
    title: Text;
    content: Text;
    author: User;
    // Add other attributes as needed
  };

  // Define Comment type
  type Comment = {
    id: Nat;
    content: Text;
    author: User;
    article: Article;
    // Add other attributes as needed
  };
};
