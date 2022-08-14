class AvailabilitySerializer < ActiveModel::Serializer
  attributes :id, :start_time, :end_time
  has_one :activity
end
