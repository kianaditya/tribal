FactoryBot.define do
  factory :user do
    email {'real@mail.com'}
    password {'password'}
    password_confirmation {'password'}
    first_name {'Greg'}
    last_name {'Kallai'}
    role {0}
  end
end
