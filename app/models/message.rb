class Message < ActiveRecord::Base
  validates :user, :channel, presence: true
  validate :user_in_channel

# ASSOCIATIONS

  belongs_to :user
  belongs_to :channel

  private
  def user_in_channel
    unless self.user.channels.include?(self.channel)
      errors.add(
        :user, "must subscribe to this channel"
      )
    end
  end
end
