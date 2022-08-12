class Activity < ApplicationRecord
    # has_many :guests
    has_many :availabilities, dependent: :destroy

    validates :name, presence: true


end
