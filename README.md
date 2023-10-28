# Subdomain_nextjs

Subdomain routing

## Features

* Subdomain routing
* Customizable card with image, color, size.
* Customizable header and footer.

## Getting Started

To get started, follow these steps:

* Clone the repository:
```bash
git clone https://github.com/cric2000/Subdomain_nextjs
```
* Navigate to the project directory and install project dependencies:
```bash
npm install
```
* Start the application:
```bash
node server.js
```
The application will start on port [3000](http://localhost:3000/).

## Local Subdomain Mapping

I have configured subdomain1 and subdomain2 in my local /etc/hosts file ( [link for the same](https://stackoverflow.com/questions/19016553/add-subdomain-to-localhost-url) ), enabling the following functionality:

When I visit localhost:3000, I see the main page.
When I visit subdomain.localhost:3000, I access content related to subdomain1.
When I visit subdomain2.localhost:3000, I access content related to subdomain2.
