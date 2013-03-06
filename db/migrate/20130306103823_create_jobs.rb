class CreateJobs < ActiveRecord::Migration
  def change
    create_table :jobs do |t|
      t.string :title
      t.string :company_name
      t.string :company_url
      t.string :city
      t.string :address
      t.boolean :remote
      t.text :description
      t.text :instructions
      t.string :category_id
      t.string :country

      t.timestamps
    end
  end
end
