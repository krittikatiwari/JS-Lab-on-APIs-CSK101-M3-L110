// Progression 1: create a function and fetch the api using axios
const articleGrid=document.getElementById("articleGrid");

function populateData(){
  axios.get('https://gnews.io/api/v4/top-headlines?token=a8f93fc42e7933ae90f85a2c4f867d4e&lang=en').then((res)=>{
    console.log(res.data)
    const articles=res.data.articles;

    articles.forEach((article)=>{
      const articleElement=document.createElement('div')
      const tittleElement=document.createElement('h3')
      const imageElement=document.createElement('img')
      const contentElement=document.createElement('p')

      articleElement.setAttribute('class','article')

      tittleElement.innerText=article.title;
      imageElement.setAttribute('src',article.image)
      contentElement.innerText=article.content;

      articleElement.append(tittleElement);
      articleElement.append(imageElement);
      articleElement.append(contentElement);
      articleGrid.append(articleElement)
    })
  })
}

populateData()