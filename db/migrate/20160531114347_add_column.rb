class AddColumn < ActiveRecord::Migration
  def change
  	add_column :profiles, :myjob, :string
  end
end
