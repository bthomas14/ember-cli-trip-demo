json.array!(@api_v1_countries) do |api_v1_country|
  json.extract! api_v1_country, :id
  json.url api_v1_country_url(api_v1_country, format: :json)
end
