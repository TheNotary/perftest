Perftest::Application.routes.draw do
  match '/tests/bool', :to => 'tests#bool'    # bool value returned
  match '/tests/small', :to => 'tests#small'  # small strings of text returned
  match '/tests/big', :to => 'tests#big'      # big pages returned
  match '/tests/huge', :to => 'tests#huge'    # this spits out huge files

end
