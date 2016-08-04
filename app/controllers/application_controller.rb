class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception
  before_action :require_sign_in
  helper_method :current_user

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login(user)
    user.reset_session!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout
    current_user.reset_session!
    session[:session_token] = nil
    @current_user = nil
  end

  private
  def require_sign_in
    unless current_user
      render(
        json: {base: ["Invalid credentials"]},
        status: 401
      )
    end
  end

end
