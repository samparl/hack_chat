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

  end

  def destroy

  end

  private
  def message_params
  end


end
