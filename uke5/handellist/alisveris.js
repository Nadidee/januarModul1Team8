function Sil(il) {
    il.remove();
}

function silme() {
    document.getElementById("ürünler").innerHTML = "";
}

function ekle(urun) {
    var urun = document.getElementById("urun").value;
    var node = document.createElement("li");
    var textnode = document.createTextNode(urun);
    var node2 = document.createElement("button");
    var textnode2 = document.createTextNode("Sil");
    node2.onclick = (e) => {
        Sil(e.path[1]);
    };
    node2.appendChild(textnode2);
    node.appendChild(textnode);
    node.appendChild(node2);
    document.getElementById("ürünler").appendChild(node);
}