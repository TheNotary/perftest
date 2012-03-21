require 'test_helper'

class TestsControllerTest < ActionController::TestCase
  test "should get bool" do
    get :bool
    assert_response :success
  end

  test "should get small" do
    get :small
    assert_response :success
  end

  test "should get big" do
    get :big
    assert_response :success
  end

  test "should get huge" do
    get :huge
    assert_response :success
  end

end
