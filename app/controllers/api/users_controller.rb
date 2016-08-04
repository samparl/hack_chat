class Api::UsersController < ApplicationController
  skip_before_action :require_sign_in, only: [:create]

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      render(
        json: @user.errors.messages,
        status: 422
      )
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
