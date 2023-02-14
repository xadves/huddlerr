# Huddlerr
Coaching Assistant App. Made to display a scoreboard to viewers in a simplified manner, while being a tool for the coach/assistance to manage score and player time.

### Setup
- Clone this repo into a new folder like C:\huddler
- Download the OS specific version [Pocketbase 0.12.2]() or binary equivelent
- run `.\pocketbase serve`

Read Pocketbase documentation for moving a setup into production. Mine is run behind Caddy as a reverse proxy.

### Status (Version 0.1.1)
This project is being converted from a live php/js environment on a dev server to running on on a prod server with pocketbase 0.12.2 and static html. I am unsure which files I need to ship pocketbase with yet for reproducability, but once i get a working version for myself, I will correct this and upload that.

- Permissions are not currently set. xx So I believe this is corrected, just needs validated.
- Added Alpinejs CDN for testing if that is a library I'd like to add. This seems likely, a cool new utility. xx Officially using AlpineJS. Maybe should have done this in Node/Vue/React instead, but decisions were made and I do appreciate the lack of build. I don't know how this affects security though.
- Started the setup for the SPA based in pb_public/index.html

### Help
[Mikepicker on Medium](https://medium.com/@Mikepicker/build-a-multi-user-todo-list-app-with-pocketbase-in-a-single-html-file-8734bfb882fd) - This looks extremely helpful for getting started with this project

### Todo, not an exhaustive list.
- Localize the CSS/JS files.
- Change smaller functions from entire pages to modals.
- Repair the basic interface to working status.
- Highlight players that need to be subbed, make this a variable for the coach control. 
- Prune unused libaries.
- Prune the legacy application, this is no longer used.

## Changelog
- 2023-02-13 Started the transition from Bulma to Bootstrap. I have not pruned the CSS and JS files that are not going to be used, and currently using a CDN for about half of the content. I already likethe interface better, and I know how to manipulate this better.
- 2023-02-12 Built the whole basics of the page with most of the basic functionality from the legacy version.
- 2023-02-11 Began building the API to manage and get to games
- 2023-02-07 Began testing AlpineJS for the first time, got started building the pocketbase file, started converting handleAPI.js functions