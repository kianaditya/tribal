When("I fill in {string} with {string}") do |element, value|
	fill_in element, with: value
end

When("I click {string}") do |element|
	click_on element
end

Given("I visit the site") do
	visit root_path
end

Then('I visit Sign up page') do
	visit new_user_registration_path
end