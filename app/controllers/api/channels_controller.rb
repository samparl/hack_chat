class Api::ChannelsController < ApplicationController
  def index
    # debugger
    @channels = {}
    @channels[:subscribed] = current_user.channels.where(direct: false)
    @channels[:unsubscribed] =
      Channel.where.not(id: current_user.channel_ids).where(direct: false)
    @channels[:direct] = current_user.conversations -
      (current_user.conversations - current_user.channels)
  end

  def show
    @channel = Channel.find(params[:id])
  end

  def subscribe
    @channel = Channel.find(params[:id])
    if !@channel
      render(
      json: { base: ['Channel not found'] },
      status: 401
      )
    elsif @channel.users << current_user
      @subscribed = true
      render :show
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
      @subscribed = false
      if @channel.direct
        render :show_direct
      else
        render :show
      end
    else
      render(
      json: @channel.errors.messages,
      status: 422
      )
    end
  end

  def direct
    @secondary_participant = User.find(channel_params[:secondary_user_id])
    @channel = Channel.existing_conversation(
      current_user,
      @secondary_participant
    )
    # debugger
    if @channel
      response = {}
      unless current_user.channels.include?(@channel)
        current_user.channels << @channel
      end
      unless @secondary_participant.channels.include?(@channel)
        @secondary_participant.channels << @channel
      end
      render :show_direct
    else
      channel_params[:direct] = true
      channel_params[:primary_participant] = current_user
      channel_params[:author] = current_user
      @channel = current_user.channels.new(channel_params)
      @channel.direct = true
      @channel.primary_participant = current_user
      @channel.author = current_user
      if @channel.save
        render :show_direct
      else
        render(
          json: @channel.errors.messages
        )
      end
    end
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


  private
  def channel_params
    params.require(:channel).permit(
      :name,
      :description,
      :secondary_user_id,
      :direct
    )
  end
end
