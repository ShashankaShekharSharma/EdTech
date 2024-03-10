const arr = [
    "What is Lorem Ipsum?",
    "Why do we use it?",
    "Where does it come from?",
    "Where can I get some?",
    "What is Lorem Ipsum?",
    "Why do we use it?",
    "Where does it come from?",
    "Where can I get some?"
    ];

    const input = document.getElementById("searchInput");
    const recommendslist = document.getElementById("suggestions");

    input.addEventListener("input", function(){
      const search = input.value.toLowerCase();
      const filtered = arr.filter(item => item.toLowerCase().startsWith(search));
        display(filtered);
    });

    function display(filtered){
      recommendslist.innerHTML = "";
      if(filtered.length > 0){
          filtered.forEach(item => {
              const listStuff = document.createElement("li");
              listStuff.classList.add("recommendsitem");
              listStuff.textContent = item;

              const x = document.createElement("span");
              
              x.addEventListener("click", function (event) {
                  event.stopPropagation();
                  remove(item);
              });

              
              listStuff.addEventListener("click", function () {
                  input.value = item;
                  recommendslist.style.display = "none";
              });
          

              recommendslist.appendChild(listStuff);
        });
      recommendslist.style.display = "list-item";
      } 
      else {
            recommendslist.style.display = "none";
        }
    }

