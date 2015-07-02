class RegionsController < ApplicationController
  #respond_to :json

  def index
    #@regions = Region.all
    @regions = Region.where(country_id: params[:country])
    puts "@params => " + params[:country].to_s + "\n"
    puts "@regions => " + @regions.to_s + "\n"
    puts "@regions.length => " + @regions.length.to_s + "\n"

    render json: @regions
  end

  def show
    puts "show.@regions.params => " + params[:country].to_s + "\n"
    render json: Region.find(params[:country])
  end

end
