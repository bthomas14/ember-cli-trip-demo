class ChangeColumns < ActiveRecord::Migration
  def change
    remove_column :places, :event_dates, :string
    change_column :places, :media_desc, :string
    change_column :places, :cost, :float
  end
end
