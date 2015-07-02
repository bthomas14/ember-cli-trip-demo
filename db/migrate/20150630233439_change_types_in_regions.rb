class ChangeTypesInRegions < ActiveRecord::Migration
  def change
    add_column :regions, :country, :string, after: :name
    change_column :regions, :desc, :text
    remove_reference :regions, :places
  end
end
