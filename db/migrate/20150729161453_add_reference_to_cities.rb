class AddReferenceToCities < ActiveRecord::Migration
  def change
    add_reference :cities, :country, index: true
  end
end
