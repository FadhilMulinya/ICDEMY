module {
  // Overview
  documentation: """
    ${translate("This module provides an overview of the data model and its interaction with the UI.")}
  """;

  // Data Model Overview
  documentation: """
    ${translate("The data model consists of the following entities:")}
    - ${translate("User")}: ${translate("Represents a user in the system with attributes such as id, username, and email.")}
    - ${translate("Article")}: ${translate("Represents an article with attributes such as id, title, content, author, and categories.")}
    - ${translate("Comment")}: ${translate("Represents a comment on an article with attributes such as id, content, author, and article.")}
    - ${translate("Category")}: ${translate("Represents a category for articles with attributes such as id and name.")}
  """;

  // UI Interaction Overview
  // Ignoring the error on line 3
  // documentation: """
  //   ${translate("The UI interacts with the data model as follows:")}
  //   - ${translate("Users can create, view, edit, and delete articles.")}
  //   - ${translate("Users can view articles along with their comments.")}
  //   - ${translate("Users can add comments to articles.")}
  //   - ${translate("Users can browse articles by category.")}
  //   - ${translate("Users can view user profiles and their contributed articles.")}
  // """;
};

