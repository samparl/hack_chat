class Api::SessionsController < ApplicationController
  def new
  end

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
        json: ["Invalid credentials"],
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
        json: ["No user is logged in"],
        status: 404
      )
    end
  end



  private
  def session_params
    params.require(:session).permit(:email, :password)
  end
end
