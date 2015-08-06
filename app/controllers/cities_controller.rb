class CitiesController < ApplicationController

  def index
    #render json: City.all
    puts "in index, params[:country_id] => " + params[:country_id].to_s + "\n"
    @cities = City.where(country_id: params[:country_id])
    puts "@params => " + params[:country_id].to_s + "\n"
    puts "@cities => " + @cities.to_s + "\n"
    puts "@cities.length => " + @cities.length.to_s + "\n"
    render json: @cities
  end

  def show
    #render json: City.find(params[:id])
    puts "show.@cities.params => " + params[:country_id].to_s + "\n"
    render json: City.find(params[:country_id])
  end

  private

end
