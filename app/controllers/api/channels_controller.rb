class Api::ChannelsController < ApplicationController
  def index
      @channels = {}
      @channels[:subscribed] = current_user.channels
      @channels[:unsubscribed] = Channel.where.not(id: current_user.channel_ids)
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
      render(
        json: @channel.errors.messages,
        status: 422
      )
    end
  end

  def update
    @channel = Channel.find(params[:id])

    if !@channel
      render(
        json: {base: ['Channel not found']},
        status: 401
      )
    elsif @channel.users << current_user
      render json: @channel
    else
      render(
        json: @channel.errors.messages,
        status: 422
      )
    end

  end


  def subscribe
    @channel = Channel.find(params[:id])
    if !@channel
      render(
        json: {base: ['Channel not found']},
        status: 401
      )
    elsif @channel.users << current_user
      render json: @channel
    else
      render(
        json: @channel.errors.messages,
        status: 422
      )
    end
  end

  def unsubscribe
    @channel = Channel.find(params[:id])
    if !@channel
      render(
        json: {base: ['Channel not found']},
        status: 401
      )
    elsif @channel.users.delete(current_user)
      render json: @channel
    else
      render(
        json: @channel.errors.messages,
        status: 422
      )
    end
  end


  private
  def channel_params
    params.require(:channel).permit(:title, :description)
  end
end
