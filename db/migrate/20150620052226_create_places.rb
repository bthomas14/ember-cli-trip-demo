class CreatePlaces < ActiveRecord::Migration
  def change
    create_table :places do |t|
      t.string :name
      t.string :name2
      t.string :street
      t.string :city
      t.string :region
      t.integer :region_id
      t.string :country
      t.string :address
      t.float :cost
      t.string :currency
      t.string :hours
      t.string :event_dates
      t.string :website
      t.string :media_desc
      t.string :media_src
      t.string :notes

      t.timestamps
    end
  end
end
