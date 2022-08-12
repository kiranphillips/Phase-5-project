class Reservation < ApplicationRecord
  belongs_to :availability
  belongs_to :guest
end
