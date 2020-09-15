require 'html-proofer'

task :test do
  sh "bundle exec middleman build"
  HTMLProofer.check_directory("./build").run
end
