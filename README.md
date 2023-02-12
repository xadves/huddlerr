# huddlerr
Coaching Assistant App

### Setup
- Clone this repo into a new folder like C:\huddler
- Download the OS specific version [Pocketbase 0.12.2]() or binary equivelent
- run `.\pocketbase serve`

Read Pocketbase documentation for moving a setup into production.

### Status (Version 0.0.3)
This project is being converted from a live php/js environment on a dev server to running on on a prod server with pocketbase 0.12.2 and static html. I am unsure which files I need to ship pocketbase with yet for reproducability, but once i get a working version for myself, I will correct this and upload that.

- Permissions are not currently set.
- Added Alpinejs CDN for testing if that is a library I'd like to add. This seems likely, a cool new utility.
- Started the setup for the SPA based in pb_public/index.html

### Help
[Mikepicker on Medium](https://medium.com/@Mikepicker/build-a-multi-user-todo-list-app-with-pocketbase-in-a-single-html-file-8734bfb882fd) - This looks extremely helpful for getting started with this project

## Changelog
- 2023-02-07 Began testing AlpineJS for the first time, got started building the pocketbase file, started converting handleAPI.js functions
- 2023-02-11 Began building the API to manage and get to games