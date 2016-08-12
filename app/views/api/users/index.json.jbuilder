json.array! @users do |user|
  next if user == current_user
  json.partial! 'user', user: user
end
