class AddDescriptionToProfile < ActiveRecord::Migration
  def change
    add_column :profiles, :description, :text
    add_column :profiles, :mycountry, :string
    add_column :profiles, :mystate, :string
  end
end
