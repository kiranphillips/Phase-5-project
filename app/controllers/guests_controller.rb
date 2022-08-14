class GuestsController < ApplicationController
    def index
        render json: Guest.all
    end
    # def show
    #     user = Guest.find(params[:id])
    #     render json: guest, serializer: 
    # end
    def create
        user = Guest.create!(guest_params)
        session[:guest_id] = guest.id
        render json: guest, status: :ok
    end
    private
    def guest_params
        params.permit(:username, :email, :password)
    end

end
