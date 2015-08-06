class AddLatLngToPlaces < ActiveRecord::Migration
  def change
    add_column :places, :latitude, :float
    add_column :places, :longitude, :float

    change_column :places, :hours, :string
    change_column :places, :address, :string
  end
end
