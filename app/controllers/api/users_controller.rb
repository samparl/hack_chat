class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      sign_in(@user)
      render :show
    else
      render json: @user.errors.full_messages
    end
    render json
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
