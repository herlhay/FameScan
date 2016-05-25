class AddColumnsToProfile < ActiveRecord::Migration
  def change
    add_column :profiles, :middle_name, :string
    add_column :profiles, :source1, :string
    add_column :profiles, :source2, :string
    add_column :profiles, :source3, :string
    add_column :profiles, :net_worth, :integer
  end
end
