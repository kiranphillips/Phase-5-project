class ReservationsController < ApplicationController
    def index
        reservation = Reservation.all
        render json: reservation
     end
end
