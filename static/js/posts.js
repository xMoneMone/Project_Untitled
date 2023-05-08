let posts_div = document.getElementById('posts')

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
            if (post.verified){
             create_post(post, link)
            }
        }
        else{
            if (!post.verified){
                create_post(post, link)
               }
        }
    }
}

{fetch('http://127.0.0.1:8000/posts-info')
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