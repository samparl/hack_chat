class User < ActiveRecord::Base
  attr_reader :password
  validates :email, :team, :session_token, :password_digest, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  after_initialize :ensure_session_token

# ASSOCIATIONS
  belongs_to :team
  has_many :messages
  has_many :user_channels
  has_many :channels, through: :user_channels
  # has_many(
  #   :conversations,
  #   class_name: 'Channel',
  #   foreign_key: :primary_user_id,
  #   primary_key: :id
  # )
  has_attached_file :image, default_url: "user-icon.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

# CLASS METHODS

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)

    return nil unless user

    user.is_password?(password) ? (return user) : (return nil)
  end

# INSTANCE METHODS

  def generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session!
    self.session_token = generate_session_token
    self.save!
    return self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def conversations
    Channel.where("primary_user_id = ? OR secondary_user_id = ?", self.id, self.id)
  end

  private
  def ensure_session_token
    self.session_token ||= generate_session_token
  end
end
