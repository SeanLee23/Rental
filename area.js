document.addEventListener('DOMContentLoaded', function () {
    var schools = {
      'Elementary School': ['Cartwright Roberta', 'Cartwright Roberta'],
      'Middle Or Junior School': ['Silvestri'],
      'High School': ['Silverado']
    };
  
    var schoolList = document.getElementById('school-list');
    var locationList = document.getElementById('location-list');
  
    for (var category in schools) {
      var categoryElement = document.createElement('li');
      categoryElement.innerHTML = '<strong>' + category + '</strong>';
      schoolList.appendChild(categoryElement);
  
      schools[category].forEach(function (school) {
        var schoolElement = document.createElement('li');
        schoolElement.textContent = school;
        schoolList.appendChild(schoolElement);
      });
    }
  
    // Other nearby locations (if any)
    var otherLocations = ['Home Depot', 'Walmart', 'The 215 Freeway', 'Dutch Bros', 'The 146 Freeway', 'Pebble Park', 'Smiths', 'Albertson'];
  
    if (otherLocations.length > 0) {
      otherLocations.forEach(function (location) {
        var locationElement = document.createElement('li');
        locationElement.textContent = location;
        locationList.appendChild(locationElement);
      });
    } else {
      var noLocationsElement = document.createElement('li');
      noLocationsElement.textContent = 'No other nearby locations listed.';
      locationList.appendChild(noLocationsElement);
    }
  
    // Create OpenStreetMap embed
    var mapContainer = document.getElementById('map-container');
    var iframe = document.createElement('iframe');
    iframe.setAttribute('width', '100%');
    iframe.setAttribute('height', '100%');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('scrolling', 'no');
    iframe.setAttribute('marginheight', '0');
    iframe.setAttribute('marginwidth', '0');
    iframe.setAttribute('src', 'https://www.openstreetmap.org/export/embed.html?bbox=-115.26978%2C36.1189%2C-115.26774%2C36.12037&layer=mapnik');
    mapContainer.appendChild(iframe);
  });
  