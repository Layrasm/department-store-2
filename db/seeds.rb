require "faker"

# Thing.destroy_all
# 5.times do |i|
#   Thing.create(name: Faker::Name.name)
# end

5.times do 
  d = Department.create(
    name: Faker::Commerce.department,

  )
  10.times do
    d.items.create(
      name: Faker::Commerce.product_name,
      description: Faker::Lorem.sentence,
      price: Faker::Commerce.price.to_f,
      department_id: d.id,
      
    )
  end
end