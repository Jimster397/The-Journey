# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.destroy_all
Hike.destroy_all
Review.destroy_all

justinchit = User.create(username: "papacitoJC", password: "henny", password_confirmation: "henny", first_name: "Justin", last_name: "Chittarath")
garretd = User.create(username: "Garbear", password: "applesuxs", password_confirmation: "applesuxs", first_name: "Garret", last_name: "Dick")


Hike.create(

    name: "El Morro Canyon",
    imageUrl: "https://californiathroughmylens.com/wp-content/uploads/2019/05/crystal-cove-el-moro-12-640x427.jpg",
    description: "Beautiful Hike near the beach that is about 8 miles long."
)

Hike.create(

    name: "Buck Gulley Reserve",
    imageUrl: "https://i.pinimg.com/736x/85/8c/10/858c10f6d0e05dd87631d3db76b01a68.jpg",
    description: "Canyon nature preserve with trails for hiking & mountain-biking, plus guided interpretive walks."
)

Hike.create(

    name: "Back Bay Loop",
    imageUrl: "http://radified.com/newport/back_bay/08_back_bay_hiking_trail_std.jpg",
    description: "Back Bay Loop is a 11.4 mile heavily trafficked loop trail located near Newport Beach, California that features beautiful wild flowers and is good for all skill levels. The trail offers a number of activity options and is accessible year-round. Dogs are also able to use this trail but must be kept on leash."
)

Review.create(
    hike_id: Hike.all.sample.id,
    user_id: User.all.sample.id,
    review: "Make sure you start at the top of the trail, cause no one wants to hike uphill."
)
Review.create(
    
    hike_id: Hike.all.sample.id,
    user_id: User.all.sample.id,
    review: "Be careful on our hike we saw a bobcat."
)
Review.create(
    hike_id: Hike.all.sample.id,
    user_id: User.all.sample.id,
    review: "Bring a bike this trail is long!"
)