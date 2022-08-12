class ReservationSerializer < ActiveModel::Serializer
  attributes :id
  has_one :availability
  has_one :guest
end
