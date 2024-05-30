var n = 0;
function uniqueKey() {
  n += 1;
  return n;
}
var valuedic = {};
function addPlan() {
  var inputValue = document.getElementById("planInput").value;
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    var li = document.createElement("li");
    var textNode = document.createTextNode(inputValue);
    li.appendChild(textNode);
    document.getElementById("plantask").appendChild(li);
    let closeButton = document.createElement("button");
    closeButton.innerHTML = "x";
    closeButton.className = "close";
    li.appendChild(closeButton);
    closeButton.onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
    if ("localStorage" in window && window["localStorage"] !== null) {
      if (typeof Storage != "undefined") {
        var uniID = uniqueKey();
        var smart = 0;
        var nothing = 0;
        for (var i = 1; i <= localStorage.length; i++) {
          let key = localStorage.key(i);
          if (!key in localStorage) {
            nothing = nothing + uniID;
          } else {
            for (boss in localStorage) {
              if (boss == uniID) {
                uniID += 1;
              } else if (boss != uniID) {
                smart = smart + uniID;
              }
            }
          }
        }

        localStorage.setItem(uniID, inputValue);
        // alert(`Added: Key: ${uniID}, Task: ${inputValue}`);
      }
    } else {
      alert("Your Browser Doesn't support storage");
    }

    document.getElementById("planInput").value = "";

    li.addEventListener("click", function () {
      this.classList.toggle("completed");
    });
    li.addEventListener("dblclick", function () {
      const text = this.textContent.trim();
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        if (value === text) {
          localStorage.removeItem(key);
          break;
        }
      }
      this.remove();
    });
  }
}

function retrive() {
  if ("localStorage" in window && window["localStorage"] !== null) {
    for (let i = 0; i < localStorage.length; i++) {
      const keyanditsvalue = localStorage.key(i);
      var value = localStorage.getItem(keyanditsvalue);
      if (!valuedic[keyanditsvalue]) {
        valuedic[keyanditsvalue] = value;
      }
    }
    for (let a in valuedic) {
      if (valuedic.hasOwnProperty(a)) {
        var li = document.createElement("li");
        const gotvalue = valuedic[a];
        var textNode = document.createTextNode(gotvalue);
        li.appendChild(textNode);
        document.getElementById("plantask").appendChild(li);
       
      }
      
      li.addEventListener("click", function () {
        this.classList.toggle("completed");
      });
      li.addEventListener("dblclick", function () {
        console.log("dblclick event triggered");
        const text = this.textContent.trim();
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          const value = localStorage.getItem(key);
          if (value === text) {
            localStorage.removeItem(key);
            break;
          }
        }
        this.remove();
      });
    }
  } else {
    alert("Incompatible Browser!");
  }
}

retrive();
