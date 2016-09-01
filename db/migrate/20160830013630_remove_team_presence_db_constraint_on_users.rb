class RemoveTeamPresenceDbConstraintOnUsers < ActiveRecord::Migration
  def change
    change_column_null :users, :team_id, true
  end
end
