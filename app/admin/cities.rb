ActiveAdmin.register City do

# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
# permit_params :list, :of, :attributes, :on, :model
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if resource.something?
#   permitted
# end
permit_params :name, :name2, :country_id

# Customize columns displayed on the index screen in the table
index do
  column :name
  column :name2
  column :country_id do |city|
    auto_link city.country
  end
  column :latitude
  column :longitude
  actions
end

end
