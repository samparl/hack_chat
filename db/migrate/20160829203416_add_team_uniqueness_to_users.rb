class AddTeamUniquenessToUsers < ActiveRecord::Migration
  def change
    change_column :users, :team_id, :integer, default: 1, null: false
    change_column :users, :team_id, :integer, default: nil
    # change_column_null :users, :team_id, false
  end
end
