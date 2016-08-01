## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

FRONTEND
* **Stores**
  * Messages - Fetching criteria? Maybe 30 messages prior to specified date.
  * Notifications
* **Components**
  * **Navbar**
  * **Login Form**
  * **Signup Form**
  * **Search Form**
  * **HackChat**
  * **ChannelIndex**
    * Description: List user's channels in index on the left
    * State:
      * Props:
        * Channel Name
    * ChatIndexItem
      * Description: Table list item causing the Channel Screen to re-render.
      * Props:
        * Channel Name
      * State:
        * Notifications -> See feature logic
  * **MessageIndex**
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
* **Special Message Types**
  * System Notification ("User has joined the chat", "User has left the chat")


## Routes

* **component:** `App` **path:** `/`
  * **component** `LoginForm` **path:** /login
  * **component** `SignupForm` **path:** /signup
  * **component:** `NotesIndex` **path:** index
  * **component:** `NotesIndex` **path:** `notebooks/:notebookId`
    * **component:** `NoteDetail` **path:** `notes/:noteId`
  * **component:** `NotesIndex` **path:** none
    * **component:** `NoteDetail` **path:** `notes/:noteId`

For Routes that have no `notebookId`, `NotesIndex` will render all
notes.
