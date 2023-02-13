function showPrevious() {
  $("#current-sponsor").attr("style", "display:none");
  $("#previous-sponsor").attr("style", "display:block");
  sponsorLoad("2022");
}

function showCurrent() {
  $("#current-sponsor").attr("style", "display:block");
  $("#previous-sponsor").attr("style", "display:none");
  sponsorLoad("2023");
}

const sponsorList = {
  2022: [
    {
      title: "Co-Sponsor",
      link: "https://www.niviasports.com/",
      image: "../../2022/assets/images/sponsors/2022/Nivia Logo (1).png",
      image: "../../2022/assets/images/sponsors/2022/Nivia Logo (1).png",
    },
    {
      title: "Powered By",
      link: "https://xotik.co.in/",
      image: "../../2022/assets/images/sponsors/2022/hammer xotik.jpg",
    },
    {
      title: "Co-Powered By",
      link: "https://lining.studio",
      image:
        "../../2022/assets/images/sponsors/2022/Lining Studio_page-0001.jpg",
    },
    {
      title: "Sports Partner",
      link: "https://www.decathlon.in/",
      image: "../../2022/assets/images/sponsors/2022/decathlon.jpeg",
    },
    {
      title: "Food Partner",
      link: "https://www.veganicafood.com/",
      image: "../../2022/assets/images/sponsors/2022/veganica.jpeg",
    },
    {
      title: "Chess & Carrom Partner",
      link: "https://precisesports.com/",
      image: "../../2022/assets/images/sponsors/2022/logo precise.png",
    },
    {
      title: "Equipment Partner",
      link: "#",
      image: "../../2022/assets/images/sponsors/2022/BelcoLogo.png",
    },
    {
      title: "TT Partner",
      link: "https://www.stag.in/",
      image: "../../2022/assets/images/sponsors/2022/Stag Logo.png",
    },
    {
      title: "Net Partner",
      link: "https://www.garwarefibres.com/",
      image: "../../2022/assets/images/sponsors/2022/GarwareLogo.png",
    },
    {
      title: "Merchandise Partner",
      link: "https://technosportonline.in/",
      image:
        "../../2022/assets/images/sponsors/2022/Techno logo Square_page-0001.jpg",
    },
    {
      title: "Move On Partner",
      link: "https://www.fastrack.in/",
      image: "../../2022/assets/images/sponsors/2022/Fastrack_Logo.png",
    },
    {
      title: "Apparel Partner",
      link: "https://www.cult.fit/",
      image: "../../2022/assets/images/sponsors/2022/cultSport.jpeg",
    },
    {
      title: "Cricket Partner",
      link: "https://www.tennex.in/",
      image: "../../2022/assets/images/sponsors/2022/Tennex Logo.jpg",
    },
    {
      title: "Football Equipment Partner",
      link: "https://www.totalsf.in/",
      image:
        "../../2022/assets/images/sponsors/2022/Total Sports _ Fitness.png",
    },
    {
      title: "Tennis Partner",
      link: "#",
      image:
        "../../2022/assets/images/sponsors/2022/Aditya Chougule Logo1.jpeg",
    },
    {
      title: "Chips Partner",
      link: "http://www.cornitos.in/",
      image:
        "../../2022/assets/images/sponsors/2022/Cornitos-logo-Standard-3.png",
    },
    {
      title: "Online Media Partner",
      link: "#",
      image: "../../2022/assets/images/sponsors/2022/blogadda.png",
    },
    {
      title: "Online Media Partner",
      link: "#",
      image: "../../2022/assets/images/sponsors/2022/campus karma.jfif",
    },
    {
      title: "Online Media Partner",
      link: "#",
      image: "../../2022/assets/images/sponsors/2022/college search.png",
    },
    {
      title: "Online Media Partner",
      link: "#",
      image: "../../2022/assets/images/sponsors/2022/dna.jpeg",
    },
    {
      title: "Online Media Partner",
      link: "#",
      image: "../../2022/assets/images/sponsors/2022/fests.info-logo-1.png",
    },
    {
      title: "Online Media Partner",
      link: "#",
      image: "../../2022/assets/images/sponsors/2022/groove nexus.png",
    },
    {
      title: "Online Media Partner",
      link: "#",
      image: "../../2022/assets/images/sponsors/2022/know a fest.png",
    },
    {
      title: "Online Media Partner",
      link: "#",
      image: "../../2022/assets/images/sponsors/2022/proche.jpeg",
    },
  ],
};

function sponsorLoad(year) {
  const list = sponsorList[year];
  let temp = "";
  for (let i = 0; i < list.length; i++) {
    temp += `<div class="sponsor-card">
    <a href="${list[i].link}" target="_blank">
        <img src="${list[i].image}" alt="Sponsor-img" />
        <h3>${list[i].title}</h3>
    </a>
</div>`;
  }
  document.getElementById("items").innerHTML = temp;
}
