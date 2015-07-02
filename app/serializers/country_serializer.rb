class CountrySerializer < ActiveModel::Serializer
  attributes :id, :name, :image

  #has_many :regions
end
