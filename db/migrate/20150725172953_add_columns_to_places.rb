class AddColumnsToPlaces < ActiveRecord::Migration
  def change
    add_column :places, :post_code, :integer
    remove_column :places, :city, :string
    add_reference :places, :city, index: true
    #add_foreign_key :places, :cities

    change_column :places, :media_src, :string
  end
end
