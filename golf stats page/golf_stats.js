/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var i;
$.ajax({
        url: 'https://api.myjson.com/bins/d79ia',
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
                player_pic.src = 'https://pga-tour-res.cloudinary.com/image/upload/c_fill,d_headshots_default.png,dpr_2.0,f_auto,g_face:center,h_160,q_auto,w_250/headshots_' + data.pga_id + '.png';
                //player_pic.src = 'https://pga-tour-res.cloudinary.com/image/upload/c_fill,d_headshots_default.png,dpr_2.0,f_auto,g_face:center,h_254,q_auto,w_350/headshots_08793.png';
                //player_pic.src = 'http://a.espncdn.com/combiner/i?img=/i/headshots/golf/players/full/462.png&w=350&h=254';
                var country_flag = document.getElementById('flag');
                country_flag.src = 'http://a.espncdn.com/golfonline/img/flags/' +data.country_abr+ '.jpg';
                //country_flag.src = 'http://a.espncdn.com/golfonline/img/flags/usa.jpg';

                var list_info = document.getElementById("country_list");
                list_info.innerHTML = 'Country: ' + data.country_abr;
                var list_info = document.getElementById("height_list");
                list_info.innerHTML = 'Height: ' + data.height + ' · Weight: ' + data.Weight;
                var list_info = document.getElementById("born_list");
                list_info.innerHTML = 'Born: ' + data.birthString;

                var table_info = document.getElementById("country_table");
                table_info.innerHTML = data.country_abr;
                var table_info = document.getElementById("height_table");
                table_info.innerHTML = data.height;
                var table_info = document.getElementById("weight_table");
                table_info.innerHTML = data.Weight;
                var table_info = document.getElementById("born_table");
                table_info.innerHTML = data.birthString;

                var prev_games = document.getElementById("prev_games");
                if (data.last_five_tournaments.length == 0){
                    prev_games.innerHTML = "Last Five Tournaments - NO STATS AVAILABLE";
                }
                else{
                    prev_games.innerHTML = "Last Five Tournaments";
                }
                var season_stats = document.getElementById("season_stats");
                if (data.stats.length == 0){
                    season_stats.innerHTML = "2018 PGA TOUR Season Stats - NO STATS AVAILABLE";
                }
                else{
                   season_stats.innerHTML = "2018 PGA TOUR Season Stats";  
                }
                
                var sst = document.getElementById("season_stats_table").rows[0].cells;
                sst[0].innerHTML = data.stats[0].name;
                sst[1].innerHTML = (data.stats[1].name).replace("Percentage", "%");
                sst[2].innerHTML = (data.stats[2].name).replace("Percentage", "%");
                sst[3].innerHTML = data.stats[3].name;
                var sst = document.getElementById("season_stats_table").rows[2].cells;
                sst[0].innerHTML = (data.stats[4].name).replace("Average", "AVG");
                sst[1].innerHTML = (data.stats[5].name).replace("Percentage", "%");
                sst[2].innerHTML = data.stats[6].name;
                sst[3].innerHTML = data.stats[7].name.replace("Percentage", "%");
                var sst = document.getElementById("season_stats_table").rows[1].cells;
                sst[0].innerHTML = data.stats[0].value + ' (' + data.stats[0].rank + ')';
                sst[1].innerHTML = data.stats[1].value + ' (' + data.stats[1].rank + ')';
                sst[2].innerHTML = data.stats[2].value + ' (' + data.stats[2].rank + ')';
                sst[3].innerHTML = data.stats[3].value + ' (' + data.stats[3].rank + ')';
                var sst = document.getElementById("season_stats_table").rows[3].cells;
                sst[0].innerHTML = data.stats[4].value + ' (' + data.stats[4].rank + ')';
                sst[1].innerHTML = data.stats[5].value + ' (' + data.stats[5].rank + ')';
                sst[2].innerHTML = data.stats[6].value + ' (' + data.stats[6].rank + ')';
                sst[3].innerHTML = data.stats[7].value;
 
                var pgt = document.getElementById("prev_games_table").rows[0].cells;
                pgt[0].innerHTML = "End Date";
                pgt[1].innerHTML = "Tournament";
                pgt[2].innerHTML = "POS";
                pgt[3].innerHTML = "R1";
                pgt[4].innerHTML = "R2";
                pgt[5].innerHTML = "R3";
                pgt[6].innerHTML = "R4";
                pgt[7].innerHTML = "TOT";                   
            
                for(var i = 1;i <= 5;i++){

                    var endDate = data.last_five_tournaments[i-1].endDate;
                    var event = data.last_five_tournaments[i-1].trn.trnName;
                    var pos = data.last_five_tournaments[i-1].finPos.value;
                    var total = '(' + data.last_five_tournaments[i-1].scr.relToPar + ')';
                    
                    var r1 = data.last_five_tournaments[i-1].scr.rounds;                  
                    if(r1.length < 1){
                        r1 = "0";
                    }
                    else {
                        r1 = data.last_five_tournaments[i-1].scr.rounds[0].rndScr;
                    }

                    var r2 = data.last_five_tournaments[i-1].scr.rounds;
                    if(r2.length < 2){
                        r2 = "0";
                    }
                    else {
                        r2 = data.last_five_tournaments[i-1].scr.rounds[1].rndScr;
                    }
                    
                    var r3 = data.last_five_tournaments[i-1].scr.rounds;
                    if(r3.length < 3){
                        r3 = "0";
                    }
                    else {
                        r3 = data.last_five_tournaments[i-1].scr.rounds[2].rndScr;
                    }
                    
                    var r4 = data.last_five_tournaments[i-1].scr.rounds;
                    if(r4.length < 4){
                        r4 = "0";
                    }
                    else {
                        r4 = data.last_five_tournaments[i-1].scr.rounds[3].rndScr;
                    }
                    
                    var pgt = document.getElementById("prev_games_table").rows[i].cells;
                    pgt[0].innerHTML = endDate;
                    pgt[1].innerHTML = event;
                    pgt[2].innerHTML = pos;
                    pgt[3].innerHTML = r1;                  
                    pgt[4].innerHTML = r2;
                    pgt[5].innerHTML = r3;
                    pgt[6].innerHTML = r4;
                    pgt[7].innerHTML = total;

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