class ChangeDescTypeInRegions < ActiveRecord::Migration
  def change
    change_column :regions, :desc, :text
  end
end
