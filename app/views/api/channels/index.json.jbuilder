json.channels do
  json.array! @channels[:subscribed] do |channel|
    json.partial! 'channel', channel: channel, subscribed: true
  end

  json.array! @channels[:unsubscribed], :title, :descripton, :subscribed do |channel|
    json.partial! 'channel', channel: channel, subscribed: false
  end
end
