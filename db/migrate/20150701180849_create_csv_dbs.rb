class CreateCsvDbs < ActiveRecord::Migration
  def change
    create_table :csv_dbs do |t|

      t.timestamps null: false
    end
  end
end
