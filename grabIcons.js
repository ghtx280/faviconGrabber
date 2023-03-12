function grabIcons(url) {
  if (!url.startsWith('http')) {
    url = "https://" + url
  }
  return new Promise((res)=>{
    let allorigins = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`

    fetch(allorigins)
    .then((response) => {
      if (response.ok) {
        return response.text()
      }
      throw new Error("Error getting icons");
    })
    .then((data) => {
      let elem = document.createElement("html")
      let loc  = document.createElement("a")
      loc.href = url
      elem.innerHTML = data;
      res(
        Array
        .from(elem.querySelectorAll("[rel*='icon']"))
        .map(e => {
          let href = e.getAttribute('href')
          return href.startsWith('/') 
          ? loc.origin + href
          : href.startsWith('http') 
          ? href
          : loc.origin + (
            loc.pathname.endsWith('/') ? loc.pathname : (loc.pathname + '/')
          ) + href
        })
      )
    });
  })
}
