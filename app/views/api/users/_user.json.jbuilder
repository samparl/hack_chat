json.extract! user, :id, :email
json.channels user.channels.pluck(:id)
