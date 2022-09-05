class GuestsController < ApplicationController
    def index
        render json: Guest.all
    end
    def show
        guest = Guest.find(params[:id])
        render json: guest, serializer: GuestWithActivitiesSerializer
    end
    def create
        guest = Guest.create!(guest_params)
        session[:guest_id] = guest.id
        render json: guest, status: :ok
    end
    private
    def guest_params
        params.permit(:name, :email, :password)
    end

end
