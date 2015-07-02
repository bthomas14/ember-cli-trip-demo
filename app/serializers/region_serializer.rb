class RegionSerializer < ActiveModel::Serializer
  attributes :id, :name, :desc

  #has_many :places
end
