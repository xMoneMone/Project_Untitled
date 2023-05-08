let posts_div = document.getElementById('posts')

let filter_age_min = ""
let filter_age_max = ""
let filter_role = ""
let filter_lang = ""
let filter_tier = ""

function filter_post(post){
    if (filter_age_min){
        if (parseInt(post.age) < parseInt(filter_age_min)){
            return false
        }
    }
    if (filter_age_max){
        if (parseInt(post.age) > parseInt(filter_age_max)){
            return false
        }
    }
    if (filter_role){
        if (post.role != filter_role && post.role2 != filter_role && post.role3 != filter_role){
            return false
        }
    }
    if (filter_lang){
        let user_lang = post.languages.toLowerCase()
        let searched_lang = filter_lang.toLowerCase()
        if (!user_lang.includes(searched_lang)){
            return false
        }
    }
    if (filter_tier){
        if (post.tier != filter_tier){
            return false
        }
    }
    return true
}

function create_post(post, link){
    let post_a = document.createElement('a')
    let p_name = document.createElement('p')
    let p_age = document.createElement('p')
    let p_lang = document.createElement('p')
    let p_tier = document.createElement('p')
    
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

function load_posts(posts, link, condition){
    for (let post of posts){
        if (condition){
            if (post.verified && filter_post(post)){
             create_post(post, link)
            }
        }
        else{
            if (!post.verified && filter_post(post)){
                create_post(post, link)
               }
        }
    }
}

function load_page(){
    fetch('http://127.0.0.1:8000/posts-info')
	.then(response => response.json())
	.then(data => {
        switch (posts_div.classList[0]){
            case 'home':
                load_posts(Object.values(data), "posts/", true)
                break
            case 'pending':
                load_posts(Object.values(data), "verify/", false)
                break
            }

        })
	.catch(err => console.error(err));
}

load_page()

if (posts_div.classList[0] == 'home'){
    document.getElementById('filter-button').addEventListener('click', () => {
        filter_age_min = document.getElementById('min-age').value
        filter_age_max = document.getElementById('max-age').value
        filter_role = document.getElementById('role').value
        filter_lang = document.getElementById('languages').value
        filter_tier = document.getElementById('tier').value

        posts_div.innerHTML = ""

        load_page()
    })
}