# json.array! @channels, :title, :description do |channel|
#   json.title channel.title
#   json.description channel.description
#   json.owner_email channel.author.email
#   # json.subscribed channel.subscribed
# end

# debugger

json.channels do
  json.array! @channels[:subscribed], :title, :descripton, :subscribed do |channel|
    json.title channel.title
    json.description channel.description
    json.id channel.id
    json.subscribed true
  end

  json.array! @channels[:unsubscribed], :title, :descripton, :subscribed do |channel|
    json.title channel.title
    json.description channel.description
    json.id channel.id
    json.subscribed false
  end
end

json.subscribed do
  json.array! @channels[:subscribed], :title, :description do |channel|
    json.title channel.title
    json.description channel.description
    json.id channel.id
    # json.subscribed true
  end
end
json.unsubscribed do
  json.array! @channels[:unsubscribed], :title, :description do |channel|
    # debugger
    json.title channel.title
    json.description channel.description
    json.id channel.id
    # json.subscribed false
  end
end
