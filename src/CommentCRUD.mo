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


actor CommentCRUD {

  // Existing CRUD operations...

  public shared likeComment(commentId: Nat, userId: Nat) : async () {
    // Implementation to allow a user to like a comment
  };
  
  public shared replyToComment(parentCommentId: Nat, userId: Nat, content: Text) : async () {
    // Implementation to allow a user to reply to a comment
  };
  
  public shared reportComment(commentId: Nat, userId: Nat, reason: Text) : async () {
    // Implementation to allow a user to report a comment
  };
};
