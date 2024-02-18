
     
      window.onload = function () {
        
        const isDarkMode = localStorage.getItem("darkMode");
        if (isDarkMode === "true") {
          enableDarkMode();
        } else {
          disableDarkMode();
        }
      };
  
     
      function enableDarkMode() {
        
        document.body.classList.add("dark-mode");
       
        localStorage.setItem("darkMode", "true");
      }
  
   
      function disableDarkMode() {
        
        document.body.classList.remove("dark-mode");
        
        localStorage.setItem("darkMode", "false");
      }

