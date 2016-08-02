class UserChannel < ActiveRecord::Base
  validates :user_id, :channel_id, presence: true

# ASSOCIATIONS

  belongs_to :user
  belongs_to :channel

end
