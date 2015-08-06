class PlaceSerializer < ActiveModel::Serializer
  attributes  :id,
              :name,
              :name2,
              :place_type,
              :street,
              :village,
              :city_id,
              :post_code,
              :address,
              :image,
              :cost,
              :currency,
              :hours,
              :website,
              :media_desc,
              :media_src,
              :notes,
              :latitude,
              :longitude

end
