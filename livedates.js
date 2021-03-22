/*

Hi Mike!

a show is a javascript object, encased in { } curly brackets. They're loaded up when the page loads.
if you want to add another one, copy-paste this thing and write the things between the quote marks
(the quote marks and commas are important):

{
    venue: "Fat Boab",
    city: "Glasgow",
    date: "20th April 2069",
    link: "http://buytickets.link/blahblahblah"
},

Your pal,
Jamie
xoxo

*/

const shows = [
    {
        venue: "The Macbeth",
        city: "London",
        date: "29 November 2021",
        link: "http://fuck.you"
    },
    {
        venue: "Biddle Bros",
        city: "London",
        date: "30 November 2021",
        link: "http://fuck.you"
    },
    {
        venue: "King Tut's Wah-Wah Hut",
        city: "Glasgow",
        date: "25 December 2021",
        link: "http://fuck.you"
    },
    {
        venue: "The Fat Boab",
        city: "Glasgow",
        date: "27 December 2021",
        link: "http://fuck.you"
    },
];

// this makes all of those into things you can see!
// fancy!

function CreateLiveDate(venue, city, date, link) {
    const parent = document.getElementById("shows-container");

    const show = document.createElement("div");
    show.className = "live-show";

    const newVenue = document.createElement("div");
    newVenue.className = "live-venue";
    newVenue.innerHTML = venue;
    show.appendChild(newVenue);

    const newDate = document.createElement("div");
    newDate.className = "live-date";
    newDate.innerHTML = date;
    show.appendChild(newDate);

    const newCity = document.createElement("div");
    newCity.className = "live-city";
    newCity.innerHTML = city;
    show.appendChild(newCity);

    const newLink = document.createElement("div");
    newLink.className = "live-tickets";
    newLink.innerHTML = `<a href=${link}>Buy Tickets</a>`
    show.appendChild(newLink);

    parent.appendChild(show);
}

shows.forEach(show => CreateLiveDate(show.venue, show.city, show.date, show.link));