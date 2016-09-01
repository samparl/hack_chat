class Api::TeamsController < ApplicationController
  skip_before_action :require_sign_in, only: [:find, :show]

  def find
    @team = Team.find_by(name: team_params[:name])
    if @team
      render :show
    else
      render(
        json: {base: ["Team not found"]},
        status: 404
      )
    end
  end

  def show
    @team = Team.find(params[:id])
    if @team
      render :show
    else
      render(
        json: {base: ["Team not found"]},
        status: 404
      )
    end
  end

  private
  def team_params
    params.require(:team).permit(:name)
  end
end
