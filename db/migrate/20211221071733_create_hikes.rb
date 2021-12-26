class CreateHikes < ActiveRecord::Migration[7.0]
  def change
    create_table :hikes do |t|
      t.string :name
      t.string :imageUrl
      t.string :description

      t.timestamps
    end
  end
end
