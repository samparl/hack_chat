FEATURES
* User Management
  * Create Account -> Join a Channel
    * Apply to Channel with Email
    * Accept Applicant?
  * Sign In
    * Display Login Errors
  * Sign Out
  * Sign Into Multiple Channels
  * Switch Channels
* Channel
  * Join
  * Leave
  * Add Message
    * Add text content
    * Add links
    * Add emoticon
    * Add files
  * View Message
    * Update chat notifications
    * Share message
    * Add reaction
    * Show message actions(?)
  * See History
    * Save location in chat? Retrieve by day or by number of messages?
  * Search for message content
  * Search Organization for Channel
* One-on-One Channel
  * Inherit general channel characteristics
  * Search Organization for User
* Share Websites
* Share Documents
* Notifications
  * Group Channel
    * Unread @group Message: bolded channel name
    * Unread @username Message: bolded, unread count
  * One-on-One
    * Unread Messages: bolded, display unread count
    * User Off-line: italicized
  * Seen Messages Lose Notifications

DATA ARCHITECTURE
Backend
* Basic Models
  * User
    * Id
    * Username
    * Email
    * Password Digest
    * HasMany:
      * Messages
      * ViewIndexes      
  * Message
    * Id
    * UserId
    * ChannelId
    * Content
    * Created Date
    * Updated Date
    * BelongsTo:
      * User
      * Channel
    * HasMany:
      * ViewerIndexes
  * Channel
    * Id
    * UserChatId
    * HasMany:
      * Messages
* Indexes  
  * UserChannel
    * Id
    * ChannelId
    * UserId
    * Active (Boolean, default true)
    * BelongsTo:
      * User
      * Channel
  * ViewIndex
    * Id
    * ViewerId (user)
    * MessageId
    * Seen (Boolean, default false)

FRONTEND
* Stores
  * Messages - Fetching criteria? Maybe 30 messages prior to specified date.
  * Notifications
* Components
  * Navbar
  * Login Form
  * Signup Form
  * Search Form
  * HackChat
  * ChannelIndex
    * Description: List user's chats in table on the left
    * State:
      * Props:
        * Channel Name
    * ChatIndexItem
      * Description: Table list item causing the Chat Screen to re-render.
      * Props:
        * Channel Name
      * State:
        * Notifications -> See feature logic
  * MessageIndex
    * Description: The list of messages viewable in a chat
    * Methods
      * render
      * getInitialState
      * onChange
      * componentDidMount
      * componentWillUnmount
    * MessageIndexItem
    * Description: A given message in the MessageIndex
    * Props:
      * User
      * Message content
* Special Message Types
  * System Notification ("User has joined the chat", "User has left the chat")

ROUTES
* **Component** App, **path** '/'
  * **Component** ChatIndex, **path** '/chats'
    * **Component** MessageIndex, **path** '/messages'
* **Component** Login Form, **path** 'login'
* **Component** Signup Form, **path** 'signup'

PROJECT PLAN
* Add/Remove Users - .5 Days (Backend)
* Authenticate User Sign In - .5 Days (Backend)
* Chat Page Layout - 1 day
* Allow Channel Chat - 1 day
  * Create Channel and UserChat Models
  * Create ChatIndex and ChatIndexItem Components
  * Integrate ChatIndex with HackChat full screen
  * Chat shows up in chat index!
* Navigate Chats
* Use Chat
  * Create Message Model
  * Create MessageIndex and MessageIndexItem Components
  * Add Logic Reset Message (all messages)
    * Optional: View Only Messages Subset (see below)
  * Invite Users
* Leave Chat
* Join Chat:
  * Accept Invitation
  * Search for Group Chat
* View Only Messages Subset
  * Restructure fetchMessages query
    * Load 30 (?) most recent messages on entering chat for the first time
    * When re-entering chat display all messages from saved location until most recent
  * Save location and message store when leaving chat
