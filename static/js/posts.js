let posts_div = document.getElementById('posts')
let shown = ""
let number_posts_to_display = 14
let cur_number_posts = -1

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
    if (post.tier) {p_tier.textContent = post['tier']} else {p_tier.textContent = 0}
    p_tier.title = 'tier'
    p_tier.classList.add('tier')
    p_tier.classList.add('tier-' + post.tier)
    p_country.textContent = post['country']
    p_country.title = 'country'
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

