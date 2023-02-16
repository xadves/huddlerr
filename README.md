# Huddlerr
Coaching Assistant App. Made to display a scoreboard to viewers in a simplified manner, while being a tool for the coach/assistance to manage score and player time.

### Setup
- Clone this repo into a new folder like C:\huddler
- Download the OS specific version [Pocketbase 0.12.2]() or binary equivelent
- run `.\pocketbase serve`
- Return to http://yourdomain.com:port/_ in order to set an admin user name and password. This is currently the 

Read Pocketbase documentation for moving a setup into production. Mine is run behind Caddy as a reverse proxy.

### Status (Version 0.1.3)
This project is being converted from a live php/js environment on a dev server to running on on a prod server with pocketbase 0.12.2 and static html. I am unsure which files I need to ship pocketbase with yet for reproducability, but once i get a working version for myself, I will correct this and upload that.

- Permissions are not currently set. xx So I believe this is corrected, just needs validated.
- Added Alpinejs CDN for testing if that is a library I'd like to add. This seems likely, a cool new utility. xx Officially using AlpineJS. Maybe should have done this in Node/Vue/React instead, but decisions were made and I do appreciate the lack of build. I don't know how this affects security though.
- Started the setup for the SPA based in pb_public/index.html

### Help
[Mikepicker on Medium](https://medium.com/@Mikepicker/build-a-multi-user-todo-list-app-with-pocketbase-in-a-single-html-file-8734bfb882fd) - This looks extremely helpful for getting started with this project

### Todo, not an exhaustive list.
- [x] Localize the CSS/JS files.
- [x] Change smaller functions from entire pages to modals.
- [x] Repair the basic interface to working status.
- [ ] Highlight players that need to be subbed, make this a variable for the coach control. 
- [x] Prune unused libaries.
- [ ] Prune the legacy application, this is no longer used.
- [ ] Complete and copy the audit log section to the scoreboard section.
- [ ] Fix the (auto)save feature
- [ ] Implement highlight players feature, possibly looking at making a variable progress bar to visually show who is in the longest
- [x] Create Edit Team and Edit Player Modals
- [ ] Resolve Source Map Errors. Is this only for Firefox dev?
- [ ] Only allow numbers in player modal
- [ ] Potentially Make Games Linkable instead of just teams

## Changelog
- 2023-02-16 - Found the changes to the README were not saved, most likely user error. Past day updates are from memory. Created and tested player/team modals. Changed the scope of the variables so that they no longer conflict. Correctly themed all the remaining buttons. Fixed the "Link to Team" link. Added significant digits to player in time. Set the filter on 'main page' to updated >= yesterday. Made progress to the audit log section in the controls.
- 2023-02-15 - Setup Login Modal, updated scoreboard interface, started implementing the highlight players back.
- 2023-02-14 - Built more into the Bootstrap interface. Fixed the issue with mobile being small (meta viewport is a thing). Added switches to players sub in, testing out the "autosave" button/radio group (not working), fixed the navbar to look correct. Shrunk the columns from 12 to 10 and used justify around. I still don't love how the "control panel" area looks and I would like it to integrate more seemlessly into the design.
- 2023-02-13 - Started the transition from Bulma to Bootstrap. I have not pruned the CSS and JS files that are not going to be used, and currently using a CDN for about half of the content. I already likethe interface better, and I know how to manipulate this better.
- 2023-02-12 - Built the whole basics of the page with most of the basic functionality from the legacy version.
- 2023-02-11 - Began building the API to manage and get to games
- 2023-02-07 - Began testing AlpineJS for the first time, got started building the pocketbase file, started converting handleAPI.js functions