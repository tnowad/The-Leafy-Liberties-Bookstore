# Bookstore

## Frontend

Note:

- If name of folder is capitalized, it means that it is a component
-

```
.
├── build
├── public
│  ├── favicon.ico
│  ├── index.html
│  ├── logo192.png
│  ├── logo512.png
│  ├── manifest.json
│  └── robots.txt
├── src
│  ├── assets
│  │  ├── fonts
│  │  │  └── *
│  │  └── images
│  │     └── *
│  ├── components # this contains all the components like Button, Popper, etc.
│  │  ├── AccountItem
│  │  │  └── index.js
│  │  ├── Button
│  │  │  ├── Button.js
│  │  │  └── index.js
│  │  ├── GlobalStyles
│  │  │  └── index.js
│  │  ├── Icons
│  │  │  └── index.js
│  │  ├── Image
│  │  │  ├── BigLogo.png
│  │  │  └── index.js
│  │  ├── Popper
│  │  │  ├── Menu
│  │  │  │  └── index.js
│  │  │  └── index.js
│  │  └── SuggestedAccounts
│  │     └── index.js
│  ├── config # this contains all the configuration files like routes, etc.
│  │  ├── index.js
│  │  └── routes.js
│  ├── hooks # this contains all the custom hooks like useAuth, useSearch, etc.
│  │  └── index.js
│  ├── layouts # this contains all the layouts like DefaultLayout, DashboardLayout, etc.
│  │  ├── components # this contains all the components that are used in layouts
│  │  │  ├── Footer
│  │  │  ├── footer
│  │  │  │  ├── Footer.js
│  │  │  │  └── index.js
│  │  │  ├── Header
│  │  │  │  ├── Header.js
│  │  │  │  └── index.js
│  │  │  ├── Search
│  │  │  │  └── index.js
│  │  │  └── Sidebar
│  │  │     ├── Menu
│  │  │     │  └── index.js
│  │  │     └── index.js
│  │  ├── DashboardLayout
│  │  │  ├── DashboardLayout.js
│  │  │  └── index.js
│  │  ├── DefaultLayout
│  │  │  ├── DefaultLayout.js
│  │  │  └── index.js
│  │  ├── HeaderOnly
│  │  │  └── index.js
│  │  └── index.js
│  ├── pages # this contains all the pages like Home, Profile, etc.
│  │  ├── Cart
│  │  │  └── index.js
│  │  ├── Checkout
│  │  │  └── index.js
│  │  ├── Dashboard
│  │  │  └── index.js
│  │  ├── Following
│  │  │  └── index.js
│  │  ├── Home
│  │  │  └── index.js
│  │  ├── NotFound
│  │  │  └── index.js
│  │  ├── Profile
│  │  │  └── index.js
│  │  ├── Search
│  │  │  └── index.js
│  │  └── Upload
│  │     └── index.js
│  ├── routes # this contains all the routes like Home, Profile, etc.
│  │  ├── index.js
│  │  └── routes.js
│  ├── services # this contains all the services like searchService, loginService, etc.
│  │  └── searchService.js
│  ├── utils # this contains all the utility functions like getInitials, etc.
│  │  └── httpRequest.js
│  ├── App.js
│  ├── index.css
│  └── index.js
├── jsconfig.json
├── package-lock.json
├── package.json
└── tailwind.config.js

```
