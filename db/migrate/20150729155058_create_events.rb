class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :name
      t.string :name2
      t.date :start_date
      t.date :end_date
      t.float :cost
      t.string :currency
      t.string :website
      t.text :notes

      t.timestamps null: false
    end

    add_reference :events, :city, index: true
  end
end
