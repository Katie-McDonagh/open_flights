class AirlineSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :img_url, :slug
end
