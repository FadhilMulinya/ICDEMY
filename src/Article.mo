// src/Article.mo
module {
  // Define User type directly
  type User = {
    id: Nat;
    username: Text;
    email: Text;
    // Add other attributes as needed
  };

  // Define Article type
  type Article = {
    id: Nat;
    title: Text;
    content: Text;
    author: User;
    // Add other attributes as needed
  };
};
