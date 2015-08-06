class ChangeColumnInPlaces < ActiveRecord::Migration
  def change
    change_column :places, :post_code, :integer, after: :city

    change_column :cities, :name2, :string, after: :name
  end
end
