Rails.application.routes.draw do

  devise_for :users
  root controller: :devise, action: :new
end
