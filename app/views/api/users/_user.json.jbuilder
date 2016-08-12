# json.extract! user, :id, :email
# json.channels user.channels.pluck(:id)

json.id user.id
json.title user.email
json.image_url user.image.url
