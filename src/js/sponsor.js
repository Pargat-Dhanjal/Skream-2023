
const sponsorList={
    "2022":[
        {
            title:"Co-Sponsor",
            link:"https://www.niviasports.com/",
            image:"../../2022/assets/images/sponsors/2022/Nivia Logo (1).png",
            image:"../../2022/assets/images/sponsors/2022/Nivia Logo (1).png"
        },
        {
            title:"Powered By",
            link:"https://xotik.co.in/",
            image:"../../2022/assets/images/sponsors/2022/hammer xotik.jpg"
        },
        {
            title:"Co-Powered By",
            link:"https://lining.studio",
            image:"../../2022/assets/images/sponsors/2022/Lining Studio_page-0001.jpg"
        },
        {
            title:"Sports Partner",
            link:"https://www.decathlon.in/",
            image:"../../2022/assets/images/sponsors/2022/decathlon.jpeg"
        },
        
    ]
}






function sponsorLoad(year){
    const list=sponsorList[year]

    let temp=""
    for(let i=0;i<list.length;i++){
        temp+=`<a href="${list[i].link}"><div href="#" class="card glass">
				<img src="${list[i].image}" />
				<h4>${list[i].title}</h4>
			</div></a>`
    }

    document.getElementById("items").innerHTML=temp
    console.log(temp)

}


sponsorLoad('2022')