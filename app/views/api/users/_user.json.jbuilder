# json.extract! user, :id, :email
# json.channels user.channels.pluck(:id)

json.id user.id
json.name user.email
json.image_url user.image.url
