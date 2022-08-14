class SessionsController < ApplicationController
    # POST '/login'
    def create
        guest = Guest.find_by_name(params[:username])
        if guest&.authenticate(params[:password])
          session[:guest_id] = guest.id
          render json: guest, status: :ok
        else
          render json: "Invalid Credentials", status: :unauthorized
        end
      end

      # DELETE '/logout'
      def destroy
        session.delete(:guest_id)
      end
end
