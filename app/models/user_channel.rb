class UserChannel < ActiveRecord::Base
  validates :user, :channel, presence: true
  validates :user, uniqueness: {scope: [:channel]}
  validate :valid_direct_channel

# ASSOCIATIONS

  belongs_to :user
  belongs_to :channel

  private
  def valid_direct_channel
    if self.channel.direct &&
      self.channel.primary_participant != self.user &&
      self.channel.secondary_participant != self.user

      errors.add(
        :channel, "cannot be joined"
      )
    end
  end

end
