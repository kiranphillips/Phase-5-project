class ReservationsController < ApplicationController
    def index
        reservations = Reservations.all
        render json: reservations
     end
end
