class ReviewsController < ApplicationController
    def index
        reviews = Review.where("user_id = ?", session[:user_id])
        render json: reviews, include: :user
    end
 
    def show
        review = Review.find(params[:id])
        render json: review
    end

    def create
        review = Review.create!(review_params)
        render json: review, include: :user, status: :created
    end

    private

    def review_params
        params.permit(:review, :hike_id, :user_id)
    end
     
end

