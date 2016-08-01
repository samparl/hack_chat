# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Channels

- `GET /api/channels`
  - Notes index/search
  - accepts `channel_name` query param to list channel by name
- `POST /api/channels`
- `GET /api/channel/:id`

### Messages

- `GET /api/:channel_id/messages`
- `POST /api/:channel_id/messages`
- `GET /api/:channel_id/messages/:id`

### Notifications

- A channels notifications will be included in the channel index
- `GET /api/notifications`
  - includes query param for user in Notificaitons
- `POST /api/notifications/:message_id/`: add notification for unread message
  - notification will be created for every user currently associated with a message's channel
- `DELETE /api/notifications/:message_id`
  - notification will be removed upon rendering of MessageIndexItem for a given user
