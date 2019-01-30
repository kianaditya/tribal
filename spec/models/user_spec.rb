require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'db table' do
    it { is_expected.to have_db_column :email }
    it { is_expected.to have_db_column :encrypted_password }
    it { is_expected.to have_db_column :first_name }
    it { is_expected.to have_db_column :last_name }
    it { is_expected.to have_db_column :role }

  end

  describe 'Validations' do
    it { is_expected.to validate_presence_of :first_name }
    it { is_expected.to validate_presence_of :last_name }
    it { is_expected.to validate_presence_of :role }
  end
  
  describe FactoryBot do 
    it 'should be valid' do
      expect(create(:user)).to be_valid
    end
  end
end
