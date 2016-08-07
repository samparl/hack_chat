# json.array! @channels, :title, :description do |channel|
#   json.title channel.title
#   json.description channel.description
#   json.owner_email channel.author.email
#   # json.subscribed channel.subscribed
# end

# debugger

json.subscribed do
  json.array! @channels[:subscribed], :title, :description do |channel|
    json.title channel.title
    json.description channel.description
    # json.subscribed true
  end
end
json.unsubscribed do
  json.array! @channels[:unsubscribed], :title, :description do |channel|
    json.title channel.title
    json.description channel.description
    # json.subscribed false
  end
end
