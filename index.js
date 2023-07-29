import app from "./app.js";

const main = () => {
  const PORT = 3000;
  app.listen(3000, () => {
    console.log("Servidor escuchado en puerto " + PORT);
  });
};

main();
