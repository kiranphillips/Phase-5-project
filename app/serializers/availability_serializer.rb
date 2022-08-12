class AvailabilitySerializer < ActiveModel::Serializer
  attributes :id, :start_date, :end_time
  has_one :activity
end
