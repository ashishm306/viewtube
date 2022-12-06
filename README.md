# ViewTube App Case Study

### Name of the Project - ViewTube

## Objective 
### To allow viewers to view videos in different categories and mark them as favourites for later viewing.
The ViewTube App uses Google's Youtube API to list popular videos, list videos based on selected category.
The App should allow registered users to mark their preferred video as favourites and remove them from favourites
The App should provide Search Video functionality that allows the viewers to search for videos.
The App should allow the registered viewers to select a video and play it.

## Requirement Specification :
- Application must be designed for mobile responsive.
- Below listed are the key functional requirements that need to be implemented. [ For working with Youtube API, supporting url is also provided ]
- More details would be provided with the Issues raised with the boilerplate

1. To fetch Popular Youtube Videos
- `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=in&maxResults=10&key=[YOUR_API_KEY]`


2. To fetch Youtube Videos for the selected Category
- `https://www.googleapis.com/youtube/v3/videos?part=snippet&regionCode=in&maxResults=10&videoCategoryId=[SELECTED_VIDEO_CATEGORY_ID]&chart=mostPopular&key=[YOUR_API_KEY]`

##### The Category ID can be fetched using following API 
- `https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=in&key=[YOUR_API_KEY]`

3. To search for Youtbue Video based on search text
- `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=[VIDEO_SEARCH_TEXT]&key=[YOUR_API_KEY]`
 
***P.S :- You need to generate the API_KEY for the above endpoints and replace
[YOUR_API_KEY] with it.***

```
**To register for an API key, follow these steps:**
1. Login to gmail account
2. Follow the url :: https://developers.google.com/youtube/registering_an_application
3. On the Page, Click on Link `Credentials Page` or follow the url :: https://console.developers.google.com/apis/credentials
4. Click on Credentials
5. Click on Create
6. Click on Create Credentials-->API Key 
7. Copy the Created Key and Save it for later use in the application 
```

## Functional Requirements
1. User should be able to register in the system.
2. A registered user should be able to login to the system
3. Display videos from youtube API
3. Search : Search for a particular video 
4. Favorite Service - View all Favorite videos under Favorite section
5. Filter Videos based on category

## Mandatory Specifications for Building Assignment Solution

## Tools and Technologies to be used
- VCS        :  Gitlab
- BackEnd :  JSON Server
- FrondEnd  :  Angular
- Testing    :  Karma, Jasmine,
* DataSource for Videos in this app should be The Youtube API
* Entire application must be deployed in Docker containers.
