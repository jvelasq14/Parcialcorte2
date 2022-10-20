const Imagen = async () =>{
  const urlEntrada = 'https://picsum.photos/'
  const {url} = await fetch(urlEntrada)
  console.log(url)
  return url
}