class GuestWithActivitiesSerializer < ActiveModel::Serializer
  attributes :id :name, :email, :password_digest
  has_many :Activities
end
