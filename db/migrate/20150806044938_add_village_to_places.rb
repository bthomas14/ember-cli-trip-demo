class AddVillageToPlaces < ActiveRecord::Migration
  def change
    add_column :places, :village, :string
  end
end
