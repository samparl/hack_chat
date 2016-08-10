class Message < ActiveRecord::Base
  validates :user_id, :channel_id, presence: true
  validate :user_in_channel

# ASSOCIATIONS

  belongs_to :user
  belongs_to :channel

  private
  def user_in_channel
    # debugger
    unless self.user.channels.include?(self.channel)
      errors.add(
        :user, "must subscribe to this channel"
      )
    end
  end
end
