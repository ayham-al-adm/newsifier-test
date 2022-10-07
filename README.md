## Newsifier test project

You can run this project as a traditional Laravel project
- Install composer and npm dependencies.
- Setup database config inside .env file.
- Move gif-finder folder (That contains NodeJs section for API).
- Install npm dependencies and run command -npm start-.
- Go back into laravel project and go to resources>gif-plugin>gif-plugin.js.
- Find the row 87 and replace it with NodeJs url and port number.
- After run -php artisan migrate- you can start the app.
- Make sure you run -npm run dev- command for laravel vite in development environment .
