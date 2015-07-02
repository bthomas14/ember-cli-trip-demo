class ChangeTypeInPlaces < ActiveRecord::Migration
  def change
    rename_column :places, :type, :place_type
    change_column :places, :address, :text
    change_column :places, :notes, :text
    change_column :places, :media_desc, :text
    change_column :places, :hours, :text
  end
end
