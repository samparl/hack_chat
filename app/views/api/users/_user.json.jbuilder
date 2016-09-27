json.id user.id
json.name user.first_name + user.last_name
json.email user.email
json.username user.username
json.image_url asset_path(user.image.url)
json.team user.team_id
