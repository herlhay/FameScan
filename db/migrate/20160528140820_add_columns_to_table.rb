class AddColumnsToTable < ActiveRecord::Migration
  def change
  	add_column :profiles, :job, :string
  	add_column :profiles, :education, :string
  	change_column :profiles, :net_worth, :string
  end
end
