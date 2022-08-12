class AvailabilitiesController < ApplicationController
    def index
        render json: Availability.all
    end

    def show
        availability = Availability.find(params[:id])
        render json: availability, status: :ok
    end
    def update
        availability = Availability.find(params[:id])
        Availability.update!(availability_params)
        render json: availability, status: :accepted
    end
    def create
        availability= Availability.create!(availability_params)
        render json: availability, status: :created
    end

end
