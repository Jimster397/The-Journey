class HikesController < ApplicationController
    def index
        hikes = Hike.all
        render json: hikes
    end
 
    def show
        hike = hike.find(params[:id])
        render json: hike
    end
end

