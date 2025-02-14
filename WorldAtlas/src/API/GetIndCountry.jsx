export const GetIndCountry = async (name) => {
  try {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${name}?fullText=true`
      // `https://restcountries.c`
    );
    const data = await res.json();
    console.log(data);
    return data[0];
  } catch (error) {
    console.error("Error fetching country data:", error);
    return null;
  }
};
