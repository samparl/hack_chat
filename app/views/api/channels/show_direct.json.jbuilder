json.partial! 'direct',
conversation: @channel,
subscribed: true,
name: @channel.partner_of(current_user).email
