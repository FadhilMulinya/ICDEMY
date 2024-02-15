import article "article";

actor ArticleCRUD {

  public shared createArticle(title : Text, content : Text, categoryId : Nat) : async () -> article.Article {
    // Implementation to create a new article
  };

  public shared queryArticle(id : Nat) : async ?article.Article {
    // Implementation to query an article
  };

  public shared updateArticle(id : Nat, title : Text, content : Text, categoryId : Nat) : async () -> article.Article {
    // Implementation to update an article
  };

  public shared deleteArticle(id : Nat) : async () {
    // Implementation to delete an article
  };

  public shared searchArticles(query: Text) : async [article.Article] {
    // Implementation to search articles based on the given query
  };
};

actor ArticleCRUD {

  // Existing CRUD operations...

  public shared searchArticles(query: Text) : async [article.Article] {
    // Implementation to search articles based on the given query
  };
  
  public shared likeArticle(articleId: Nat, userId: Nat) : async () {
    // Implementation to allow a user to like an article
  };
  
  public shared commentOnArticle(articleId: Nat, userId: Nat, content: Text) : async () {
    // Implementation to allow a user to comment on an article
  };
  
  public shared shareArticle(articleId: Nat, userId: Nat) : async () {
    // Implementation to allow a user to share an article
  };
  
  public shared rateArticle(articleId: Nat, userId: Nat, rating: Nat) : async () {
    // Implementation to allow a user to rate an article
  };
};
