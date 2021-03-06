require 'rails_helper'

RSpec.describe Transaction, type: :model do
		describe 'DB table' do
			it { is_expected.to have_db_column :amount }
		end

		describe 'Validations' do
			it { is_expected.to validate_presence_of :amount }
		end

		describe 'Factory' do
			it 'should have valid Factory' do
				expect(create(:transaction)).to be_valid
			end
		end
	end
