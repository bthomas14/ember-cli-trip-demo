class CreateApiV1Countries < ActiveRecord::Migration
  def change
    create_table :api_v1_countries do |t|

      t.timestamps null: false
    end
  end
end
