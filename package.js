Package.describe({
  summary: "Chess.js"
});


Package.on_use(function (api) {
  api.add_files('js/chess-0.3.0.min.js', ['client']);
  api.add_files('css/chess-0.3.0.min.css', ['client']);
});
