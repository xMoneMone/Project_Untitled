let flag_img = document.getElementById('flag')
let country = document.getElementById('country')

let country_emojis = {
    "Albania": "https://twemoji.maxcdn.com/v/latest/72x72/1f1e6-1f1f1.png",
    "Andorra": "https://twemoji.maxcdn.com/v/latest/72x72/1f1e6-1f1e9.png",
    "Austria": "https://twemoji.maxcdn.com/v/latest/72x72/1f1e6-1f1f9.png",
    "Belarus": "https://twemoji.maxcdn.com/v/latest/72x72/1f1e7-1f1fe.png",
    "Belgium": "https://twemoji.maxcdn.com/v/latest/72x72/1f1e7-1f1ea.png",
    "Bosnia and Herzegovina": "https://twemoji.maxcdn.com/v/latest/72x72/1f1e7-1f1e6.png",
    "Bulgaria": "https://twemoji.maxcdn.com/v/latest/72x72/1f1e7-1f1ec.png",
    "Croatia": "https://twemoji.maxcdn.com/v/latest/72x72/1f1ed-1f1f7.png",
    "Cyprus": "https://twemoji.maxcdn.com/v/latest/72x72/1f1e8-1f1fe.png",
    "Czech Republic": "https://twemoji.maxcdn.com/v/latest/72x72/1f1e8-1f1ff.png",
    "Denmark": "https://twemoji.maxcdn.com/v/latest/72x72/1f1e9-1f1f0.png",
    "Estonia": "https://twemoji.maxcdn.com/v/latest/72x72/1f1ea-1f1ea.png",
    "Finland": "https://twemoji.maxcdn.com/v/latest/72x72/1f1eb-1f1ee.png",
    "France": "https://twemoji.maxcdn.com/v/latest/72x72/1f1eb-1f1f7.png",
    "Germany": "https://twemoji.maxcdn.com/v/latest/72x72/1f1e9-1f1ea.png",
    "Greece": "https://twemoji.maxcdn.com/v/latest/72x72/1f1ec-1f1f7.png",
    "Hungary": "https://twemoji.maxcdn.com/v/latest/72x72/1f1ed-1f1fa.png",
    "Iceland": "https://twemoji.maxcdn.com/v/latest/72x72/1f1ee-1f1f8.png",
    "Ireland": "https://twemoji.maxcdn.com/v/latest/72x72/1f1ee-1f1ea.png",
    "Italy": "https://twemoji.maxcdn.com/v/latest/72x72/1f1ee-1f1f9.png",
    "Kosovo": "https://twemoji.maxcdn.com/v/latest/72x72/1f1fd-1f1f0.png",
    "Latvia": "https://twemoji.maxcdn.com/v/latest/72x72/1f1f1-1f1fb.png",
    "Liechtenstein": "https://twemoji.maxcdn.com/v/latest/72x72/1f1f1-1f1ee.png",
    "Lithuania": "https://twemoji.maxcdn.com/v/latest/72x72/1f1f1-1f1f9.png",
    "Luxembourg": "https://twemoji.maxcdn.com/v/latest/72x72/1f1f1-1f1f8.png",
    "Malta": "https://twemoji.maxcdn.com/v/latest/72x72/1f1f2-1f1f9.png",
    "Moldova": "https://twemoji.maxcdn.com/v/latest/72x72/1f1f2-1f1e9.png",
    "Monaco": "https://twemoji.maxcdn.com/v/latest/72x72/1f1f2-1f1e8.png",
    "Montenegro": "https://twemoji.maxcdn.com/v/latest/72x72/1f1f2-1f1ea.png",
    "Netherlands": "https://twemoji.maxcdn.com/v/latest/72x72/1f1f3-1f1f1.png",
    "North Macedonia": "https://twemoji.maxcdn.com/v/latest/72x72/1f1f2-1f1f0.png",
    "Norway": "https://twemoji.maxcdn.com/v/latest/72x72/1f1f3-1f1f4.png",
    "Poland": "https://twemoji.maxcdn.com/v/latest/72x72/1f1f5-1f1f1.png",
    "Portugal": "https://twemoji.maxcdn.com/v/latest/72x72/1f1f5-1f1f9.png",
    "Romania": "https://twemoji.maxcdn.com/v/latest/72x72/1f1f7-1f1f4.png",
    "Russia": "https://twemoji.maxcdn.com/v/latest/72x72/1f1f7-1f1fa.png",
    "San Marino": "https://twemoji.maxcdn.com/v/latest/72x72/1f1f8-1f1f2.png",
    "Serbia": "https://twemoji.maxcdn.com/v/latest/72x72/1f1f7-1f1f8.png",
    "Slovakia": "https://twemoji.maxcdn.com/v/latest/72x72/1f1f8-1f1f0.png",
    "Slovenia": "https://twemoji.maxcdn.com/v/latest/72x72/1f1f8-1f1ee.png",
    "Spain": "https://twemoji.maxcdn.com/v/latest/72x72/1f1ea-1f1f8.png",
    "Sweden": "https://twemoji.maxcdn.com/v/latest/72x72/1f1f8-1f1ea.png",
    "Switzerland": "https://twemoji.maxcdn.com/v/latest/72x72/1f1e8-1f1ed.png",
    "Ukraine": "https://twemoji.maxcdn.com/v/latest/72x72/1f1fa-1f1e6.png",
    "United Kingdom": "https://twemoji.maxcdn.com/v/latest/72x72/1f1ec-1f1e7.png",
    "Vatican City": "https://twemoji.maxcdn.com/v/latest/72x72/1f1fb-1f1e6.png"
  }

  flag_img.src = country_emojis[country.textContent]
  flag_img.title = country.textContent

  function copy_discord(){
    let discord = document.getElementById('discord').dataset.discord
    console.log(discord)
    navigator.clipboard.writeText(discord)
    alert('Discord tag copied to clipboard')
  }