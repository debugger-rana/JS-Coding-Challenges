# Maps

` Question 1: Find Events Within a Latitude and Longitude Range`

 Suppose that you are developing an event management application. Given an array of event data with latitude and longitude coordinates, find all events that are within a specified range of latitude and longitude.

`Example:`

```javascript

function findEventsInRange(events, latRange, lngRange) {
     
  // Your code here

}

// Example usage:
const events = [
  { name: "Concert", city: "New York", lat: 40.730610, lng: -73.935242 },
  { name: "Festival", city: "Los Angeles", lat: 34.0522, lng: -118.2437 },
  { name: "Parade", city: "London", lat: 51.5074, lng: -0.1278 }
];
const latRange = [34.0, 40.0]; // Latitude range
const lngRange = [-120.0, -70.0]; // Longitude range

const filteredEvents = findEventsInRange(events, latRange, lngRange);
console.log(filteredEvents);
// Output: [{ name: "Festival", city: "Los Angeles", lat: 34.0522, lng: -118.2437 }]


```

`Topics Covered:`
Javascript Maps
 
**Hints:**
- [Maps in JS](https://www.w3schools.com/js/js_maps.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function findEventsInRange(events, latRange, lngRange) {
  return events.filter(event => 
    event.lat >= latRange[0] && event.lat <= latRange[1] &&
    event.lng >= lngRange[0] && event.lng <= lngRange[1]
  );
}

// Example usage:
const events = [
  { name: "Concert", city: "New York", lat: 40.730610, lng: -73.935242 },
  { name: "Festival", city: "Los Angeles", lat: 34.0522, lng: -118.2437 },
  { name: "Parade", city: "London", lat: 51.5074, lng: -0.1278 }
];
const latRange = [34.0, 40.0]; // Latitude range
const lngRange = [-120.0, -70.0]; // Longitude range

const filteredEvents = findEventsInRange(events, latRange, lngRange);
console.log(filteredEvents);
// Output: [{ name: "Festival", city: "Los Angeles", lat: 34.0522, lng: -118.2437 }]
  
```

**Explanation:**


- The findEventsInRange function filters events whose lat and lng values fall within the specified latRange and lngRange.
- It uses the filter method to return an array of matching events.

</details>
 
---- 
` Question 2: Group Events by City`

 Create a map that groups events based on their city.

`Example:`

```javascript

function groupEventsByCity(events) {

    // Your Code here

}

// Example usage:
const events = [
  { name: "Concert", city: "New York", lat: 40.730610, lng: -73.935242 },
  { name: "Festival", city: "Los Angeles", lat: 34.0522, lng: -118.2437 },
  { name: "Parade", city: "New York", lat: 40.730610, lng: -73.935242 }
];

const groupedEvents = groupEventsByCity(events);

// Display the grouped events
for (const city in groupedEvents) {
  console.log(city + ": [" + groupedEvents[city].join(", ") + "]");
}



```

`Topics Covered:`
Javascript Maps
 
**Hints:**
- [Maps in JS](https://www.w3schools.com/js/js_maps.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function groupEventsByCity(events) {
  return events.reduce((acc, event) => {
    // If the city doesn't exist in the accumulator, initialize it as an empty array
    if (!acc[event.city]) {
      acc[event.city] = [];
    }
    // Add the event name to the corresponding city group
    acc[event.city].push(event.name);
    return acc;
  }, {});
}

// Example usage:
const events = [
  { name: "Concert", city: "New York", lat: 40.730610, lng: -73.935242 },
  { name: "Festival", city: "Los Angeles", lat: 34.0522, lng: -118.2437 },
  { name: "Parade", city: "New York", lat: 40.730610, lng: -73.935242 }
];

const groupedEvents = groupEventsByCity(events);

// Display the grouped events
for (const city in groupedEvents) {
  console.log(city + ": [" + groupedEvents[city].join(", ") + "]");
  
}

  
```

**Explanation:**


- The groupEventsByCity function groups events based on their city.
- It uses reduce to accumulate events into a map, where each city is a key, and the value is an array of event names.

</details>
 
---- 
` Question 3: Event Planning`

 You are building an event management application. Create a map that shows all the events happening in a city on a particular date, displaying them with markers and event details.

`Example:`

```javascript

function filterEventsByDate(events, eventDate) {
  
  //Your code here

}

// Example usage:
const events = [
  { name: "Concert", date: "2024-12-31", lat: 40.730610, lng: -73.935242 },
  { name: "Festival", date: "2024-12-31", lat: 34.0522, lng: -118.2437 },
  { name: "Parade", date: "2024-12-31", lat: 51.5074, lng: -0.1278 }
];

const eventDate = "2024-12-31";
const eventsOnDate = filterEventsByDate(events, eventDate);

// Display the filtered events with their details
eventsOnDate.forEach(event => {
  console.log(event.name + " is happening at [" + event.lat + ", " + event.lng + "]");
});

```

`Topics Covered:`
Javascript Maps
 
**Hints:**
- [Maps in JS](https://www.w3schools.com/js/js_maps.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function filterEventsByDate(events, eventDate) {
  // Filter events happening on the specified date
  return events.filter(event => event.date === eventDate);
}

// Example usage:
const events = [
  { name: "Concert", date: "2024-12-31", lat: 40.730610, lng: -73.935242 },
  { name: "Festival", date: "2024-12-31", lat: 34.0522, lng: -118.2437 },
  { name: "Parade", date: "2024-12-31", lat: 51.5074, lng: -0.1278 }
];

const eventDate = "2024-12-31";
const eventsOnDate = filterEventsByDate(events, eventDate);

// Display the filtered events with their details
eventsOnDate.forEach(event => {
  console.log(event.name + " is happening at [" + event.lat + ", " + event.lng + "]");
});

 
```

**Explanation:**


- The filterEventsByDate function filters events that occur on the given eventDate.
- It returns an array of events that match the provided date and then logs their details using string concatenation.
  
</details>
 
---- 
` Question 4: Check if a City is in the Northern Hemisphere`

 Write a programme to check if a city is in the Northern Hemisphere based on its latitude using maps. 

`Example:`

```javascript

// Function to check the hemisphere based on latitude
const checkHemisphere = (latitude) => {

      // Your code here

};

// Example usage
const latitude = 40.730610; // Replace with the latitude of the city
console.log(checkHemisphere(latitude));


```

`Topics Covered:`
Javascript Maps, Conditional statements
 
**Hints:**
- [Conditional Statements](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Conditionals), - [Maps in JS](https://www.w3schools.com/js/js_maps.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

// Function to check the hemisphere based on latitude
const checkHemisphere = (latitude) => {
  if (latitude > 0) {
    return "Northern Hemisphere";
  } else if (latitude < 0) {
    return "Southern Hemisphere";
  } else {
    return "On the Equator";
  }
};

// Example usage
const latitude = 40.730610; // Replace with the latitude of the city
console.log(checkHemisphere(latitude));

 
```

**Explanation:**


- The checkHemisphere function determines the hemisphere based on latitude.
- If the latitude is greater than 0, it returns "Northern Hemisphere".
- If the latitude is less than 0, it returns "Southern Hemisphere", and if it's 0, it returns "On the Equator".
  
</details>
 
---- 
` Question 5: Count Events by Date`

  Write a program to count the number of events happening on a specific date.

`Example:`

```javascript

function countEventsByDate(events, eventDate) {
  
    // Your code here

}

// Example usage:
const events = [
  { name: "Concert", date: "2024-12-31", lat: 40.730610, lng: -73.935242 },
  { name: "Festival", date: "2024-12-31", lat: 34.0522, lng: -118.2437 },
  { name: "Parade", date: "2025-01-01", lat: 51.5074, lng: -0.1278 }
];

const eventDate = "2024-12-31";
const eventCount = countEventsByDate(events, eventDate);

console.log("Number of events on " + eventDate + ": " + eventCount);

```

`Topics Covered:`
Array filtering, Javascript Maps, Conditional statements
 
**Hints:**
- [Conditional Statements](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Conditionals), - [Maps in JS](https://www.w3schools.com/js/js_maps.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

function countEventsByDate(events, eventDate) {
  // Filter events happening on the specified date and return the count
  return events.filter(event => event.date === eventDate).length;
}

// Example usage:
const events = [
  { name: "Concert", date: "2024-12-31", lat: 40.730610, lng: -73.935242 },
  { name: "Festival", date: "2024-12-31", lat: 34.0522, lng: -118.2437 },
  { name: "Parade", date: "2025-01-01", lat: 51.5074, lng: -0.1278 }
];

const eventDate = "2024-12-31";
const eventCount = countEventsByDate(events, eventDate);

console.log("Number of events on " + eventDate + ": " + eventCount);
 
```

**Explanation:**


- The countEventsByDate function filters events by the given date and returns the count of matching events.
- It uses filter to find events that match the specified date and then counts them using .length.
  
</details>
 
---- 
` Question 6: Find Events Happening Now`

  Write a program to identify events that are happening on the current date.

`Example:`

```javascript

// Sample input: Array of event objects
const events = [
  { name: "Music Festival", date: "2024-12-24", lat: 40.7128, lng: -74.0060 },
  { name: "Art Exhibition", date: "2024-12-23", lat: 34.0522, lng: -118.2437 },
  { name: "Tech Meetup", date: "2024-12-24", lat: 37.7749, lng: -122.4194 },
];

// Function to find events happening today
function findEventsHappeningToday(events) {

      // Your code here

}

// Call the function and log the result
const todayEvents = findEventsHappeningToday(events);
console.log("Events happening today:", todayEvents);


```

`Topics Covered:`
Array filtering, Javascript Maps, Conditional statements
 
**Hints:**
- [Conditional Statements](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Conditionals), - [Maps in JS](https://www.w3schools.com/js/js_maps.asp)

<details>
  <summary>Solution</summary>

### Let's look at the solution:

```javascript

// Sample input: Array of event objects
const events = [
  { name: "Music Festival", date: "2024-12-24", lat: 40.7128, lng: -74.0060 },
  { name: "Art Exhibition", date: "2024-12-23", lat: 34.0522, lng: -118.2437 },
  { name: "Tech Meetup", date: "2024-12-24", lat: 37.7749, lng: -122.4194 },
];

// Function to find events happening today
function findEventsHappeningToday(events) {
  const today = new Date().toISOString().split("T")[0]; // Get current date in "YYYY-MM-DD" format
  
  // Use map to create a new array of events where the date matches today's date
  const mappedEvents = events.map(event => {
    if (event.date === today) {
      return event; // If the event is happening today, return it
    }
    return null; // Otherwise, return null
  }).filter(event => event !== null); // Filter out null values
  
  return mappedEvents;
}

// Call the function and log the result
const todayEvents = findEventsHappeningToday(events);
console.log("Events happening today:", todayEvents);
 
```

**Explanation:**


- We use map to iterate over the events array and create a new array. If the event's date matches the current date, we return the event; otherwise, we return null.
- After using map, we filter out the null values, leaving only the events that are happening today.
  
</details>
 
---- 
