class Message < ActiveRecord::Base
  validates :user_id, :channel_id, presence: true
  validate :user_in_channel

# ASSOCIATIONS

  belongs_to :user
  belongs_to :channel

  def user_in_channel
    self.user.channels.include?(self.channel)
  end
end
