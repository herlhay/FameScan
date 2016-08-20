Rails.application.routes.draw do
  resources :profiles
	get 'ImDefinitelyRich' => "profiles#new"	
  	get 'Search' => "profiles#index"
  	get 'admin' => "profiles#admin"
  	root 'pages#index'
end
