class Api::SessionsController < ApplicationController
  skip_before_action :require_sign_in, only: [:create, :destroy]

  def create
    @user = User.find_by_credentials(
      session_params[:email],
      session_params[:password]
    )

    if @user
      login(@user)
      render "api/users/show"
    else
      render(
        json: {base: ["Invalid credentials"]},
        status: 401
      )
    end

  end

  def destroy
    @user = current_user

    if @user
      logout
      render "api/users/show"
    else
      render(
        json: {base: ["No user is logged in"]},
        status: 404
      )
    end
  end



  private
  def session_params
    params.require(:session).permit(:email, :password)
  end
end
