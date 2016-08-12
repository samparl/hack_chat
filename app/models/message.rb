class Message < ActiveRecord::Base
  validates :user, :channel, presence: true
  validate :user_in_channel

# ASSOCIATIONS

  belongs_to :user
  belongs_to :channel

  has_attached_file :image, default_url: "question_mark.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  private
  def user_in_channel
    unless self.user.channels.include?(self.channel)
      errors.add(
        :user, "must subscribe to this channel"
      )
    end
  end
end
