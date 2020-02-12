const main = document.getElementById('main');

const body = document.querySelector('body')

body.style.background = "rgba(246,187,33, .8) url(./images/yellow-umbrella.jpg) no-repeat";
body.style.backgroundSize = "100%";
body.style.fontFamily = "'Playfair Display', serif" ;

main.style.background = "#fafafa";
main.style.borderRadius = "4px";
main.style.boxShadow = "8px 10px 25px 0 rgba(128, 128, 128, .44)" ;
main.style.minWidth = "320px";
main.style.maxWidth = "600px";
main.style.margin = "36px";
main.style.padding = "4px 32px 32px";

const header = document.createElement('h1');
header.innerText = "The best How I Met Your Mother episode (according to fans)";
main.appendChild(header);
header.style.fontFamily = "'Open Sans', sans-serif";
header.style.textAlign = "center";

const para1 = document.createElement('p');
para1.innerText = "As impossible as it seems to name just 1 of the 208 legendary episodes as the \"best\", the fans have spoken and the highest rated episode is... wait for it...";
main.appendChild(para1);
para1.style.fontSize = "17px";
para1.style.lineHeight = "1.5em";

const header2 = document.createElement('h2');
header2.innerText = "The Slap Bet (Season 2, Episode 9)";
main.appendChild(header2)
header2.style.fontFamily = "'Open Sans', sans-serif";
header2.style.textAlign = "center";
header2.style.textAlign = "left";

const para2 = document.createElement('p');
para2.innerText = "IMDB Rating: 9.5";
main.appendChild(para2);
para2.style.fontSize = "17px";
para2.style.lineHeight = "1.5em";

const imgRobin = document.createElement('img');
imgRobin.src= "./images/robin-sparkles.jpg";
imgRobin.alt= "Robin Sparkles"
main.appendChild(imgRobin);
imgRobin.style.border = "#fafafa";
imgRobin.style.borderRadius = "4px";
imgRobin.style.boxShadow = "4px 4px 14px rgba(128, 128, 128, .4)";
imgRobin.style.width = "100%";

const para3 = document.createElement('p');
para3.innerText= "In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won't go to the mall, so the gang forms their own theories. MArshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.";
main.appendChild(para3);
para3.style.fontSize = "17px";
para3.style.lineHeight = "1.5em";

const para4 = document.createElement('p');
para4.innerText= "In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).";
main.appendChild(para4);
para4.style.fontSize = "17px";
para4.style.lineHeight = "1.5em";

const linkRobin = document.createElement('a');
linkRobin.href ="https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/";
linkRobin.innerText ="Source";
main.appendChild(linkRobin);
linkRobin.style.color = "#174E7C";
linkRobin.style.display = "block";
linkRobin.style.fontWeight = "700";
linkRobin.style.marginTop = "auto";
linkRobin.style.textAlign = "right";
linkRobin.style.textDecoration = "none";

// const linkCss = document.createElement('link');
// linkCss.rel = "stylesheet";
// linkCss.href= "./styles.css";
// linkCss.className = "css";
// document.querySelector('head').appendChild(linkCss);

// header.className = "h1";
// header2.className = "h2";
// para1.className = "para1";
// para2.className = "para2";
// para3.className = "para3";
// para4.className = "para4";
// imgRobin.className = "imgRobin";
// linkRobin.className = "linkRobin";

