var square = document.getElementsByClassName('square') [0];

square.addEventListener("mouseover", function ()
    {
    this.style.backgroundColor = "blue";
    }
);

square.addEventListener("mouseout", function ()
    {
    this.style.backgroundColor = "white";
    }
);

square.addEventListener("mousedown", function ()
    {
    this.style.backgroundColor = "red";
    }
);

square.addEventListener("mouseup", function ()
    {
    this.style.backgroundColor = "yellow";
    }
);

square.addEventListener("dblclick", function ()
    {
    this.style.backgroundColor = "green";
    }
);

document.addEventListener("wheel", function ()
    {
    square.style.backgroundColor = "orange";
    }
);

document.addEventListener("keypress", (e) => 
    {
        switch(e.code)
        {
            case "KeyY": 
                square.style.backgroundColor = "yellow"
            break;
            case "KeyO": 
                square.style.backgroundColor = "orange"
            break;
            case "KeyG": 
                square.style.backgroundColor = "green"
            break;
            case "KeyW": 
                square.style.backgroundColor = "white"
            break;
            case "KeyR": 
                square.style.backgroundColor = "red"
            break;
            case "KeyB": 
                square.style.backgroundColor = "blue"
            break;
        }
    }
);

/*
window.addEventListener("keydown", (event) => {
  const p = document.createElement("p");
  p.textContent = `KeyboardEvent: key='${event.key}' | code='${event.code}'`;
  document.getElementById("output").appendChild(p);
  window.scrollTo(0, document.body.scrollHeight);
}, true);
);*/
