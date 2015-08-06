class AddressController < ApplicationController
  def show
    if params[:query]
      results = Geocoder.search(params[:query])
      render json: results
    end
  end
end
