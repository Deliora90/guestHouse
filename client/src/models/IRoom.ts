export interface IRoom{
  // Тип комнаты
  type: string,
  // Описание
  descriptions: string,
  // Стоимость
  cost: number,
  // Дополнительная стоимость, которая прибавляется к основной, когда количество человек больше одного
  additionalCost: number,
  //Стоимость питания на одного человека
  costFood: number,
  // Превью картинка
  mainPicture: string,
  // Площадь комнаты
  square: number,
  // Количество спальных мест
  sleepingPlaces: string,
  // Максимальное количество гостей
  maxGuests: number,
  // Оснащение комнаты
  equipment: string,
  // Условие оплаты
  payment: number,
  // Фотографии номера
  photos: [],
  // Свободные комнаты
  amountFree: number,
  //Конечная стоимость с питанием
  sumWithoutFood: number,
  //Конечная стоимость без питания
  sumWithFood: number,
}
