let posts_div = document.getElementById('posts')
let shown = ""
let number_posts_to_display = 14
let cur_number_posts = -1

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

function get_filter_parameters(){
    if (posts_div.dataset.page == 'home'){
        data = {
            'min-age': document.getElementById('min-age').value,
            'max-age': document.getElementById('max-age').value,
            'role': document.getElementById('role').value,
            'languages': document.getElementById('languages').value,
            'tier': document.getElementById('tier').value
        }}
    else{
        data = {}
    }
    
    if (posts_div.dataset.page == 'home'){
        data['verified'] = true
    }
    else{
        data['verified'] = false
    }
    return data
}

function get_query_string(filter_parameters){
    let filters = [];
    for(let filter_param in filter_parameters)
      if (filter_parameters[filter_param] !== undefined)
        filters.push(encodeURIComponent(filter_param) + "=" + encodeURIComponent(filter_parameters[filter_param]));
    return `?${filters.join("&")}`
}

function explanation(){
    let post_div = document.createElement('div')
    let post_a = document.createElement('a')
    let p_name = document.createElement('p')
    let p_age = document.createElement('p')
    let p_country = document.createElement('p')
    let p_roles = document.createElement('p')
    let p_lang = document.createElement('p')
    let p_tier = document.createElement('p')
    
    post_div.classList = 'post'
    post_a.id = 'explanation'
    p_name.textContent = 'NAME'
    p_age.textContent = 'AGE'
    p_lang.textContent = 'LANGUAGES'
    p_tier.textContent = 'TIER'
    p_roles.textContent = 'ROLES'
    p_country.textContent = 'COUNTRY'
    p_country.classList.add('small')
    p_tier.classList.add('small')
    p_lang.classList.add('big')
    p_roles.classList.add('big')

    post_a.appendChild(p_country)
    post_a.appendChild(p_tier)
    post_a.appendChild(p_name)
    post_a.appendChild(p_age)
    post_a.appendChild(p_lang)
    post_a.appendChild(p_roles)
    post_div.appendChild(post_a)
    posts_div.appendChild(post_div)

}

function create_post(post){
    console.log(post.id)
    shown = post.id
    let post_div = document.createElement('div')
    let post_a = document.createElement('a')
    let p_name = document.createElement('p')
    let p_age = document.createElement('p')
    let p_roles = document.createElement('p')
    let p_country = document.createElement('p')
    let img_country = document.createElement('img')
    let p_lang = document.createElement('p')
    let p_tier = document.createElement('p')

    if (posts_div.dataset.page == 'home'){
        link = 'posts/'
    }
    else {
        link = 'verify/'
    }
    
    post_a.href = link + post.id
    post_div.classList = 'post'
    p_name.textContent = post['name']
    p_name.title = 'name'
    p_age.textContent = post['age']
    p_age.title = 'age'
    p_lang.textContent = post['languages']
    p_lang.title = 'languages'
    p_roles.textContent = post.role
    if (post.role2){p_roles.textContent += ', ' + post.role2}
    if (post.role3){p_roles.textContent += ', ' + post.role3}
    p_roles.title = 'role'
    if (post.tier) {p_tier.textContent = post['tier']} else {p_tier.textContent = "-"}
    p_tier.title = 'tier'
    p_tier.classList.add('tier')
    p_tier.classList.add('tier-' + post.tier)
    img_country.src = country_emojis[post['country']]
    p_country.title = post['country']
    p_country.classList.add('small', 'flag_cont')
    p_tier.classList.add('small')
    p_lang.classList.add('big')
    p_roles.classList.add('big')

    p_country.appendChild(img_country)
    post_a.appendChild(p_country)
    post_a.appendChild(p_tier)
    post_a.appendChild(p_name)
    post_a.appendChild(p_age)
    post_a.appendChild(p_lang)
    post_a.appendChild(p_roles)
    post_div.appendChild(post_a)
    posts_div.appendChild(post_div)

}

async function load_posts(query_string){
    response = await fetch('http://127.0.0.1:8000/posts-info' + query_string + `&shown=${shown}`)
	data = await response.json()


    let posts = Object.values(data)
    reversed_posts = posts.reverse()
    for (let post of reversed_posts){
        create_post(post)
    }

    cur_number_posts = posts.length
}

function hide_button(){
    if (cur_number_posts != -1 && cur_number_posts < number_posts_to_display){
        document.getElementById('load_button').style.display = 'none'
    }
}

document.getElementById('load_button').addEventListener('click', () => {
    load_posts(get_query_string(get_filter_parameters()))
    hide_button()
})


document.addEventListener('DOMContentLoaded', () => {
    explanation()
    load_posts(get_query_string(get_filter_parameters()))
})


if (posts_div.dataset.page == 'home'){
    $("form").submit((e) => {
        e.preventDefault()
        
        shown = ""
        posts_div.innerHTML = ""

        explanation()
        load_posts(get_query_string(get_filter_parameters()))
    })
}

