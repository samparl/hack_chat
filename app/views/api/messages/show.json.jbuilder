json.message do
  json.author current_user.email
  json.body @message.body
  json.date @message.created_at
end
