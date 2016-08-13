class ChangeChannelTitleToName < ActiveRecord::Migration
  def change
    rename_column :channels, :title, :name
  end
end
