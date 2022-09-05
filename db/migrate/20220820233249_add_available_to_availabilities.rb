class AddAvailableToAvailabilities < ActiveRecord::Migration[6.1]
  def change
    add_column :availabilities, :available, :boolean
  end
end
