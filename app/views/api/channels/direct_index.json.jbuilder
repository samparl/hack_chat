json.array! @channels do
  json.partial! 'channel', channel: channel, subscribed: true
end
