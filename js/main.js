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
    // Football - National Team Jerseys
    {
        id: 1,
        name: "Brazil Home Jersey 2024",
        sport: "football",
        league: "National Team",
        price: 18500,
        image: "https://i.pinimg.com/1200x/42/13/c8/4213c8d3c435b09a6d0a00b00b92160a.jpg",
        printStatus: "printed"
    },
    {
        id: 2,
        name: "Argentina Home Jersey 2024",
        sport: "football",
        league: "National Team",
        price: 18900,
        image: "https://i.pinimg.com/1200x/98/c1/5c/98c15c5687d66a9940ac89953fdf7901.jpg",
        printStatus: "printed"
    },
    {
        id: 3,
        name: "Germany Home Jersey 2024",
        sport: "football",
        league: "National Team",
        price: 17900,
        image: "https://i.pinimg.com/1200x/39/cc/99/39cc999f6be3a93691b48c12881609f5.jpg",
        printStatus: "printed"
    },
    {
        id: 4,
        name: "France Away Jersey 2024",
        sport: "football",
        league: "National Team",
        price: 19200,
        image: "https://i.pinimg.com/1200x/19/fa/f4/19faf4e4ac6c15e2dfca1ef5b3d8cfbc.jpg",
        printStatus: "unprinted"
    },
    {
        id: 5,
        name: "Spain Home Jersey 2024",
        sport: "football",
        league: "National Team",
        price: 17500,
        image: "https://i.pinimg.com/1200x/43/2b/c1/432bc182fe9b68d5045672556314ff41.jpg",
        printStatus: "printed"
    },
    // National Team - Men Category
    {
        id: 6,
        name: "Brazil Men's Jersey 2024",
        sport: "football",
        league: "National Team",
        price: 18900,
        image: "https://i.pinimg.com/1200x/e4/a7/62/e4a76262adcc1ec641a3520565217289.jpg",
        printStatus: "printed",
        ageGroup: "adults",
        gender: "men"
    },
    {
        id: 7,
        name: "Argentina Men's Jersey 2024",
        sport: "football",
        league: "National Team",
        price: 19500,
        image: "https://i.pinimg.com/736x/64/9b/73/649b735a438ce46f54cfbd3a41996be5.jpg",
        printStatus: "printed",
        ageGroup: "adults",
        gender: "men"
    },
    // National Team - Women Category
    {
        id: 8,
        name: "Germany Women's Jersey 2024",
        sport: "football",
        league: "National Team",
        price: 17900,
        image: "https://i.pinimg.com/736x/32/d2/66/32d2668dfc38edc22a35d7509c26a0d4.jpg",
        printStatus: "printed",
        ageGroup: "adults",
        gender: "women"
    },
    {
        id: 9,
        name: "France Women's Jersey 2024",
        sport: "football",
        league: "National Team",
        price: 18500,
        image: "https://i.pinimg.com/1200x/f5/4d/aa/f54daa6ee5299a8977663d32b7f68d6c.jpg",
        printStatus: "unprinted",
        ageGroup: "adults",
        gender: "women"
    },
    // National Team - Kids Category
    {
        id: 10,
        name: "Spain Kids Jersey 2024",
        sport: "football",
        league: "National Team",
        price: 12900,
        image: "https://i.pinimg.com/736x/34/06/df/3406dfed592265bcc5109ce8b4c109f2.jpg",
        printStatus: "printed",
        ageGroup: "kids"
    },
    // Training - Sports Wear
    {
        id: 11,
        name: "Training Sports Wear Set",
        sport: "training",
        category: "sports-wear",
        price: 8500,
        image: "https://i.pinimg.com/736x/ab/cd/ef/abcdef123456.jpg",
        printStatus: "printed"
    },
    // Training - Gears
    {
        id: 12,
        name: "Training Gear Pack",
        sport: "training",
        category: "gears",
        price: 12500,
        image: "https://i.pinimg.com/736x/gh/ij/kl/ghijkl789012.jpg",
        printStatus: "unprinted"
    },
    // Training - Tools
    {
        id: 13,
        name: "Training Tools Kit",
        sport: "training",
        category: "tools",
        price: 6500,
        image: "https://i.pinimg.com/736x/mn/op/qr/mnopqr345678.jpg",
        printStatus: "printed"
    },
    // Retro - Nation
    {
        id: 14,
        name: "Classic Brazil Retro Jersey",
        sport: "retro",
        category: "nation",
        price: 15900,
        image: "https://i.pinimg.com/736x/ab/cd/ef/retro123456.jpg",
        printStatus: "printed"
    },
    {
        id: 15,
        name: "Vintage Argentina Retro Kit",
        sport: "retro",
        category: "nation",
        price: 17500,
        image: "https://i.pinimg.com/736x/gh/ij/kl/vintage789012.jpg",
        printStatus: "unprinted"
    },
    // Retro - Club
    {
        id: 16,
        name: "Classic Manchester United Retro",
        sport: "retro",
        category: "club",
        price: 18500,
        image: "https://i.pinimg.com/736x/mn/op/qr/classic345678.jpg",
        printStatus: "printed"
    },
    {
        id: 17,
        name: "Retro Liverpool Home Kit",
        sport: "retro",
        category: "club",
        price: 19200,
        image: "https://i.pinimg.com/736x/st/uv/wx/retro901234.jpg",
        printStatus: "unprinted"
    },
    // Football - Premier League
    {
        id: 18,
        name: "Manchester City Home 2026",
        sport: "football",
        league: "Premier League",
        price: 16900,
        image: "https://i.pinimg.com/1200x/6a/ae/bb/6aaebb61188af24a2336554fd21f981d.jpg",
        printStatus: "printed"
    },
    {
        id: 2,
        name: "Arsenal Home 2026",
        sport: "football",
        league: "Premier League",
        price: 15500,
        image: "https://i.pinimg.com/736x/35/8a/c6/358ac683f7992ce5211279f57ecff85d.jpg",
        printStatus: "unprinted"
    },
    {
        id: 3,
        name: "Chelsea Home 2026",
        sport: "football",
        league: "Premier League",
        price: 15800,
        image: "https://i.pinimg.com/736x/23/45/67/23456789012345678901234567890123.jpg",
        printStatus: "custom"
    },
    {
        id: 4,
        name: "Liverpool Home 2026",
        sport: "football",
        league: "Premier League",
        price: 16200,
        image: "https://i.pinimg.com/736x/12/34/56/12345678901234567890123456789012.jpg",
        printStatus: "printed"
    },
    {
        id: 5,
        name: "Manchester United Home 2026",
        sport: "football",
        league: "Premier League",
        price: 17500,
        image: "https://i.pinimg.com/736x/34/56/78/34567890123456789012345678901234.jpg",
        printStatus: "printed"
    },
    {
        id: 6,
        name: "Tottenham Hotspur Home 2026",
        sport: "football",
        league: "Premier League",
        price: 15900,
        image: "https://i.pinimg.com/736x/54/32/10/54321098765432109876543210123456.jpg",
        printStatus: "unprinted"
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

// Get products from permanent storage locations or initialize with defaults
function getProducts() {
    let allProducts = [];
    
    // Try loading from all permanent storage sources
    try {
        // Primary admin products storage
        const adminProducts = localStorage.getItem('products');
        if (adminProducts) {
            const products = JSON.parse(adminProducts);
            allProducts = allProducts.concat(convertAdminProductsToMainFormat(products));
        }
        
        // TitanSports products storage
        const titanProducts = localStorage.getItem('titanSportsProducts');
        if (titanProducts) {
            const products = JSON.parse(titanProducts);
            allProducts = allProducts.concat(convertAdminProductsToMainFormat(products));
        }
        
        // Session storage backup
        const sessionBackup = sessionStorage.getItem('productsBackup');
        if (sessionBackup) {
            const products = JSON.parse(sessionBackup);
            allProducts = allProducts.concat(convertAdminProductsToMainFormat(products));
        }
        
        // Fallback to old storage method
        const stored = localStorage.getItem('kitHubProducts');
        if (stored) {
            allProducts = allProducts.concat(JSON.parse(stored));
        }
        
        // Remove duplicates and return unique products
        const uniqueProducts = allProducts.filter((product, index, self) =>
            index === self.findIndex((p) => p.id === product.id)
        );
        
        // If no products found, initialize with defaults
        if (uniqueProducts.length === 0) {
            localStorage.setItem('kitHubProducts', JSON.stringify(defaultProducts));
            return defaultProducts;
        }
        
        return uniqueProducts;
    } catch (error) {
        console.error('Error loading products:', error);
        // Fallback to defaults if error occurs
        return defaultProducts;
    }
}

// Convert admin panel products to main site format
function convertAdminProductsToMainFormat(adminProducts) {
    return adminProducts.map(product => ({
        id: product.id,
        name: product.name,
        price: parseFloat(product.price),
        image: product.image,
        sport: mapCategoryToSport(product.category),
        league: product.league || product.subcategory || product.category,
        category: product.category || '',
        printStatus: product.printStatus || 'unprinted',
        ageGroup: product.gender === 'kids' ? 'kids' : 'adults',
        gender: product.gender || 'men',
        description: product.description || '',
        availability: 'in-stock',
        featured: true
    }));
}

// Map admin categories to main site sport categories
function mapCategoryToSport(category) {
    const categoryMap = {
        'national': 'football',
        'club': 'football', 
        'retro': 'retro',
        'plain': 'plain',
        'equipment': 'equipment'
    };
    return categoryMap[category] || 'football';
}

let products = [];
let cart = [];
let currentPrintStatusFilter = null;

// Apply advanced filters
function applyAdvancedFilters() {
    const sportFilter = document.getElementById('sportFilter').value;
    const leagueFilter = document.getElementById('leagueFilter').value;
    const genderFilter = document.getElementById('genderFilter').value;
    const priceFilter = document.getElementById('priceFilter').value;
    const stockFilter = document.getElementById('stockFilter').value;
    const sortFilter = document.getElementById('sortFilter').value;
    
    // Get all products
    let filteredProducts = getProducts();
    
    // Apply sport filter
    if (sportFilter) {
        filteredProducts = filteredProducts.filter(p => p.sport === sportFilter);
    }
    
    // Apply league filter
    if (leagueFilter) {
        filteredProducts = filteredProducts.filter(p => p.league === leagueFilter);
    }
    
    // Apply gender filter
    if (genderFilter) {
        filteredProducts = filteredProducts.filter(p => p.gender === genderFilter);
    }
    
    // Apply price filter
    if (priceFilter) {
        const [min, max] = priceFilter.split('-').map(p => parseInt(p.replace('+', '')));
        filteredProducts = filteredProducts.filter(p => {
            if (max) {
                return p.price >= min && p.price <= max;
            } else {
                return p.price >= min;
            }
        });
    }
    
    // Apply availability filter
    if (stockFilter) {
        filteredProducts = filteredProducts.filter(p => p.availability === stockFilter);
    }
    
    // Apply sorting
    if (sortFilter) {
        switch(sortFilter) {
            case 'featured':
                filteredProducts.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
                break;
            case 'newest':
                filteredProducts.sort((a, b) => b.id - a.id);
                break;
            case 'price-asc':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                filteredProducts.sort((a, b) => (b.rating || 0) - (a.rating || 0));
                break;
            case 'bestselling':
                filteredProducts.sort((a, b) => (b.sold || 0) - (a.sold || 0));
                break;
        }
    }
    
    // Render filtered products
    renderFilteredProducts(filteredProducts);
}

// Render filtered products
function renderFilteredProducts(filteredProducts) {
    const grid = document.getElementById('productGrid');
    if (!grid) return;
    
    if (filteredProducts.length === 0) {
        grid.innerHTML = '<div class="no-products">No products found matching your filters.</div>';
        return;
    }
    
    grid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" onclick="showProductModal('${product.id}')">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">KSH ${product.price.toLocaleString()}</p>
                <div class="product-meta">
                    <span class="product-sport">${product.sport}</span>
                    <span class="product-league">${product.league || ''}</span>
                </div>
                ${product.printStatus ? `<div class="print-status ${product.printStatus}">${product.printStatus === 'printed' ? '✓ Printed' : 'Unprinted'}</div>` : ''}
            </div>
        </div>
    `).join('');
}

// Reset filters
function resetFilters() {
    document.getElementById('sportFilter').value = '';
    document.getElementById('leagueFilter').value = '';
    document.getElementById('genderFilter').value = '';
    document.getElementById('priceFilter').value = '';
    document.getElementById('stockFilter').value = '';
    document.getElementById('sortFilter').value = 'featured';
    
    renderProducts('all');
}

// Generate print status badge HTML
function getPrintStatusBadge(status) {
    if (!status) return '';
    
    const badges = {
        'printed': '<div class="print-status printed">✓ Printed</div>',
        'unprinted': '<div class="print-status unprinted">⏱ Unprinted</div>',
        'custom': '<div class="print-status custom">★ Custom</div>'
    };
    
    return badges[status] || '';
}

// Render products
function renderProducts(filter = 'all', printStatusFilter = null, genderFilter = null) {
    const grid = document.getElementById('productGrid');
    
    // Always get fresh products when filtering
    products = getProducts();
    let filteredProducts = products;

    if (filter !== 'all') {
        if (filter === 'equipment') {
            filteredProducts = products.filter(p => p.sport === 'equipment');
            // Apply subcategory filter for equipment
            if (printStatusFilter && printStatusFilter !== 'all') {
                filteredProducts = filteredProducts.filter(p => p.category === printStatusFilter);
            }
        } else if (filter === 'retro') {
            filteredProducts = products.filter(p => p.sport === 'retro');
            // Apply subcategory filter for retro
            if (printStatusFilter && printStatusFilter !== 'all') {
                filteredProducts = filteredProducts.filter(p => p.category === printStatusFilter);
            }
        } else if (filter === 'plain') {
            filteredProducts = products.filter(p => p.sport === 'plain');
        } else if (filter === 'national') {
            // Show all national team products when main filter is clicked
            filteredProducts = products.filter(p => p.sport === 'football' && p.league === 'National Team');
            // Apply national team filter only if specific team is selected
            if (printStatusFilter && printStatusFilter !== 'all') {
                filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes(printStatusFilter.toLowerCase()));
            }
        } else if (filter === 'club') {
            // Show all club jersey products when main filter is clicked
            filteredProducts = products.filter(p => p.sport === 'football' && p.league !== 'National Team' && p.league !== 'retro' && p.league !== 'plain' && p.league !== 'equipment');
            // Apply league filter only if specific league is selected
            if (printStatusFilter && printStatusFilter !== 'all') {
                filteredProducts = filteredProducts.filter(p => p.league === printStatusFilter);
            }
        } else {
            // Handle any other categories
            filteredProducts = products.filter(p => p.sport === filter || p.category === filter);
        }
    }

    // Handle national team specific filtering
    if (filter === 'national') {
        // Apply print status filter for national team
        if (printStatusFilter === 'adults') {
            filteredProducts = filteredProducts.filter(p => p.ageGroup === 'adults');
        } else if (printStatusFilter === 'kids') {
            filteredProducts = filteredProducts.filter(p => p.ageGroup === 'kids');
        }
        
        // Apply gender filter for adults
        if (genderFilter === 'men') {
            filteredProducts = filteredProducts.filter(p => p.gender === 'men');
        } else if (genderFilter === 'women') {
            filteredProducts = filteredProducts.filter(p => p.gender === 'women');
        }
    }

    // Handle print status filtering
    if (printStatusFilter && typeof printStatusFilter === 'string' && ['printed', 'unprinted', 'custom'].includes(printStatusFilter)) {
        filteredProducts = filteredProducts.filter(p => p.printStatus === printStatusFilter);
    }

    grid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" onclick="openProductModal(${product.id})">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            ${getPrintStatusBadge(product.printStatus)}
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
    
    subFilters.innerHTML = '';
    
    // Show print filters
    const printFilters = document.getElementById('printFilters');
    printFilters.style.display = 'flex';
    
    // Show all products initially
    renderProducts('all');
}

// Filter by print status
function filterByPrintStatus(status) {
    document.querySelectorAll('.print-filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    currentPrintStatusFilter = status === 'all' ? null : status;
    
    // Re-render current products with print filter
    const currentSportFilter = getCurrentSportFilter();
    renderProducts(currentSportFilter, currentPrintStatusFilter);
}

// Get current sport filter
function getCurrentSportFilter() {
    const activeFilterBtn = document.querySelector('.filter-btn.active');
    const activeSubFilterBtn = document.querySelector('.sub-filter-btn.active');
    
    if (activeFilterBtn && activeFilterBtn.textContent.includes('Equipment')) {
        return 'equipment';
    } else if (activeSubFilterBtn) {
        return activeSubFilterBtn.textContent.toLowerCase();
    }
    
    return 'all';
}

// Filter by gender/age
function filterByGender(gender, btnElement) {
    const currentFilter = document.querySelector('.filter-btn.active').textContent.trim().toLowerCase();
    
    // Update active states
    document.querySelectorAll('.sub-filter-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    
    let filteredProducts = [];
    
    switch(currentFilter) {
        case 'national team':
            filteredProducts = products.filter(p => 
                p.sport === 'football' && 
                p.league === 'National Team' && 
                (gender === 'men' ? p.gender === 'men' : 
                 gender === 'women' ? p.gender === 'women' : 
                 gender === 'kids' ? p.ageGroup === 'kids' : true)
            );
            break;
        case 'club jerseys':
            filteredProducts = products.filter(p => 
                p.sport === 'football' && 
                p.league !== 'National Team' && 
                p.league !== 'retro' && 
                p.league !== 'plain' && 
                p.league !== 'equipment' &&
                (gender === 'men' ? p.gender === 'men' : 
                 gender === 'women' ? p.gender === 'women' : 
                 gender === 'kids' ? p.ageGroup === 'kids' : true)
            );
            break;
        case 'retro':
            filteredProducts = products.filter(p => 
                p.league === 'retro' &&
                (gender === 'men' ? p.gender === 'men' : 
                 gender === 'women' ? p.gender === 'women' : 
                 gender === 'kids' ? p.ageGroup === 'kids' : true)
            );
            break;
        case 'plain uniforms':
            filteredProducts = products.filter(p => 
                p.league === 'plain' &&
                (gender === 'men' ? p.gender === 'men' : 
                 gender === 'women' ? p.gender === 'women' : 
                 gender === 'kids' ? p.ageGroup === 'kids' : true)
            );
            break;
        case 'training kits & equipments':
            filteredProducts = products.filter(p => 
                p.sport === 'equipment' &&
                (gender === 'men' ? p.gender === 'men' : 
                 gender === 'women' ? p.gender === 'women' : 
                 gender === 'kids' ? p.ageGroup === 'kids' : true)
            );
            break;
        default:
            filteredProducts = products.filter(p => 
                (gender === 'men' ? p.gender === 'men' : 
                 gender === 'women' ? p.gender === 'women' : 
                 gender === 'kids' ? p.ageGroup === 'kids' : true)
            );
    }
    
    renderProducts(filteredProducts);
}

// Filter by specific national team
function filterByNationalTeam(team) {
    // Hide all other sub-filters (only nationalSubFilters exists)
    const nationalSubFilters = document.getElementById('nationalSubFilters');
    if (nationalSubFilters) nationalSubFilters.style.display = 'flex';
    
    // Handle sub-filter clicks
    const subFilterBtns = document.querySelectorAll('.sub-filter-btn');
    subFilterBtns.forEach(btn => btn.classList.remove('active'));
    if (event && event.target.classList.contains('sub-filter-btn')) {
        event.target.classList.add('active');
    }
    
    // Filter products by specific national team (admin panel format)
    const grid = document.getElementById('productGrid');
    const teamProducts = products.filter(p => 
        p.sport === 'football' && 
        p.league === 'National Team' && 
        p.name.toLowerCase().includes(team.toLowerCase())
    );
    
    grid.innerHTML = teamProducts.map(product => `
        <div class="product-card" onclick="openProductModal(${product.id})">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            ${getPrintStatusBadge(product.printStatus)}
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-sport">${product.league || product.category}</p>
                <p class="product-price">KSH ${product.price.toLocaleString()}</p>
                <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">ADD TO CART</button>
            </div>
        </div>
    `).join('');
}

// Filter by sub-category (second level)
function filterBySubCategory(subCategory) {
    // Hide all sub-filters first
    const nationalSubFilters = document.getElementById('nationalSubFilters');
    const clubSubFilters = document.getElementById('clubSubFilters');
    const equipmentSubFilters = document.getElementById('equipmentSubFilters');
    const retroSubFilters = document.getElementById('retroSubFilters');
    
    if (nationalSubFilters) nationalSubFilters.style.display = 'none';
    if (clubSubFilters) clubSubFilters.style.display = 'none';
    if (equipmentSubFilters) equipmentSubFilters.style.display = 'none';
    if (retroSubFilters) retroSubFilters.style.display = 'none';
    
    // Handle sub-filter clicks
    const subFilterBtns = document.querySelectorAll('.sub-filter-btn');
    subFilterBtns.forEach(btn => btn.classList.remove('active'));
    if (event && event.target.classList.contains('sub-filter-btn')) {
        event.target.classList.add('active');
    }
    
    if (subCategory === 'sports wear' || subCategory === 'gears' || subCategory === 'tools') {
        // Handle equipment subcategories - show equipment sub-filters and filter
        if (equipmentSubFilters) equipmentSubFilters.style.display = 'flex';
        renderProducts('equipment', subCategory);
    } else if (subCategory === 'nation' || subCategory === 'club') {
        // Handle retro subcategories - show retro sub-filters and filter
        if (retroSubFilters) retroSubFilters.style.display = 'flex';
        renderProducts('retro', subCategory);
    } else if (subCategory === 'all') {
        // Handle plain uniform 'all' case
        renderProducts('plain');
    } else {
        renderProducts('national', subCategory);
    }
}

// Show teams in specific club league
function showTeamsInClubLeague(league) {
    document.querySelectorAll('.sub-filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const clubLeaguesSubFilters = document.getElementById('clubLeaguesSubFilters');
    clubLeaguesSubFilters.style.display = 'flex';
    
    // Get teams for the selected league
    const teams = getTeamsForLeague(league);
    
    clubLeaguesSubFilters.innerHTML = `
        ${teams.map(team => `<button class="sub-filter-btn" onclick="filterBySubCategory('${team}')">${team}</button>`).join('')}
    `;
    
    renderProducts('club', league);
}

// Get teams for a specific league
function getTeamsForLeague(league) {
    const leagueTeams = {
        'premier-league': ['Manchester United', 'Manchester City', 'Arsenal', 'Chelsea', 'Liverpool', 'Tottenham'],
        'la-liga': ['Real Madrid', 'Barcelona', 'Atletico Madrid', 'Sevilla', 'Valencia'],
        'serie-a': ['Juventus', 'AC Milan', 'Inter Milan', 'Napoli', 'Roma', 'Lazio'],
        'bundesliga': ['Bayern Munich', 'Borussia Dortmund', 'RB Leipzig', 'Bayer Leverkusen', 'Eintracht Frankfurt'],
        'ligue-1': ['PSG', 'Lyon', 'Marseille', 'Monaco', 'Lille'],
        'eredivisie': ['Ajax', 'PSV', 'Feyenoord', 'AZ Alkmaar', 'Utrecht']
    };
    
    return leagueTeams[league] || [];
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
    
    // Hide all sub-filters first
    const nationalSubFilters = document.getElementById('nationalSubFilters');
    const clubSubFilters = document.getElementById('clubSubFilters');
    const retroSubFilters = document.getElementById('retroSubFilters');
    const equipmentSubFilters = document.getElementById('equipmentSubFilters');
    if (nationalSubFilters) nationalSubFilters.style.display = 'none';
    if (clubSubFilters) clubSubFilters.style.display = 'none';
    if (retroSubFilters) retroSubFilters.style.display = 'none';
    if (equipmentSubFilters) equipmentSubFilters.style.display = 'none';
    
    if (sport === 'national') {
        // Show national team sub-filters
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
        const nationalSubFilters = document.getElementById('nationalSubFilters');
        if (nationalSubFilters) nationalSubFilters.style.display = 'flex';
        
        // Force refresh products and render national team catalogue
        products = getProducts();
        renderProducts('national');
    } else if (sport === 'club') {
        // Handle club jerseys - show sub-filters
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
        const clubSubFilters = document.getElementById('clubSubFilters');
        if (clubSubFilters) clubSubFilters.style.display = 'flex';
        renderProducts('club');
    } else if (sport === 'retro') {
        // Handle retro jerseys - show sub-filters
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
        const retroSubFilters = document.getElementById('retroSubFilters');
        if (retroSubFilters) retroSubFilters.style.display = 'flex';
        renderProducts('retro');
    } else if (sport === 'plain') {
        // Handle plain uniforms - show gender sub-filters
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
        const plainSubFilters = document.getElementById('plainSubFilters');
        if (plainSubFilters) plainSubFilters.style.display = 'flex';
        renderProducts('plain');
    } else if (sport === 'equipment') {
        // Handle training kits & equipment - show gender sub-filters
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
        const equipmentSubFilters = document.getElementById('equipmentSubFilters');
        if (equipmentSubFilters) equipmentSubFilters.style.display = 'flex';
        renderProducts('equipment');
    } else {
        // Default case - just render products
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
        renderProducts(sport);
    }
}

// Render football leagues (special handling for football)
function renderFootballLeagues() {
    const subFilters = document.getElementById('subFilters');
    subFilters.style.display = 'flex';
    
    const leagues = Object.keys(footballLeagues);
    subFilters.innerHTML = `
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
    
    // Update compact modal content
    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalProductSport').textContent = product.sport || 'Equipment';
    document.getElementById('modalProductLeague').textContent = product.league || product.category || 'General';
    document.getElementById('modalProductPrice').textContent = `KSH ${product.price.toLocaleString()}`;
    document.getElementById('modalProductImage').src = product.image;
    document.getElementById('modalPrintStatus').innerHTML = getPrintStatusBadge(product.printStatus);
    
    // Reset size selection
    document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.size-btn[data-size="M"]').classList.add('active');
    
    // Reset quantity
    document.getElementById('quantitySelect').value = 1;
    
    // Show modal
    document.getElementById('productModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    document.getElementById('productModal').style.display = 'none';
    document.body.style.overflow = '';
    currentProduct = null;
}

// Size selection functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners for size buttons
    const sizeButtons = document.querySelectorAll('.size-btn');
    sizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            sizeButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

// Quantity increase/decrease functions
function increaseQuantity() {
    const quantityInput = document.getElementById('quantitySelect');
    const currentValue = parseInt(quantityInput.value);
    if (currentValue < 10) {
        quantityInput.value = currentValue + 1;
    }
}

function decreaseQuantity() {
    const quantityInput = document.getElementById('quantitySelect');
    const currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
}

// Buy Now function - triggers M-Pesa payment directly
function buyNow() {
    if (!currentProduct) return;
    
    // Get selected size from the new button-based selector
    const selectedSizeBtn = document.querySelector('.size-btn.active');
    const size = selectedSizeBtn ? selectedSizeBtn.dataset.size : 'M';
    const quantity = parseInt(document.getElementById('quantitySelect').value);
    
    // Calculate total price
    const totalPrice = currentProduct.price * quantity;
    
    // Create cart item
    const cartItem = {
        ...currentProduct,
        size: size,
        quantity: quantity,
        uniqueId: `${currentProduct.id}-${size}-${Date.now()}`
    };
    
    // Add to cart temporarily for payment
    const tempCart = [cartItem];
    localStorage.setItem('cart', JSON.stringify(tempCart));
    
    // Close product modal
    closeProductModal();
    
    // Trigger M-Pesa payment
    if (typeof initiateMpesaPayment === 'function') {
        initiateMpesaPayment(totalPrice, tempCart);
    } else {
        alert('Payment system not available. Please add to cart and checkout.');
    }
}

// Add to cart from modal
function addToCartFromModal() {
    if (!currentProduct) return;
    
    // Get selected size from the new button-based selector
    const selectedSizeBtn = document.querySelector('.size-btn.active');
    const size = selectedSizeBtn ? selectedSizeBtn.dataset.size : 'M';
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

// Cart management functions
function getCart() {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function clearCart() {
    localStorage.removeItem('cart');
    updateCart();
}

// Add to cart
function addToCart(productId) {
    const cart = getCart();
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    saveCart(cart);
    updateCart();
    toggleCart();
}

// Remove from cart
function removeFromCart(productId) {
    const cart = getCart();
    const updatedCart = cart.filter(item => item.id !== productId);
    saveCart(updatedCart);
    updateCart();
}

// Update cart
function updateCart() {
    const cart = getCart();
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

// Checkout calculation variables

// Proceed to checkout
function proceedToCheckout() {
    const cart = getCart();
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }
    
    // Close cart and open checkout
    toggleCart();
    openCheckout();
}

// Open checkout modal
function openCheckout() {
    const checkoutModal = document.getElementById('checkoutModal');
    checkoutModal.classList.add('open');
    loadCheckoutData();
    calculateCheckoutTotals();
    
    // Setup payment buttons when checkout opens
    setupPaymentButtons();
}

// Setup payment buttons
function setupPaymentButtons() {
    const paystackButton = document.getElementById('paystackButton');
    const codButton = document.getElementById('codButton');
    
    console.log('Setting up payment buttons:', paystackButton, codButton);
    
    if (paystackButton) {
        paystackButton.onclick = function(e) {
            e.preventDefault();
            console.log('Paystack button clicked');
            const cart = getCart();
            if (cart.length === 0) {
                showNotification('Your cart is empty!', 'error');
                return;
            }
            
            // Calculate final totals
            const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
            const shipping = subtotal >= 50000 ? 0 : 1500;
            const tax = Math.round(subtotal * 0.16);
            const finalTotal = subtotal + shipping + tax;
            
            const order = {
                id: Date.now(),
                date: new Date().toISOString(),
                items: cart,
                subtotal: subtotal,
                shipping: shipping,
                tax: tax,
                total: finalTotal,
                status: 'pending'
            };
            
            console.log('Calling payWithPaystack with total:', finalTotal);
            payWithPaystack(finalTotal, order);
        };
    } else {
        console.error('Paystack button not found');
    }
    
    if (codButton) {
        codButton.onclick = function(e) {
            e.preventDefault();
            console.log('COD button clicked');
            const cart = getCart();
            if (cart.length === 0) {
                showNotification('Your cart is empty!', 'error');
                return;
            }
            
            // Calculate final totals
            const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
            const shipping = subtotal >= 50000 ? 0 : 1500;
            const tax = Math.round(subtotal * 0.16);
            const finalTotal = subtotal + shipping + tax;
            
            const order = {
                id: Date.now(),
                date: new Date().toISOString(),
                items: cart,
                subtotal: subtotal,
                shipping: shipping,
                tax: tax,
                total: finalTotal,
                paymentMethod: 'cod',
                status: 'pending'
            };
            
            completeOrder(order);
        };
    } else {
        console.error('COD button not found');
    }
}

// Toggle cart
function toggleCart() {
    const cartDrawer = document.getElementById('cartDrawer');
    const cartOverlay = document.getElementById('cartOverlay');
    
    cartDrawer.classList.toggle('open');
    cartOverlay.classList.toggle('open');
}

// Close checkout modal
function closeCheckout() {
    const checkoutModal = document.getElementById('checkoutModal');
    checkoutModal.classList.remove('open');
}

// Load checkout data
function loadCheckoutData() {
    const cart = getCart();
    const orderItems = document.getElementById('orderItems');
    
    orderItems.innerHTML = cart.map(item => `
        <div class="order-item">
            <img src="${item.image}" alt="${item.name}" class="order-item-image">
            <div class="order-item-details">
                <h4>${item.name}</h4>
                <p>${item.sport.charAt(0).toUpperCase() + item.sport.slice(1)} - ${item.league || item.category}</p>
                <p>Quantity: ${item.quantity}</p>
            </div>
            <div class="order-item-price">
                KSH ${(item.price * item.quantity).toLocaleString()}
            </div>
        </div>
    `).join('');
}

// Calculate checkout totals
function calculateCheckoutTotals() {
    const cart = getCart();
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    // Calculate shipping (free shipping over 50,000 KSH)
    const shipping = subtotal >= 50000 ? 0 : 1500;
    
    // Calculate tax (16% of subtotal)
    const tax = Math.round(subtotal * 0.16);
    
    // Calculate final total
    const finalTotal = subtotal + shipping + tax;
    
    // Update UI
    document.getElementById('subtotal').textContent = `KSH ${subtotal.toLocaleString()}`;
    document.getElementById('shipping').textContent = shipping === 0 ? 'FREE' : `KSH ${shipping.toLocaleString()}`;
    document.getElementById('tax').textContent = `KSH ${tax.toLocaleString()}`;
    document.getElementById('finalTotal').textContent = `KSH ${finalTotal.toLocaleString()}`;
}

// Paystack payment function
function payWithPaystack(amount, order) {
    console.log('Paystack payment initiated', amount, order);
    
    if (typeof PaystackPop === 'undefined') {
        showNotification('Paystack is not loaded. Please refresh the page.', 'error');
        return;
    }
    
    const ref = 'TITAN_' + Date.now();
    
    const handler = PaystackPop.setup({
        key: 'pk_test_0457f2b117990bebdbd1b7efa0792bc3f72e4f89',
        email: 'customer@titansports.com',
        amount: amount * 100, // Paystack expects amount in kobo/cents
        currency: 'KES',
        ref: ref,
        label: "TITANSPORTS Jersey Purchase",
        callback: function(response) {
            // Payment successful
            console.log('Payment successful', response);
            order.paymentReference = response.reference;
            order.paymentMethod = 'paystack';
            order.status = 'paid';
            completeOrder(order);
        },
        onClose: function() {
            // Payment window closed without completion
            console.log('Payment window closed');
            showNotification('Payment was not completed. You can try again.', 'error');
        }
    });
    
    handler.openIframe();
}

// Place order
async function placeOrder() {
    const cart = getCart();
    
    // Calculate final totals
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = subtotal >= 50000 ? 0 : 1500;
    const tax = Math.round(subtotal * 0.16);
    const finalTotal = subtotal + shipping + tax;
    
    // Create order
    const order = {
        id: Date.now(),
        date: new Date().toISOString(),
        items: cart,
        subtotal: subtotal,
        shipping: shipping,
        tax: tax,
        total: finalTotal,
        status: 'pending'
    };
    
    // Store order temporarily for payment
    window.currentOrder = order;
}

// Complete order (for Cash on Delivery or successful Paystack payment)
function completeOrder(order) {
    // Save order to localStorage
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    // Clear cart
    clearCart();
    
    // Show success message
    showOrderConfirmation(order);
    
    // Close checkout
    closeCheckout();
    
    // Reset form
    document.getElementById('checkoutForm').reset();
    discountPercentage = 0;
    currentDiscount = '';
}

// Show order confirmation

// Show order confirmation
function showOrderConfirmation(order) {
    const confirmation = document.createElement('div');
    confirmation.className = 'order-confirmation';
    confirmation.innerHTML = `
        <div class="confirmation-content">
            <div class="success-icon">✓</div>
            <h2>Order Placed Successfully!</h2>
            <p>Order #${order.id}</p>
            <div class="order-summary-mini">
                <p><strong>Total:</strong> KSH ${order.total.toLocaleString()}</p>
                <p><strong>Items:</strong> ${order.items.length}</p>
                <p><strong>Delivery:</strong> ${order.customer.address}</p>
            </div>
            <button class="confirmation-btn" onclick="this.parentElement.parentElement.remove()">Continue Shopping</button>
        </div>
    `;
    
    document.body.appendChild(confirmation);
    
    // Auto remove after 10 seconds
    setTimeout(() => {
        if (confirmation.parentElement) {
            confirmation.remove();
        }
    }, 10000);
}

// Checkout function (legacy - redirect to new flow)
function checkout() {
    proceedToCheckout();
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

// Search functionality
let searchResults = [];
let currentSearchQuery = '';

// Perform search
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim().toLowerCase();
    
    if (!query) {
        clearSearch();
        return;
    }
    
    currentSearchQuery = query;
    searchResults = searchProducts(query);
    displaySearchResults();
    
    // Hide regular filters and show search section
    document.getElementById('filters').style.display = 'none';
    document.getElementById('subFilters').style.display = 'none';
    document.getElementById('printFilters').style.display = 'none';
    document.getElementById('searchSection').style.display = 'block';
    
    // Scroll to products section
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Search products across all fields
function searchProducts(query) {
    const products = getProducts();
    const results = [];
    
    products.forEach(product => {
        let relevanceScore = 0;
        const searchableText = [
            product.name,
            product.sport,
            product.league || product.category,
            product.printStatus || ''
        ].join(' ').toLowerCase();
        
        // Calculate relevance score
        if (product.name.toLowerCase().includes(query)) {
            relevanceScore += 10;
        }
        if (product.sport.toLowerCase().includes(query)) {
            relevanceScore += 5;
        }
        if ((product.league || product.category).toLowerCase().includes(query)) {
            relevanceScore += 3;
        }
        if (searchableText.includes(query)) {
            relevanceScore += 1;
        }
        
        if (relevanceScore > 0) {
            results.push({
                ...product,
                relevanceScore: relevanceScore
            });
        }
    });
    
    return results.sort((a, b) => b.relevanceScore - a.relevanceScore);
}

// Display search results
function displaySearchResults() {
    const searchInfo = document.getElementById('searchInfo');
    const productGrid = document.getElementById('productGrid');
    
    searchInfo.innerHTML = `
        <p>Found <strong>${searchResults.length}</strong> results for "<strong>${currentSearchQuery}</strong>"</p>
    `;
    
    if (searchResults.length === 0) {
        productGrid.innerHTML = `
            <div class="no-results">
                <h3>No results found</h3>
                <p>Try searching for different keywords like team names, sports, or equipment types.</p>
                <button class="cta-button" onclick="clearSearch()">Clear Search</button>
            </div>
        `;
        return;
    }
    
    productGrid.innerHTML = searchResults.map(product => `
        <div class="product-card search-result" onclick="openProductModal(${product.id})">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            ${getPrintStatusBadge(product.printStatus)}
            <div class="product-info">
                <h3 class="product-name">${highlightSearchTerm(product.name, currentSearchQuery)}</h3>
                <p class="product-sport">${highlightSearchTerm(product.league || product.category, currentSearchQuery)}</p>
                <p class="product-price">KSH ${product.price.toLocaleString()}</p>
                <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">ADD TO CART</button>
            </div>
        </div>
    `).join('');
}

// Highlight search terms in text
function highlightSearchTerm(text, term) {
    if (!text || !term) return text;
    
    const regex = new RegExp(`(${term})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

// Sort search results
function sortSearchResults(sortBy) {
    // Update active button
    document.querySelectorAll('.search-filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    switch(sortBy) {
        case 'name':
            searchResults.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'price-low':
            searchResults.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            searchResults.sort((a, b) => b.price - a.price);
            break;
        case 'relevance':
        default:
            searchResults.sort((a, b) => b.relevanceScore - a.relevanceScore);
            break;
    }
    
    displaySearchResults();
}

// Clear search
function clearSearch() {
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').style.display = 'none';
    document.getElementById('searchSection').style.display = 'none';
    document.getElementById('filters').style.display = 'flex';
    
    searchResults = [];
    currentSearchQuery = '';
    
    // Restore normal view
    renderProducts('all');
}

// Real-time search as user types
function setupRealTimeSearch() {
    const searchInput = document.getElementById('searchInput');
    let searchTimeout;
    
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            if (e.target.value.trim()) {
                performSearch();
            } else {
                clearSearch();
            }
        }, 300);
    });
    
    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        const searchContainer = document.querySelector('.search-container');
        if (!searchContainer.contains(e.target)) {
            document.getElementById('searchResults').style.display = 'none';
        }
    });
    
    // Handle Enter key
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// Keyboard navigation support
function setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Escape key to close modals and clear search
        if (e.key === 'Escape') {
            // Close product modal
            const productModal = document.getElementById('productModal');
            if (productModal.classList.contains('open')) {
                closeProductModal();
                return;
            }
            
            // Close cart
            const cartDrawer = document.getElementById('cartDrawer');
            if (cartDrawer.classList.contains('open')) {
                toggleCart();
                return;
            }
            
            // Clear search if active
            if (currentSearchQuery) {
                clearSearch();
                return;
            }
            
            // Close mobile menu
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu.classList.contains('active')) {
                toggleMobileMenu();
                return;
            }
        }
        
        // Backspace key for navigation (when not in input fields)
        if (e.key === 'Backspace' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
            e.preventDefault();
            
            // Go back in search if active
            if (currentSearchQuery) {
                clearSearch();
                return;
            }
            
            // Close modals if open
            const productModal = document.getElementById('productModal');
            if (productModal.classList.contains('open')) {
                closeProductModal();
                return;
            }
            
            const cartDrawer = document.getElementById('cartDrawer');
            if (cartDrawer.classList.contains('open')) {
                toggleCart();
                return;
            }
        }
    });
}

// Hero Slideshow Variables
let currentSlide = 0;
let heroSlides = [];
let slideInterval;

// Initialize hero slideshow
function initializeHeroSlideshow() {
    // Load uploaded background photos
    loadBackgroundPhotos();
    
    // Start automatic slideshow
    startSlideshow();
}

// Load background photos from localStorage
function loadBackgroundPhotos() {
    try {
        const categorizedPhotos = JSON.parse(localStorage.getItem('categorizedPhotos') || '{}');
        const backgroundPhotos = categorizedPhotos['background-slideshow'] || [];
        
        if (backgroundPhotos.length > 0) {
            // Add uploaded photos to slideshow
            addPhotosToSlideshow(backgroundPhotos);
        } else {
            // Use default photo if no uploaded photos
            addDefaultPhoto();
        }
    } catch (error) {
        console.error('Error loading background photos:', error);
        addDefaultPhoto();
    }
}

// Add photos to slideshow
function addPhotosToSlideshow(photos) {
    const slideshow = document.getElementById('heroSlideshow');
    const indicators = document.getElementById('slideIndicators');
    
    if (!slideshow || !indicators) return;
    currentSlide = 0;
    
    // Clear existing slides except the first one
    const existingSlides = slideshow.querySelectorAll('.hero-slide:not(:first-child)');
    existingSlides.forEach(slide => slide.remove());
    
    // Add new slides
    photos.forEach((photo, index) => {
        const slide = document.createElement('div');
        slide.className = 'hero-slide' + (index === 0 ? ' active' : '');
        slide.innerHTML = `
            <img src="${photo.url}" alt="Hero Image ${index + 2}" class="hero-image">
            <div class="hero-overlay">
                <div class="hero-content">
                    <a href="#products" class="cta-button">SHOP NOW</a>
                </div>
            </div>
        `;
        slideshow.appendChild(slide);
    });
    
    // Update indicators
    updateIndicators(photos.length + 1); // +1 for default slide
    
    // Store slides array
    heroSlides = slideshow.querySelectorAll('.hero-slide');
}

// Add default photos
function addDefaultPhoto() {
    const slideshow = document.getElementById('heroSlideshow');
    const indicators = document.getElementById('slideIndicators');
    
    if (!slideshow || !indicators) return;
    currentSlide = 0;
    
    // Default hero images
    const defaultImages = [
        'images/background-slideshow/YaOqL.jpg',
        'images/background-slideshow/glGob.jpg',
        'images/background-slideshow/mhA81.jpg'
    ];
    
    // Clear existing content
    slideshow.innerHTML = '';
    
    // Add slides for each default image
    defaultImages.forEach((imageUrl, index) => {
        const slide = document.createElement('div');
        slide.className = 'hero-slide' + (index === 0 ? ' active' : '');
        slide.innerHTML = `
            <img src="${imageUrl}" alt="Hero Image ${index + 1}" class="hero-image">
            <div class="hero-overlay">
                <div class="hero-content">
                    <a href="#products" class="cta-button">SHOP NOW</a>
                </div>
            </div>
        `;
        slideshow.appendChild(slide);
    });
    
    // Update indicators
    updateIndicators(defaultImages.length);
    
    // Store slides array
    heroSlides = slideshow.querySelectorAll('.hero-slide');
}

// Update slide indicators
function updateIndicators(count) {
    const indicators = document.getElementById('slideIndicators');
    if (!indicators) return;
    
    indicators.innerHTML = '';
    for (let i = 0; i < count; i++) {
        const indicator = document.createElement('span');
        indicator.className = 'indicator' + (i === 0 ? ' active' : '');
        indicator.onclick = () => goToSlide(i);
        indicators.appendChild(indicator);
    }
}

// Slideshow controls
function changeSlide(direction) {
    if (heroSlides.length === 0) return;
    
    // Hide current slide
    heroSlides[currentSlide].classList.remove('active');
    
    // Update current slide index
    currentSlide += direction;
    
    // Wrap around
    if (currentSlide >= heroSlides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = heroSlides.length - 1;
    }
    
    // Show new slide
    heroSlides[currentSlide].classList.add('active');
    
    // Update indicators
    updateActiveIndicator();
    
    // Reset slideshow timer
    resetSlideshowTimer();
}

function goToSlide(slideIndex) {
    if (heroSlides.length === 0) return;
    
    // Hide current slide
    heroSlides[currentSlide].classList.remove('active');
    
    // Show selected slide
    currentSlide = slideIndex;
    heroSlides[currentSlide].classList.add('active');
    
    // Update indicators
    updateActiveIndicator();
    
    // Reset slideshow timer
    resetSlideshowTimer();
}

function updateActiveIndicator() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

// Automatic slideshow
function startSlideshow() {
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 5000); // Change slide every 5 seconds
}

function stopSlideshow() {
    if (slideInterval) {
        clearInterval(slideInterval);
    }
}

function resetSlideshowTimer() {
stopSlideshow();
startSlideshow();
}

// Social Sharing and Referral System
function shareProduct(platform) {
const currentProduct = window.currentProduct;
if (!currentProduct) return;
    
const referralCode = document.getElementById('userReferralCode').textContent;
const productUrl = `${window.location.origin}?ref=${referralCode}&product=${currentProduct.id}`;
const message = `Check out this amazing ${currentProduct.name} jersey from TITANSPORTS! Use my code ${referralCode} for 10% off!`;
    
switch(platform) {
    case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}&quote=${encodeURIComponent(message)}`, '_blank', 'width=600,height=400');
        break;
    case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(productUrl)}`, '_blank', 'width=600,height=400');
        break;
    case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(message + ' ' + productUrl)}`, '_blank');
        break;
    case 'instagram':
        // Instagram doesn't support direct sharing, so we copy to clipboard
        navigator.clipboard.writeText(message + ' ' + productUrl);
        showNotification('Link copied! Share on Instagram ');
        break;
}
    
// Track share event
trackShare(platform, currentProduct.id);
}

function trackShare(platform, productId) {
const shareData = {
    platform: platform,
    productId: productId,
    timestamp: new Date().toISOString(),
    referralCode: document.getElementById('userReferralCode').textContent
};
    
// Store share tracking
let shares = JSON.parse(localStorage.getItem('shares') || '[]');
shares.push(shareData);
localStorage.setItem('shares', JSON.stringify(shares));
    
// Show reward notification
showNotification('Share tracked! Earn rewards when friends purchase ');
}

function generateReferralCode() {
const userId = localStorage.getItem('userId') || 'user' + Math.random().toString(36).substr(2, 9);
const referralCode = 'TITAN' + userId.substr(-4).toUpperCase() + Math.floor(Math.random() * 1000);
    
localStorage.setItem('userId', userId);
localStorage.setItem('referralCode', referralCode);
    
return referralCode;
}

function initializeReferralSystem() {
const existingCode = localStorage.getItem('referralCode');
if (!existingCode) {
    const newCode = generateReferralCode();
    document.getElementById('userReferralCode').textContent = newCode;
} else {
    document.getElementById('userReferralCode').textContent = existingCode;
}
    
// Check for referral in URL
const urlParams = new URLSearchParams(window.location.search);
const refCode = urlParams.get('ref');
if (refCode) {
    processReferral(refCode);
}
}

function processReferral(refCode) {
// Store referral for reward tracking
const referral = {
    code: refCode,
    timestamp: new Date().toISOString(),
    processed: false
};
    
let referrals = JSON.parse(localStorage.getItem('referrals') || '[]');
referrals.push(referral);
localStorage.setItem('referrals', JSON.stringify(referrals));
    
showNotification(`Welcome! Referral code ${refCode} applied to your account `);
}

function calculateRewards() {
const shares = JSON.parse(localStorage.getItem('shares') || '[]');
const referrals = JSON.parse(localStorage.getItem('referrals') || '[]');
    
let totalEarnings = 0;
let pendingRewards = 0;
    
// Calculate earnings from successful referrals
referrals.forEach(referral => {
    if (referral.processed) {
        totalEarnings += 10; // 10% commission
    } else {
        pendingRewards += 10;
    }
});
    
return {
    totalEarnings,
    pendingRewards,
    totalShares: shares.length,
    successfulReferrals: referrals.filter(r => r.processed).length
};
}

function showNotification(message) {
// Create notification element
const notification = document.createElement('div');
notification.className = 'notification';
notification.textContent = message;
notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, var(--primary-orange), #ff6b35);
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    z-index: 10000;
    font-weight: 600;
    animation: slideIn 0.3s ease;
    max-width: 300px;
`;
    
document.body.appendChild(notification);
    
// Auto remove after 4 seconds
setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => {
        document.body.removeChild(notification);
    }, 300);
}, 4000);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
renderProducts();
updateCart();
setupRealTimeSearch();
setupKeyboardNavigation();
initializeHeroSlideshow();
initializeReferralSystem();
setupBackToTop();
document.getElementById('mobileMenuToggle').addEventListener('click', toggleMobileMenu);
});

// Back to Top Button
function setupBackToTop() {
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Newsletter Form Handler
function handleNewsletterSubmit(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    // Show success notification
    showNotification('Thanks for subscribing! Check your email for exclusive offers.', 'success');
    
    // Reset form
    event.target.reset();
}

// Size Guide Modal
function openSizeGuide() {
    document.getElementById('sizeGuideModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSizeGuide() {
    document.getElementById('sizeGuideModal').classList.remove('active');
    document.body.style.overflow = '';
}

// Contact form handler
function handleContactForm(event) {
    event.preventDefault();
    
    const name = event.target.querySelector('input[type="text"]').value;
    const email = event.target.querySelector('input[type="email"]').value;
    const message = event.target.querySelector('textarea').value;
    
    if (!name || !email || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    // Here you would normally send the form data to a server
    // For now, we'll show a success message
    showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
    
    // Clear form
    event.target.reset();
}
