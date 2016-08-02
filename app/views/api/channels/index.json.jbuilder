json.array! @channels, :title, :description do |channel|
  json.title channel.title
  json.description channel.description
  json.owner_email channel.author.email
end
