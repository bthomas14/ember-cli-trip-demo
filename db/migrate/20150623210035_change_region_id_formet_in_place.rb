class ChangeRegionIdFormetInPlace < ActiveRecord::Migration
  def change

  end

  def up
    add_column :countries, :regions, :references
    change_column :place, :region_id, :references
  end

  def down
    change_column :place, :region_id, :integer
  end
end
