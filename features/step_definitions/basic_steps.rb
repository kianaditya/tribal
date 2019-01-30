Given("I visit the site") do
  visit root_path
end

Given("the following user exists") do |table|
  table.hashes.each do |session|
    user = create(:user, user)
  end
end


Given("the following sessions exist") do |table|
  table.hashes.each do |session|
		create(:session, session)
	end
end

Given("I click {string}") do |element|
  click_on element
end

When("I fill in {string} field with {string}") do |element, value|
  fill_in element,with: value
end

