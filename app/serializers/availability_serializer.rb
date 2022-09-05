class AvailabilitySerializer < ActiveModel::Serializer
  attributes :id, :start_time, :end_time, :available, :activity
  # has_one :
end
