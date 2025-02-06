test("Esta prueba no debe fallar", () => {
  const message1 = "Hola mundo";
  const message2 = message1.trim();
  expect(message2).toBe(message1);
});
