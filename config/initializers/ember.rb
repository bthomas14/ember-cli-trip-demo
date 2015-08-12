EmberCLI.configure do |c|
  #c.app :admin, path: Rails.root.join('').to_s #=> path will be app/admin
  c.app :frontend,
    path: Rails.root.join('frontend').to_s,
    build_timeout: 15
end
