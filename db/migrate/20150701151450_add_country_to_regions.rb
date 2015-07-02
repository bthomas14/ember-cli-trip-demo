class AddCountryToRegions < ActiveRecord::Migration
  def change
    add_reference :regions, :country, index: true
    add_foreign_key :regions, :countries
  end
end
