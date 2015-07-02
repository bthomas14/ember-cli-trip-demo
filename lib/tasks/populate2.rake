namespace :db do
  task populate2: :environment do
    require 'ffaker'

    Place.destroy_all

    20.times do
      Place.create(
        name: FFaker::Name.first_name,
        name2: FFaker::Name.last_name,
        street: FFaker::AddressNL.street_address,
        city: FFaker::AddressNL.city,
        region_id: FFaker::Address.building_number,
        country: FFaker::AddressNL.country,
        address: FFaker::AddressNL.country,
        cost: FFaker::Address.building_number,
        currency: FFaker::Currency.code,
        hours: FFaker::HipsterIpsum.words(4).join(' '),
        event_dates: FFaker::HipsterIpsum.words(6).join(' '),
        website: FFaker::Internet.http_url,
        media_desc: FFaker::HipsterIpsum.words(5).join(' '),
        media_src: FFaker::Internet.http_url,
        notes: FFaker::HipsterIpsum.paragraphs(sentence_count=2)
        )
    end

  end
end
