export default async function getUnsplashImage(name) {
  try {
    const response = await fetch(
      `https://source.unsplash.com/featured/?${name}`
    );
    const image_url = response.url;

    // if (image_url.includes("source-404")) {
    //   throw new Error("Nenhuma imagem relacionada encontrada");
    // }

    return image_url;
  } catch (error) {
    console.error("Erro ao obter a imagem:", error);
    return null;
  }
}