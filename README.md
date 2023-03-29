# Huddlerr
Coaching Assistant App. Made to display a scoreboard to viewers in a simplified manner, while being a tool for the coach/assistance to manage score and player time.

### Setup
- Clone this repo into a new folder like C:\huddler
- Download the OS specific version [Pocketbase 0.12.2]() or binary equivelent
- run `.\pocketbase serve`
- Return to http://yourdomain.com:port/_ in order to set an admin user name and password. This is currently the 

Read Pocketbase documentation for moving a setup into production. Mine is run behind Caddy as a reverse proxy.

### Status (Version 0.1.5)
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
- [ ] Complete audit log section
- [x] Copy the audit log section to the scoreboard section.
- [x] Fix the (auto)save feature
- [ ] Implement highlight players feature, possibly looking at making a variable progress bar to visually show who is in the longest
- [x] Create Edit Team and Edit Player Modals
- [ ] Resolve Source Map Errors. Is this only for Firefox dev?
- [ ] Only allow numbers in player modal
- [ ] Potentially Make Games Linkable instead of just teams
- [ ] Add 'Enter' Support to Login
- [x] Logout takes you back home
- [ ] Empty the credentials modal after logging in
- [ ] Find a way to parse the players in the scoreboard

## Changelog
- 2023-03-29 - Updated Public Scoreboard to show players who scored.
- 2023-03-22 - Added pressing enter to login prompt(Not working as expected?). Made games linkable. Removed the updated filter in all games until that bug is resolved.
- 2023-03-03 - Discovered a bug where multiple user creating teams locks up the app and unable to create players on either team until one is deleted. Found the issue to be permissions related in the pocketbase side. Completely hid the progressbar unless debug is checked. Fixed the auto save to actually save the game every %5. Discovered a bug where the not-yet-implemented highlight players button sorts the players based on time, but does not move the checkbox. Creates some weird behavior on edge cases of no players subbed in etc. Hiding the button into debug mode for now. Discovered a bug where the radio button for auto save is not consistent. Changed the button to be stateful on x-bind from Alpine instead.
- 2023-02-25 - Found and was able to restore the changelog from the 15th.
- 2023-02-16 - Found the changes to the README were not saved, most likely user error. Past day updates are from memory. Created and tested player/team modals. Changed the scope of the variables so that they no longer conflict. Correctly themed all the remaining buttons. Fixed the "Link to Team" link. Added significant digits to player in time. Set the filter on 'main page' to updated >= yesterday. Made progress to the audit log section in the controls.
- 2023-02-15 - Changed Auto save to happen every mod 5 seconds. Implemented Modal for Login screen. Login errors are still an alert, this needs to be changed. Removed 'All Games' placeholder. Formatted dates in all and team games. Cleaned up Scoreboard interface. Added the first piece of highlighting subs and their progress bar. Pruned some of the legacy files.
- 2023-02-14 - Built more into the Bootstrap interface. Fixed the issue with mobile being small (meta viewport is a thing). Added switches to players sub in, testing out the "autosave" button/radio group (not working), fixed the navbar to look correct. Shrunk the columns from 12 to 10 and used justify around. I still don't love how the "control panel" area looks and I would like it to integrate more seemlessly into the design.
- 2023-02-13 - Started the transition from Bulma to Bootstrap. I have not pruned the CSS and JS files that are not going to be used, and currently using a CDN for about half of the content. I already likethe interface better, and I know how to manipulate this better.
- 2023-02-12 - Built the whole basics of the page with most of the basic functionality from the legacy version.
- 2023-02-11 - Began building the API to manage and get to games
- 2023-02-07 - Began testing AlpineJS for the first time, got started building the pocketbase file, started converting handleAPI.js functions
