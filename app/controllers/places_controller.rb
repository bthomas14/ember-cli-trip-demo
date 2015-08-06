class PlacesController < ApplicationController

  def index
    puts "in places.index, params[:city_id] => " + params[:city_id].to_s + "\n"
    @places = Place.where(city_id: params[:city_id])
    puts "@places.length => " + @places.length.to_s + "\n"
    render json: @places
  end

  def show
    puts "in places.show, params[:id] => " + params[:id].to_s + "\n"
    @place = Place.find(params[:id])
    render json: @place
  end

  def new
  end

  def create
  end

  private

end
