class City < ActiveRecord::Base
  belongs_to :country
  has_many :places

  geocoded_by :name
  after_validation :geocode
end
