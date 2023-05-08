let posts_div = document.getElementById('posts')

fetch('http://127.0.0.1:8000/posts-info')
	.then(response => response.json())
	.then(data => {
        for (let post of Object.values(data)){
            if (!post.verified){
                let post_div = document.createElement('div')
                let post_a = document.createElement('a')
                let p_name = document.createElement('p')
                let p_age = document.createElement('p')
                let p_lang = document.createElement('p')
                let p_tier = document.createElement('p')
                let verify_a = document.createElement('a')
                let delete_a = document.createElement('a')
                
                post_a.href = "pending/" + post.id
                delete_a.href = '#'
                delete_a.textContent = 'Delete'
                verify_a.href = '#'
                verify_a.textContent = 'Verify'
                p_name.textContent = post['name']
                p_age.textContent = post['age']
                p_lang.textContent = post['lang']
                p_tier.textContent = post['tier']
            
                post_a.appendChild(p_name)
                post_a.appendChild(p_age)
                post_a.appendChild(p_lang)
                post_a.appendChild(p_tier)
                post_div.appendChild(post_a)
                post_div.appendChild(verify_a)
                post_div.appendChild(delete_a)
                posts_div.appendChild(post_div)
            }
        }
    })
	.catch(err => console.error(err));
