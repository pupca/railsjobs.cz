class JobsController < ApplicationController
  before_action :set_job, :expect => [:new, :create]
  def new
    @job = Job.new
  end

  def show
  end

  def create
    @job = Job.new(job_params)

    respond_to do |format|
      if @job.save
        format.html { redirect_to preview_job_path(@job) }
        format.xml  { render :xml => @job, :status => :created, :location => @job }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @job.errors, :status => :unprocessable_entity }
      end
    end
  end
  
  def preview
  end
  
  def approve
    @job.update_attribute(:approved, true)
    redirect_to check_out_job_path(@job)
  end
  
  def check_out
  end
  
  def congratulation
  end

  def edit
  end
  
  private
  def set_job
    @job = Job.find(params[:id])
  end
  
  def job_params
    params.require(:job).permit(:id, :title, :company_name, :city, :company_url, :address, :country, :description, :instructions)
  end
end
