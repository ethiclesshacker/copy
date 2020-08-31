images = document.querySelector(".images")


fetch("./ID_LIST.txt")
    .then(response => response.text())
    .then(data => {
        ids = data.split('\n');
        console.log(ids);
        ids.forEach(id => {
            fetch(`https://www.instagram.com/${id}`)
                .then(response => response.text())
                .then(data => {
                    let link = data.match(/profile_pic_url_hd":"(.+?)",/i);
                    console.log(link);
                    if (link)
                    {
                        // let imgTag = document.createElement('img');
                        // let src = decodeURIComponent(JSON.parse(`"${link[1]}"`));
                        // console.log(src);
                        // imgTag.src = src;
                        // images.appendChild(imgTag);
                        let src = decodeURIComponent(JSON.parse(`"${link[1]}"`));
                        images.innerHTML += `<div class="item"><img src="${src}" alt=""><p>${id}</p></div>`
                    }
                }
                );

        });
    });


// fetch("https://www.instagram.com/avs.dev")
//     .then(response => response.text())
//     .then(data => {
//         console.log(data);
//         let link = data.match(/profile_pic_url_hd":"(.+?)",/i);
//         let imgTag = document.createElement('img');
//         let src = decodeURIComponent(JSON.parse(`"${link[1]}"`));
//         imgTag.src = src;
//         images.appendChild(imgTag);
//     }
//     );