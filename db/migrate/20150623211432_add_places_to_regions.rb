class AddPlacesToRegions < ActiveRecord::Migration
  def change
    add_reference :regions, :places
  end
end
