class AddOptionalUsersToChannel < ActiveRecord::Migration
  def change
    add_column :channels, :primary_user_id, :integer
    add_column :channels, :secondary_user_id, :integer
    add_index :channels, [:primary_user_id, :secondary_user_id], unique: true
  end
end
