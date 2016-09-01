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
    name: channel.partner_of(current_user).username
  end
end
