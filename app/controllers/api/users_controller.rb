class Api::UsersController < ApplicationController
  skip_before_action :require_sign_in, only: [:create]

  def create
    @user = User.new(user_params)

    if @user.save
      sign_in(@user)
      render :show
    else
      render(
        json: @user.errors.messages,
        status: 422
      )
    end
    render json
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
