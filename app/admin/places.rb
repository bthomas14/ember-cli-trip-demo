ActiveAdmin.register Place do
  permit_params :name,
                :name2,
                :place_type,
                :street,
                :village,
                :city_id,
                :post_code,
                :country_id,
                :address,
                :image,
                :cost,
                :currency,
                :hours,
                :event_dates,
                :website,
                :media_desc,
                :media_src,
                :notes

  active_admin_import({
    # Look for duplicate ids and, if found, replace with new data
    validate: true,
    #before_batch_import: ->(importer) {
    #  Place.where(id: importer.values_at('id')).delete_all
    #},
    timestamps: true,
    template_object: ActiveAdminImport::Model.new(
      hint: "file will be imported with such header format: 'body','title','author'",
      force_encoding: "ISO-8859-1",
      csv_headers: ["id","name","name2","place_type","street","city","address","cost","currency","hours","event_dates","website","media_desc","media_src","notes","country_id", "updated_at", "created_at"]
    )
  })

  # Create sections on the index screen
  scope :all, default: true

  # Filterable attributes on the index screen
  filter :name
  #filter :country_id, as: :select, collection: ->{ Place.country_id }
  filter :city
  filter :created_at
  filter :country_id do |place|
    auto_link place.country
  end

  # Customize columns displayed on the index screen in the table
  index do
    column :name
    column :city
    column :country
    column :place_type
    column :media_src
    column :latitude
    column :longitude
    #column :place_type
    #column :address
    #column "Cost", sortable: :cost do |place|
    #  number_to_currency place.cost
    #end
    actions
  end

  form do |f|
    f.semantic_errors # shows errors on :base
    f.input :place_type, :label => 'Type', :as => :select, :collection => ["brewery", "tap room", "restaurant"]
    f.inputs :name, :name2, :street, :village, :post_code, :city, :country, :website, :media_src, :notes
    f.actions         # adds the 'Submit' and 'Cancel' buttons
  end

end
