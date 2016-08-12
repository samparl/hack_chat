json.channels do
  json.array! @channels[:subscribed] do |channel|
    json.partial! 'channel',
    channel: channel,
    direct: false,
    subscribed: true
  end

  json.array! @channels[:unsubscribed] do |channel|
    json.partial! 'channel',
    channel: channel,
    direct: false,
    subscribed: false
  end

  json.array! @channels[:direct] do |channel|
    json.partial! 'direct',
    conversation: channel,
    subscribed: true,
    title: channel.partner_of(current_user).email
  end
end

# json.partial! 'direct',
# channel: channel,
# direct: true,
# subscribed: true,
# title: channel.partner_of(current_user).email

# json.title @secondary_participant.email
# json.description @conversation.description
# json.id @conversation.id
# json.subscribed true
# json.direct true
# json.member_count @conversation.users.count
