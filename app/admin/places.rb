ActiveAdmin.register Place do
  permit_params :name,
                :name2,
                :place_type,
                :street,
                :city,
                :region_id,
                :country_id,
                :address,
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
      csv_headers: ["id","name","name2","place_type","street","city","address","cost","currency","hours","event_dates","website","media_desc","media_src","notes","country_id", "region_id", "updated_at", "created_at"]
    )
  })


  #action_item :only => :index do
  #  link_to 'Upload CSV', :action => 'upload_csv'
  #end

  #collection_action :upload_csv do
  #  render "admin/csv/upload_csv"
  #end

  #collection_action :import_csv, :method => :post do
  #  CsvDb.convert_save("place", params[:dump][:file])
  #  redirect_to :action => :index, :notice => "CSV imported successfully!"
  #end


end
