# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## Message
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
channel_id  | integer   | not null, foreign key (references channels), indexed

## Channel
column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
author_id        | integer   | not null, foreign key (references users), indexed
user_channel_id  | integer   | not null, foreign key (references UserChannel), indexed
description      | string    |

## Notification (many-to-many messages and users)
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
viewer_id   | integer   | not null, foreign key (references users), indexed
message_id  | integer   | not null, foreign key (references messages), indexed
date        | datetime  | not null
type        | string    | not null
prev_id     | integer   | foreign key (references reminders), indexed

## UserChannel (many-to-many users and channels)
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
viewer_id   | integer   | not null, foreign key (references users), indexed
message_id  | integer   | not null, foreign key (references messages), indexed
date        | datetime  | not null
type        | string    | not null
prev_id     | integer   | foreign key (references reminders), indexed
