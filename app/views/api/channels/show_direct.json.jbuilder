json.partial! 'direct',
conversation: @channel,
subscribed: true,
title: @channel.partner_of(current_user).email
