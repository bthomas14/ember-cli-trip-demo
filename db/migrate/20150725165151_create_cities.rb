class CreateCities < ActiveRecord::Migration
  def change
    create_table :cities do |t|
      t.string :name
      t.float :latitude
      t.float :longitude
      t.references :region
      

      t.timestamps null: false
    end
  end
end
