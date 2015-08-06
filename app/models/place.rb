class Place < ActiveRecord::Base
  before_validation :set_address
  belongs_to :country
  belongs_to :city

  geocoded_by :address
  after_validation :geocode

  def set_address
    if self.village.nil?
      self.address = self.street.to_s + ", " + self.post_code.to_s + " " + self.city.name.to_s + ", " + self.country.name.to_s
    else
      self.address = self.street.to_s + ", " + self.post_code.to_s + " " + self.village.to_s + ", " + self.country.name.to_s
    end
  end
end
