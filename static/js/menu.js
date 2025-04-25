// Function to switch between tabs
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
  
    // Hide all tab content by default
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the "active" class from all tab links
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
  
    // Show the current tab and add an "active" class to the clicked link
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
  }
  
  // Set the default open tab to "Burgers"
  document.getElementById("defaultOpen").click();
  