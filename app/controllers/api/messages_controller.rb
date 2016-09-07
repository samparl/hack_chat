class Api::MessagesController < ApplicationController
  def index
    channel = current_user.channels.find(params[:channel_id])
    if channel
      @messages = channel.messages.order(:created_at)
      render :index
    else
      status = Channel.find(params[:channel_id]) ? 401 : 404
      render(
        json: { base: ['Channel not found'] },
        status: status
      )
    end
  end

  def show

  end

  def create
    @message = current_user.messages.new
    @message.channel = Channel.find(params[:channel_id])
    @message.body = message_params[:content]

    if @message.save!
      new_socket_message(@message)
      render :index
    else
      render(
        @message.errors.messages
      )
    end
  end

  def destroy

  end

  private
  def message_params
    params.require(:message).permit(:content)
  end

  def new_socket_message(message)
    Pusher.trigger(
      params[:channel_id],
      'new message',
      # message.to_json
      render_to_string({
        template: 'api/messages/_message', locals: {
          message: message
        }
      })
    )
  end


end
