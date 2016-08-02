class User < ActiveRecord::Base
  attr_reader :password
  validates :email, :session_token, :password_digest, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  after_initialize :ensure_session_token

# ASSOCIATIONS

  has_many :user_channels
  has_many :channels, through: :user_channels

# CLASS METHODS

  def self.find_by_credentials(email, password)
    user = User.find(email: email)

    return nil unless User

    user.is_password?(password) ? (return user) : (return nil)
  end

# INSTANCE METHODS

  def generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session!
    session_token = generate_session_token
    self.session_token = session_token
    return session_token
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  private
  def ensure_session_token
    self.session_token ||= generate_session_token
  end
end
