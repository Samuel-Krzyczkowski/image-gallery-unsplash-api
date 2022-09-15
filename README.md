# Image Library with Unsplash API  

This app mimics [unsplash.com](https://unsplash.com/)  
It uses their API to get images and displays them in a grid  
The app comes with the following functionality:  
- [x] Basic grid with recommended images  
- [x] Search page:  
  - [x] SearchBar - using APIs' *query* endpoint
  - [x] SortBy - using APIs' *order_by* endpoint
  - [x] Grid with 10 photos from the response  
  - [x] Pagination  
  - [x] Link to ImageDetailed view  
  - [ ] Filters - by *color*, *orentation*, *sensitive content* 
  
- [x] ImageDetailed view:
  - [x] Specific image page with details:
    - [x] Header - Author Image + Profile Link, Author username, Instagram username(if any) + Social Page Link(if any)
    - [x] Image View
    - [x] Modal - Fullscreen Image View
    - [x] Image Details - Downloads, Views, Date Published
  - [x] Autogenerate page link

## Tools

- JavaScript
- React
- Tailwind

#

# How to Run Project

## Clone repo

```
git clone https://github.com/Samuel-Krzyczkowski/image-gallery-unsplash-api.git
```

## Open Project Folder

```
cd image-gallery-unsplash-api
```

## Install Dependencies

```
npm install
```

## Run Server

```
npm start
```

## App address

[localhost:3000](http://localhost:3000/)


