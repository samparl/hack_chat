class Api::ChannelsController < ApplicationController
  def index
    @channels = Channel.all
  end

  def show
    @channel = Channel.find(params[:id])
  end

  def create
    @channel = Channel.new(channel_params)
    @channel.author_id = current_user.id

    if @channel.save
      render :show
    else
      render json: @channel.errors.full_messages
    end
  end

  private
  def channel_params
    params.require(:channel).permit(:title, :description)
  end
end
