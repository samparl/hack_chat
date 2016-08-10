json.channels do
  json.array! @channels[:subscribed] do |channel|
    json.partial! 'channel', channel: channel, subscribed: true, direct: false
  end

  json.array! @channels[:unsubscribed] do |channel|
    json.partial! 'channel', channel: channel, subscribed: false, direct: false
  end

  json.array! @channels[:direct] do |channel|
    json.partial! 'channel', channel: channel, subscribed: true, direct: true
  end
end
