let toplamFidan = 0;
const hedef = 2000;

function guncelleSayiyi(fidan) {
  toplamFidan += Number(fidan) || 0;
  if(toplamFidan > hedef) toplamFidan = hedef;

  const yuzde = Math.floor((toplamFidan / hedef) * 100);

  const progress = document.getElementById("progressBar");
  progress.style.width = yuzde + "%";
  progress.innerText = yuzde + "%";

  const agac = document.getElementById("agacResim");
  const scale = 1 + (yuzde / 100) * 0.8;
  agac.style.transform = `scale(${scale})`;

  const durum = document.getElementById("durum");
  if(toplamFidan < 300){
    agac.src = "tohum.png";
    durum.innerText = "Henüz tohum ekildi 🌱";
  } else if(toplamFidan < 1000){
    agac.src = "filiz.png";
    durum.innerText = "Filiz çıktı 🌿";
  } else if(toplamFidan < hedef){
    agac.src = "fidan.png";
    durum.innerText = "Fidan büyüyor 🌳";
  } else {
    agac.src = "agac-buyuk.png";
    durum.innerText = "🌳 Muhteşem bir ağaç oldu!";
    document.getElementById("tesekkur").style.display = "block";
    document.getElementById("davetYazisi").innerText = "🎉 Tüm halkımıza teşekkürler! 🌳";
    yaprakAnimasyonu();
  }

  const fidanText = document.getElementById("fidanSayisi");
  fidanText.innerText = `Şu ana kadar ${toplamFidan} fidan dikildi 🌱`;
  fidanText.classList.add("animate");
  setTimeout(() => fidanText.classList.remove("animate"), 500);
}

function yaprakAnimasyonu() {
  for(let i = 0; i < 30; i++){
    const leaf = document.createElement("div");
    leaf.className = "leaf";

    const size = 20 + Math.random() * 20;
    leaf.style.width = size + "px";
    leaf.style.height = size + "px";

    leaf.style.left = Math.random() * (window.innerWidth - size) + "px";
    leaf.style.top = "-50px";

    const sure = 6 + Math.random() * 6;
    leaf.style.animation = `fly ${sure}s linear forwards`;

    document.body.appendChild(leaf);
    setTimeout(() => leaf.remove(), sure * 1000);
  }
}

window.onload = function(){
  guncelleSayiyi(0);
};

document.getElementById("ekleBtn").onclick = function() {
  const fidanInput = document.getElementById("fidanInput");
  guncelleSayiyi(Number(fidanInput.value));
  fidanInput.value = "";
};
