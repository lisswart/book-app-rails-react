# puts "clearing old data..."

# # User.destroy_all

# puts "seeding users..."

# 5.times do User.create!(
#   firstname: Faker::Name.first_name,
#   lastname: Faker::Name.last_name,
#   username: Faker::Twitter.unique.screen_name,
#   email: Faker::Internet.unique.email,
#   password_digest: Faker::Internet.unique.password
# )
# end

# # Book.destroy_all

# puts "seeding books..."

# 50.times do Book.create!(
#   title: Faker::Book.title,
#   author: Faker::Name.name
#   )
# end

puts "seeding book_users..."

105.times do BookUser.create!(
  book_id: rand(1..100),
  user_id: rand(1..10),
  description: Faker::Lorem.paragraph(sentence_count: 20),
  read_status: ["Not Begun", "In Progress", "Completed", "Abandoned"].sample,
  is_notes_added: false
  )
end