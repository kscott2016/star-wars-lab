const baseUrl = 'https://swapi.dev/api/'

export async function getFilms() {
  const res = await fetch(`${baseUrl}/films`)
  return res.json()
}

export async function getPeople() {
  const res = await fetch(`${baseUrl}/people`)
  return res.json()
}

export async function getPlanets() {
  const res = await fetch(`${baseUrl}/planets`)
  return res.json()
}

export async function getSpecies() {
  const res = await fetch(`${baseUrl}/species`)
  return res.json()
}

export async function getStarships() {
  const res = await fetch(`${baseUrl}/starships`)
  return res.json()
}

export async function getVehicles() {
  const res = await fetch(`${baseUrl}/vehicles`)
  return res.json()
}

