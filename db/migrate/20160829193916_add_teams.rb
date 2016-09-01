class AddTeams < ActiveRecord::Migration
  def change
    def change
      create_table :teams do |t|
        t.string :name
        t.integer :creator_id, null: false
        t.timestamps null: false
      end
      add_index :teams, :creator_id
    end
  end
end
