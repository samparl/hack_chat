class Channel < ActiveRecord::Base
  validates :name, :author_id, presence: true
  validate :no_direct_conversation
  validate :full_conversation

# ASSOCIATIONS

  has_many :messages
  has_many :user_channels
  has_many :users, through: :user_channels
  belongs_to(
    :primary_participant,
    class_name: 'User',
    foreign_key: :primary_user_id,
    primary_key: :id
  )
  belongs_to(
    :secondary_participant,
    class_name: 'User',
    foreign_key: :secondary_user_id,
    primary_key: :id
  )
  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :author_id,
    primary_key: :id
  )

  def self.existing_conversation(primary_participant, secondary_participant)
    Channel.where("(primary_user_id = ? AND secondary_user_id = ?) OR (primary_user_id = ? and secondary_user_id = ?)",
      primary_participant.id, secondary_participant.id,
      secondary_participant.id, primary_participant.id)[0]
    # Channel.where(
    #   "(primary_user_id = ? AND
    #   secondary_user_id = ?) OR
    #   (primary_user_id = ? AND
    #   secondary_user_id = ?)",
    #   primary_participant.id, secondary_participant.id,
    #   primary_participant.id, secondary_participant.id,
    # )[0]
  end

  def participants
    res = []
    res.push(self.primary_participant) if self.primary_participant
    res.push(self.secondary_participant) if self.secondary_participant
    return res
  end

  def partner_of(user)
    return nil unless self.participants.include?(user)
    self.participants.find { |participant| participant != user }
  end

  private

  def no_direct_conversation
    if self.direct &&
      Channel.existing_conversation(
        self.primary_participant, self.secondary_participant
      )

      errors.add(:channel, "already exists")
    end
  end

  def full_conversation
    if self.direct
      unless self.primary_participant.present? &&
        self.secondary_participant.present? &&
        self.secondary_participant != self.primary_participant
        errors.add(:channel, "must have two distinct participants")
      end
    end
  end


end
