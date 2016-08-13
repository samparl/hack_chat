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



# PUBLIC CHANNELS
channel1 = Channel.create({name: 'Talk Radio', description: 'Channel1 description', author_id: user2.id})
channel2 = Channel.create({name: 'End Times', description: 'Channel2 description', author_id: user1.id})
channel3 = Channel.create({name: 'FAQ for You', description: 'Channel3 description', author_id: user2.id})
channel4 = Channel.create({name: 'Productivity', description: 'Channel4 description', author_id: user1.id})
channel5 = Channel.create({name: 'Illiteracy Inc.', description: 'Channel5 description', author_id: user4.id})
channel6 = Channel.create({name: 'I Drink Your Milkshake', description: 'Channel6 description', author_id: user5.id})

# DIRECT CHANNELS
channel7 = Channel.create({name: "#{user1.id}_#{user2.id}", primary_user_id: user1.id, secondary_user_id: user2.id, description: 'Direct channel', author_id: user1.id, direct: true})
channel8 = Channel.create({name: "#{user1.id}_#{user3.id}", primary_user_id: user1.id, secondary_user_id: user3.id, description: 'Direct channel', author_id: user1.id, direct: true})
channel9 = Channel.create({name: "#{user1.id}_#{user4.id}", primary_user_id: user1.id, secondary_user_id: user4.id, description: 'Direct channel', author_id: user1.id, direct: true})
channel10 = Channel.create({name: "#{user1.id}_#{user5.id}", primary_user_id: user1.id, secondary_user_id: user5.id, description: 'Direct channel', author_id: user1.id, direct: true})
channel11 = Channel.create({name: "#{user2.id}_#{user3.id}", primary_user_id: user2.id, secondary_user_id: user3.id, description: 'Direct channel', author_id: user2.id, direct: true})
channel12 = Channel.create({name: "#{user2.id}_#{user4.id}", primary_user_id: user2.id, secondary_user_id: user4.id, description: 'Direct channel', author_id: user2.id, direct: true})
channel13 = Channel.create({name: "#{user2.id}_#{user5.id}", primary_user_id: user2.id, secondary_user_id: user5.id, description: 'Direct channel', author_id: user2.id, direct: true})
channel14 = Channel.create({name: "#{user3.id}_#{user4.id}", primary_user_id: user3.id, secondary_user_id: user4.id, description: 'Direct channel', author_id: user3.id, direct: true})
channel15 = Channel.create({name: "#{user3.id}_#{user5.id}", primary_user_id: user3.id, secondary_user_id: user5.id, description: 'Direct channel', author_id: user3.id, direct: true})
channel16 = Channel.create({name: "#{user4.id}_#{user5.id}", primary_user_id: user4.id, secondary_user_id: user5.id, description: 'Direct channel', author_id: user4.id, direct: true})


# USER_CHANNELS
# PUBLIC CHANNELS
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

# DIRECT CHANNELS
channel7.users << [user1, user2]
channel8.users << [user1, user3]
channel9.users << [user1, user4]
channel10.users << [user1, user5]
channel11.users << [user2, user3]
channel12.users << [user2, user4]
channel13.users << [user2, user5]
channel14.users << [user3, user4]
channel15.users << [user3, user5]
channel16.users << [user4, user5]


# MESSAGES
# Channel 1
message1 = Message.create({user_id: user1.id, channel_id: channel1.id, body: "There was a 23% drop in temperature."})
message2 = Message.create({user_id: user2.id, channel_id: channel1.id, body: "That's almost 25%!"})
message3 = Message.create({user_id: user1.id, channel_id: channel1.id, body: "... That was one of the most worthless comments I've ever heard."})

# Channel 2
message4 = Message.create({user_id: user3.id, channel_id: channel2.id, body: "and ou are an uytter newb"})
message5= Message.create({user_id: user2.id, channel_id: channel2.id, body: "dude"})
message6 = Message.create({user_id: user2.id, channel_id: channel2.id, body: "how did that y move over like 12 characters"})

# Channel 3
message7 = Message.create({user_id: user5.id, channel_id: channel3.id, body: "can you guys see what I type? "})
message8 = Message.create({user_id: user2.id, channel_id: channel3.id, body: "no"})
message9 = Message.create({user_id: user5.id, channel_id: channel3.id, body: "How do I set it up so you can see it?"})

# Channel 4
message10 = Message.create({user_id: user4.id, channel_id: channel4.id, body: "do you know of any major organizations that are similar the CDC?"})
message11 = Message.create({user_id: user3.id, channel_id: channel4.id, body: "who?"})
message12 = Message.create({user_id: user4.id, channel_id: channel4.id, body: "center for disease control"})
message13 = Message.create({user_id: user3.id, channel_id: channel4.id, body: "i said WHO"})
message14 = Message.create({user_id: user4.id, channel_id: channel4.id, body: "what? i'm asking you"})
message15 = Message.create({user_id: user3.id, channel_id: channel4.id, body: "World Health Organization"})

# Channel 5
message16 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "I"})
message17 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "do"})
message18 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "not"})
message19 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "know"})
message20 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "where"})
message21 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "family"})
message22 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "doctors"})
message23 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "acquired"})
message24 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "illegibly"})
message25 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "perplexing"})
message26 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "handwriting;"})
message27 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "nevertheless,"})
message28 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "extraordinary"})
message29 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "pharmaceutical"})
message30 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "intellectuality,"})
message31 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "counterbalancing,"})
message32 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "indecipherability,"})
message33 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "transcendentalizes"})
message34 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "intercommunications"})
message35 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "incomprehensibleness."})
message36 = Message.create({user_id: user4.id, channel_id: channel5.id, body: "woah"})
message37 = Message.create({user_id: user4.id, channel_id: channel5.id, body: "*blinks*"})

# DIRECT CHANNELS
channel7.messages.create({user_id: user1.id, body: "Don't get me started you fool!"})
channel8.messages.create({user_id: user1.id, body: "Don't get me started you fool!"})
channel9.messages.create({user_id: user1.id, body: "Don't get me started you fool!"})
channel10.messages.create({user_id: user1.id, body: "Don't get me started you fool!"})
channel11.messages.create({user_id: user2.id, body: "Don't get me started you fool!"})
channel12.messages.create({user_id: user2.id, body: "Don't get me started you fool!"})
channel13.messages.create({user_id: user2.id, body: "Don't get me started you fool!"})
channel14.messages.create({user_id: user3.id, body: "Don't get me started you fool!"})
channel15.messages.create({user_id: user3.id, body: "Don't get me started you fool!"})
channel16.messages.create({user_id: user4.id, body: "Don't get me started you fool!"})

channel7.messages.create({user_id: user2.id, body: "Don't get me started you fool!"})
channel8.messages.create({user_id: user3.id, body: "Don't get me started you fool!"})
channel9.messages.create({user_id: user4.id, body: "Don't get me started you fool!"})
channel10.messages.create({user_id: user5.id, body: "Don't get me started you fool!"})
channel11.messages.create({user_id: user3.id, body: "Don't get me started you fool!"})
channel12.messages.create({user_id: user4.id, body: "Don't get me started you fool!"})
channel13.messages.create({user_id: user5.id, body: "Don't get me started you fool!"})
channel14.messages.create({user_id: user4.id, body: "Don't get me started you fool!"})
channel15.messages.create({user_id: user5.id, body: "Don't get me started you fool!"})
channel16.messages.create({user_id: user5.id, body: "Don't get me started you fool!"})

# message38 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "extraordinary"})
# message39 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "pharmaceutical"})
# message40 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "intellectuality,"})
# message41 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "counterbalancing,"})
# message42 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "indecipherability,"})
# message43 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "transcendentalizes"})
# message44 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "intercommunications"})
# message45 = Message.create({user_id: user5.id, channel_id: channel5.id, body: "incomprehensibleness."})
# message46 = Message.create({user_id: user4.id, channel_id: channel5.id, body: "woah"})
# message47 = Message.create({user_id: user4.id, channel_id: channel5.id, body: "*blinks*"})
