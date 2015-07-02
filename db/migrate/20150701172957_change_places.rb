class ChangePlaces < ActiveRecord::Migration
  def change
    remove_column :places, :country, :string
    remove_column :places, :region, :string
    remove_column :places, :region_id, :integer
    change_column :places, :notes, :text

    add_reference :places, :region, index: true
    add_foreign_key :places, :regions
    add_reference :places, :country, index: true
    add_foreign_key :places, :countries
  end
end
