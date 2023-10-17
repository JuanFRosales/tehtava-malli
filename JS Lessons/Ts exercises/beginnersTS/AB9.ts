//Your challenge is to figure out how to update the return type annotations to make TypeScript happy.
// Hint: You'll need to use generics.

interface LukeSkywalker {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
  }
//ANSW: by insetring Promise<LukeSkywalker> instead of only LukeSkywalker in the async function
//also we can insert LukeSkywalker after the const data
//but this is not the best solution because we want to use the interface in other places
//Third option is: to return data as LukeSkywalker, prefer this option
  export const fetchLukeSkywalker = async () => {
    const data: LukeSkywalker = await fetch("https://swapi.dev/api/people/1").then((res) => {
      return res.json();
    });

    return data as LukeSkywalker;
  };
