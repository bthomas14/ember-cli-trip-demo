class AddImageToPlaces < ActiveRecord::Migration
  def change
    add_column :places, :image, :string, after: :address
  end
end
