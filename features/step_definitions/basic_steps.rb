When("I fill in {string} with {string}") do |element, value|
	fill_in element, with: value
end

When("I click {string}") do |element|
	click_on element
end

Then('I visit Sign up page') do
	visit new_user_registration_path
end