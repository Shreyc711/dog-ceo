let url = 'https://dog.ceo/api/breeds/image/random';
let btn = document.querySelector('button')

btn.addEventListener('click',async()=>{
  let link = await getImg( );
  console.log(link)
let image = document.querySelector('img');
image.setAttribute('src',link)

})


async function getImg(){
  try{
    let result = await axios.get(url);
      return result.data.message
  }
  catch(e){
    console.log("error",e);
    return "nothing found";
  }
}
