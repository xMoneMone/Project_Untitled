let posts_div = document.getElementById('posts')

function get_filter_parameters(){
    let inputs = Array.from(document.querySelectorAll('form > p > input'))
    inputs.push(...Array.from(document.querySelectorAll('form > p > select')))
    let keys = inputs.map((input) => input.id)
    let values = inputs.map((input) => input.value)
    let data = keys.reduce((acc, k, i) => (acc[k] = values[i], acc), {})
    
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

function create_post(post){
    let post_a = document.createElement('a')
    let p_name = document.createElement('p')
    let p_age = document.createElement('p')
    let p_lang = document.createElement('p')
    let p_tier = document.createElement('p')

    if (posts_div.dataset.page == 'home'){
        link = 'posts/'
    }
    else {
        link = 'verify/'
    }
    
    post_a.href = link + post.id
    p_name.textContent = post['name']
    p_age.textContent = post['age']
    p_lang.textContent = post['languages']
    p_tier.textContent = post['tier']

    post_a.appendChild(p_name)
    post_a.appendChild(p_age)
    post_a.appendChild(p_lang)
    post_a.appendChild(p_tier)
    posts_div.appendChild(post_a)

}

async function load_posts(query_string){
    response = await fetch('http://127.0.0.1:8000/posts-info' + query_string)
	data = await response.json()

    for (let post of Object.values(data)){
        create_post(post)
    }
}


document.addEventListener('DOMContentLoaded', () => {
    load_posts(get_query_string(get_filter_parameters()))
})


if (posts_div.dataset.page == 'home'){
    $("form").submit((e) => {
        e.preventDefault()
        
        posts_div.innerHTML = ""

        load_posts(get_query_string(get_filter_parameters()))
    })
}

