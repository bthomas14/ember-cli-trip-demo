class CitySerializer < ActiveModel::Serializer
  attributes :id, :name, :country_id, :latitude, :longitude, :slug
end
