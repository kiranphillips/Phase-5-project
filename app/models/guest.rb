class Guest < ApplicationRecord
   
    has_many :reservations, dependent: :destroy
    has_many :availabilities, through: :reservations
    has_many :actvities, through: :availabilities

    validates :name, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    
    has_secure_password
end
