export const getRandomWord= async () => {
    const response = await fetch("https://random-word-api.vercel.app/api?words=20");
    const data = await response.json();
    // console.log(data);
    return data.join(" ");
}