class CreateUserChannels < ActiveRecord::Migration
  def change
    create_table :user_channels do |t|
      t.integer :user_id, null: false, index: true
      t.integer :channel_id, null: false, index: true

      t.timestamps null: false
    end
    add_index :user_channels, [:user_id, :channel_id], unique: true
  end
end
