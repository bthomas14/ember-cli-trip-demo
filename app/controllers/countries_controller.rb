class CountriesController < ApplicationController

  def index
    render json: Country.all
  end

  def show
    #@country = Country.where(name: param[:name])
    render json: Country.find(params[:id])
  end

  private

end
