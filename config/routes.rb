Rails.application.routes.draw do
  resources :profiles
	get 'ImDefinitelyRich' => "profiles#new"	
  	get 'Search' => "profiles#index"
  	root 'pages#index'
end
