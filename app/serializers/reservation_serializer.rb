class ReservationSerializer < ActiveModel::Serializer
  attributes :id

has_one :availability, serializer: AvailabilitySerializer
  # def availability 

  # end
  # has_one :guest
end
