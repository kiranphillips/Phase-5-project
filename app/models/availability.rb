class Availability < ApplicationRecord
  belongs_to :activity
  has_many :reservations, dependent: :destroy

end
