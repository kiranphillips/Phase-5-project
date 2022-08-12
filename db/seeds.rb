puts "Deleting old data"

Activity.destroy_all
Availability.destroy_all
Guest.destroy_all

puts "Creating Guests..."

Guest.create(name: "Kiran", email: "kiranphillips61@gmail.com", password: "1993")

puts "Creating Activity ..."
archery = Activity.create(name: "Archery")
bush_dinner = Activity.create(name: "Bush Dinner")
cooking_class = Activity.create(name: "Cooking Class")
spa = Activity.create(name: "Spa")
boma = Activity.create(name: "Boma")
safari = Activity.create(name: "Safari")


puts "Creating Availability..."

Availability.create(start_time:DateTime.new(2022, 10, 15, 11, 0), end_time:DateTime.new(2022, 10, 15, 14, 30), activity_id: archery.id)

Availability.create(start_time:DateTime.new(2022, 10, 15, 11, 0), end_time:DateTime.new(2022, 10, 15, 14, 30), activity_id: archery.id)

Availability.create(start_time:DateTime.new(2022, 10, 15, 11, 0), end_time:DateTime.new(2022, 10, 15, 14, 30), activity_id: archery.id)

Availability.create(start_time:DateTime.new(2022, 10, 15, 11, 0), end_time:DateTime.new(2022, 10, 15, 14, 30), activity_id: archery.id)

Availability.create(start_time:DateTime.new(2022, 10, 15, 11, 0), end_time:DateTime.new(2022, 10, 15, 14, 30), activity_id: archery.id)

20.times 
Availability.create(start_time:DateTime.new(2022, 10, 15, 18, 0), end_time:DateTime.new(2022, 10, 15, 21, 30), activity_id: bush_dinner.id)

20.times 
Availability.create(start_time:DateTime.new(2022, 10, 17, 18, 0), end_time:DateTime.new(2022, 10, 15, 21, 30), activity_id: boma.id)

4.times
Availability.create(start_time:DateTime.new(2022, 10, 16, 12, 0), end_time:DateTime.new(2022, 10, 16, 13, 30), activity_id: cooking_class.id)

24.times
Availability.create(start_time:DateTime.new(2022, 10, 16, 5, 0), end_time:DateTime.new(2022, 10, 16, 9, 30), activity_id: safari.id)

24.times
Availability.create(start_time:DateTime.new(2022, 10, 16, 15, 0), end_time:DateTime.new(2022, 10, 16, 19, 30), activity_id: safari.id)


12.times
Availability.create(start_time:DateTime.new(2022, 10, 16, 8, 0), end_time:DateTime.new(2022, 10, 16, 17, 0), activity_id: spa.id)



puts 'reservations'

Reservation.create(availability_id: Availability.ids.sample, guest_id: Guest.ids.sample)
