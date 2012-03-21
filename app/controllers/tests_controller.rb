class TestsController < ApplicationController
  def bool
    if rand(2)==0
      render :text => 'false'
    else
      render :text => 'true'
    end
  end

  def small
  end

  def big
  end

  def huge
  end

end
