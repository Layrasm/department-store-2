class Api::ItemsController < ApplicationController
  before_action :set_item
  
  def index
    render json: @department.items
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end

  private
  def set_item
    @item = Item.find(params[:department_id])
  end
end
