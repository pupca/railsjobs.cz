class AddToJobs < ActiveRecord::Migration
  def change
    add_column :jobs, :approved, :boolean, :default => false
    add_column :jobs, :confirmed, :boolean, :default => false
  end
end