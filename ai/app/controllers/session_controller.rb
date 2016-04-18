class SessionController < ApplicationController
  def new
  end

  def create
    user = User.find_by(username: params[:session][:username])
    if user && user.authenticate(params[:session][:password])
      log_in(user)
    else
      flash[:danger] = "Invalid username/password combo"
      render 'new'
    end
  end

  def destroy
  end

end
