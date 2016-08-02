class CreateChannels < ActiveRecord::Migration
  def change
    create_table :channels do |t|
      t.integer :author_id, null: false, index: true
      t.string :title, null: false
      t.text :description
      t.timestamps null: false
    end
  end
end
