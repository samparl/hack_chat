class StaticPagesController < ApplicationController
  skip_before_action :require_sign_in
  def root
    render :root
  end
end
