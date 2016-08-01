# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.

## Authorization Cycles
### Session API Request Actions
* `signUp`
0. Invoked from SignupForm onSubmit
0. POST /api/users is called
0. receiveCurrentUser is the success callback

* `logIn`
0. Invoked from LoginForm onSubmit
0. POST /api/session is called
0. receiveCurrentUser is the success callback

* `logOut`
0. Invoked from Logout Button (navbar) onSubmit
0. DELETE /api/session is called

* `fetchCurrentUser`
0. Invoked from App in componentDidMount
0. GET /api/session is called
0. receiveCurrentUser is the success callback

### Session API Response Actions
* `receiveCurrentUser`
0. Invoked from API callback
0. Stores `_currentUser` in CurrentUserStore

* `removeCurrentUser`
0. Invoked from API callback
0. Removes `_currentUser` from CurrentUserStore


## Channel Cycles
### Channel API Request Actions
* `fetchChannels`
0. Invoked from App on componentDidMount
0. GET /api/channels
0. receiveChannels is the success callback

* `fetchSingleChannel`
0. Invoked from ChannelsForm onSubmit
0. receiveSingleChannel is the success callback

* `createChannel`
0. Invoked from ChannelsForm in Channels Modal onSubmit
0. CREATE /api/channels
0. receiveSingleChannel is the success callback

### Channel API Response Actions
* `receiveChannels`
0. Invoked from API callback
0. ChannelStore updates `_channels` and emits change

* `receiveSingleChannel`
0. Invoked from API callback
0. ChannelStore updates `_channels[:id]` and emits change

## Message Cycles
### Message API Request Actions
* fetchMessages
0. Invoked from MessagesIndex on componentDidMount
0. GET /api/:channel_id/messages
0. receiveMessages is the success callback
* createMessage
0. Invoked from MessageForm onSubmit
0. POST /api/:channel_id/messages
0. receieveSingleMessage is the callback

### Message API Response Actions
* receiveMessages
0. Invoked from API callback
0. MessagesStore updates `_messages` and emits change
* receieveSingleMessage is the callback

## Notifications Cycles
### Notifications API Request Actions
* fetchAllNotifications
0. Invoked from ChannelIndex on componentDidMount
0. GET /api/notifications
0. receiveAllNotifications is the callback
* removeNotification
0. Invoked from MessageIndexItem on componentDidMount
0. DELETE /api/notifications/:notification_id
0. removeNotification is the success callback

### Notifications API Response Actions
* receiveAllNotifications
* Invoked from API callback
* NotificationsStore updates `_notifications`
* NotificationsStore emits change to ChannelIndex
* removeNotification
* Invoked from API callback
* NotificationsStore removes notification from `_notifications`
* NotificationsStore emits change to ChannelIndex

## Store Listeners
* NotificationsStore Listener (in ChannelIndex)
* MessagesStore Listener (in MessagesIndex))
* ChannelsStore Listener (in ChannelIndex)
