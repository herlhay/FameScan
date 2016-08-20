class Profile < ActiveRecord::Base
  has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :myjob, presence: true
  validates :age, presence: true
  validates :source1, presence: true
  validates :net_worth, presence: true
  validates :description, presence: true
  validates :mycountry, presence: true
  validates :mystate, presence: true

  def self.search(search)
	if search
	   where('first_name LIKE :search OR middle_name LIKE :search OR last_name LIKE :search', search: "%#{search}%")
	end
  end
  	
end
