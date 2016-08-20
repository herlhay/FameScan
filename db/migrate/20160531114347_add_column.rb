class AddColumn < ActiveRecord::Migration
  def change
  	add_column :profiles, :myjob, :string
  	add_index :profiles, [:first_name, :last_name], :unique => true  
  end
end
