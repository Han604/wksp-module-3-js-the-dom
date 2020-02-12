const main = document.getElementById('main');

const header = document.createElement('h1');
header.innerText = "The best How I Met Your Mother episode (according to fans)";
main.appendChild(header);

const para1 = document.createElement('p');
para1.innerText = "As impossible as it seems to name just 1 of the 208 legendary episodes as the \"best\", the fans have spoken and the highest rated episode is... wait for it...";
main.appendChild(para1);

const header2 = document.createElement('h2');
header2.innerText = "The Slap Bet (Season 2, Episode 9)";
main.appendChild(header2)

const para2 = document.createElement('p');
para2.innerText = "IMDB Rating: 9.5";
main.appendChild(para2);

const imgRobin = document.createElement('img');
imgRobin.src= "./images/robin-sparkles.jpg";
imgRobin.alt= "Robin Sparkles"
main.appendChild(imgRobin);

const para3 = document.createElement('p');
para3.innerText= "In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won't go to the mall, so the gang forms their own theories. MArshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.";
main.appendChild(para3);

const para4 = document.createElement('p');
para4.innerText= "In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).";
main.appendChild(para4);

const linkRobin = document.createElement('a');
linkRobin.href ="https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/";
linkRobin.innerText ="Source";
main.appendChild(linkRobin);

const linkCss = document.createElement('link');
linkCss.rel = "stylesheet";
linkCss.href= "./styles.css";
linkCss.className = "css";
document.querySelector('head').appendChild(linkCss);

header.className = "h1";
header2.className = "h2";
para1.className = "para1";
para2.className = "para2";
para3.className = "para3";
para4.className = "para4";
imgRobin.className = "imgRobin";
linkRobin.className = "linkRobin";

