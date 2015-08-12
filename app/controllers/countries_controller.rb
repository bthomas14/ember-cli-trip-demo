class CountriesController < ApplicationController

  def index
    render json: Country.all
  end

  def show
    render json: Country.find(params[:id])
    #puts "in CountryController.show, params[:id] => " + params[:id].to_s + "\n"
    #render json: Country.find_by_slug(params[:id])
  end

  private

end
