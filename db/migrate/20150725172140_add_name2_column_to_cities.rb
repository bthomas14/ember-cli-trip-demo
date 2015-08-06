class AddName2ColumnToCities < ActiveRecord::Migration
  def change
    add_column :cities, :name2, :string
  end
end
