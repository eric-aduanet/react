const getImage = async () => {
  const apiKey = "fFGSbAdjtDP64IJdNnRoqyGB4HKewOl0";

  const peticion = await fetch(
    "http://api.giphy.com/v1/gifs/random?api_key=" + apiKey
  );
  const { data } = await peticion.json();
  const { url } = data.images.original;
  const img = document.createElement("img");
  img.src = url;
  document.body.append(img);
};

getImage().then(console.log);

// const apiKey = "fFGSbAdjtDP64IJdNnRoqyGB4HKewOl0";

// const peticion = fetch("http://api.giphy.com/v1/gifs/random?api_key=" + apiKey);

// peticion
//   .then((resp) => resp.json())
//   .then(({ data }) => {
//     const { url } = data.images.original;
//     const img = document.createElement("img");
//     img.src = url;
//     document.body.append(img);
//   })
//   .catch(console.warn);
