class Api::ChannelsController < ApplicationController
  def index
    # debugger
    # query = ["SELECT ch.id
    #   ,ch.title
    #   ,uc.user_id
    #   ,CASE WHEN uc.user_id IS NULL THEN FALSE ELSE TRUE END AS is_subscribed
    # FROM channels AS ch
    # LEFT OUTER JOIN user_channels AS uc
    #   ON uc.channel_id = ch.id
    # WHERE uc.user_id = :user_id", { :user_id => params[:user][:id] }]
    #
    # @channels = Channel.find_by_sql(query)
    # @channels= params[:user][:subscribed] ?
    #   Channel.includes(:users)
    #     .where(users: {id: params[:user][:id]})
    #   : Channel.includes(:users)
    #     .where.not(users: {id: params[:user][:id]})

      @channels = {}

      @channels[:subscribed] = Channel
        .includes(:user_channels)
        .where(user_channels: {user_id: current_user.id})

      @channels[:unsubscribed] = Channel
        .joins("LEFT JOIN user_channels ON user_channels.channel_id = channels.id")
        .where("user_channels.user_id IS NULL OR user_channels.user_id != ?", current_user.id)
      # debugger
    # @channels = Channel.all
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

  private
  def channel_params
    params.require(:channel).permit(:title, :description)
  end
end
