class Channel < ActiveRecord::Base
  validates :title, :author_id, presence: true

# ASSOCIATIONS

  has_many :messages
  has_many :user_channels
  has_many :users, through: :user_channels
  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :author_id,
    primary_key: :id
  )

end
