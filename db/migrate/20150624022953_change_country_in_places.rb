class ChangeCountryInPlaces < ActiveRecord::Migration
  def up
    remove_column :places, :country
    add_index :places, :region_id
    add_index :regions, :country_id
  end
  def down
    add_column :places, :country, :string
    remove_index :places, :region_id
    remove_index :regions, :country_id
  end

end
