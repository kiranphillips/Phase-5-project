class ActivitiesController < ApplicationController
    def index
        render json: Activity.all
    end

    def show
        item = Activity.find(params[:id])
        render json: activities, status: :ok
    end
end
