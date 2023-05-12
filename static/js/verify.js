let guidelines = `
Tier | Experience | ELO

10  | No team exp | <950
 9  | 6 months exp | <1250
 8  | 1 year exp | <1550
 7  | 1.5 year exp | <1850
 6  | 2 year exp | <2.2k
 5  | 3 year exp | <2.7k
 4  | 4 year exp | 3k+
 3  | hltv | hltv
 2  | semi-pro | semi-pro
 1  | pro | pro`

let tier = document.querySelectorAll('label')
tier = tier[tier.length - 1]
let i = document.createElement('i')
i.classList.add('fa', 'fa-circle-info')
i.style.marginLeft = '1vh'
i.style.cursor = 'pointer'
tier.appendChild(i)

i.addEventListener('click', () => {
    alert(guidelines)
})