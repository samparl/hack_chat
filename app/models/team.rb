class Team < ActiveRecord::Base
  validates :creator, presence: true

  belongs_to :creator, class_name: 'User', foreign_key: 'creator_id', inverse_of: :team
  has_many :members, through: :users
end
