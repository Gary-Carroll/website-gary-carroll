function copyText1() {
	navigator.clipboard.writeText(`import lichess.api
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np
import pickle
from datetime import datetime
import pandas as pd
import calendar
from pprint import pprint

user_id = 'garethc13'
user = lichess.api.user(user_id)
print(user['perfs']['bullet']['rating'])`);

	var container = document.querySelector('#copy1');
	var message = container.querySelector('.copyMessage');
	var button = container.querySelector('.copyButton');

	message.style.display = 'inline';
	button.addEventListener('mouseleave', function() {
		message.style.display = 'none';
	});
}

function copyText2() {
	navigator.clipboard.writeText(`gameslist = list(lichess.api.user_games(user_id, max=3000, perfType='bullet'))
			       whitegames = [game for game in gameslist if game['players'].get('white').get('user').get('id') == 'garethc13']
			       blackgames = [game for game in gameslist if game['players'].get('white').get('user').get('id') != 'garethc13']
			       print(len(gameslist),'total bullet games.')
			       print(len(whitegames),'as white.')
			       print(len(blackgames),'as black.')`);

	var container = document.querySelector('#copy2');
	var message = container.querySelector('.copyMessage');
	var button = container.querySelector('.copyButton');

	message.style.display = 'inline';
	button.addEventListener('mouseleave', function() {
		message.style.display = 'none';
	});
}

function copyText3() {
	navigator.clipboard.writeText(`move = ['a3','a4','b3','b4','c3','c4','d3','d4','e3','e4','f3','f4','g3','g4','h3','h4','Nf3','Nb3','Na3','Nh3']
squares = [[2,7],[3,7],[2,6],[3,6],[2,5],[3,5],[2,4],[3,4],[2,3],[3,3],[2,2],[3,2],[2,1],[3,1],[2,0],[3,0],
           [2,2],[2,6],[2,7],[2,0]]
values = [sum(1 for i in blackgames if i['moves'].split()[0] == m) for m in move]
data = np.zeros([8, 8])
data[[s[0] for s in squares], [s[1] for s in squares]] = values
data_avg = data/sum(sum(data))   
cmap = sns.cm.rocket_r
x_axis_labels = ['h','g','f','e','d','c','b','a']
y_axis_labels = [*range(1,9)]
plt.gcf().set_facecolor('#333333')
plt.gca().set_facecolor('#333333') 
ax = sns.heatmap(data_avg, square=True, xticklabels=x_axis_labels, yticklabels=y_axis_labels, cmap=cmap, linewidth=0.5, cbar_kws={'label': 'Move Frequency'}) 
plt.title('Opening Moves of my Opponents as White', color='white') 
ax.set_xlabel('File', color='white', fontsize=13) 
ax.set_ylabel('Rank', color='white', fontsize=13)
ax.tick_params(colors='white')
colorbar = ax.collections[0].colorbar
colorbar.set_label('Move Frequency', color='white', fontsize=13)
colorbar.ax.yaxis.set_tick_params(color='white')
plt.setp(colorbar.ax.get_yticklabels(), color='white') 
plt.savefig('openings.png')
plt.show()`);

	var container = document.querySelector('#copy3');
	var message = container.querySelector('.copyMessage');
	var button = container.querySelector('.copyButton');

	message.style.display = 'inline';
	button.addEventListener('mouseleave', function() {
		message.style.display = 'none';
	});
}

function copyText4() {
	navigator.clipboard.writeText(`move = ['a3','a4','b3','b4','c3','c4','d3','d4','e3','e4','f3','f4','g3','g4','h3','h4','Nf3','Nb3','Na3','Nh3']
squares = [[2,7],[3,7],[2,6],[3,6],[2,5],[3,5],[2,4],[3,4],[2,3],[3,3],[2,2],[3,2],[2,1],[3,1],[2,0],[3,0],
           [2,2],[2,6],[2,7],[2,0]]
values = [sum(1 for i in whitegames if i['moves'].split()[0] == m) for m in move]
data = np.zeros([8, 8])
data[[s[0] for s in squares], [s[1] for s in squares]] = values
data_avg = data/sum(sum(data))
x_axis_labels = ['h','g','f','e','d','c','b','a']
y_axis_labels = [*range(1,9)]
plt.gcf().set_facecolor('#333333')
plt.gca().set_facecolor('#333333') 
ax = sns.heatmap(data_avg, square=True, xticklabels=x_axis_labels, yticklabels=y_axis_labels, cmap=cmap, 
                 linewidth=0.5, cbar_kws={'label': 'Move Frequency'}) 
plt.title('Opening Moves by Me as White', color='white') 
ax.set_xlabel('File', color='white', fontsize=13) 
ax.set_ylabel('Rank', color='white', fontsize=13)
ax.invert_xaxis()
ax.invert_yaxis()
ax.tick_params(colors='white')
colorbar = ax.collections[0].colorbar
colorbar.set_label('Move Frequency', color='white', fontsize=13)
colorbar.ax.yaxis.set_tick_params(color='white')
plt.setp(colorbar.ax.get_yticklabels(), color='white') 
plt.savefig('openings2.png')
plt.show()`);

	var container = document.querySelector('#copy4');
	var message = container.querySelector('.copyMessage');
	var button = container.querySelector('.copyButton');

	message.style.display = 'inline';
	button.addEventListener('mouseleave', function() {
		message.style.display = 'none';
	});
}

function copyText5() {
	navigator.clipboard.writeText(`letters = ['a','b','c','d','e','f','g','h']
move = [i + str(j) for i in letters for j in range(1, 9)]
values = [0]*64
squares = [[i, x] for x in range(7, -1, -1) for i in range(8)]

for x in blackgames:
    if x['status'] == 'mate' and x['winner'] == 'white':
        y = list(x['moves'].split(' '))[1::2]
        king = 0
        for i in y:
            if i[0] == 'K':
                king = i[-2:]
            elif i == 'O-O':
                king = 'g8'
            elif i == 'O-O-O':
                king = 'c8'
        for m,v in zip(move,range(64)):
            if m == king:
                values[v] += 1
        if king == 0:
            values[39] += 1
            
data = np.zeros([8,8])
data[[s[0] for s in squares], [s[1] for s in squares]] = values
x_axis_labels = ['h','g','f','e','d','c','b','a']
y_axis_labels = [*range(1,9)]
plt.gcf().set_facecolor('#333333')
plt.gca().set_facecolor('#333333') 
data = data/(sum(sum(data)))
ax = sns.heatmap(data, square=True, xticklabels=x_axis_labels, yticklabels=y_axis_labels, cmap=cmap, 
                 linewidth=0.5, cbar_kws={'label': 'Move Frequency'}) 
plt.title('Square of My King at Checkmate, Black Pieces.', color = 'white')
ax.set_xlabel('File', color='white', fontsize=13) 
ax.set_ylabel('Rank', color='white', fontsize=13)
ax.tick_params(colors='white')
colorbar = ax.collections[0].colorbar
colorbar.set_label('Move Frequency', color='white', fontsize=13)
colorbar.ax.yaxis.set_tick_params(color='white')
plt.setp(colorbar.ax.get_yticklabels(), color='white') 
plt.savefig('blackmate.png')
plt.show()`);

	var container = document.querySelector('#copy5');
	var message = container.querySelector('.copyMessage');
	var button = container.querySelector('.copyButton');

	message.style.display = 'inline';
	button.addEventListener('mouseleave', function() {
		message.style.display = 'none';
	});
}

function copyText6() {
	navigator.clipboard.writeText(`letters = ['a','b','c','d','e','f','g','h']
move = [i + str(j) for i in letters for j in range(1, 9)]
values = [0]*64
squares = [[i, x] for x in range(7, -1, -1) for i in range(8)]
        
for x in whitegames:
    if x['status'] == 'mate' and x['winner'] == 'black':
        y = list(x['moves'].split(' '))[0::2]
        king = 0
        for i in y:
            if i[0] == 'K':
                king = i[-2:]
            elif i == 'O-O':
                king = 'g1'
            elif i == 'O-O-O':
                king = 'c1'
        for m,v in zip(move,range(64)):
            if m == king:
                values[v] += 1
        if king == 0:
            values[32] += 1
            
data = np.zeros([8,8])
data[[s[0] for s in squares], [s[1] for s in squares]] = values
x_axis_labels = ['h','g','f','e','d','c','b','a']
y_axis_labels = [*range(1,9)]
plt.gcf().set_facecolor('#333333')
plt.gca().set_facecolor('#333333') 
data = data/(sum(sum(data)))
ax = sns.heatmap(data, square=True, xticklabels=x_axis_labels, yticklabels=y_axis_labels, cmap=cmap, 
                 linewidth=0.5, cbar_kws={'label': 'Move Frequency'})
plt.title('Square of My King at Checkmate, White Pieces.', color = 'white')
ax.set_xlabel('File', color='white', fontsize=13) 
ax.set_ylabel('Rank', color='white', fontsize=13)
ax.tick_params(colors='white')
colorbar = ax.collections[0].colorbar
colorbar.set_label('Move Frequency', color='white', fontsize=13)
colorbar.ax.yaxis.set_tick_params(color='white')
plt.setp(colorbar.ax.get_yticklabels(), color='white')
ax.invert_xaxis()
ax.invert_yaxis()
plt.savefig('whitemate.png')
plt.show()`);

	var container = document.querySelector('#copy6');
	var message = container.querySelector('.copyMessage');
	var button = container.querySelector('.copyButton');

	message.style.display = 'inline';
	button.addEventListener('mouseleave', function() {
		message.style.display = 'none';
	});
}


function copyText7() {
	navigator.clipboard.writeText(`my_rating = [game['players'].get('white').get('rating') if game['players'].get('white').get('user').get('id') == 'garethc13' else
           game['players'].get('black').get('rating') for game in gameslist]
my_rating.reverse()

fig, ax = plt.subplots()
fig.patch.set_facecolor('#333333')
ax.set_facecolor('#333333')
ax.plot([*range(1, 3001)], my_rating, color='white', linewidth=0.7)
ax.axhline(y=np.mean(my_rating), color='r', label="Average")
ax.set_title("My rating over my last 3000 games", color='white')
ax.legend(facecolor='#333333', edgecolor='white', labelcolor='white')
ax.grid(color='white', linestyle='--', linewidth=0.5)
ax.set_xlabel('Game Number', color='white', fontsize=13) 
ax.set_ylabel('Rating', color='white', fontsize=13)
ax.tick_params(colors='white')
ax.spines[:].set_color('white')
plt.savefig('my_rating.png')
plt.show()`);

	var container = document.querySelector('#copy7');
	var message = container.querySelector('.copyMessage');
	var button = container.querySelector('.copyButton');

	message.style.display = 'inline';
	button.addEventListener('mouseleave', function() {
		message.style.display = 'none';
	});
}

function copyText8() {
	navigator.clipboard.writeText(`opponent_rating = [game['players'].get('white').get('rating') if game['players'].get('white').get('user').get('id') != 'garethc13' else
           game['players'].get('black').get('rating') for game in gameslist]
opponent_rating.reverse()
adjusted_opponent_rating = [r for r in opponent_rating if r > 1550]

fig, ax = plt.subplots()
fig.patch.set_facecolor('#333333')
ax.set_facecolor('#333333')
ax.plot([*range(1,len(adjusted_opponent_rating) + 1)], adjusted_opponent_rating, color='white', linewidth=0.7)
ax.axhline(y=np.mean(adjusted_opponent_rating), color='r', label="Average")
ax.set_title(f"Opponent rating over my last {len(adjusted_opponent_rating)} games", color='white')
ax.legend(facecolor='#333333', edgecolor='white', labelcolor='white')
ax.grid(color='white', linestyle='--', linewidth=0.5)
ax.set_xlabel('Game Number', color='white', fontsize=13) 
ax.set_ylabel('Rating', color='white', fontsize=13)
ax.tick_params(colors='white')
ax.spines[:].set_color('white')
plt.savefig('opp_rating.png')
plt.show()`);

	var container = document.querySelector('#copy8');
	var message = container.querySelector('.copyMessage');
	var button = container.querySelector('.copyButton');

	message.style.display = 'inline';
	button.addEventListener('mouseleave', function() {
		message.style.display = 'none';
	});
}

function copyText9() {
	navigator.clipboard.writeText(`day_dict = {day: {'total':0,'win':0,'draw':0,'loss':0} for day in calendar.day_name}
hour_dict = {key: {'total':0,'win':0,'draw':0,'loss':0} for key in range(24)}

for game in gameslist:
    day = datetime.fromtimestamp(game.get('createdAt')/1000).strftime("%A")
    time = datetime.fromtimestamp(game.get('createdAt')/1000).hour
    colour = "white" if game.get('players').get('white').get('user').get('id') == "garethc13" else "black"
    winner = game.get('winner')
    result = "win" if colour == winner else("draw" if winner == None else "loss")
    day_dict[day][result] += 1
    day_dict[day]['total'] += 1
    hour_dict[time][result] += 1
    hour_dict[time]['total'] += 1
    
pprint(day_dict)
print()
pprint(hour_dict)`);

	var container = document.querySelector('#copy9');
	var message = container.querySelector('.copyMessage');
	var button = container.querySelector('.copyButton');

	message.style.display = 'inline';
	button.addEventListener('mouseleave', function() {
		message.style.display = 'none';
	});
}

function copyText10() {
	navigator.clipboard.writeText(`df = pd.DataFrame(hour_dict).T
fig, ax = plt.subplots(figsize=(10, 6))
fig.patch.set_facecolor('#333333')
ax.set_facecolor('#333333')
df[['win', 'draw', 'loss']].plot(kind='bar', stacked=True, ax=ax, color=['#00CC00', '#007ACC', '#CC3300'])
plt.xlabel("Hour of the Day", color='white', fontsize=14)
plt.xticks(rotation=0, color='white')
plt.ylabel("Number of Games", color='white', fontsize=14)
plt.legend(fontsize=15, facecolor='#333333', edgecolor='white', labelcolor='white')
plt.title("Count of Wins, Draws, and Losses by Hour", color='white', fontsize=18)
ax.spines[:].set_color('white')
ax.tick_params(colors='white')
plt.savefig("hours.png")
plt.show()`);

	var container = document.querySelector('#copy10');
	var message = container.querySelector('.copyMessage');
	var button = container.querySelector('.copyButton');

	message.style.display = 'inline';
	button.addEventListener('mouseleave', function() {
		message.style.display = 'none';
	});
}

function copyText11() {
	navigator.clipboard.writeText(`df = pd.DataFrame(day_dict).T
fig, ax = plt.subplots(figsize=(10, 6))
fig.patch.set_facecolor('#333333')
ax.set_facecolor('#333333')
df[['win', 'draw', 'loss']].plot(kind='bar', stacked=True, ax=ax, color=['#00CC00', '#007ACC', '#CC3300'])
plt.xlabel("Day of the Week", color='white', fontsize=14)
plt.xticks(rotation=0, color='white')
plt.ylabel("Number of Games", color='white', fontsize=14)
plt.legend(fontsize=15, facecolor='#333333', edgecolor='white', labelcolor='white')
plt.title("Count of Wins, Draws, and Losses by Day", color='white', fontsize=18)
ax.spines[:].set_color('white')
ax.tick_params(colors='white')
plt.savefig("days.png")
plt.show()`);

	var container = document.querySelector('#copy11');
	var message = container.querySelector('.copyMessage');
	var button = container.querySelector('.copyButton');

	message.style.display = 'inline';
	button.addEventListener('mouseleave', function() {
		message.style.display = 'none';
	});
}

function copyText12() {
	navigator.clipboard.writeText(`statuses = {game.get('status') for game in gameslist}
status_dict = {status: {key:0 for key in ('win', 'draw', 'loss', 'total')} for status in statuses}

for game in gameslist:
    colour = "white" if game.get('players').get('white').get('user').get('id') == "garethc13" else "black"
    winner = game.get('winner')
    result = "win" if colour == winner else("draw" if winner == None else "loss")
    status = game.get('status')
    status_dict[status][result] += 1
    status_dict[status]['total'] += 1

pprint(status_dict)`);

	var container = document.querySelector('#copy12');
	var message = container.querySelector('.copyMessage');
	var button = container.querySelector('.copyButton');

	message.style.display = 'inline';
	button.addEventListener('mouseleave', function() {
		message.style.display = 'none';
	});
}

function copyText13() {
	navigator.clipboard.writeText(`df = pd.DataFrame(status_dict).T.sort_values(by='total', ascending=False)
fig, ax = plt.subplots(figsize=(10, 6))
fig.patch.set_facecolor('#333333')
ax.set_facecolor('#333333')
df[['win', 'draw', 'loss']].plot(kind='bar', stacked=True, ax=ax, color=['#00CC00', '#007ACC', '#CC3300'])
plt.xlabel("Status", color='white', fontsize=14)
plt.xticks(rotation=0, fontsize=12)
plt.ylabel("Number of Games", color='white', fontsize=14)
plt.legend(fontsize=15, facecolor='#333333', edgecolor='white', labelcolor='white')
plt.title("Status of Game Ending", color='white', fontsize=18)
ax.spines[:].set_color('white')
ax.tick_params(colors='white')
plt.savefig('status.png')
plt.show()`);

	var container = document.querySelector('#copy13');
	var message = container.querySelector('.copyMessage');
	var button = container.querySelector('.copyButton');

	message.style.display = 'inline';
	button.addEventListener('mouseleave', function() {
		message.style.display = 'none';
	});
}



let countriesData = []; // Array of country objects with area data from JSON
let land1Value = null,  // Total land area of first selected country
  land2Value = null,    // Total land area of second selected country
  country1Name = null,
  country2Name = null; 
let geoData = null;     // GeoJSON data containing country boundary coordinates

// Load country area data from JSON file
fetch("../data/countries.json")
  .then((r) => r.json())
  .then((d) => {
    countriesData = d; // Store the country data array
    // Initialise both dropdown search inputs after data loads
    setupDropdown("country1Input", "country1List", "country2Input");
    setupDropdown("country2Input", "country2List", "country1Input");
  });

// Load country boundary shapes from GeoJSON file
fetch("../data/countries.geojson")
  .then((r) => r.json())
  .then((d) => (geoData = d)); // Store GeoJSON feature collection


function setupDropdown(inputId, listId, otherInputId) {
  const input = document.getElementById(inputId),      // The search input field
    list = document.getElementById(listId),            // The dropdown results container
    otherInput = document.getElementById(otherInputId); // The other country's input
  
  input.value = ""; // Clear the input field on setup
  // Populate dropdown with all countries initially (excluding other selection)
  updateDropdown(input, list, "", otherInput.value);
  
  // Show dropdown when input is focused
  input.addEventListener("focus", () => {
    updateDropdown(input, list, "", otherInput.value);
    list.style.display = "block";
  });
  
  // Filter dropdown options as user types
  input.addEventListener("input", () => {
    updateDropdown(
      input,
      list,
      input.value.trim().toLowerCase(),
      otherInput.value
    );
    list.style.display = "block";
  });
  
  // Hide dropdown when clicking outside the input or dropdown
  document.addEventListener("click", (e) => {
    if (!input.contains(e.target) && !list.contains(e.target))
      list.style.display = "none";
  });
}

function updateDropdown(input, list, filterText, excludeValue) {
  list.innerHTML = ""; // Clear existing dropdown items
  
  // Filter countries: must match search text and not be selected in other dropdown
  const filtered = countriesData.filter(
    (c) =>
      c.Place.toLowerCase().includes(filterText) && c.Place !== excludeValue
  );
  
  // Create a clickable item for each filtered country
  filtered.forEach((c) => {
    const item = document.createElement("div");
    item.classList.add("dropdown-item");
    item.textContent = c.Place; // Display country name
    
    // Handle country selection on click
    item.addEventListener("click", () => {
      input.value = c.Place; // Set input to selected country name
      list.style.display = "none"; // Hide dropdown
      
      // Store the selected country's data in global variables
      if (input.id === "country1Input") {
        land1Value = c.Total; 
        country1Name = c.Place;  
      } else if (input.id === "country2Input") {
        land2Value = c.Total;
        country2Name = c.Place;
      }
      
      // Attempt to draw borders if both countries selected
      tryPlotSquares();
    });
    list.appendChild(item);
  });
  
  if (!filtered.length) {
    const item = document.createElement("div");
    item.classList.add("dropdown-item");
    item.textContent = "No results found";
    list.appendChild(item);
  }
}

// Get canvas element and 2D drawing context for area comparison squares
const canvas = document.getElementById("myCanvas"),
  ctx = canvas.getContext("2d");


function tryPlotSquares() {
  if (land1Value !== null && land2Value !== null) {
    // Draw the proportional squares comparison
    plotSquares(land1Value, land2Value, country1Name, country2Name);
    // Draw the actual country shapes side by side
    drawBothCountriesSeparate();
    
    // Scroll to bottom of page to show the visualisations
    window.scrollTo({
      top: document.body.scrollHeight,
      behaviour: 'smooth'
    });
  }
}

// Draws two squares with proportional areas to compare country sizes
function plotSquares(area1, area2, name1, name2) {
  ctx.clearRect(0, 0, 500, 500); // Clear previous drawing

  const bigger = Math.max(area1, area2),
    smaller = Math.min(area1, area2);
  const biggerName = area1 > area2 ? name1 : name2,
    smallerName = area1 < area2 ? name1 : name2;

  // Update text labels with country names
  document.getElementById("topLabel").textContent = biggerName;
  document.getElementById("bottomLabel").textContent = smallerName;

  document.getElementById("sentence").textContent = `${biggerName} is ${(bigger / smaller).toFixed(2)} times the size of ${smallerName}`;

  // Calculate side length of smaller square to maintain area ratio
  // If bigger square is 500x500, smaller is sqrt(smaller/bigger) * 500
  const smallerSide = 500 * Math.sqrt(smaller / bigger);
  
  // Draw bigger country's square (fills entire canvas)
  ctx.fillStyle = "#D02030";
  ctx.fillRect(0, 0, 500, 500);
  
  // Draw smaller country's square (bottom-left corner, proportional size)
  ctx.fillStyle = "#228B22";
  ctx.fillRect(0, 500 - smallerSide, smallerSide, smallerSide);
}

// Albers Equal-Area Conic projection
// Converts lat/lon coordinates to x/y while preserving area relationships
// This prevents distortion that makes high-latitude areas appear too large

function albers(lon, lat, cLon, cLat, sLat1, sLat2) {
  const toRad = Math.PI / 180;
  
  // Convert all angles from degrees to radians
  const [lonR, latR, cLonR, cLatR, sLat1R, sLat2R] = [
    lon,
    lat,
    cLon,
    cLat,
    sLat1,
    sLat2,
  ].map((x) => x * toRad);
  
  // Calculate projection constants
  const n = 0.5 * (Math.sin(sLat1R) + Math.sin(sLat2R)); // Cone constant
  const c = Math.cos(sLat1R) ** 2 + 2 * n * Math.sin(sLat1R); // Scaling constant
  const rho0 = Math.sqrt(c - 2 * n * Math.sin(cLatR)) / n; // Distance to origin at central latitude
  
  // Calculate position on the projected cone
  const theta = n * (lonR - cLonR); // Angle around cone
  const rho = Math.sqrt(c - 2 * n * Math.sin(latR)) / n; // Distance from cone apex
  
  // Convert polar coordinates (rho, theta) to Cartesian (x, y)
  return [rho * Math.sin(theta), rho0 - rho * Math.cos(theta)];
}

function getCountryCoords(name) {
  // Find all GeoJSON features matching the country name
  const matches = geoData?.features.filter(
    (f) => f.properties?.NAME === name
  );
  if (!matches?.length) return null; // Country not found in data

  // Flatten all coordinate arrays from potentially multiple features
  let allCoords = [];
  matches.forEach((f) => {
    let coords = f.geometry.coordinates;
    // Handle both Polygon and MultiPolygon geometries
    if (f.geometry.type === "Polygon") coords = [coords];
    allCoords.push(...coords); // Flatten into single array
  });
  return allCoords;
}

// Calculate geographic bounding box (min/max lat/lon) for coordinate arrays
function getBounds(coords) {
  let minX = Infinity,
    minY = Infinity,
    maxX = -Infinity,
    maxY = -Infinity;
  
  // Iterate through all polygons and all points to find extremes
  coords.forEach((p) =>
    p[0].forEach(([x, y]) => {
      minX = Math.min(minX, x); // Westernmost longitude
      minY = Math.min(minY, y); // Southernmost latitude
      maxX = Math.max(maxX, x); // Easternmost longitude
      maxY = Math.max(maxY, y); // Northernmost latitude
    })
  );
  return { minX, minY, maxX, maxY };
}

function drawCountry(ctx, name, scale, color) {
  const coords = getCountryCoords(name);
  if (!coords) return; // Skip if country not found

  // Get geographic bounds to center the projection
  const bounds = getBounds(coords);
  const cLon = (bounds.minX + bounds.maxX) / 2, // Center longitude
    cLat = (bounds.minY + bounds.maxY) / 2;     // Center latitude
  
  // Set standard parallels at 1/6 and 5/6 of the latitude range
  // This minimises distortion for the specific country
  const range = bounds.maxY - bounds.minY;
  const sLat1 = bounds.minY + range / 6,
    sLat2 = bounds.maxY - range / 6;

  // Project all coordinates and find projected bounds
  let projCoords = [],
    pMinX = Infinity,
    pMinY = Infinity,
    pMaxX = -Infinity,
    pMaxY = -Infinity;
  
  coords.forEach((p) => {
    // Project each point in the polygon
    const proj = p[0].map(([lon, lat]) => {
      const [x, y] = albers(lon, lat, cLon, cLat, sLat1, sLat2);
      pMinX = Math.min(pMinX, x);
      pMinY = Math.min(pMinY, y);
      pMaxX = Math.max(pMaxX, x);
      pMaxY = Math.max(pMaxY, y);
      return [x, y];
    });
    projCoords.push(proj);
  });

  // Calculate center of projected shape
  const pCX = (pMinX + pMaxX) / 2,
    pCY = (pMinY + pMaxY) / 2;
  
  // Auto-calculate scale to fit canvas with 40px margin if not provided
  if (!scale)
    scale = Math.min(
      (ctx.canvas.width - 40) / (pMaxX - pMinX),
      (ctx.canvas.height - 40) / (pMaxY - pMinY)
    );

  // Draw the country outline
  ctx.beginPath();
  projCoords.forEach((p) =>
    p.forEach(([x, y], i) => {
      // Transform projected coords to canvas coords:
      // - Subtract center to origin
      // - Scale up
      // - Move to canvas center
      // - Flip y-axis (canvas y increases downward)
      const cX = (x - pCX) * scale + ctx.canvas.width / 2;
      const cY = -(y - pCY) * scale + ctx.canvas.height / 2;
      i ? ctx.lineTo(cX, cY) : ctx.moveTo(cX, cY); // First point moves, others line to
    })
  );
  ctx.closePath();
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.stroke();
}

/**
 * Calculates the optimal scale to fit a country in a 460x460 area
 * @param {string} name - Country name
 * @returns {number} Scale factor
 */
function getCountryScale(name) {
  const coords = getCountryCoords(name);
  if (!coords) return 1; // Default scale if country not found
  
  // Repeat the projection calculation to find projected bounds
  const bounds = getBounds(coords);
  const cLon = (bounds.minX + bounds.maxX) / 2,
    cLat = (bounds.minY + bounds.maxY) / 2;
  const range = bounds.maxY - bounds.minY;
  const sLat1 = bounds.minY + range / 6,
    sLat2 = bounds.maxY - range / 6;

  let pMinX = Infinity,
    pMinY = Infinity,
    pMaxX = -Infinity,
    pMaxY = -Infinity;
  
  // Project all points to find projected bounds
  coords.forEach((p) =>
    p[0].forEach(([lon, lat]) => {
      const [x, y] = albers(lon, lat, cLon, cLat, sLat1, sLat2);
      pMinX = Math.min(pMinX, x);
      pMinY = Math.min(pMinY, y);
      pMaxX = Math.max(pMaxX, x);
      pMaxY = Math.max(pMaxY, y);
    })
  );

  // Return scale that fits country in 460x460 (500 with margin)
  return Math.min(460 / (pMaxX - pMinX), 460 / (pMaxY - pMinY));
}

/**
 * Draws both selected countries side-by-side with equal scaling
 * Bigger country on left canvas, smaller country on right canvas
 */
function drawBothCountriesSeparate() {
  const sCtx = document.getElementById("geoCanvasSmall").getContext("2d"); // Smaller country canvas
  const bCtx = document.getElementById("geoCanvasBig").getContext("2d");   // Bigger country canvas
  sCtx.clearRect(0, 0, 500, 500); // Clear previous drawings
  bCtx.clearRect(0, 0, 500, 500);

  // Determine which country is bigger based on land area
  const biggerName = land1Value > land2Value ? country1Name : country2Name;
  const smallerName = land1Value < land2Value ? country1Name : country2Name;
  
  // Use the smaller of the two auto-fit scales to ensure both fit their canvases
  // This creates a fair visual comparison with equal scaling
  const scale = Math.min(
    getCountryScale(biggerName),
    getCountryScale(smallerName)
  );

  // Draw both countries with the same scale but different colors
  drawCountry(bCtx, biggerName, scale, "#D02030");  // Red for bigger
  drawCountry(sCtx, smallerName, scale, "#228B22"); // Green for smaller
}