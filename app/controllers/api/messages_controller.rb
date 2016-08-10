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
    # @message.created_at = Date.new
    if @message.save!
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


end
