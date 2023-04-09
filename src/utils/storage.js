import AsyncStorage from "@react-native-async-storage/async-storage";

//Buscar os favoritos
//Salvar um novo favorito
// Remover um favorito

export const getFavorites = async (key) => {
  const favorites = await AsyncStorage.getItem(key);
  return JSON.parse(favorites) || [];
};

export const saveFavorite = async (key, newItem) => {
  let myFavorites = await getFavorites(key);

  let hasItem = myFavorites.some((item) => item.id === newItem.id);

  if (hasItem) {
    console.log("ESSE ITEM JÁ ESTÁ SALVO NA SUA LISTA");
    return;
  }

  myFavorites.push(newItem);

  await AsyncStorage.setItem(key, JSON.stringify(myFavorites));
  console.log("SALVO COM SUCESSO");
};

export const removeItem = async (id) => {
  let receipes = await getFavorites("@appreceitas");

  let myFavorites = receipes.filter((item) => {
    return item.id !== id;
  });

  await AsyncStorage.setItem("@appreceitas", JSON.stringify(myFavorites));
  console.log("ITEM DELETADO COM SUCESSO!");
  return myFavorites;
};

export const isFavorite = async (receipe) => {
  let myReceipes = await getFavorites("@appreceitas");

  const favorite = myReceipes.find((item) => item.id === receipe.id);

  if (favorite) {
    return true;
  }

  return false;
};
