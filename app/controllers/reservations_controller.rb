class ReservationsController < ApplicationController
    def index
        reservation = Reservation.where guest_id: session[:guest_id]
        render json: reservation
     end

     def create
        reservation= Reservation.create!(reservation_params)
        render json: reservation, status: :created
    end

    private

    def reservation_params
        params.permit(:availability_id, :guest_id)
    end

end

