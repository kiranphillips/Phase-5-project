class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :availabilities
end
