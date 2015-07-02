class CreateRegions < ActiveRecord::Migration
  def change
    create_table :regions do |t|
      t.string :name
      t.references :country
      t.string :desc

      t.timestamps null: false
    end
  end
end
