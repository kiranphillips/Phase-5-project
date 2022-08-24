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
        availability.update(availability_params)
        render json: availability, status: :accepted
    end
    def create
        availability= Availability.create!(availability_params)
        render json: availability, status: :created
    end

    private

    def availability_params
        params.permit(:available, :start_time, :end_time, :activity)
    end

end
