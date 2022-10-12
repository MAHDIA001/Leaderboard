const URL =
  "https://us-central1-js-capstone-backend.cloudfunctions.net/api/";
const gameID = "games/Zl4d7IVkemOTTVg2fUdz/scores/";
const send = async (Name, Score) => {
  const connect = await fetch(`${URL}/${gameID}/scores`, {
    method: "POST",
    body: JSON.stringify({ user: Name, score: Score }),
    headers: { "Content-type": "application/JSON" },
  });
  const receivedData = await connect.json();
  return receivedData;
};

const get = async () => {
  const connect = await fetch(`${URL}/${gameID}/scores`);
  const scoreList = await connect.json();
  return scoreList;
};

export { get, send };