class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :tile, :description, :score, :airline_id
end
