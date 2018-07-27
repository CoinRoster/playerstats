/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var i;
$.ajax({
    url: 'https://api.myjson.com/bins/g92fu', //mookie: https://api.myjson.com/bins/g92fu ,less: https://api.myjson.com/bins/8o0yq
    type: 'GET',
    dataType: "json",
    success: displayAll
});
function displayAll(data){

            // Get the modal
            var modal = document.getElementById('stats_modal');

            // Get the button that opens the modal
            var link = document.getElementById("link");

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks the button, open the modal 
            link.onclick = function() {
                modal.style.display = "block";
                
                var news_button = document.getElementById("news_tab");
                var stats_button = document.getElementById("stats_tab");
                var news_tab = document.getElementById("newsfeed");
                var stats_tab = document.getElementById("stats_table");
                
                news_button.onclick = function() {
                   news_tab.style.display = "block";
                   stats_tab.style.display = "none";
                };
                stats_button.onclick = function() {
                   news_tab.style.display = "none";
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
                header.innerHTML = data.name;
                var header = document.getElementById("mobile_playername");
                header.innerHTML = data.name;

                var player_pic = document.getElementById('headshot');
                player_pic.src = 'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/' + data.id + '.png&w=350&h=254';
                var team_logo = document.getElementById('logo');            
                team_logo.src = 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/' + data.team_abr + '.png&w=110&h=110&transparent=true';

                var list_info = document.getElementById("team_list");
                list_info.innerHTML = 'Team: ' + data.team_abr;
                var list_info = document.getElementById("pos_list");
                list_info.innerHTML = 'Pos: ' + data.pos;
                var list_info = document.getElementById("height_list");
                list_info.innerHTML = 'Height: ' + data.height + ' · Weight: ' + data.weight;
                //var list_info = document.getElementById("weight_list");
                //list_info.innerHTML = 'Weight: ' + data.Weight;
                var list_info = document.getElementById("born_list");
                list_info.innerHTML = 'Born: ' + data.birthString;

                var table_info = document.getElementById("team_table");
                table_info.innerHTML = data.team_abr;
                var table_info = document.getElementById("pos_table");
                table_info.innerHTML = data.pos;
                var table_info = document.getElementById("height_table");
                table_info.innerHTML = data.height;
                var table_info = document.getElementById("weight_table");
                table_info.innerHTML = data.weight;
                var table_info = document.getElementById("born_table");
                table_info.innerHTML = data.birthString;

            
                var season_stats = document.getElementById("season_stats");
                season_stats.innerHTML = data.year_stats.STAT_TYPE;

                var sst = document.getElementById("season_stats_table").rows[0].cells;
                sst[0].innerHTML = "GP";
                sst[1].innerHTML = "AB";
                sst[2].innerHTML = "AVG";
                sst[3].innerHTML = "HR";
                sst[4].innerHTML = "RBI";
                sst[5].innerHTML = "R";
                sst[6].innerHTML = "H";
                sst[7].innerHTML = "SB";
                sst[8].innerHTML = "BB";
                sst[9].innerHTML = "K";
                sst[10].innerHTML = "OPS";
                var sst = document.getElementById("season_stats_table").rows[1].cells;
                sst[0].innerHTML = data.year_stats.GP;
                sst[1].innerHTML = data.year_stats.AB;
                sst[2].innerHTML = data.year_stats.AVG;
                sst[3].innerHTML = data.year_stats.HR;
                sst[4].innerHTML = data.year_stats.RBI;
                sst[5].innerHTML = data.year_stats.R;
                sst[6].innerHTML = data.year_stats.H;
                sst[7].innerHTML = data.year_stats.SB;
                sst[8].innerHTML = data.year_stats.BB;
                sst[9].innerHTML = data.year_stats.K;
                sst[10].innerHTML = data.year_stats.OPS;
            
                var career_stats = document.getElementById("career_stats");
                career_stats.innerHTML = "Career Stats";

                var cst = document.getElementById("career_stats_table").rows[0].cells;
                cst[0].innerHTML = "GP";
                cst[1].innerHTML = "AB";
                cst[2].innerHTML = "AVG";
                cst[3].innerHTML = "HR";
                cst[4].innerHTML = "RBI";
                cst[5].innerHTML = "R";
                cst[6].innerHTML = "H";
                cst[7].innerHTML = "SB"
                cst[8].innerHTML = "BB";
                cst[9].innerHTML = "K";
                cst[10].innerHTML = "OPS";
                var cst = document.getElementById("career_stats_table").rows[1].cells;
                cst[0].innerHTML = data.career_stats.GP;
                cst[1].innerHTML = data.career_stats.AB;
                cst[2].innerHTML = data.career_stats.AVG;
                cst[3].innerHTML = data.career_stats.HR;
                cst[4].innerHTML = data.career_stats.RBI;
                cst[5].innerHTML = data.career_stats.R;
                cst[6].innerHTML = data.career_stats.H;
                cst[7].innerHTML = data.career_stats.SB;
                cst[8].innerHTML = data.career_stats.BB;
                cst[9].innerHTML = data.career_stats.K;
                cst[10].innerHTML = data.career_stats.OPS;
            
                var prev_games = document.getElementById("prev_games");
                prev_games.innerHTML = "Game Log";

                var pgt = document.getElementById("prev_games_table").rows[0].cells;
                pgt[0].innerHTML = "Opp";
                pgt[1].innerHTML = "H";
                pgt[2].innerHTML = "AB";
                pgt[3].innerHTML = "HR";
                pgt[4].innerHTML = "RBI";
                pgt[5].innerHTML = "R";
                pgt[6].innerHTML = "SB";
                pgt[7].innerHTML = "BB";                   
                pgt[8].innerHTML = "K";
                for(var i = 1;i <= 10;i++){
                    var pgt = document.getElementById("prev_games_table").rows[i].cells;
                    pgt[0].innerHTML = data.last_ten_games[i-1].OPP + "<br />" + data.last_ten_games[i-1].SCORE;
                    pgt[1].innerHTML = data.last_ten_games[i-1].H;
                    pgt[2].innerHTML = data.last_ten_games[i-1].AB;
                    pgt[3].innerHTML = data.last_ten_games[i-1].HR;                  
                    pgt[4].innerHTML = data.last_ten_games[i-1].RBI;
                    pgt[5].innerHTML = data.last_ten_games[i-1].R;
                    pgt[6].innerHTML = data.last_ten_games[i-1].SB;
                    pgt[7].innerHTML = data.last_ten_games[i-1].BB;
                    pgt[8].innerHTML = data.last_ten_games[i-1].K;
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

}
