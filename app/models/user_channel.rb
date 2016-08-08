class UserChannel < ActiveRecord::Base
  validates :user_id, :channel_id, presence: true
  validates :user_id, uniqueness: {scope: [:channel_id]}

# ASSOCIATIONS

  belongs_to :user
  belongs_to :channel

end
