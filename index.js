const darkmode = () => {
    let element = document.body;
    element.classList.toggle("dark-mode");
    let btn = document.getElementById("darkmode");
    if (element.classList.value == "dark-mode") {
      btn.style.color = "#3bb4b4";
    }
    if (element.classList.value == "") {
      btn.style.color = "gray";
    }
  };
  let dropbtn = document.getElementById("drop");
  let menu = document.getElementById("menu-drop");
  let menu2 = document.getElementById("menu-drop2");
  const drop = () => {
    menu.style.display = "flex";
  };
  const dropOff = () => {
    menu.style.display = "none";
  };
  
  const drop2 = () => {
    menu2.style.display = "flex";
  };