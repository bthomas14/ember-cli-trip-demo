namespace :db do
  task populate: :environment do

    Country.destroy_all


    20.times do
      Country.create(
        name: FFaker::Address.country,
        image: FFaker::Color.name
      )
    end

  end
end
