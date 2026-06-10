// Football leagues data structure
const footballLeagues = {
    "Premier League": {
        teams: [
            "Manchester City", "Arsenal", "Chelsea", "Liverpool", 
            "Manchester United", "Tottenham Hotspur", "West Ham United", 
            "Newcastle United", "Leicester City", "Everton", 
            "Aston Villa", "Brighton"
        ]
    },
    "La Liga": {
        teams: [
            "Real Madrid", "Barcelona", "Atletico Madrid", "Sevilla", 
            "Valencia", "Real Sociedad", "Real Betis", "Athletic Bilbao"
        ]
    },
    "Bundesliga": {
        teams: [
            "Bayern Munich", "Borussia Dortmund", "RB Leipzig", "Bayer Leverkusen"
        ]
    },
    "Serie A": {
        teams: [
            "AC Milan", "Inter Milan", "Juventus", "Napoli", "AS Roma"
        ]
    },
    "Ligue 1": {
        teams: [
            "Paris Saint Germain", "Olympique Lyon", "Marseille", "Monaco"
        ]
    },
    "National Team": {
        teams: [
            "Brazil", "Argentina", "Germany", "France", "Spain", 
            "Italy", "Netherlands", "Portugal", "Belgium", "Croatia", 
            "Uruguay", "Mexico"
        ]
    }
};

// Basketball leagues data structure
const basketballLeagues = {
    "NBA": {
        teams: [
            "Los Angeles Lakers", "Chicago Bulls", "Golden State Warriors", "Boston Celtics",
            "Miami Heat", "Brooklyn Nets", "Los Angeles Clippers", "Philadelphia 76ers",
            "Milwaukee Bucks", "Phoenix Suns", "Denver Nuggets", "Toronto Raptors",
            "Dallas Mavericks", "Houston Rockets", "Utah Jazz", "Memphis Grizzlies",
            "Indiana Pacers"
        ]
    }
};

// NFL leagues data structure
const nflLeagues = {
    "NFL": {
        teams: [
            "Kansas City Chiefs", "Dallas Cowboys", "New England Patriots", "Green Bay Packers",
            "San Francisco 49ers", "Philadelphia Eagles", "Buffalo Bills", "Baltimore Ravens",
            "Los Angeles Rams", "Minnesota Vikings", "Cincinnati Bengals", "Arizona Cardinals",
            "Seattle Seahawks", "New Orleans Saints", "Los Angeles Chargers", "Indianapolis Colts",
            "Tennessee Titans", "Cleveland Browns", "Denver Broncos", "Las Vegas Raiders",
            "Atlanta Falcons", "Carolina Panthers", "New York Giants", "Washington Commanders",
            "Chicago Bears", "Detroit Lions", "Minnesota Vikings", "Jacksonville Jaguars",
            "Houston Texans", "New York Jets", "Miami Dolphins", "Tampa Bay Buccaneers"
        ]
    }
};

// MLB leagues data structure
const mlbLeagues = {
    "MLB": {
        teams: [
            "New York Yankees", "Boston Red Sox", "Los Angeles Dodgers", "Chicago Cubs",
            "San Francisco Giants", "Atlanta Braves", "Houston Astros", "St. Louis Cardinals",
            "Washington Nationals", "Philadelphia Phillies", "Cleveland Guardians", "Chicago White Sox",
            "Detroit Tigers", "Minnesota Twins", "Baltimore Orioles", "Tampa Bay Rays",
            "Toronto Blue Jays", "Miami Marlins", "New York Mets", "Milwaukee Brewers",
            "Cincinnati Reds", "Pittsburgh Pirates", "Colorado Rockies", "Arizona Diamondbacks",
            "San Diego Padres", "San Francisco Giants", "Seattle Mariners", "Los Angeles Angels",
            "Oakland Athletics", "Texas Rangers", "Kansas City Royals"
        ]
    }
};

// NHL leagues data structure
const nhlLeagues = {
    "NHL": {
        teams: [
            "Toronto Maple Leafs", "Boston Bruins", "Chicago Blackhawks", "Montreal Canadiens",
            "Vancouver Canucks", "Edmonton Oilers", "Calgary Flames", "Pittsburgh Penguins",
            "Washington Capitals", "New York Rangers", "New Jersey Devils", "Colorado Avalanche",
            "Tampa Bay Lightning", "St. Louis Blues", "Vegas Golden Knights", "Los Angeles Kings",
            "San Jose Sharks", "Dallas Stars", "Philadelphia Flyers", "Detroit Red Wings",
            "Minnesota Wild", "Winnipeg Jets", "Arizona Coyotes", "Anaheim Ducks",
            "Nashville Predators", "Carolina Hurricanes", "Columbus Blue Jackets", "Buffalo Sabres",
            "Florida Panthers", "Ottawa Senators", "Seattle Kraken"
        ]
    }
};

// Cricket leagues data structure
const cricketLeagues = {
    "International": {
        teams: [
            "India", "Australia", "England", "Pakistan", "South Africa",
            "New Zealand", "West Indies", "Sri Lanka", "Bangladesh", "Afghanistan", "Zimbabwe"
        ]
    }
};

// Rugby leagues data structure
const rugbyLeagues = {
    "International": {
        teams: [
            "New Zealand All Blacks", "South Africa Springboks", "England Rugby", "Australia Wallabies",
            "France Rugby", "Ireland Rugby", "Wales Rugby", "Scotland Rugby", "Argentina Rugby",
            "Fiji Rugby", "Samoa Rugby", "Japan Rugby", "Georgia Rugby"
        ]
    }
};

// Sport equipment categories data structure
const equipmentCategories = {
    "Balls": {
        items: [
            "Football", "Basketball", "American Football", "Baseball", "Hockey Puck",
            "Cricket Ball", "Rugby Ball", "Soccer Ball", "Tennis Ball", "Golf Ball"
        ]
    },
    "Gear": {
        items: [
            "Helmets", "Pads", "Gloves", "Cleats", "Shin Guards",
            "Shoulder Pads", "Mouthguards", "Protective Gear", "Training Equipment"
        ]
    },
    "Accessories": {
        items: [
            "Water Bottles", "Sports Bags", "Socks", "Headbands", "Wristbands",
            "Sunglasses", "Watches", "Fitness Trackers", "Jump Ropes"
        ]
    },
    "Apparel": {
        items: [
            "Training Shorts", "Compression Wear", "Sports Bras", "Jackets", "Warm-up Gear",
            "Athletic Shoes", "Running Shoes", "Training Shoes"
        ]
    }
};

// Default products
const defaultProducts = [
    // Football - Premier League
    {
        id: 1,
        name: "Manchester City Home 2026",
        sport: "football",
        league: "Premier League",
        price: 16900,
        image: "https://i.pinimg.com/1200x/6a/ae/bb/6aaebb61188af24a2336554fd21f981d.jpg"
    },
    {
        id: 2,
        name: "Arsenal Home 2026",
        sport: "football",
        league: "Premier League",
        price: 15500,
        image: "https://i.pinimg.com/736x/35/8a/c6/358ac683f7992ce5211279f57ecff85d.jpg"
    },
    {
        id: 3,
        name: "Chelsea Home 2026",
        sport: "football",
        league: "Premier League",
        price: 15500,
        image: "https://i.pinimg.com/1200x/f6/51/09/f651094f603b7277a4eeb824edb793af.jpg"
    },
    {
        id: 4,
        name: "Liverpool Home 2026",
        sport: "football",
        league: "Premier League",
        price: 16200,
        image: "https://i.pinimg.com/1200x/c9/df/e6/c9dfe67a46c408a3edbd2d7bfb659f59.jpg"
    },
    {
        id: 5,
        name: "Manchester United Home 2026",
        sport: "football",
        league: "Premier League",
        price: 16800,
        image: "https://i.pinimg.com/736x/87/65/43/87654321098765432109876543210987.jpg"
    },
    {
        id: 6,
        name: "Tottenham Hotspur Home 2026",
        sport: "football",
        league: "Premier League",
        price: 15900,
        image: "https://i.pinimg.com/736x/54/32/10/54321098765432109876543210123456.jpg"
    },
    {
        id: 7,
        name: "West Ham United Home 2026",
        sport: "football",
        league: "Premier League",
        price: 15200,
        image: "https://i.pinimg.com/736x/10/98/76/10987654321098765432109876543210.jpg"
    },
    {
        id: 8,
        name: "Newcastle United Home 2026",
        sport: "football",
        league: "Premier League",
        price: 16100,
        image: "https://i.pinimg.com/736x/76/54/32/76543210987654321098765432109876.jpg"
    },
    {
        id: 9,
        name: "Leicester City Home 2026",
        sport: "football",
        league: "Premier League",
        price: 15400,
        image: "https://i.pinimg.com/736x/32/10/98/32109876543210987654321098765432.jpg"
    },
    {
        id: 10,
        name: "Everton Home 2026",
        sport: "football",
        league: "Premier League",
        price: 15100,
        image: "https://i.pinimg.com/736x/98/76/54/98765432109876543210987654321098.jpg"
    },
    {
        id: 11,
        name: "Aston Villa Home 2026",
        sport: "football",
        league: "Premier League",
        price: 15700,
        image: "https://i.pinimg.com/736x/65/43/21/65432109876543210987654321098765.jpg"
    },
    {
        id: 12,
        name: "Brighton Home 2026",
        sport: "football",
        league: "Premier League",
        price: 15300,
        image: "https://i.pinimg.com/736x/43/21/09/43210987654321098765432109876543.jpg"
    },
    // Football - La Liga
    {
        id: 13,
        name: "Real Madrid Home 2026",
        sport: "football",
        league: "La Liga",
        price: 18200,
        image: "https://i.pinimg.com/736x/bf/c5/89/bfc589c46649a1c6978872470d1a8850.jpg"
    },
    {
        id: 14,
        name: "Barcelona Home 2026",
        sport: "football",
        league: "La Liga",
        price: 17500,
        image: "https://i.pinimg.com/736x/08/c0/9e/08c09e8fad4ccabab2bcb76cfc595ff7.jpg"
    },
    {
        id: 15,
        name: "Atletico Madrid Home 2026",
        sport: "football",
        league: "La Liga",
        price: 15800,
        image: "https://i.pinimg.com/736x/21/09/87/21098765432109876543210987654321.jpg"
    },
    {
        id: 16,
        name: "Sevilla Home 2026",
        sport: "football",
        league: "La Liga",
        price: 15400,
        image: "https://i.pinimg.com/736x/32/10/98/32109876543210987654321098765432.jpg"
    },
    {
        id: 17,
        name: "Valencia Home 2026",
        sport: "football",
        league: "La Liga",
        price: 15600,
        image: "https://i.pinimg.com/736x/98/76/54/98765432109876543210987654321098.jpg"
    },
    {
        id: 18,
        name: "Real Sociedad Home 2026",
        sport: "football",
        league: "La Liga",
        price: 15200,
        image: "https://i.pinimg.com/736x/65/43/21/65432109876543210987654321098765.jpg"
    },
    {
        id: 19,
        name: "Real Betis Home 2026",
        sport: "football",
        league: "La Liga",
        price: 15000,
        image: "https://i.pinimg.com/736x/43/21/09/43210987654321098765432109876543.jpg"
    },
    {
        id: 20,
        name: "Athletic Bilbao Home 2026",
        sport: "football",
        league: "La Liga",
        price: 14800,
        image: "https://i.pinimg.com/736x/21/09/87/21098765432109876543210987654321.jpg"
    },
    // Football - Bundesliga
    {
        id: 21,
        name: "Bayern Munich Home 2026",
        sport: "football",
        league: "Bundesliga",
        price: 17800,
        image: "https://i.pinimg.com/736x/87/65/43/87654321098765432109876543210987.jpg"
    },
    {
        id: 22,
        name: "Borussia Dortmund Home 2026",
        sport: "football",
        league: "Bundesliga",
        price: 16500,
        image: "https://i.pinimg.com/736x/54/32/10/54321098765432109876543210123456.jpg"
    },
    {
        id: 23,
        name: "RB Leipzig Home 2026",
        sport: "football",
        league: "Bundesliga",
        price: 16200,
        image: "https://i.pinimg.com/736x/10/98/76/10987654321098765432109876543210.jpg"
    },
    {
        id: 24,
        name: "Bayer Leverkusen Home 2026",
        sport: "football",
        league: "Bundesliga",
        price: 16000,
        image: "https://i.pinimg.com/736x/76/54/32/76543210987654321098765432109876.jpg"
    },
    // Football - Serie A
    {
        id: 25,
        name: "AC Milan Home 2026",
        sport: "football",
        league: "Serie A",
        price: 17200,
        image: "https://i.pinimg.com/736x/32/10/98/32109876543210987654321098765432.jpg"
    },
    {
        id: 26,
        name: "Inter Milan Home 2026",
        sport: "football",
        league: "Serie A",
        price: 17000,
        image: "https://i.pinimg.com/736x/98/76/54/98765432109876543210987654321098.jpg"
    },
    {
        id: 27,
        name: "Juventus Home 2026",
        sport: "football",
        league: "Serie A",
        price: 16800,
        image: "https://i.pinimg.com/736x/65/43/21/65432109876543210987654321098765.jpg"
    },
    {
        id: 28,
        name: "Napoli Home 2026",
        sport: "football",
        league: "Serie A",
        price: 16400,
        image: "https://i.pinimg.com/736x/43/21/09/43210987654321098765432109876543.jpg"
    },
    {
        id: 29,
        name: "AS Roma Home 2026",
        sport: "football",
        league: "Serie A",
        price: 16600,
        image: "https://i.pinimg.com/736x/21/09/87/21098765432109876543210987654321.jpg"
    },
    // Football - Ligue 1
    {
        id: 30,
        name: "Paris Saint Germain Home 2026",
        sport: "football",
        league: "Ligue 1",
        price: 18500,
        image: "https://i.pinimg.com/736x/87/65/43/87654321098765432109876543210987.jpg"
    },
    {
        id: 31,
        name: "Olympique Lyon Home 2026",
        sport: "football",
        league: "Ligue 1",
        price: 15800,
        image: "https://i.pinimg.com/736x/54/32/10/54321098765432109876543210123456.jpg"
    },
    {
        id: 32,
        name: "Marseille Home 2026",
        sport: "football",
        league: "Ligue 1",
        price: 15600,
        image: "https://i.pinimg.com/736x/10/98/76/10987654321098765432109876543210.jpg"
    },
    {
        id: 33,
        name: "Monaco Home 2026",
        sport: "football",
        league: "Ligue 1",
        price: 16000,
        image: "https://i.pinimg.com/736x/76/54/32/76543210987654321098765432109876.jpg"
    },
    // Football - National Teams
    {
        id: 34,
        name: "Brazil National Home",
        sport: "football",
        league: "National Team",
        price: 19500,
        image: "https://i.pinimg.com/736x/64/9b/73/649b735a438ce46f54cfbd3a41996be5.jpg"
    },
    {
        id: 35,
        name: "Argentina National Home",
        sport: "football",
        league: "National Team",
        price: 18800,
        image: "https://i.pinimg.com/736x/c9/88/55/c988558e3c9f723c3374680463ea2722.jpg"
    },
    {
        id: 36,
        name: "Germany National Home",
        sport: "football",
        league: "National Team",
        price: 17200,
        image: "https://i.pinimg.com/736x/98/76/54/98765432109876543210987654321098.jpg"
    },
    {
        id: 37,
        name: "France National Home",
        sport: "football",
        league: "National Team",
        price: 17800,
        image: "https://i.pinimg.com/736x/54/32/10/54321098765432109876543210123456.jpg"
    },
    {
        id: 38,
        name: "Spain National Home",
        sport: "football",
        league: "National Team",
        price: 17400,
        image: "https://i.pinimg.com/736x/76/54/32/76543210987654321098765432109876.jpg"
    },
    {
        id: 39,
        name: "Italy National Home",
        sport: "football",
        league: "National Team",
        price: 16900,
        image: "https://i.pinimg.com/736x/32/10/98/32109876543210987654321098765432.jpg"
    },
    {
        id: 40,
        name: "Netherlands National Home",
        sport: "football",
        league: "National Team",
        price: 17100,
        image: "https://i.pinimg.com/736x/10/98/76/10987654321098765432109876543210.jpg"
    },
    {
        id: 41,
        name: "Portugal National Home",
        sport: "football",
        league: "National Team",
        price: 17300,
        image: "https://i.pinimg.com/736x/98/76/54/98765432109876543210987654321098.jpg"
    },
    {
        id: 42,
        name: "Belgium National Home",
        sport: "football",
        league: "National Team",
        price: 16700,
        image: "https://i.pinimg.com/736x/65/43/21/65432109876543210987654321098765.jpg"
    },
    {
        id: 43,
        name: "Croatia National Home",
        sport: "football",
        league: "National Team",
        price: 16500,
        image: "https://i.pinimg.com/736x/43/21/09/43210987654321098765432109876543.jpg"
    },
    {
        id: 44,
        name: "Uruguay National Home",
        sport: "football",
        league: "National Team",
        price: 16300,
        image: "https://i.pinimg.com/736x/21/09/87/21098765432109876543210987654321.jpg"
    },
    {
        id: 45,
        name: "Mexico National Home",
        sport: "football",
        league: "National Team",
        price: 16100,
        image: "https://i.pinimg.com/736x/87/65/43/87654321098765432109876543210987.jpg"
    },
    // Basketball - NBA
    {
        id: 46,
        name: "Los Angeles Lakers Home 2026",
        sport: "basketball",
        league: "NBA",
        price: 22000,
        image: "https://i.pinimg.com/736x/5f/8e/4b/5f8e4b12345678901234567890123456.jpg"
    },
    {
        id: 47,
        name: "Chicago Bulls Home 2026",
        sport: "basketball",
        league: "NBA",
        price: 21000,
        image: "https://i.pinimg.com/736x/ab/cd/ef/abcdef12345678901234567890123456.jpg"
    },
    {
        id: 48,
        name: "Golden State Warriors Home 2026",
        sport: "basketball",
        league: "NBA",
        price: 21500,
        image: "https://i.pinimg.com/736x/12/34/56/12345678901234567890123456789012.jpg"
    },
    {
        id: 49,
        name: "Boston Celtics Home 2026",
        sport: "basketball",
        league: "NBA",
        price: 21800,
        image: "https://i.pinimg.com/736x/76/54/32/76543210987654321098765432109876.jpg"
    },
    {
        id: 50,
        name: "Miami Heat Home 2026",
        sport: "basketball",
        league: "NBA",
        price: 20500,
        image: "https://i.pinimg.com/736x/32/10/98/32109876543210987654321098765432.jpg"
    },
    {
        id: 51,
        name: "Brooklyn Nets Home 2026",
        sport: "basketball",
        league: "NBA",
        price: 21200,
        image: "https://i.pinimg.com/736x/10/98/76/10987654321098765432109876543210.jpg"
    },
    {
        id: 52,
        name: "Los Angeles Clippers Home 2026",
        sport: "basketball",
        league: "NBA",
        price: 20800,
        image: "https://i.pinimg.com/736x/54/32/10/54321098765432109876543210123456.jpg"
    },
    {
        id: 53,
        name: "Philadelphia 76ers Home 2026",
        sport: "basketball",
        league: "NBA",
        price: 20600,
        image: "https://i.pinimg.com/736x/76/54/32/76543210987654321098765432109876.jpg"
    },
    {
        id: 54,
        name: "Milwaukee Bucks Home 2026",
        sport: "basketball",
        league: "NBA",
        price: 21400,
        image: "https://i.pinimg.com/736x/32/10/98/32109876543210987654321098765432.jpg"
    },
    {
        id: 55,
        name: "Phoenix Suns Home 2026",
        sport: "basketball",
        league: "NBA",
        price: 20900,
        image: "https://i.pinimg.com/736x/98/76/54/98765432109876543210987654321098.jpg"
    },
    {
        id: 56,
        name: "Denver Nuggets Home 2026",
        sport: "basketball",
        league: "NBA",
        price: 20700,
        image: "https://i.pinimg.com/736x/65/43/21/65432109876543210987654321098765.jpg"
    },
    {
        id: 57,
        name: "Toronto Raptors Home 2026",
        sport: "basketball",
        league: "NBA",
        price: 20300,
        image: "https://i.pinimg.com/736x/43/21/09/43210987654321098765432109876543.jpg"
    },
    {
        id: 58,
        name: "Dallas Mavericks Home 2026",
        sport: "basketball",
        league: "NBA",
        price: 21100,
        image: "https://i.pinimg.com/736x/21/09/87/21098765432109876543210987654321.jpg"
    },
    {
        id: 59,
        name: "Houston Rockets Home 2026",
        sport: "basketball",
        league: "NBA",
        price: 20400,
        image: "https://i.pinimg.com/736x/87/65/43/87654321098765432109876543210987.jpg"
    },
    {
        id: 60,
        name: "Utah Jazz Home 2026",
        sport: "basketball",
        league: "NBA",
        price: 20100,
        image: "https://i.pinimg.com/736x/54/32/10/54321098765432109876543210123456.jpg"
    },
    {
        id: 61,
        name: "Memphis Grizzlies Home 2026",
        sport: "basketball",
        league: "NBA",
        price: 19900,
        image: "https://i.pinimg.com/736x/10/98/76/10987654321098765432109876543210.jpg"
    },
    {
        id: 62,
        name: "Indiana Pacers Home 2026",
        sport: "basketball",
        league: "NBA",
        price: 19700,
        image: "https://i.pinimg.com/736x/76/54/32/76543210987654321098765432109876.jpg"
    },
    // NFL
    {
        id: 63,
        name: "Kansas City Chiefs Home 2026",
        sport: "nfl",
        league: "NFL",
        price: 24500,
        image: "https://i.pinimg.com/736x/fe/dc/ba/fedcba98765432109876543210987654.jpg"
    },
    {
        id: 64,
        name: "Dallas Cowboys Home 2026",
        sport: "nfl",
        league: "NFL",
        price: 23500,
        image: "https://i.pinimg.com/736x/98/76/54/98765432109876543210987654321098.jpg"
    },
    {
        id: 65,
        name: "New England Patriots Home 2026",
        sport: "nfl",
        league: "NFL",
        price: 23800,
        image: "https://i.pinimg.com/736x/65/43/21/65432109876543210987654321098765.jpg"
    },
    {
        id: 66,
        name: "Green Bay Packers Home 2026",
        sport: "nfl",
        league: "NFL",
        price: 24200,
        image: "https://i.pinimg.com/736x/43/21/09/43210987654321098765432109876543.jpg"
    },
    {
        id: 67,
        name: "San Francisco 49ers Home 2026",
        sport: "nfl",
        league: "NFL",
        price: 24000,
        image: "https://i.pinimg.com/736x/21/09/87/21098765432109876543210987654321.jpg"
    },
    {
        id: 68,
        name: "Philadelphia Eagles Home 2026",
        sport: "nfl",
        league: "NFL",
        price: 23600,
        image: "https://i.pinimg.com/736x/87/65/43/87654321098765432109876543210987.jpg"
    },
    {
        id: 69,
        name: "Buffalo Bills Home 2026",
        sport: "nfl",
        league: "NFL",
        price: 23400,
        image: "https://i.pinimg.com/736x/54/32/10/54321098765432109876543210123456.jpg"
    },
    {
        id: 70,
        name: "Baltimore Ravens Home 2026",
        sport: "nfl",
        league: "NFL",
        price: 23200,
        image: "https://i.pinimg.com/736x/76/54/32/76543210987654321098765432109876.jpg"
    },
    {
        id: 71,
        name: "Los Angeles Rams Home 2026",
        sport: "nfl",
        league: "NFL",
        price: 23000,
        image: "https://i.pinimg.com/736x/32/10/98/32109876543210987654321098765432.jpg"
    },
    {
        id: 72,
        name: "Minnesota Vikings Home 2026",
        sport: "nfl",
        league: "NFL",
        price: 22800,
        image: "https://i.pinimg.com/736x/98/76/54/98765432109876543210987654321098.jpg"
    },
    {
        id: 73,
        name: "Cincinnati Bengals Home 2026",
        sport: "nfl",
        league: "NFL",
        price: 22600,
        image: "https://i.pinimg.com/736x/65/43/21/65432109876543210987654321098765.jpg"
    },
    {
        id: 74,
        name: "Arizona Cardinals Home 2026",
        sport: "nfl",
        league: "NFL",
        price: 22400,
        image: "https://i.pinimg.com/736x/43/21/09/43210987654321098765432109876543.jpg"
    },
    {
        id: 75,
        name: "Seattle Seahawks Home 2026",
        sport: "nfl",
        league: "NFL",
        price: 22200,
        image: "https://i.pinimg.com/736x/21/09/87/21098765432109876543210987654321.jpg"
    },
    {
        id: 76,
        name: "New Orleans Saints Home 2026",
        sport: "nfl",
        league: "NFL",
        price: 22000,
        image: "https://i.pinimg.com/736x/87/65/43/87654321098765432109876543210987.jpg"
    },
    // MLB
    {
        id: 77,
        name: "New York Yankees Home 2026",
        sport: "mlb",
        league: "MLB",
        price: 19500,
        image: "https://i.pinimg.com/736x/54/32/10/54321098765432109876543210123456.jpg"
    },
    {
        id: 78,
        name: "Boston Red Sox Home 2026",
        sport: "mlb",
        league: "MLB",
        price: 18500,
        image: "https://i.pinimg.com/736x/10/98/76/10987654321098765432109876543210.jpg"
    },
    {
        id: 79,
        name: "Los Angeles Dodgers Home 2026",
        sport: "mlb",
        league: "MLB",
        price: 19200,
        image: "https://i.pinimg.com/736x/76/54/32/76543210987654321098765432109876.jpg"
    },
    {
        id: 80,
        name: "Chicago Cubs Home 2026",
        sport: "mlb",
        league: "MLB",
        price: 17800,
        image: "https://i.pinimg.com/736x/32/10/98/32109876543210987654321098765432.jpg"
    },
    {
        id: 81,
        name: "San Francisco Giants Home 2026",
        sport: "mlb",
        league: "MLB",
        price: 18800,
        image: "https://i.pinimg.com/736x/98/76/54/98765432109876543210987654321098.jpg"
    },
    {
        id: 82,
        name: "Atlanta Braves Home 2026",
        sport: "mlb",
        league: "MLB",
        price: 18200,
        image: "https://i.pinimg.com/736x/65/43/21/65432109876543210987654321098765.jpg"
    },
    {
        id: 83,
        name: "Houston Astros Home 2026",
        sport: "mlb",
        league: "MLB",
        price: 18600,
        image: "https://i.pinimg.com/736x/43/21/09/43210987654321098765432109876543.jpg"
    },
    {
        id: 84,
        name: "St. Louis Cardinals Home 2026",
        sport: "mlb",
        league: "MLB",
        price: 18400,
        image: "https://i.pinimg.com/736x/21/09/87/21098765432109876543210987654321.jpg"
    },
    {
        id: 85,
        name: "New York Mets Home 2026",
        sport: "mlb",
        league: "MLB",
        price: 19000,
        image: "https://i.pinimg.com/736x/87/65/43/87654321098765432109876543210987.jpg"
    },
    {
        id: 86,
        name: "Philadelphia Phillies Home 2026",
        sport: "mlb",
        league: "MLB",
        price: 18700,
        image: "https://i.pinimg.com/736x/54/32/10/54321098765432109876543210123456.jpg"
    },
    {
        id: 87,
        name: "Washington Nationals Home 2026",
        sport: "mlb",
        league: "MLB",
        price: 18300,
        image: "https://i.pinimg.com/736x/10/98/76/10987654321098765432109876543210.jpg"
    },
    {
        id: 88,
        name: "Cleveland Guardians Home 2026",
        sport: "mlb",
        league: "MLB",
        price: 18100,
        image: "https://i.pinimg.com/736x/76/54/32/76543210987654321098765432109876.jpg"
    },
    {
        id: 89,
        name: "Chicago White Sox Home 2026",
        sport: "mlb",
        league: "MLB",
        price: 17900,
        image: "https://i.pinimg.com/736x/32/10/98/32109876543210987654321098765432.jpg"
    },
    {
        id: 90,
        name: "Detroit Tigers Home 2026",
        sport: "mlb",
        league: "MLB",
        price: 17700,
        image: "https://i.pinimg.com/736x/98/76/54/98765432109876543210987654321098.jpg"
    },
    // NHL
    {
        id: 91,
        name: "Toronto Maple Leafs Home 2026",
        sport: "nhl",
        league: "NHL",
        price: 20500,
        image: "https://i.pinimg.com/736x/43/21/09/43210987654321098765432109876543.jpg"
    },
    {
        id: 92,
        name: "Boston Bruins Home 2026",
        sport: "nhl",
        league: "NHL",
        price: 19800,
        image: "https://i.pinimg.com/736x/21/09/87/21098765432109876543210987654321.jpg"
    },
    {
        id: 93,
        name: "Chicago Blackhawks Home 2026",
        sport: "nhl",
        league: "NHL",
        price: 19200,
        image: "https://i.pinimg.com/736x/87/65/43/87654321098765432109876543210987.jpg"
    },
    {
        id: 94,
        name: "Montreal Canadiens Home 2026",
        sport: "nhl",
        league: "NHL",
        price: 20000,
        image: "https://i.pinimg.com/736x/54/32/10/54321098765432109876543210123456.jpg"
    },
    {
        id: 95,
        name: "Vancouver Canucks Home 2026",
        sport: "nhl",
        league: "NHL",
        price: 19500,
        image: "https://i.pinimg.com/736x/10/98/76/10987654321098765432109876543210.jpg"
    },
    {
        id: 96,
        name: "Edmonton Oilers Home 2026",
        sport: "nhl",
        league: "NHL",
        price: 19600,
        image: "https://i.pinimg.com/736x/76/54/32/76543210987654321098765432109876.jpg"
    },
    {
        id: 97,
        name: "Calgary Flames Home 2026",
        sport: "nhl",
        league: "NHL",
        price: 19400,
        image: "https://i.pinimg.com/736x/32/10/98/32109876543210987654321098765432.jpg"
    },
    {
        id: 98,
        name: "Pittsburgh Penguins Home 2026",
        sport: "nhl",
        league: "NHL",
        price: 19700,
        image: "https://i.pinimg.com/736x/98/76/54/98765432109876543210987654321098.jpg"
    },
    {
        id: 99,
        name: "Washington Capitals Home 2026",
        sport: "nhl",
        league: "NHL",
        price: 19300,
        image: "https://i.pinimg.com/736x/65/43/21/65432109876543210987654321098765.jpg"
    },
    {
        id: 100,
        name: "New York Rangers Home 2026",
        sport: "nhl",
        league: "NHL",
        price: 19900,
        image: "https://i.pinimg.com/736x/43/21/09/43210987654321098765432109876543.jpg"
    },
    {
        id: 101,
        name: "New Jersey Devils Home 2026",
        sport: "nhl",
        league: "NHL",
        price: 19100,
        image: "https://i.pinimg.com/736x/21/09/87/21098765432109876543210987654321.jpg"
    },
    {
        id: 102,
        name: "Colorado Avalanche Home 2026",
        sport: "nhl",
        league: "NHL",
        price: 19500,
        image: "https://i.pinimg.com/736x/87/65/43/87654321098765432109876543210987.jpg"
    },
    {
        id: 103,
        name: "Tampa Bay Lightning Home 2026",
        sport: "nhl",
        league: "NHL",
        price: 19800,
        image: "https://i.pinimg.com/736x/54/32/10/54321098765432109876543210123456.jpg"
    },
    // Cricket
    {
        id: 104,
        name: "India National Cricket Jersey 2026",
        sport: "cricket",
        league: "International",
        price: 17500,
        image: "https://i.pinimg.com/736x/76/54/32/76543210987654321098765432109876.jpg"
    },
    {
        id: 105,
        name: "Australia National Cricket Jersey 2026",
        sport: "cricket",
        league: "International",
        price: 16800,
        image: "https://i.pinimg.com/736x/32/10/98/32109876543210987654321098765432.jpg"
    },
    {
        id: 106,
        name: "England National Cricket Jersey 2026",
        sport: "cricket",
        league: "International",
        price: 17200,
        image: "https://i.pinimg.com/736x/98/76/54/98765432109876543210987654321098.jpg"
    },
    {
        id: 107,
        name: "Pakistan National Cricket Jersey 2026",
        sport: "cricket",
        league: "International",
        price: 16500,
        image: "https://i.pinimg.com/736x/65/43/21/65432109876543210987654321098765.jpg"
    },
    {
        id: 108,
        name: "South Africa National Cricket Jersey 2026",
        sport: "cricket",
        league: "International",
        price: 17000,
        image: "https://i.pinimg.com/736x/43/21/09/43210987654321098765432109876543.jpg"
    },
    {
        id: 109,
        name: "New Zealand National Cricket Jersey 2026",
        sport: "cricket",
        league: "International",
        price: 16200,
        image: "https://i.pinimg.com/736x/21/09/87/21098765432109876543210987654321.jpg"
    },
    {
        id: 110,
        name: "West Indies National Cricket Jersey 2026",
        sport: "cricket",
        league: "International",
        price: 15800,
        image: "https://i.pinimg.com/736x/87/65/43/87654321098765432109876543210987.jpg"
    },
    {
        id: 111,
        name: "Sri Lanka National Cricket Jersey 2026",
        sport: "cricket",
        league: "International",
        price: 16000,
        image: "https://i.pinimg.com/736x/54/32/10/54321098765432109876543210123456.jpg"
    },
    {
        id: 112,
        name: "Bangladesh National Cricket Jersey 2026",
        sport: "cricket",
        league: "International",
        price: 15500,
        image: "https://i.pinimg.com/736x/10/98/76/10987654321098765432109876543210.jpg"
    },
    {
        id: 113,
        name: "Afghanistan National Cricket Jersey 2026",
        sport: "cricket",
        league: "International",
        price: 15200,
        image: "https://i.pinimg.com/736x/76/54/32/76543210987654321098765432109876.jpg"
    },
    {
        id: 114,
        name: "Zimbabwe National Cricket Jersey 2026",
        sport: "cricket",
        league: "International",
        price: 14800,
        image: "https://i.pinimg.com/736x/32/10/98/32109876543210987654321098765432.jpg"
    },
    // Rugby
    {
        id: 115,
        name: "New Zealand All Blacks Home 2026",
        sport: "rugby",
        league: "International",
        price: 22500,
        image: "https://i.pinimg.com/736x/87/65/43/87654321098765432109876543210987.jpg"
    },
    {
        id: 116,
        name: "South Africa Springboks Home 2026",
        sport: "rugby",
        league: "International",
        price: 21500,
        image: "https://i.pinimg.com/736x/54/32/10/54321098765432109876543210123456.jpg"
    },
    {
        id: 117,
        name: "England Rugby Home 2026",
        sport: "rugby",
        league: "International",
        price: 20800,
        image: "https://i.pinimg.com/736x/10/98/76/10987654321098765432109876543210.jpg"
    },
    {
        id: 118,
        name: "Australia Wallabies Home 2026",
        sport: "rugby",
        league: "International",
        price: 20500,
        image: "https://i.pinimg.com/736x/76/54/32/76543210987654321098765432109876.jpg"
    },
    {
        id: 119,
        name: "France Rugby Home 2026",
        sport: "rugby",
        league: "International",
        price: 21200,
        image: "https://i.pinimg.com/736x/32/10/98/32109876543210987654321098765432.jpg"
    },
    {
        id: 120,
        name: "Ireland Rugby Home 2026",
        sport: "rugby",
        league: "International",
        price: 20000,
        image: "https://i.pinimg.com/736x/98/76/54/98765432109876543210987654321098.jpg"
    },
    {
        id: 121,
        name: "Wales Rugby Home 2026",
        sport: "rugby",
        league: "International",
        price: 19800,
        image: "https://i.pinimg.com/736x/65/43/21/65432109876543210987654321098765.jpg"
    },
    {
        id: 122,
        name: "Scotland Rugby Home 2026",
        sport: "rugby",
        league: "International",
        price: 19600,
        image: "https://i.pinimg.com/736x/43/21/09/43210987654321098765432109876543.jpg"
    },
    {
        id: 123,
        name: "Argentina Rugby Home 2026",
        sport: "rugby",
        league: "International",
        price: 19400,
        image: "https://i.pinimg.com/736x/21/09/87/21098765432109876543210987654321.jpg"
    },
    {
        id: 124,
        name: "Fiji Rugby Home 2026",
        sport: "rugby",
        league: "International",
        price: 19200,
        image: "https://i.pinimg.com/736x/87/65/43/87654321098765432109876543210987.jpg"
    },
    {
        id: 125,
        name: "Samoa Rugby Home 2026",
        sport: "rugby",
        league: "International",
        price: 19000,
        image: "https://i.pinimg.com/736x/54/32/10/54321098765432109876543210123456.jpg"
    },
    {
        id: 126,
        name: "Japan Rugby Home 2026",
        sport: "rugby",
        league: "International",
        price: 18800,
        image: "https://i.pinimg.com/736x/10/98/76/10987654321098765432109876543210.jpg"
    },
    {
        id: 127,
        name: "Georgia Rugby Home 2026",
        sport: "rugby",
        league: "International",
        price: 18600,
        image: "https://i.pinimg.com/736x/76/54/32/76543210987654321098765432109876.jpg"
    },
    // Sport Equipment
    {
        id: 128,
        name: "Professional Football Ball",
        sport: "equipment",
        category: "Balls",
        price: 4500,
        image: "https://i.pinimg.com/736x/12/34/56/12345678901234567890123456789012.jpg"
    },
    {
        id: 129,
        name: "NBA Official Basketball",
        sport: "equipment",
        category: "Balls",
        price: 5500,
        image: "https://i.pinimg.com/736x/34/56/78/34567890123456789012345678901234.jpg"
    },
    {
        id: 130,
        name: "American Football Official",
        sport: "equipment",
        category: "Balls",
        price: 4800,
        image: "https://i.pinimg.com/736x/56/78/90/56789012345678901234567890123456.jpg"
    },
    {
        id: 131,
        name: "Baseball Glove Pro",
        sport: "equipment",
        category: "Gear",
        price: 6500,
        image: "https://i.pinimg.com/736x/78/90/12/78901234567890123456789012345678.jpg"
    },
    {
        id: 132,
        name: "Football Helmet Pro",
        sport: "equipment",
        category: "Gear",
        price: 8500,
        image: "https://i.pinimg.com/736x/90/12/34/90123456789012345678901234567890.jpg"
    },
    {
        id: 133,
        name: "Running Shoes Elite",
        sport: "equipment",
        category: "Apparel",
        price: 7200,
        image: "https://i.pinimg.com/736x/12/34/56/12345678901234567890123456789012.jpg"
    },
    {
        id: 134,
        name: "Training Shorts Pro",
        sport: "equipment",
        category: "Apparel",
        price: 2800,
        image: "https://i.pinimg.com/736x/34/56/78/34567890123456789012345678901234.jpg"
    },
    {
        id: 135,
        name: "Sports Water Bottle",
        sport: "equipment",
        category: "Accessories",
        price: 1200,
        image: "https://i.pinimg.com/736x/56/78/90/56789012345678901234567890123456.jpg"
    },
    {
        id: 136,
        name: "Fitness Tracker Pro",
        sport: "equipment",
        category: "Accessories",
        price: 4500,
        image: "https://i.pinimg.com/736x/78/90/12/78901234567890123456789012345678.jpg"
    },
    {
        id: 137,
        name: "Training Cones Set",
        sport: "equipment",
        category: "Gear",
        price: 1800,
        image: "https://i.pinimg.com/736x/90/12/34/90123456789012345678901234567890.jpg"
    },
    {
        id: 138,
        name: "Compression Shirt",
        sport: "equipment",
        category: "Apparel",
        price: 3200,
        image: "https://i.pinimg.com/736x/12/34/56/12345678901234567890123456789012.jpg"
    },
    {
        id: 139,
        name: "Sports Bag Elite",
        sport: "equipment",
        category: "Accessories",
        price: 3800,
        image: "https://i.pinimg.com/736x/34/56/78/34567890123456789012345678901234.jpg"
    },
    // Additional Equipment Products
    {
        id: 140,
        name: "Professional Soccer Ball",
        sport: "equipment",
        category: "Balls",
        price: 5200,
        image: "https://i.pinimg.com/736x/56/78/90/56789012345678901234567890123456.jpg"
    },
    {
        id: 141,
        name: "Tennis Racket Pro",
        sport: "equipment",
        category: "Gear",
        price: 8500,
        image: "https://i.pinimg.com/736x/78/90/12/78901234567890123456789012345678.jpg"
    },
    {
        id: 142,
        name: "Boxing Gloves Premium",
        sport: "equipment",
        category: "Gear",
        price: 6800,
        image: "https://i.pinimg.com/736x/90/12/34/90123456789012345678901234567890.jpg"
    },
    {
        id: 143,
        name: "Yoga Mat Professional",
        sport: "equipment",
        category: "Gear",
        price: 3200,
        image: "https://i.pinimg.com/736x/12/34/56/12345678901234567890123456789012.jpg"
    },
    {
        id: 144,
        name: "Golf Club Set",
        sport: "equipment",
        category: "Gear",
        price: 25000,
        image: "https://i.pinimg.com/736x/34/56/78/34567890123456789012345678901234.jpg"
    },
    {
        id: 145,
        name: "Basketball Hoop System",
        sport: "equipment",
        category: "Gear",
        price: 15000,
        image: "https://i.pinimg.com/736x/56/78/90/56789012345678901234567890123456.jpg"
    },
    {
        id: 146,
        name: "Swimming Goggles Pro",
        sport: "equipment",
        category: "Accessories",
        price: 1800,
        image: "https://i.pinimg.com/736x/78/90/12/78901234567890123456789012345678.jpg"
    },
    {
        id: 147,
        name: "Sports Watch GPS",
        sport: "equipment",
        category: "Accessories",
        price: 6500,
        image: "https://i.pinimg.com/736x/90/12/34/90123456789012345678901234567890.jpg"
    },
    {
        id: 148,
        name: "Training Resistance Bands",
        sport: "equipment",
        category: "Gear",
        price: 2200,
        image: "https://i.pinimg.com/736x/12/34/56/12345678901234567890123456789012.jpg"
    },
    {
        id: 149,
        name: "Cycling Helmet Elite",
        sport: "equipment",
        category: "Gear",
        price: 4500,
        image: "https://i.pinimg.com/736x/34/56/78/34567890123456789012345678901234.jpg"
    },
    {
        id: 150,
        name: "Sports Sunglasses",
        sport: "equipment",
        category: "Accessories",
        price: 2800,
        image: "https://i.pinimg.com/736x/56/78/90/56789012345678901234567890123456.jpg"
    },
    {
        id: 151,
        name: "Weightlifting Gloves",
        sport: "equipment",
        category: "Gear",
        price: 2400,
        image: "https://i.pinimg.com/736x/78/90/12/78901234567890123456789012345678.jpg"
    },
    {
        id: 152,
        name: "Running Belt",
        sport: "equipment",
        category: "Accessories",
        price: 1500,
        image: "https://i.pinimg.com/736x/90/12/34/90123456789012345678901234567890.jpg"
    },
    {
        id: 153,
        name: "Sports Towel Premium",
        sport: "equipment",
        category: "Accessories",
        price: 1200,
        image: "https://i.pinimg.com/736x/12/34/56/12345678901234567890123456789012.jpg"
    },
    {
        id: 154,
        name: "Training Shorts Elite",
        sport: "equipment",
        category: "Apparel",
        price: 3500,
        image: "https://i.pinimg.com/736x/34/56/78/34567890123456789012345678901234.jpg"
    },
    {
        id: 155,
        name: "Sports Jacket Pro",
        sport: "equipment",
        category: "Apparel",
        price: 6800,
        image: "https://i.pinimg.com/736x/56/78/90/56789012345678901234567890123456.jpg"
    },
    {
        id: 156,
        name: "Athletic Socks Pack",
        sport: "equipment",
        category: "Accessories",
        price: 1800,
        image: "https://i.pinimg.com/736x/78/90/12/78901234567890123456789012345678.jpg"
    },
    {
        id: 157,
        name: "Sports Headband",
        sport: "equipment",
        category: "Accessories",
        price: 800,
        image: "https://i.pinimg.com/736x/90/12/34/90123456789012345678901234567890.jpg"
    },
    {
        id: 158,
        name: "Training Vest",
        sport: "equipment",
        category: "Apparel",
        price: 4200,
        image: "https://i.pinimg.com/736x/12/34/56/12345678901234567890123456789012.jpg"
    },
    {
        id: 159,
        name: "Sports Cap Elite",
        sport: "equipment",
        category: "Accessories",
        price: 2200,
        image: "https://i.pinimg.com/736x/34/56/78/34567890123456789012345678901234.jpg"
    },
    {
        id: 160,
        name: "Knee Pads Pro",
        sport: "equipment",
        category: "Gear",
        price: 3200,
        image: "https://i.pinimg.com/736x/56/78/90/56789012345678901234567890123456.jpg"
    },
    {
        id: 161,
        name: "Sports Armband",
        sport: "equipment",
        category: "Accessories",
        price: 1200,
        image: "https://i.pinimg.com/736x/78/90/12/78901234567890123456789012345678.jpg"
    }
];

// Get products from localStorage or initialize with defaults
function getProducts() {
    const stored = localStorage.getItem('kitHubProducts');
    if (stored) {
        return JSON.parse(stored);
    }
    localStorage.setItem('kitHubProducts', JSON.stringify(defaultProducts));
    return defaultProducts;
}

let products = getProducts();
let cart = [];

// Render products
function renderProducts(filter = 'all', leagueFilter = null) {
    const grid = document.getElementById('productGrid');
    let filteredProducts = filter === 'all' 
        ? products 
        : products.filter(p => p.sport === filter);
    
    if (leagueFilter) {
        filteredProducts = filteredProducts.filter(p => p.league === leagueFilter);
    }
    
    grid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" onclick="openProductModal(${product.id})">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-sport">${product.league || product.category}</p>
                <p class="product-price">KSH ${product.price.toLocaleString()}</p>
                <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">ADD TO CART</button>
            </div>
        </div>
    `).join('');
}

// Show all sports sub-categories
function showAllSports() {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const subFilters = document.getElementById('subFilters');
    subFilters.style.display = 'flex';
    
    subFilters.innerHTML = `
        <button class="sub-filter-btn" onclick="filterBySport('football')">Football</button>
        <button class="sub-filter-btn" onclick="filterBySport('basketball')">Basketball</button>
        <button class="sub-filter-btn" onclick="filterBySport('nfl')">NFL</button>
        <button class="sub-filter-btn" onclick="filterBySport('mlb')">MLB</button>
        <button class="sub-filter-btn" onclick="filterBySport('nhl')">NHL</button>
        <button class="sub-filter-btn" onclick="filterBySport('cricket')">Cricket</button>
        <button class="sub-filter-btn" onclick="filterBySport('rugby')">Rugby</button>
    `;
    
    // Show all products initially
    renderProducts('all');
}

// Filter by sport (first level)
function filterBySport(sport) {
    // Handle sub-filter clicks (from All Sports)
    const subFilterBtns = document.querySelectorAll('.sub-filter-btn');
    subFilterBtns.forEach(btn => btn.classList.remove('active'));
    if (event && event.target.classList.contains('sub-filter-btn')) {
        event.target.classList.add('active');
    }
    
    const subFilters = document.getElementById('subFilters');
    
    if (sport === 'equipment') {
        // Handle equipment as main category
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
        renderEquipmentCategories();
        renderProducts('equipment');
    } else if (sport === 'football') {
        renderFootballLeagues();
        renderProducts('football');
    } else if (sport === 'basketball') {
        renderBasketballLeagues();
        renderProducts('basketball');
    } else if (sport === 'nfl') {
        renderNFLLeagues();
        renderProducts('nfl');
    } else if (sport === 'mlb') {
        renderMLBLeagues();
        renderProducts('mlb');
    } else if (sport === 'nhl') {
        renderNHLLeagues();
        renderProducts('nhl');
    } else if (sport === 'cricket') {
        renderCricketLeagues();
        renderProducts('cricket');
    } else if (sport === 'rugby') {
        renderRugbyLeagues();
        renderProducts('rugby');
    } else {
        renderSubFilters(sport);
        renderProducts(sport);
    }
}

// Render football leagues (special handling for football)
function renderFootballLeagues() {
    const subFilters = document.getElementById('subFilters');
    subFilters.style.display = 'flex';
    
    const leagues = Object.keys(footballLeagues);
    subFilters.innerHTML = `
        <button class="sub-filter-btn active" onclick="filterByLeague('football', null, this)">All Teams</button>
        ${leagues.map(league => `
            <button class="sub-filter-btn" onclick="showTeamsInLeague('${league}', this)">${league}</button>
        `).join('')}
    `;
}

// Show teams in a specific league
function showTeamsInLeague(league, btnElement) {
    document.querySelectorAll('.sub-filter-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    
    const subFilters = document.getElementById('subFilters');
    const teams = footballLeagues[league].teams;
    
    subFilters.innerHTML = `
        <button class="sub-filter-btn" onclick="renderFootballLeagues()" style="background: var(--primary-orange); color: white;">← Back to Leagues</button>
        <button class="sub-filter-btn active" onclick="filterByLeague('football', '${league}', this)">All ${league} Teams</button>
        ${teams.map(team => `
            <button class="sub-filter-btn" onclick="filterByTeam('${team}', '${league}', this)">${team}</button>
        `).join('')}
    `;
    
    renderProducts('football', league);
}

// Render basketball leagues (special handling for basketball)
function renderBasketballLeagues() {
    const subFilters = document.getElementById('subFilters');
    subFilters.style.display = 'flex';
    
    const leagues = Object.keys(basketballLeagues);
    subFilters.innerHTML = `
        <button class="sub-filter-btn active" onclick="filterByLeague('basketball', null, this)">All Teams</button>
        ${leagues.map(league => `
            <button class="sub-filter-btn" onclick="showTeamsInBasketballLeague('${league}', this)">${league}</button>
        `).join('')}
    `;
}

// Show teams in a specific basketball league
function showTeamsInBasketballLeague(league, btnElement) {
    document.querySelectorAll('.sub-filter-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    
    const subFilters = document.getElementById('subFilters');
    const teams = basketballLeagues[league].teams;
    
    subFilters.innerHTML = `
        <button class="sub-filter-btn" onclick="renderBasketballLeagues()" style="background: var(--primary-orange); color: white;">← Back to Leagues</button>
        <button class="sub-filter-btn active" onclick="filterByLeague('basketball', '${league}', this)">All ${league} Teams</button>
        ${teams.map(team => `
            <button class="sub-filter-btn" onclick="filterByBasketballTeam('${team}', '${league}', this)">${team}</button>
        `).join('')}
    `;
    
    renderProducts('basketball', league);
}

// Render NFL leagues (special handling for NFL)
function renderNFLLeagues() {
    const subFilters = document.getElementById('subFilters');
    subFilters.style.display = 'flex';
    
    const leagues = Object.keys(nflLeagues);
    subFilters.innerHTML = `
        <button class="sub-filter-btn active" onclick="filterByLeague('nfl', null, this)">All Teams</button>
        ${leagues.map(league => `
            <button class="sub-filter-btn" onclick="showTeamsInNFLLeague('${league}', this)">${league}</button>
        `).join('')}
    `;
}

// Show teams in a specific NFL league
function showTeamsInNFLLeague(league, btnElement) {
    document.querySelectorAll('.sub-filter-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    
    const subFilters = document.getElementById('subFilters');
    const teams = nflLeagues[league].teams;
    
    subFilters.innerHTML = `
        <button class="sub-filter-btn" onclick="renderNFLLeagues()" style="background: var(--primary-orange); color: white;">← Back to Leagues</button>
        <button class="sub-filter-btn active" onclick="filterByLeague('nfl', '${league}', this)">All ${league} Teams</button>
        ${teams.map(team => `
            <button class="sub-filter-btn" onclick="filterByNFLTeam('${team}', '${league}', this)">${team}</button>
        `).join('')}
    `;
    
    renderProducts('nfl', league);
}

// Render MLB leagues (special handling for MLB)
function renderMLBLeagues() {
    const subFilters = document.getElementById('subFilters');
    subFilters.style.display = 'flex';
    
    const leagues = Object.keys(mlbLeagues);
    subFilters.innerHTML = `
        <button class="sub-filter-btn active" onclick="filterByLeague('mlb', null, this)">All Teams</button>
        ${leagues.map(league => `
            <button class="sub-filter-btn" onclick="showTeamsInMLBLeague('${league}', this)">${league}</button>
        `).join('')}
    `;
}

// Show teams in a specific MLB league
function showTeamsInMLBLeague(league, btnElement) {
    document.querySelectorAll('.sub-filter-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    
    const subFilters = document.getElementById('subFilters');
    const teams = mlbLeagues[league].teams;
    
    subFilters.innerHTML = `
        <button class="sub-filter-btn" onclick="renderMLBLeagues()" style="background: var(--primary-orange); color: white;">← Back to Leagues</button>
        <button class="sub-filter-btn active" onclick="filterByLeague('mlb', '${league}', this)">All ${league} Teams</button>
        ${teams.map(team => `
            <button class="sub-filter-btn" onclick="filterByMLBTeam('${team}', '${league}', this)">${team}</button>
        `).join('')}
    `;
    
    renderProducts('mlb', league);
}

// Render NHL leagues (special handling for NHL)
function renderNHLLeagues() {
    const subFilters = document.getElementById('subFilters');
    subFilters.style.display = 'flex';
    
    const leagues = Object.keys(nhlLeagues);
    subFilters.innerHTML = `
        <button class="sub-filter-btn active" onclick="filterByLeague('nhl', null, this)">All Teams</button>
        ${leagues.map(league => `
            <button class="sub-filter-btn" onclick="showTeamsInNHLLeague('${league}', this)">${league}</button>
        `).join('')}
    `;
}

// Show teams in a specific NHL league
function showTeamsInNHLLeague(league, btnElement) {
    document.querySelectorAll('.sub-filter-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    
    const subFilters = document.getElementById('subFilters');
    const teams = nhlLeagues[league].teams;
    
    subFilters.innerHTML = `
        <button class="sub-filter-btn" onclick="renderNHLLeagues()" style="background: var(--primary-orange); color: white;">← Back to Leagues</button>
        <button class="sub-filter-btn active" onclick="filterByLeague('nhl', '${league}', this)">All ${league} Teams</button>
        ${teams.map(team => `
            <button class="sub-filter-btn" onclick="filterByNHLTeam('${team}', '${league}', this)">${team}</button>
        `).join('')}
    `;
    
    renderProducts('nhl', league);
}

// Filter by specific NHL team
function filterByNHLTeam(team, league, btnElement) {
    document.querySelectorAll('.sub-filter-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    
    const grid = document.getElementById('productGrid');
    const teamProducts = products.filter(p => 
        p.sport === 'nhl' && 
        p.league === league && 
        p.name.toLowerCase().includes(team.toLowerCase())
    );
    
    grid.innerHTML = teamProducts.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-sport">${product.league}</p>
                <p class="product-price">KSH ${product.price.toLocaleString()}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">ADD TO CART</button>
            </div>
        </div>
    `).join('');
}

// Render Cricket leagues (special handling for Cricket)
function renderCricketLeagues() {
    const subFilters = document.getElementById('subFilters');
    subFilters.style.display = 'flex';
    
    const leagues = Object.keys(cricketLeagues);
    subFilters.innerHTML = `
        <button class="sub-filter-btn active" onclick="filterByLeague('cricket', null, this)">All Teams</button>
        ${leagues.map(league => `
            <button class="sub-filter-btn" onclick="showTeamsInCricketLeague('${league}', this)">${league}</button>
        `).join('')}
    `;
}

// Show teams in a specific Cricket league
function showTeamsInCricketLeague(league, btnElement) {
    document.querySelectorAll('.sub-filter-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    
    const subFilters = document.getElementById('subFilters');
    const teams = cricketLeagues[league].teams;
    
    subFilters.innerHTML = `
        <button class="sub-filter-btn" onclick="renderCricketLeagues()" style="background: var(--primary-orange); color: white;">← Back to Leagues</button>
        <button class="sub-filter-btn active" onclick="filterByLeague('cricket', '${league}', this)">All ${league} Teams</button>
        ${teams.map(team => `
            <button class="sub-filter-btn" onclick="filterByCricketTeam('${team}', '${league}', this)">${team}</button>
        `).join('')}
    `;
    
    renderProducts('cricket', league);
}

// Filter by specific Cricket team
function filterByCricketTeam(team, league, btnElement) {
    document.querySelectorAll('.sub-filter-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    
    const grid = document.getElementById('productGrid');
    const teamProducts = products.filter(p => 
        p.sport === 'cricket' && 
        p.league === league && 
        p.name.toLowerCase().includes(team.toLowerCase())
    );
    
    grid.innerHTML = teamProducts.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-sport">${product.league}</p>
                <p class="product-price">KSH ${product.price.toLocaleString()}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">ADD TO CART</button>
            </div>
        </div>
    `).join('');
}

// Render Rugby leagues (special handling for Rugby)
function renderRugbyLeagues() {
    const subFilters = document.getElementById('subFilters');
    subFilters.style.display = 'flex';
    
    const leagues = Object.keys(rugbyLeagues);
    subFilters.innerHTML = `
        <button class="sub-filter-btn active" onclick="filterByLeague('rugby', null, this)">All Teams</button>
        ${leagues.map(league => `
            <button class="sub-filter-btn" onclick="showTeamsInRugbyLeague('${league}', this)">${league}</button>
        `).join('')}
    `;
}

// Show teams in a specific Rugby league
function showTeamsInRugbyLeague(league, btnElement) {
    document.querySelectorAll('.sub-filter-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    
    const subFilters = document.getElementById('subFilters');
    const teams = rugbyLeagues[league].teams;
    
    subFilters.innerHTML = `
        <button class="sub-filter-btn" onclick="renderRugbyLeagues()" style="background: var(--primary-orange); color: white;">← Back to Leagues</button>
        <button class="sub-filter-btn active" onclick="filterByLeague('rugby', '${league}', this)">All ${league} Teams</button>
        ${teams.map(team => `
            <button class="sub-filter-btn" onclick="filterByRugbyTeam('${team}', '${league}', this)">${team}</button>
        `).join('')}
    `;
    
    renderProducts('rugby', league);
}

// Render equipment categories (special handling for equipment)
function renderEquipmentCategories() {
    const subFilters = document.getElementById('subFilters');
    subFilters.style.display = 'flex';
    
    const categories = Object.keys(equipmentCategories);
    subFilters.innerHTML = `
        <button class="sub-filter-btn active" onclick="filterByEquipmentCategory(null, this)">All Equipment</button>
        ${categories.map(category => `
            <button class="sub-filter-btn" onclick="showItemsInEquipmentCategory('${category}', this)">${category}</button>
        `).join('')}
    `;
}

// Show items in a specific equipment category
function showItemsInEquipmentCategory(category, btnElement) {
    document.querySelectorAll('.sub-filter-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    
    const subFilters = document.getElementById('subFilters');
    const items = equipmentCategories[category].items;
    
    subFilters.innerHTML = `
        <button class="sub-filter-btn" onclick="renderEquipmentCategories()" style="background: var(--primary-orange); color: white;">← Back to Categories</button>
        <button class="sub-filter-btn active" onclick="filterByEquipmentCategory('${category}', this)">All ${category}</button>
        ${items.map(item => `
            <button class="sub-filter-btn" onclick="filterByEquipmentItem('${item}', '${category}', this)">${item}</button>
        `).join('')}
    `;
    
    renderProductsByEquipmentCategory(category);
}

// Filter by equipment category
function filterByEquipmentCategory(category, btnElement) {
    document.querySelectorAll('.sub-filter-btn').forEach(btn => btn.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');
    
    const grid = document.getElementById('productGrid');
    let categoryProducts = products.filter(p => p.sport === 'equipment');
    
    if (category) {
        categoryProducts = categoryProducts.filter(p => p.category === category);
    }
    
    grid.innerHTML = categoryProducts.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-sport">${product.category || 'Equipment'}</p>
                <p class="product-price">KSH ${product.price.toLocaleString()}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">ADD TO CART</button>
            </div>
        </div>
    `).join('');
}

// Filter by specific equipment item
function filterByEquipmentItem(item, category, btnElement) {
    document.querySelectorAll('.sub-filter-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    
    const grid = document.getElementById('productGrid');
    const itemProducts = products.filter(p => 
        p.sport === 'equipment' && 
        p.category === category && 
        p.name.toLowerCase().includes(item.toLowerCase())
    );
    
    grid.innerHTML = itemProducts.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-sport">${product.category}</p>
                <p class="product-price">KSH ${product.price.toLocaleString()}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">ADD TO CART</button>
            </div>
        </div>
    `).join('');
}

// Render products by equipment category
function renderProductsByEquipmentCategory(category) {
    const grid = document.getElementById('productGrid');
    const categoryProducts = products.filter(p => 
        p.sport === 'equipment' && p.category === category
    );
    
    grid.innerHTML = categoryProducts.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-sport">${product.category}</p>
                <p class="product-price">KSH ${product.price.toLocaleString()}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">ADD TO CART</button>
            </div>
        </div>
    `).join('');
}

// Product Modal Functions
let currentProduct = null;

function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    currentProduct = product;
    
    // Update modal content
    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalProductSport').textContent = product.league || product.category || 'Equipment';
    document.getElementById('modalProductPrice').textContent = `KSH ${product.price.toLocaleString()}`;
    document.getElementById('modalProductImage').src = product.image;
    
    // Show modal
    document.getElementById('productModal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    document.getElementById('productModal').classList.remove('open');
    document.body.style.overflow = '';
    currentProduct = null;
}

// Add to cart from modal
function addToCartFromModal() {
    if (!currentProduct) return;
    
    const size = document.getElementById('sizeSelect').value;
    const quantity = parseInt(document.getElementById('quantitySelect').value);
    
    // Add to cart with size and quantity
    for (let i = 0; i < quantity; i++) {
        cart.push({
            ...currentProduct,
            size: size,
            uniqueId: `${currentProduct.id}-${size}-${Date.now()}-${i}`
        });
    }
    
    updateCart();
    closeProductModal();
}

// Filter by specific Rugby team
function filterByRugbyTeam(team, league, btnElement) {
    document.querySelectorAll('.sub-filter-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    
    const grid = document.getElementById('productGrid');
    const teamProducts = products.filter(p => 
        p.sport === 'rugby' && 
        p.league === league && 
        p.name.toLowerCase().includes(team.toLowerCase())
    );
    
    grid.innerHTML = teamProducts.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-sport">${product.league}</p>
                <p class="product-price">KSH ${product.price.toLocaleString()}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">ADD TO CART</button>
            </div>
        </div>
    `).join('');
}

// Filter by specific MLB team
function filterByMLBTeam(team, league, btnElement) {
    document.querySelectorAll('.sub-filter-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    
    const grid = document.getElementById('productGrid');
    const teamProducts = products.filter(p => 
        p.sport === 'mlb' && 
        p.league === league && 
        p.name.toLowerCase().includes(team.toLowerCase())
    );
    
    grid.innerHTML = teamProducts.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-sport">${product.league}</p>
                <p class="product-price">KSH ${product.price.toLocaleString()}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">ADD TO CART</button>
            </div>
        </div>
    `).join('');
}

// Filter by specific NFL team
function filterByNFLTeam(team, league, btnElement) {
    document.querySelectorAll('.sub-filter-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    
    const grid = document.getElementById('productGrid');
    const teamProducts = products.filter(p => 
        p.sport === 'nfl' && 
        p.league === league && 
        p.name.toLowerCase().includes(team.toLowerCase())
    );
    
    grid.innerHTML = teamProducts.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-sport">${product.league}</p>
                <p class="product-price">KSH ${product.price.toLocaleString()}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">ADD TO CART</button>
            </div>
        </div>
    `).join('');
}

// Filter by specific basketball team
function filterByBasketballTeam(team, league, btnElement) {
    document.querySelectorAll('.sub-filter-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    
    const grid = document.getElementById('productGrid');
    const teamProducts = products.filter(p => 
        p.sport === 'basketball' && 
        p.league === league && 
        p.name.toLowerCase().includes(team.toLowerCase())
    );
    
    grid.innerHTML = teamProducts.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-sport">${product.league}</p>
                <p class="product-price">KSH ${product.price.toLocaleString()}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">ADD TO CART</button>
            </div>
        </div>
    `).join('');
}

// Filter by specific team
function filterByTeam(team, league, btnElement) {
    document.querySelectorAll('.sub-filter-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    
    const grid = document.getElementById('productGrid');
    const teamProducts = products.filter(p => 
        p.sport === 'football' && 
        p.league === league && 
        p.name.toLowerCase().includes(team.toLowerCase())
    );
    
    grid.innerHTML = teamProducts.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-sport">${product.league}</p>
                <p class="product-price">KSH ${product.price.toLocaleString()}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">ADD TO CART</button>
            </div>
        </div>
    `).join('');
}

// Render sub-filters (second level - leagues/teams)
function renderSubFilters(sport) {
    const subFilters = document.getElementById('subFilters');
    const sportProducts = products.filter(p => p.sport === sport);
    
    // Get unique leagues for this sport
    const uniqueLeagues = [...new Set(sportProducts.map(p => p.league))];
    
    if (uniqueLeagues.length > 1) {
        subFilters.style.display = 'flex';
        subFilters.innerHTML = `
            <button class="sub-filter-btn active" onclick="filterByLeague('${sport}', null, this)">All Teams</button>
            ${uniqueLeagues.map(league => `
                <button class="sub-filter-btn" onclick="filterByLeague('${sport}', '${league}', this)">${league}</button>
            `).join('')}
        `;
    } else {
        subFilters.style.display = 'none';
    }
}

// Filter by league (second level)
function filterByLeague(sport, league, btnElement) {
    document.querySelectorAll('.sub-filter-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    
    renderProducts(sport, league);
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCart();
    toggleCart();
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Update cart
function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartCount.textContent = totalItems;
    cartTotal.textContent = `KSH ${totalPrice.toLocaleString()}`;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #888; padding: 2rem;">Your cart is empty</p>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <p class="cart-item-name">${item.name}</p>
                    <p class="cart-item-price">KSH ${item.price.toLocaleString()} x ${item.quantity}</p>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">&times;</button>
            </div>
        `).join('');
    }
}

// Toggle cart
function toggleCart() {
    document.getElementById('cartDrawer').classList.toggle('open');
    document.getElementById('cartOverlay').classList.toggle('open');
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    alert('Thank you for your purchase! This is a demo checkout.');
    cart = [];
    updateCart();
    toggleCart();
}

// Mobile menu toggle function
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (mobileMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCart();
    document.getElementById('mobileMenuToggle').addEventListener('click', toggleMobileMenu);
});
