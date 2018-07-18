            var i;
            var data = {
                "last_five_games": [
                  {
                    "BLK": "0",
                    "AST": "7",
                    "SCORE": "W 110-102",
                    "FG%": ".652",
                    "3P%": ".667",
                    "STL": "1",
                    "OPP": "@ CLE",
                    "REB": "13",
                    "PTS": "43",
                    "DATE": "Wed 6/6",
                    "FGM-FGA": "15-23",
                    "MIN": "43",
                    "3PM-3PA": "6-9",
                    "FT%": "1.000",
                    "PF": "3",
                    "FTM-FTA": "7-7",
                    "TO": "3"
                  },
                  {
                    "BLK": "2",
                    "AST": "7",
                    "SCORE": "W 122-103",
                    "FG%": ".714",
                    "3P%": ".667",
                    "STL": "0",
                    "OPP": "vs CLE",
                    "REB": "9",
                    "PTS": "26",
                    "DATE": "Sun 6/3",
                    "FGM-FGA": "10-14",
                    "MIN": "38",
                    "3PM-3PA": "2-3",
                    "FT%": "1.000",
                    "PF": "3",
                    "FTM-FTA": "4-4",
                    "TO": "3"
                  },
                  {
                    "BLK": "3",
                    "AST": "6",
                    "SCORE": "W 124-114",
                    "FG%": ".364",
                    "3P%": ".143",
                    "STL": "1",
                    "OPP": "vs CLE",
                    "REB": "9",
                    "PTS": "26",
                    "DATE": "Thu 5/31",
                    "FGM-FGA": "8-22",
                    "MIN": "46",
                    "3PM-3PA": "1-7",
                    "FT%": ".900",
                    "PF": "3",
                    "FTM-FTA": "9-10",
                    "TO": "1"
                  },
                  {
                    "BLK": "3",
                    "AST": "5",
                    "SCORE": "W 101-92",
                    "FG%": ".524",
                    "3P%": ".455",
                    "STL": "1",
                    "OPP": "@ HOU",
                    "REB": "5",
                    "PTS": "34",
                    "DATE": "Mon 5/28",
                    "FGM-FGA": "11-21",
                    "MIN": "44",
                    "3PM-3PA": "5-11",
                    "FT%": ".700",
                    "PF": "3",
                    "FTM-FTA": "7-10",
                    "TO": "2"
                  },
                  {
                    "BLK": "1",
                    "AST": "4",
                    "SCORE": "W 115-86",
                    "FG%": ".353",
                    "3P%": ".200",
                    "STL": "0",
                    "OPP": "vs HOU",
                    "REB": "7",
                    "PTS": "23",
                    "DATE": "Sat 5/26",
                    "FGM-FGA": "6-17",
                    "MIN": "35",
                    "3PM-3PA": "1-5",
                    "FT%": ".714",
                    "PF": "0",
                    "FTM-FTA": "10-14",
                    "TO": "1"
                  }
                ],
                "pos": "SF",
                "year_stats": {
                  "STAT_TYPE": "2017-18 Postseason",
                  "MPG": "38.5",
                  "FG%": ".490",
                  "PPG": "29.4",
                  "3P%": ".348",
                  "RPG": "7.6",
                  "PFPG": "2.0",
                  "GP": "20",
                  "FGM-FGA": "10.3-20.9",
                  "3PM-3PA": "2.4-6.8",
                  "TOPG": "2.4",
                  "FT%": ".897",
                  "FTM-FTA": "6.6-7.3",
                  "APG": "4.5",
                  "STLPG": "0.7",
                  "BLKPG": "1.1"
                },
                "career_stats": {
                  "STAT_TYPE": "Career",
                  "MPG": "37.1",
                  "FG%": ".490",
                  "PPG": "27.1",
                  "3P%": ".384",
                  "RPG": "7.1",
                  "PFPG": "1.9",
                  "GP": "771",
                  "FGM-FGA": "9.2-18.8",
                  "3PM-3PA": "1.9-4.8",
                  "TOPG": "3.1",
                  "FT%": ".882",
                  "FTM-FTA": "6.9-7.8",
                  "APG": "3.9",
                  "STLPG": "1.2",
                  "BLKPG": "1.1"
                },
                "Weight": "240 lbs",
                "birthString": "Sep 29, 1988 in Washington, DC (Age: 29)",
                "height": "6' 9\"",
                "team": "GS",
                "player_id": "3202"
              };       
            // Get the modal
            var modal = document.getElementById('stats_modal');

            // Get the button that opens the modal
            var link = document.getElementById("link");

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks the button, open the modal 
            link.onclick = function() {
                modal.style.display = "block";
                
                var tweet_button = document.getElementById("tweets_tab");
                var stats_button = document.getElementById("stats_tab");
                var tweets_tab = document.getElementById("tweets");
                var stats_tab = document.getElementById("stats_table");
                
                tweet_button.onclick = function() {
                   tweets_tab.style.display = "block";
                   stats_tab.style.display = "none";
                };
                stats_button.onclick = function() {
                   tweets_tab.style.display = "none";
                   stats_tab.style.display = "block";
                };
                
                function myFunction(x) {
                    if (x.matches) { // If media query matches
                        document.getElementById('playerphoto').setAttribute('align', 'center');
                    }
                    else {
                        document.getElementById('playerphoto').setAttribute('align', 'auto');
                    }
                }
                var x = window.matchMedia("(max-width: 767px)");
                myFunction(x); // Call listener function at run time
                x.addListener(myFunction); // Attach listener function on state changes


                var header = document.getElementById("player_name");
                header.innerHTML = "Kevin Durant";
                var header = document.getElementById("player_name2");
                header.innerHTML = "Kevin Durant";

                var player_pic = document.getElementById('headshot');
                //player_pic.src = 'http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/13934.png&w=350&h=254';
                player_pic.src = 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/' + data.player_id + '.png&w=350&h=254';
                //player_pic.src = 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254';
                //player_pic.src = 'http://a.espncdn.com/combiner/i?img=/i/headshots/golf/players/full/4848.png&w=350&h=254';
                var team_logo = document.getElementById('logo');
                //team_logo.src = 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/pit.png&w=110&h=110&transparent=true';
                team_logo.src = 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/' +data.team+'.png&w=110&h=110&transparent=true';
                //team_logo.src = 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/gsw.png&w=110&h=110&transparent=true';
                //team_logo.src = 'http://a.espncdn.com/golfonline/img/flags/usa.jpg';

                var list_info = document.getElementById("team_list");
                list_info.innerHTML = 'Team: ' + data.team;
                var list_info = document.getElementById("pos_list");
                list_info.innerHTML = 'Pos: ' + data.pos;
                var list_info = document.getElementById("height_list");
                list_info.innerHTML = 'Height: ' + data.height + ' · Weight: ' + data.Weight;
                //var list_info = document.getElementById("weight_list");
                //list_info.innerHTML = 'Weight: ' + data.Weight;
                var list_info = document.getElementById("born_list");
                list_info.innerHTML = 'Born: ' + data.birthString;

                var table_info = document.getElementById("team_table");
                table_info.innerHTML = data.team;
                var table_info = document.getElementById("pos_table");
                table_info.innerHTML = data.pos;
                var table_info = document.getElementById("height_table");
                table_info.innerHTML = data.height;
                var table_info = document.getElementById("weight_table");
                table_info.innerHTML = data.Weight;
                var table_info = document.getElementById("born_table");
                table_info.innerHTML = data.birthString;

            
                var season_stats = document.getElementById("season_stats");
                season_stats.innerHTML = data.year_stats.STAT_TYPE;

                var sst = document.getElementById("season_stats_table").rows[0].cells;
                sst[0].innerHTML = "MIN";
                sst[1].innerHTML = "PTS";
                sst[2].innerHTML = "REB";
                sst[3].innerHTML = "AST";
                sst[4].innerHTML = "BLK";
                sst[5].innerHTML = "STL";
                sst[6].innerHTML = "TO";
                var sst = document.getElementById("season_stats_table").rows[1].cells;
                sst[0].innerHTML = data.year_stats.MPG;
                sst[1].innerHTML = data.year_stats.PPG;
                sst[2].innerHTML = data.year_stats.RPG;
                sst[3].innerHTML = data.year_stats.APG;
                sst[4].innerHTML = data.year_stats.BLKPG;
                sst[5].innerHTML = data.year_stats.STLPG;
                sst[6].innerHTML = data.year_stats.TOPG;
            
            
                var career_stats = document.getElementById("career_stats");
                career_stats.innerHTML = "Career Stats";

                var cst = document.getElementById("career_stats_table").rows[0].cells;
                cst[0].innerHTML = "MIN";
                cst[1].innerHTML = "PTS";
                cst[2].innerHTML = "REB";
                cst[3].innerHTML = "AST";
                cst[4].innerHTML = "BLK";
                cst[5].innerHTML = "STL";
                cst[6].innerHTML = "TO";
                var cst = document.getElementById("career_stats_table").rows[1].cells;
                cst[0].innerHTML = data.career_stats.MPG;
                cst[1].innerHTML = data.career_stats.PPG;
                cst[2].innerHTML = data.career_stats.RPG;
                cst[3].innerHTML = data.career_stats.APG;
                cst[4].innerHTML = data.career_stats.BLKPG;
                cst[5].innerHTML = data.career_stats.STLPG;
                cst[6].innerHTML = data.career_stats.TOPG;

            
                var prev_games = document.getElementById("prev_games");
                prev_games.innerHTML = "Last Five Games";

                var pgt = document.getElementById("prev_games_table").rows[0].cells;
                pgt[0].innerHTML = "Opp";
                pgt[1].innerHTML = "MIN";
                pgt[2].innerHTML = "PTS";
                pgt[3].innerHTML = "REB";
                pgt[4].innerHTML = "AST";
                pgt[5].innerHTML = "BLK";
                pgt[6].innerHTML = "STL";
                pgt[7].innerHTML = "TO";                   
            
                for(var i = 1;i <= 5;i++){
                    var pgt = document.getElementById("prev_games_table").rows[i].cells;
                    pgt[0].innerHTML = data.last_five_games[i-1].OPP + "<br />" + data.last_five_games[i-1].SCORE;
                    pgt[1].innerHTML = data.last_five_games[i-1].MIN;
                    pgt[2].innerHTML = data.last_five_games[i-1].PTS;
                    pgt[3].innerHTML = data.last_five_games[i-1].REB;                  
                    pgt[4].innerHTML = data.last_five_games[i-1].AST;
                    pgt[5].innerHTML = data.last_five_games[i-1].BLK;
                    pgt[6].innerHTML = data.last_five_games[i-1].STL;
                    pgt[7].innerHTML = data.last_five_games[i-1].TO;

                }
            };

            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
                modal.style.display = "none";
            };
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            };
