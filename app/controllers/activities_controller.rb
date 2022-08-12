class ActivitiesController < ApplicationController
    def index
        render json: Activities.all
    end

    def show
        item = Activities.find(params[:id])
        render json: activities, status: :ok
end
