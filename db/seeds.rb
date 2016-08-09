# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


# USERS
user1 = User.create({ email: 'user1@user.com', password: 'password' })
user2 = User.create({ email: 'user2@user.com', password: 'password' })
user3 = User.create({ email: 'user3@user.com', password: 'password' })
user4 = User.create({ email: 'user4@user.com', password: 'password' })
user5 = User.create({ email: 'user5@user.com', password: 'password' })



# CHANNELS
channel1 = Channel.create({title: 'Talk Radio', description: 'Channel1 description', author_id: user2.id})
channel2 = Channel.create({title: 'End Times', description: 'Channel2 description', author_id: user1.id})
channel3 = Channel.create({title: 'FAQ for You', description: 'Channel3 description', author_id: user2.id})
channel4 = Channel.create({title: 'Productivity', description: 'Channel4 description', author_id: user1.id})
channel5 = Channel.create({title: 'Illiteracy Inc.', description: 'Channel5 description', author_id: user4.id})
channel6 = Channel.create({title: 'I Drink Your Milkshake', description: 'Channel6 description', author_id: user5.id})


# USER_CHANNELS
# Channel 1
user_channel1 = UserChannel.create({user_id: user1.id, channel_id: channel1.id})
user_channel2 = UserChannel.create({user_id: user2.id, channel_id: channel1.id})

# Channel 2
user_channel3 = UserChannel.create({user_id: user2.id, channel_id: channel2.id})
user_channel4 = UserChannel.create({user_id: user1.id, channel_id: channel2.id})

# Channel 3
user_channel5 = UserChannel.create({user_id: user5.id, channel_id: channel3.id})
user_channel6 = UserChannel.create({user_id: user2.id, channel_id: channel3.id})

# Channel 4
user_channel7 = UserChannel.create({user_id: user1.id, channel_id: channel4.id})
user_channel8 = UserChannel.create({user_id: user3.id, channel_id: channel4.id})

# Channel 5
user_channel9 = UserChannel.create({user_id: user5.id, channel_id: channel5.id})
user_channel10 = UserChannel.create({user_id: user4.id, channel_id: channel5.id})

# Channel 6
user_channel11 = UserChannel.create({user_id: user5.id, channel_id: channel5.id})


# MESSAGES
#Channel 1
message1 = Message.create({user_id: user1.id, channel_id: channel1.id, body: "There was a 23% drop in temperature."})
message2 = Message.create({user_id: user2.id, channel_id: channel1.id, body: "That's almost 25%!"})
message3 = Message.create({user_id: user1.id, channel_id: channel1.id, body: "... That was one of the most worthless comments I've ever heard."})

#Channel 2
message4 = Message.create({user_id: user3.id, channel_id: channel2.id, body: "and ou are an uytter newb"})
message5= Message.create({user_id: user2.id, channel_id: channel2.id, body: "dude"})
message6 = Message.create({user_id: user2.id, channel_id: channel2.id, body: "how did that y move over like 12 characters"})

#Channel 3
message7 = Message.create({user_id: user5.id, channel_id: channel3.id, body: "can you guys see what I type? "})
message8 = Message.create({user_id: user2.id, channel_id: channel3.id, body: "no"})
message9 = Message.create({user_id: user5.id, channel_id: channel3.id, body: "How do I set it up so you can see it?"})

#Channel 4
message10 = Message.create({user_id: user4.id, channel_id: channel4.id, body: "do you know of any major organizations that are similar the CDC?"})
message11 = Message.create({user_id: user3.id, channel_id: channel4.id, body: "who?"})
message10 = Message.create({user_id: user4.id, channel_id: channel4.id, body: "center for disease control"})
message12 = Message.create({user_id: user3.id, channel_id: channel4.id, body: "i said WHO"})
message10 = Message.create({user_id: user4.id, channel_id: channel4.id, body: "what? i'm asking you"})
message12 = Message.create({user_id: user3.id, channel_id: channel4.id, body: "World Health Organization"})

#Channel 5
message13 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "I"})
message13 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "do"})
message13 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "not"})
message13 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "know"})
message13 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "where"})
message13 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "family"})
message13 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "doctors"})
message13 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "acquired"})
message13 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "illegibly"})
message13 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "perplexing"})
message13 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "handwriting;"})
message13 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "nevertheless,"})
message13 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "extraordinary"})
message13 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "pharmaceutical"})
message13 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "intellectuality,"})
message13 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "counterbalancing,"})
message13 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "indecipherability,"})
message13 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "transcendentalizes"})
message13 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "intercommunications"})
message13 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "incomprehensibleness."})
message13 = Message.create({user_id: user4.id, channel_id: channel5.id, body: "woah"})
message13 = Message.create({user_id: user4.id, channel_id: channel5.id, body: "*blinks*"})
