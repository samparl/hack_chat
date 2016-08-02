QUESTIONS/COMMENTS
* Duplicate User -> Message connection in User/Message and UserMessage? Need UserMessage for Message -> Chat connection
* Can you delete messages?
* Decide locally or via API call that message has been read? Both? Notifications are user specific, not chat specific...UserChat?
* Maybe Chat/User/Message are connected via:
  * UserMessages - all messages connected with User -> NOTIFICATIONS INDEX!!! Many messages should be seen by many users. OriginatorID lives in Message as a BelongsTo Association. ViewIndex holds all the messages that should be SEEN
  * UserChat - all Users connect with Chat
  * ChatMessages - all Messages connected with Chat

* Message is connected to Chat, which is connected to User

* Index to track recipients of messages as well as originators?
* Notifications Index? Add when message is unseen by user, remove when message is seen?


ViewIndex connects Messages and UserIds. Filter by UserId. Filter by Message-ChatId (BelongsTo Association)


When you submit a message, set boolean value of Seen to true for your index.

Must manufacture ViewIndexes for all Users in Chat - is this a waste of processing power? Better way to store this information?
  * Create Message with UserId and ChatId
  * If successful, add ViewIndexes for all users that Chat "HasMany"

Use Chat HasMany to show ALL Chat Messages
Use ViewIndex to show notifications - Delete when seen, or set Seen value to true


When viewing a Chat -> fetch all messages with that ChatId from the store. Maybe store is ONLY currently visible chat? Send ChatId to backend and reset the store

If a user leaves a chat:
* Set all associated ViewIndex items "Seen" value to true, or Delete
* Soft delete or hard delete? Either delete UserChat item or create and set "Active" to false, much like with notifications
* Can I use React on the front end? Browser compatibility questions? JQuery/ajax calls?
* How can I save files and links to a website? Is there a chat formatting plugin I should use? Drag and drop file functionality in the chat?


View user profile (modal on click?)
File sharing and link sharing
