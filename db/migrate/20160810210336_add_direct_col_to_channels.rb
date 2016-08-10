class AddDirectColToChannels < ActiveRecord::Migration
  def change
    add_column :channels, :direct, :boolean, null: false, default: false
  end
end
