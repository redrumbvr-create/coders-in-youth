const rooms=["Coding Hub","VR Devs","PC Game Dev","Roblox Builders","Minecraft Mods","Web Creators"];
const samples=["I just finished my first game loop! 🎮","Does anyone know how JavaScript events work?","Check out the new Code Lab lesson!","I’m building a small VR prototype.","Remember: don’t share private information in chat."];
const cards=document.getElementById("cards");
rooms.forEach((r,i)=>{let a=document.createElement("article");a.innerHTML=`<b>${["🌐","🥽","🖥️","🧱","⛏️","🌎"][i]} ${r}</b><p>${[42,18,27,35,21,31][i]} members · coding discussion</p><button class="secondary">Open room →</button>`;a.querySelector("button").onclick=()=>openRoom(r);cards.appendChild(a)});
function show(id){document.querySelectorAll(".view").forEach(x=>x.classList.add("hidden"));document.getElementById(id).classList.remove("hidden");document.querySelectorAll("nav button").forEach(x=>x.classList.toggle("active",x.dataset.view===id))}
document.querySelectorAll("nav button").forEach(b=>b.onclick=()=>show(b.dataset.view));
document.getElementById("learn").onclick=()=>show("training");document.getElementById("lab").onclick=()=>show("projects");
document.querySelectorAll(".room").forEach(b=>b.onclick=()=>openRoom(b.dataset.room));
function openRoom(name){document.getElementById("roomName").textContent=name;document.getElementById("messages").innerHTML=samples.map((s,i)=>`<div class="message"><b>${["PixelCoder","VRBuilder","NovaDev","GameKid","CodeCamp"][i]}</b><p>${s}</p></div>`).join("");show("chat")}
document.getElementById("send").onclick=()=>{let x=document.getElementById("msg"),v=x.value.trim();if(!v)return;document.getElementById("messages").innerHTML+=`<div class="message"><b>DragonDev</b><p>${v.replace(/[<>&]/g,"")}</p></div>`;x.value=""};
document.getElementById("msg").onkeydown=e=>{if(e.key==="Enter")document.getElementById("send").click()};
const modal=document.getElementById("voiceModal");
function join(name="Code & Chill"){document.getElementById("voiceTitle").textContent=name;document.getElementById("voiceStatus").textContent="Connected (demo)";document.getElementById("voiceState").textContent="🎙 Connected to "+name;modal.classList.remove("hidden")}
document.getElementById("joinVoice").onclick=()=>join();document.querySelectorAll(".voiceRoom").forEach(b=>b.onclick=()=>join(b.dataset.voice));
document.getElementById("closeVoice").onclick=()=>modal.classList.add("hidden");
document.getElementById("leaveVoice").onclick=()=>{modal.classList.add("hidden");document.getElementById("voiceState").textContent="Not connected"};
document.getElementById("run").onclick=()=>{try{let logs=[];let old=console.log;console.log=(...a)=>logs.push(a.join(" "));new Function(document.getElementById("code").value)();console.log=old;document.getElementById("output").textContent=logs.join("\\n")||"Code ran successfully."}catch(e){document.getElementById("output").textContent="Error: "+e.message}};
document.getElementById("save").onclick=()=>alert("Demo: project saved locally in this prototype.");
document.getElementById("newRoom").onclick=()=>alert("Demo: creating a community would require an account and moderation workflow.");
openRoom("Coding Hub");
