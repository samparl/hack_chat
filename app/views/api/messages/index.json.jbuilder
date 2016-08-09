json.array! @messages, :body, :author, :date do |message|
  json.author message.user.email
  json.body message.body
  json.date message.created_at
end
