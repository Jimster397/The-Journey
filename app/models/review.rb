class Review < ApplicationRecord
  belongs_to :hike
  belongs_to :user
end
