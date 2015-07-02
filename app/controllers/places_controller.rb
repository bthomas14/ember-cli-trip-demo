class PlacesController < ApplicationController

  def index
    puts "places.length => " + Place.where(region_id: params[:region_id]).length.to_s + "\n"
    render json: Place.where(region_id: params[:region_id])
  end

  def show
  end

  def new
  end

  def create
    place = Place.new(place_params)
    if place.save
      render json: place
    else
      render json: place, :status => 422
    end
  end

  private

end
