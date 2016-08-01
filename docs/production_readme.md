# HackChat

[HackChat live][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

HackChat is a full-stack web application inspired by Slack.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Flux architectural framework on the frontend.  

## Features & Implementation

 SlackChat is a single-page application built using React.js on a Flux architecture with Ruby on rails serving the backend. The application manages sessions by listening to the SessionStore for the current user, whose information is kept privately in the backend and accessed via an API call to `SessionsController#get_user`.


### Channel index

The user can subscribe to any number of channels, which are associated on the backend via the UserChannel table, facilitating a many-to-many relationship. The users subscribed channels are fetched from this table and rendered in the Channel Index, which further serves as a set of links allowing the user access to the channels Message Index.

### Message Index

Messages are associated with channel_id on the backend, creating a BelongsTo relationship. Messages are then fetched by querying the nested message index action `/api/:channel_id/messages`. New messages are added with a `CREATE` call via a RESTful API.

On the front end, relevant messages are kept in the MessagesStore and refreshed regularly in a live connection facilitated by websockets, or when the user changes channels from the channel index.

### Notifications

Notifications are unique to a user and a message, and are saved in a Notifications table on the backend which connects user_id and message_id information. Every new message belongs to a channel, and updates the Notifications table for every user associated with that channel. When a message is loaded in a MessageIndexItem in a user's browser, any notification pertaining to that user_id and that message_id is removed from the Notifications table on the backend and the NotificationsStore is updated on the frontend.

The NotificationsStore and the MessagesStore are both kept up to date using a websocket live connection between server and client.

## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project.  The next steps for FresherNote are outlined below.

### Search

Users should be able to search messages, user profiles and channels. I plan to build out this functionality natively.

### File Upload

Users should be able to upload files to their chats with an easy drag-and-drop interface.
