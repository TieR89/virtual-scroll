//! Генерация данныч (чисел)
function generateData() {
  const data = [];
  for (let i = 0; i < 100000; i++) {
    const row = []; // Инициализация пустого "ряда"
    //* Внутри каждого прохода цикла создается пустой массив row, который будет содержать набор объектов.
    const numSquares = Math.floor(Math.random() * 11) + 10; // Генерируем от 10 до 20 квадратов в строке (ряду)
    for (let j = 0; j < numSquares; j++) {
      //* Второй цикл, который выполняется numSquares раз. На каждом проходе цикла добавляется один объект в текущий "ряд".
      row.push({
        borderRadius: Math.floor(Math.random() * 51) + 'px', // Случайное значение border-radius от 0 до 50 пикселей
        number: Math.floor(Math.random() * 101), // Случайное число от 0 до 100
      });
    }
    data.push(row);
  }
  return data;
}
const data = generateData();
export default data;
