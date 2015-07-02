class PlaceSerializer < ActiveModel::Serializer
  attributes  :id,
              :name,
              :name2,
              :place_type,
              :street,
              :city,
              :address,
              :cost,
              :currency,
              :hours,
              :event_dates,
              :website,
              :media_desc,
              :media_src,
              :notes,
              :region_id

  #belongs_to :region
  #belongs_to :country
end
