class RemoveCountryIdFromRegions < ActiveRecord::Migration
  def change
    remove_column :regions, :country_id
  end
end
