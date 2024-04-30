# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "wcmd"
  spec.version       = "0.1.0"
  spec.authors       = ["whw"]
  spec.email         = ["361385654@qq.com"]

  spec.summary       = "command line style"
  spec.homepage      = "https://a6166231.github.io"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.3"
end
