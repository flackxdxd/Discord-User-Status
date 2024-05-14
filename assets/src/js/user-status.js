fetch("https://api.lanyard.rest/v1/users/1154083710434562119") // ! replace here to your id!
  .then((response) => response.json()) 
  .then((data) => {
    const statusDiv = document.getElementById("status");
    if (data.data.active_on_discord_desktop) {
      statusDiv.innerHTML =
        '<img src="https://cdn.discordapp.com/attachments/1237123654790414346/1239994479017066557/1514-online-blank.png?ex=6644f259&is=6643a0d9&hm=bfa765b513587905ac1f2cb9ac246946fb3162888a524553e49ec9df72ea62a8&" alt="Online" class="status-icon-online">';
      statusDiv.innerHTML += '<span class="status-text">Online</span>';
      statusDiv.classList.add("online");
    } else {
      statusDiv.innerHTML =
        '<img src="https://cdn.discordapp.com/attachments/1237123654790414346/1239994479331643533/3932-offline.png?ex=6644f259&is=6643a0d9&hm=7663320cc6141174a9e1ba4c48cba6b85e1c529e4ad47983d03429f3dfa7ee35&" alt="Offline" class="status-icon-offline">';
      statusDiv.innerHTML += '<span class="status-text">Offline</span>';
      statusDiv.classList.add("offline");
    }
  })

  .catch((error) => console.error("Error with fetching data :(:", error));

// coded by flackxdxd#0
// github.com/flackxdxd
//   used api for my discord status from https://api.lanyard.rest/v1/users/ | https://discord.gg/lanyard
