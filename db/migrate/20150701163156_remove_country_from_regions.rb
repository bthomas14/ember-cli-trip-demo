class RemoveCountryFromRegions < ActiveRecord::Migration
  def change
    remove_column :regions, :country
  end
end
